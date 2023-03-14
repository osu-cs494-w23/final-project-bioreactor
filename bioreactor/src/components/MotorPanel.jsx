import React, { useState } from "react";
import { FaShare } from "react-icons/fa";
import { validNumber } from "../data/regex";
import InvalidMessage from "./InvalidMessage";

const MotorPanel = ({ currentRPM = 0 }) => {
  const [value, Setvalue] = useState(0);
  const [onInvalid, SetOnInvalid] = useState(false);

  const handleChange = (e) => {
    // If the input is invalid
    if (e.target.value === "") {
      SetOnInvalid(false);
    } else if (!validNumber.test(e.target.value)) {
      SetOnInvalid(true);
    } else {
      SetOnInvalid(false);
    }
  };

  return (
    <div className="motor-panel">
      <div className="control-subject small-subject">Motor</div>

      <div className="status">Status</div>
      <div className="status-container">
        {currentRPM}
        <div>&nbsp;&nbsp;RPM</div>
      </div>
      <div className="status">Custom</div>
      <div className="status-container">
        <input
          className="range-input"
          type="range"
          min="0"
          max="1000"
          link-to="motor-manual-input"
        ></input>
        <input
          type="text"
          id="motor-manual-input"
          onChange={handleChange}
        ></input>
        <button type="button" className="apply">
          <FaShare className="rotate" />
        </button>
      </div>
      {onInvalid && <InvalidMessage />}
    </div>
  );
};

export default MotorPanel;
