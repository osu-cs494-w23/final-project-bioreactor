import React, {useEffect, useState} from "react";
import MotorPanel from "../components/MotorPanel";
import ValvePanel from "../components/ValvePanel";
import IngredientControlPanel from "../components-control/IngredientControlPanel";
import {useSelector} from "react-redux";
import {getLocalStatus} from "../redux/selectors";
import {socket} from "../context/socket";

const Manual = () => {
    const deviceStatus = useSelector(getLocalStatus);
    const [manualState, setManualState] = useState(false)

    console.log("MASAKA...", deviceStatus)

    useEffect(()=>{
        if(socket !== undefined)
        socket.emit("getManual", (data) => {
            if(data["status"] === "error"){
                console.log("getManual error:", data["errorMessage"])
                return
            }
            setManualState(data["manual"])
        })
    }, [socket])

    if (!deviceStatus.startJars[0]) {
        return;
    }

    if (!deviceStatus.finalJars[0]) {
        return;
    }

    function handleManualToggle(){
        if(socket !== undefined)
        socket.emit("setManual", !manualState, (data) => {
            if(data["status"] === "error"){
                console.log("setManual error:", data["errorMessage"])
                return
            }
            setManualState(!manualState)
        })
    }

    return (
        <>
            <div className="manual-container">
                <button onClick={handleManualToggle}>{manualState ? "Disengage manual mode" : "Engage manual mode"}</button>
                <div>
                    <h1 className="control-topic">Ingredients</h1>
                    <div className="ingredient">
                        {deviceStatus.startJars.map((jar) => {
                            return (
                                <IngredientControlPanel
                                    jar={jar}
                                    // finalJars={deviceStatus.finalJars}
                                />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <h1 className="control-topic">Cool water bucket</h1>
                    <section className="control-panel-card">
                        <MotorPanel device={deviceStatus.coolantMotor}/>
                    </section>
                </div>
                <div>
                    <h1 className="control-topic">Jars</h1>
                    {deviceStatus.finalJars.map(jar =>
                        <section className="control-panel-card">
                            <MotorPanel device={jar.impellerMotor}/>
                            <ValvePanel valves={[...jar.valves, jar.tempValve]}/>
                        </section>
                    )}
                </div>
            </div>
        </>
    );
};

export default Manual;
