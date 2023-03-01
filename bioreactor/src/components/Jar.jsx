import React from "react";
import { useNavigate } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import { useState } from "react";
import Status from "./Status";
import ErrorMessage from "./ErrorMessage";
import "../css-data/Jar.css";

const Jar = () => {
  const [onDetail, setOnDetail] = useState(false);

  const toggle = () => setOnDetail(!onDetail);
  const navigate = useNavigate();
  const changePage = () => navigate("load");
  return (
    <div className="jar">
      <button onClick={changePage}>Load recipe</button>
      <ToggleButton onClick={toggle}>
        {onDetail ? "Hide" : "Details"}
      </ToggleButton>
    </div>
  );
};

export default Jar;
