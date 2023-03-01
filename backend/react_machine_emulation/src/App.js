import {useSocket} from "./hooks/socketHook";
import {useState} from "react";
import MotorDevice from "./components/MotorDevice";
import ValveDevice from "./components/ValveDevice";
import {css} from "@emotion/css";

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

    return (
        <div>
            sup lmao
            <div className={css`display: flex`}>
                {Object.entries(deviceStatus).map(thisDevice => {
                    let device = thisDevice[1]
                    console.log("Looping through ", device)
                    switch (device["type"]) {
                        case "motor":
                            return <MotorDevice device={device} handleSpeedChange={(newSpeed) => {
                                handleSpeedChange(device.name, newSpeed)
                            }}/>
                        case "valve":
                            return <ValveDevice device={device} handleValveToggle={() => {
                                handleValveToggle(device.name)
                            }}/>
                        default:
                            return <div>bruhhhhh</div>
                    }
                })}
            </div>
        </div>
    );
}

export default App;
