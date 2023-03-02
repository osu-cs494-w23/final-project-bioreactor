import React from 'react';
import {css} from '@emotion/css'

function MotorDevice(props) {
    function setMotorSpeed(event) {
        props.handleSpeedChange(event.target.value)
    }

    return (
        <div className={css`
          border: 2px #FBFBFB solid;
          border-radius: 10px;
          width: 200px;
          height: 200px;
          margin: 5px;
          padding: 5px;`}>
            <h4>{props.device.name}</h4>
            <input type={'range'} min={0} max={1000} value={props.device.speed} onInput={setMotorSpeed}/>
            <p>RPM: {props.device.speed}</p>
        </div>
    );
}

export default MotorDevice;