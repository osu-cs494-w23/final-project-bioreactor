import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {initiateSocket, socket} from "../context/socket";

export function useSocket(timeout) {
    const dispatch = useDispatch();
    useEffect(() => {
        initiateSocket()
        console.log("socket:", socket)
        let updateInterval = setInterval(() => {
            if (socket !== null) {
                socket.emit("getAllStatuses", (data) => {
                    if (data["status"] === "ok") {
                        // console.log("received statuses: ", data)
                        dispatch({
                            type: "UPDATE_WHOLE_STATUS",
                            newStatus: data["machine"],
                        });
                    }
                });
            }
        }, timeout);

        socket.on("connect", () => {
            console.log("connected to server");
            socket.emit("getAllStatuses", (data) => {
                if (data["status"] === "ok") {
                    dispatch({
                        type: "UPDATE_WHOLE_STATUS",
                        newStatus: data["machine"],
                    });
                    console.log("received machine status: ", data["machine"]);
                }
            });
        });

        socket.on("disconnect", () => {
            console.log("disconnected from server");
        });

        return () => {
            socket.close();
            socket.off("connect");
            socket.off("disconnect");
            clearInterval(updateInterval);
        };
    }, [dispatch, timeout]);

    return socket;
}
