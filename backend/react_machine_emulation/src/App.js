import {useSocket} from "./hooks/socketHook";
import {useState} from "react";
import {css} from "@emotion/css";
import FinalJar from "./components/FinalJar";

function App() {
    let [deviceStatus, setDeviceStatus] = useState({})
    let socket = useSocket(setDeviceStatus, 500)

    function handleSpeedChange(deviceName, newSpeed) {
        socket.emit("setMotorSpeed", deviceName, newSpeed, (ack) => {
            if (ack["status"] === "error") {
                console.log(ack["errorMessage"])
                return
            }
            console.log("Motor speed changed to: ", ack["newSpeed"])
            setDeviceStatus({
                ...deviceStatus,
                [deviceName]: {
                    ...deviceStatus[deviceName],
                    "speed": ack["newSpeed"]
                }
            })
        })
    }

    function handleValveToggle(deviceName) {
        socket.emit("toggleValve", deviceName, !deviceStatus[deviceName]["state"], (ack) => {
            if (ack["status"] === "error") {
                console.log(ack["errorMessage"])
                return
            }
            console.log("Valve toggled to: ", ack["state"])
            setDeviceStatus({
                ...deviceStatus,
                [deviceName]: {
                    ...deviceStatus[deviceName],
                    "state": ack["state"]
                }
            })
        })
    }

    console.log("status: ", deviceStatus)
    let finalJarComponents = null
    if(deviceStatus["finalJars"])
    finalJarComponents = deviceStatus["finalJars"].map(jar => <FinalJar jar={jar} socket={socket}/>)

    return (
        <div>
            sup lmao
            <div className={css`display: flex`}>
                {finalJarComponents}
            </div>
        </div>
    );
}

export default App;
