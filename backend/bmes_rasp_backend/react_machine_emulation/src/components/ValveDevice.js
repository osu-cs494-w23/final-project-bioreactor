import React from 'react';
import {css} from "@emotion/css";

function ValveDevice(props) {
    return (
        <div className={css`
          border: 2px #FBFBFB solid;
          border-radius: 10px;
          width: 200px;
          height: 200px;
          margin: 5px;
          padding: 5px;`}>
            <h4>{props.device.name}</h4>
            <button onClick={props.handleValveToggle}>{props.device.state ? "Open valve" : "Close valve"}</button>
        </div>
    );
}

export default ValveDevice;