import {useEffect} from "react";

export function useInterval(socket, timeInterval, dispatch) {
    useEffect(() => {
        let updateInterval = setInterval(() => {
            if (socket !== null)
                socket.emit("getAllStatuses", (data) => {
                    if (data["status"] === "ok") {
                        console.log("received statuses: ", data)
                        let valveList = {}
                        Object.values(data["devices"]).forEach(device => {
                            if (device["type"] === "motor") {
                                dispatch({
                                    "type": "JAR_CHANGE_FIELD",
                                    "jarName": device["jarName"],
                                    "field": "impellerMotor",
                                    "newValue": device
                                })
                                return
                            }
                            if (device["type"] === "valve") {
                                if (!(valveList[device["jarName"]] instanceof Array)) {
                                    valveList[device["jarName"]] = []
                                }
                                valveList[device["jarName"]].push(device)
                            }
                        })
                        for (let jar in valveList) {
                            dispatch({
                                "type": "JAR_CHANGE_FIELD",
                                "jarName": jar,
                                "field": "valves",
                                "newValue": valveList[jar]
                            })
                        }
                    }
                })
        }, timeInterval);

        return () => {
            clearInterval(updateInterval)
        }
    }, [socket, timeInterval, dispatch])
}