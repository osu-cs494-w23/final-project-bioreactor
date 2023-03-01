import React from "react";
import styled from "styled-components";
import color from "../css-data/color.json";

const StyledButton = styled.button`
  background: ${color.button};
  cursor: pointer;
  border-radius: 1em;
  padding: 0.6em 1.5em;
  color: white;
  font-size: 13px;
  border: none;
`;

function Button({children, ...rest}) {
    return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
