import React, { useState } from "react";
import styled from "styled-components";
import color from "../data/color.json";
import ToggleButton from "./ToggleButton";
import ControlPanel from "./ControlPanel";
import { BsCheckCircleFill } from "react-icons/bs";
import { TbTemperature } from "react-icons/tb";
import { GiElectric } from "react-icons/gi";

import { useSelector } from "react-redux";
import { getJar } from "../redux/selectors";

const ProgressJar = ({ status, jarName }) => {
  const StyledSpan = styled.span`
    background: ${status};
    color: white;
    width: 100%;
    display: block;
    padding-top: 1em;
    padding-bottom: 1em;
    border-top-right-radius: 0.8em;
    border-top-left-radius: 0.8em;
    font-weight: bold;
    font-size: 1.1em;
  `;

  const StatusSpan = styled.span`
    background: ${color.prettygray};
    color: ${color.maintext};
    width: 100%;
    display: flex;
    padding-top: 0.8em;
    padding-bottom: 0.8em;
    font-weight: bold;
    font-size: 1.2em;
    justify-content: space-between;
  `;

  const [onDetail, setOnDetail] = useState(false);
  const [onManual, setonManual] = useState(true);
  const jar = useSelector((state) => getJar(state, jarName));
  const toggle = () => setOnDetail(!onDetail);

  return (
    <>
      <div className="on-recipe jar">
        <StyledSpan className="status">
          <BsCheckCircleFill className="span-icon" />
          {jar["recipe"]}
        </StyledSpan>
        <StatusSpan>
          <span className="temperature">
            <TbTemperature className="status-temp-icon" />
            {jar["temperature"]} °F
          </span>
          <span className="rpm">
            <GiElectric className="status-rpm-icon" />
            RPM {jar["impellerMotor"]["speed"]}
          </span>
        </StatusSpan>
        <ToggleButton className="togglebutton" onClick={toggle}>
          {onDetail ? "Hide" : "Details"}
        </ToggleButton>
        {onDetail && <div className="detail-container">Detail</div>}
        {onManual && <ControlPanel />}
      </div>
    </>
  );
};

export default ProgressJar;
