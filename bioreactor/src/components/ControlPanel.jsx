import React, { useState } from "react";

const ControlPanel = () => {
  const [isOpen, setisOpen] = useState(true);
  return (
    <div className="control-panel">
      <span>Motor</span>
      <input className="controlmotor" type="range" min="0" max="1000" />
      <button
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        {isOpen ? "Close valve" : "Open valve"}
      </button>
    </div>
  );
};

export default ControlPanel;
