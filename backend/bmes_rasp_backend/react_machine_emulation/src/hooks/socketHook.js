import {useEffect, useState} from "react";
import io from 'socket.io-client';

export function useSocket(setDeviceStatus, timeout) {
    const [socket, setSocket] = useState(null);
    const serverUrl = "http://localhost:7579"

    useEffect(() => {
        const newSocket = io(serverUrl,
            {
                cors: {
                    origin: serverUrl,
                    methods: ["GET", "POST"]
                }
            });
        setSocket(newSocket);

        let updateInterval = setInterval(() => {
            if(newSocket !== null)
                newSocket.emit("getAllStatuses", (data) => {
                    if(data["status"] === "ok") {
                        console.log("received statuses: ", data)
                        setDeviceStatus(data["devices"])
                    }
                })
        }, timeout);

        newSocket.on('connect', () => {
            console.log("connected to server")
        });

        newSocket.on('disconnect', () => {
            console.log("disconnected from server")
        });

        return () => {
            newSocket.close()
            newSocket.off('connect');
            newSocket.off('disconnect');
            clearInterval(updateInterval)
        }
    }, [setSocket, timeout, setDeviceStatus]);

    return socket
}