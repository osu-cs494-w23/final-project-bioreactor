import React, { useState } from "react";
import styled from "styled-components";
import color from "../data/color.json";

const ValveControl = () => {
  const ControlButton = styled.button`
    background: ${(props) => (props.isOpen ? color.warning : color.success)};
    color: white;
    padding: 0.2em 0.7em;
    font-size: 1em;
    border-radius: 0.5em;
    border: 1px solid
      ${(props) => (props.isOpen ? color.redBorder : color.greenBorder)};
    margin-left: 2em;
    cursor: pointer;
    transition-duration: 0.1s;

    &:hover {
      color: ${color.maintext};
    }

    &:active {
      background: ${(props) =>
        props.isOpen ? color.redBorder : color.greenBorder};
      color: white;
    }
  `;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="valve-li">
      Valve1 &#40;Jar&#41;
      <ControlButton
        isOpen={isOpen}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? "Close" : "Open"}
      </ControlButton>
    </li>
  );
};

export default ValveControl;
