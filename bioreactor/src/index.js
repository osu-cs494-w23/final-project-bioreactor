import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SocketContext from "./socketio/socketContext";
import io from 'socket.io-client';
import {Provider} from "react-redux";
import store from "./redux/redux_store";

const serverUrl = "http://localhost:7527"

const newSocket = io(serverUrl,
    {
        cors: {
            origin: serverUrl,
            methods: ["GET", "POST"]
        }
    }
);

newSocket.on('connect', () => {
    console.log("connected to server")
});

newSocket.on('disconnect', () => {
    console.log("disconnected from server")
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <SocketContext.Provider value={newSocket}>
            <React.StrictMode>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </React.StrictMode>
        </SocketContext.Provider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
