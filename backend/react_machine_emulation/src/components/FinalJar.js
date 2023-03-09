import React from 'react';
import MotorDevice from "./MotorDevice";
import ValveDevice from "./ValveDevice";

function FinalJar({jar, socket}) {
    return (
        <div>
            <h3>{jar.name}</h3>
            <h5>Debug: {jar.debug}</h5>
            <h5>State: {jar.state}</h5>
            <button onClick={
                ()=>{
                    if(jar.state === "running"){
                        socket.emit("pauseRecipe", jar.name, (status)=>{
                            if(status["status"] === "error") {
                                console.log(status["errorMessage"])
                                return
                            }
                            console.log("Recipe paused")
                        })
                    } else {
                        socket.emit("startRecipe", jar.name, (status) => {
                            if(status["status"] === "error") {
                                console.log(status["errorMessage"])
                                return
                            }
                            console.log("Recipe started")
                        })
                    }
                }
            }>{jar.state === "running" ? "Pause Recipe" : "Start Recipe"}</button>
            <p>Ready for incubation: {jar.incubateReady ? "true" : "false"}</p>
            <p>Receiving cooling: {jar.cooling ? "true" : "false"}</p>
            <MotorDevice device={jar.motor} socket={socket}/>
            {jar.valves.map((valve)=>
                <ValveDevice device={valve} socket={socket}/>
            )}
            <ValveDevice device={jar.tempValve} socket={socket}/>
        </div>
    );
}

export default FinalJar;