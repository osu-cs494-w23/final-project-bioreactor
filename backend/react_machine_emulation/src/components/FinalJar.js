import React, {useState} from 'react';
import MotorDevice from "./MotorDevice";
import ValveDevice from "./ValveDevice";
import SensorDevice from "./SensorDevice";
import {css} from "@emotion/css";

function FinalJar({jar, socket}) {

    const [file, setFile] = useState(null)

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function recipeBtnTxtDecider() {
        switch (jar.state) {
            case "running":
                return "Pause Recipe"
            case "incubationPrep":
                if (jar.incubateReady)
                    return "Start Recipe"
                else
                    return "Preparing to Incubate..."
            case "paused":
                return "Resume Recipe"
            case "idle":
                return "Start Incubation Prep"
            default:
                return "bakana!!!"
        }
    }

    return (
        <div className={css`width: 500px`}>
            <h3>{jar.name}</h3>
            <h5>Debug: {jar.debug ? "true" : "false"}</h5>
            <h5>State: {jar.state}</h5>
            <h5>Temperature: {jar.tempProbe["value"]}</h5>
            {jar.recipe && <>
                <h5>Recipe: {jar.recipe.name}</h5>
                <h5>Target Temperature: {jar.recipe.temperature}</h5>
            </>}
            <input type="file" id="recipeInput" name="recipe" accept="*.json" onChange={handleChange}/>
            <button onClick={() => {
                socket.emit("loadRecipe", file, jar.name, (status) => {
                    if (status["status"] === "ok") {
                        console.log("loaded recipe")
                    } else {
                        console.log("loadRecipe failed with error: ", status["errorMessage"])
                    }
                })
            }}>Submit Recipe
            </button>
            <br/>
            <button onClick={
                () => {
                    switch (jar.state) {
                        case "running": {
                            socket.emit("pauseRecipe", jar.name, (status) => {
                                if (status["status"] === "error") {
                                    console.log(status["errorMessage"])
                                    return
                                }
                                console.log("Recipe paused")
                            })
                            break
                        }
                        case "incubationPrep": {
                            if (jar.incubateReady) {
                                console.log("Recipe starting requested")
                                socket.emit("startRecipe", jar.name, (status) => {
                                    if (status["status"] === "error") {
                                        console.log(status["errorMessage"])
                                        return
                                    }
                                    console.log("Recipe started")
                                })
                            }
                            break
                        }
                        case "paused": {
                            console.log("Recipe resuming requested")
                            socket.emit("startRecipe", jar.name, (status) => {
                                if (status["status"] === "error") {
                                    console.log(status["errorMessage"])
                                    return
                                }
                                console.log("Recipe started")
                            })
                            break
                        }
                        case "idle": {
                            socket.emit("startIncubationPrep", jar.name, (status) => {
                                if (status["status"] === "error") {
                                    console.log(status["errorMessage"])
                                    return
                                }
                                console.log("Recipe incubation started")
                            })
                            break
                        }
                        default: {
                            console.log("wtf")
                        }
                    }
                }
            }>{recipeBtnTxtDecider()}</button>
            {jar.state !== "idle" && <button onClick={() => {
                socket.emit("cancelRecipe", jar.name, (status) => {
                        if (status["status"] === "error") {
                            console.log(status["errorMessage"])
                            return
                        }
                        console.log(jar.name, " stopped")
                    }
                )
            }
            }>Cancel Recipe</button>}
            <p>Ready for incubation: {jar.incubateReady ? "true" : "false"}</p>
            <p>Receiving cooling: {jar.cooling ? "true" : "false"}</p>
            <div className={css`display: flex; flex-wrap: wrap`}>
                <MotorDevice device={jar.impellerMotor} deviceGroup={"finalJars"} socket={socket}/>
                {jar.valves.map((valve) =>
                    <ValveDevice key={valve["name"]} device={valve} deviceGroup={"ingredientValve"} socket={socket}/>
                )}
                <ValveDevice device={jar.tempValve} deviceGroup={"tempValve"} socket={socket}/>
                <SensorDevice device={jar.tempProbe} deviceGroup={"tempProbe"} socket={socket}/>
            </div>
        </div>
    )
}

export default FinalJar;