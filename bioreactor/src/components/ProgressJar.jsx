import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import color from "../css-data/color.json";
import ToggleButton from "./ToggleButton";
import Detail from "./Detail";
import { BsCheckCircleFill } from "react-icons/bs";
import { TbTemperature } from "react-icons/tb";
import { GiElectric } from "react-icons/gi";

import "../css-data/Jar.css";

const ProgressJar = ({ status }) => {
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
  const toggle = () => setOnDetail(!onDetail);

  return (
    <>
      <div className="on-recipe jar">
        <StyledSpan className="status">
          <BsCheckCircleFill className="span-icon" />
          Recipe Name
        </StyledSpan>
        <StatusSpan>
          <span className="temperature">
            <TbTemperature className="status-temp-icon" />
            50 °F
          </span>
          <span className="rpm">
            <GiElectric className="status-rpm-icon" />
            RPM 50
          </span>
        </StatusSpan>
        <ToggleButton className="togglebutton" onClick={toggle}>
          {onDetail ? "Hide" : "Details"}
        </ToggleButton>
        {onDetail && <div className="detail-container">Detail</div>}
      </div>
    </>
  );
};

export default ProgressJar;
