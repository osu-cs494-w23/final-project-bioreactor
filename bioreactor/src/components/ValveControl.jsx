import React from "react";
import {socket} from "../context/socket";

const ValveControl = ({valve}) => {

    return (
        <li className="valve-li">
            {valve.name} &#40;{valve.jarName}&#41;
            <button
                onClick={(e) => {
                    e.preventDefault();
                    console.log(valve)
                    socket.emit("toggleValve", valve.jarName, valve.name, valve.deviceGroup, !valve.opened, (response) => {
                        console.log("Valve changed:", response)
                    })
                }}
            >
                {valve.opened ? "Close" : "Open"}
            </button>
        </li>
    );
};

export default ValveControl;
