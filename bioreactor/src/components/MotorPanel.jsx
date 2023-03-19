import React, {useState} from "react";
import {FaShare} from "react-icons/fa";
import {validNumber} from "../data/regex";
import InvalidMessage from "./InvalidMessage";

const MotorPanel = ({device}) => {
    const [value, Setvalue] = useState(0);
    const [onInvalid, SetOnInvalid] = useState(false);

    if (device === undefined)
        return

    const handleChange = (e) => {
        // If the input is invalid
        if (e.target.value === "") {
            SetOnInvalid(false);
            if (e.target.value > 1000) {
                Setvalue(1000);

            } else {
                Setvalue(e.target.value);
            }
        } else if (!validNumber.test(e.target.value)) {
            SetOnInvalid(true);
        } else {
            SetOnInvalid(false);
            if (e.target.value > 1000) {
                Setvalue(1000);
            } else {
                Setvalue(e.target.value);
            }
        }
    };

    return (
        <div className="motor-panel">
            <div className="control-subject small-subject">Motor</div>

            <div className="status">Status</div>
            <div className="status-container">
                {device.speed}
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
                    value={value}
                    onInput={handleChange}
                ></input>
                <input
                    type="text"
                    id="motor-manual-input"
                    value={value}
                    onChange={handleChange}
                ></input>
                <button type="button" className="apply">
                    <FaShare className="rotate"/>
                </button>
            </div>
            {onInvalid && <InvalidMessage/>}
        </div>
    );
};

export default MotorPanel;
