import React, { useState } from "react";
import {socket} from "../context/socket";

const ValveControl = ({ valve }) => {
  //console.log(valve);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="valve-li">
      {valve.name} &#40;{valve.jarName}&#41;
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
          console.log(valve)
          socket.emit("toggleValve", valve.jarName, valve.name, "tempValve", isOpen, (response) => {
              console.log("Valve changed:", response)
          })
        }}
      >
        {isOpen ? "Close" : "Open"}
      </button>
    </li>
  );
};

export default ValveControl;
