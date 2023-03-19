import React, {useState} from "react";
import styled from "styled-components";
import color from "../data/color.json";
import ToggleButton from "./ToggleButton";
import {BsCheckCircleFill} from "react-icons/bs";
import {TbTemperature} from "react-icons/tb";
import {GiElectric} from "react-icons/gi";
import ProgressPanel from "./ProgressPanel";

const ProgressJar = ({status, jar}) => {
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
    const toggle = () => setOnDetail(!onDetail);

    console.log("NEW JAR: ", jar);

    return (
        <>
            <div className="on-recipe jar">
                <StyledSpan className="status-center">
                    <BsCheckCircleFill className="span-icon"/>
                    {jar.name}&nbsp;&#40;{jar.recipe.name}&#41;
                </StyledSpan>
                <StatusSpan>
          <span className="temperature">
            <TbTemperature className="status-temp-icon"/>
              {jar.tempProbe.value} °F
          </span>
                    <span className="rpm">
            <GiElectric className="status-rpm-icon"/>
            RPM {jar.impellerMotor.speed}
          </span>
                </StatusSpan>
                <ProgressPanel jar={jar}/>
                <ToggleButton className="togglebutton" onClick={toggle}>
                    {onDetail ? "Hide" : "Details"}
                </ToggleButton>
                {onDetail && (
                    <div className="detail-container">
                        <li>Hello</li>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProgressJar;
