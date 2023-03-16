import React, { useState } from "react";

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
        }}
      >
        {isOpen ? "Close" : "Open"}
      </button>
    </li>
  );
};

export default ValveControl;
