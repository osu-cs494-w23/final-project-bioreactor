import React, { useState } from "react";
import EmptyJar from "../components/EmptyJar";
import ProgressJar from "../components/ProgressJar";
import color from "../data/color.json";
import { useSelector } from "react-redux";
import { getLocalStatus } from "../redux/selectors";
import Jar from "../components/Jar";

const Main = ({ socket }) => {
  const deviceStatus = useSelector(getLocalStatus);
  const [onRecipe, setOnRecipe] = useState(false);
  if (!deviceStatus.finalJars[0]) {
    return;
  }

  return (
    <div>
      <div className="jar-container">
        {deviceStatus.finalJars.map((jar) => {
          return <Jar jar={jar} />;
        })}

        {/* {!onRecipe && (
        <>
          <EmptyJar />
          <EmptyJar />
          <EmptyJar />
        </>
      )}
      {onRecipe && (
        <>
          <ProgressJar status={color.success} jarName={"Jar 1"} />
          <ProgressJar status={color.loading} jarName={"Jar 2"} />
          <ProgressJar status={color.warning} jarName={"Jar 3"} />
          <button className="stop-button">STOP</button>
        </>
      )}

      <button
        onClick={() => {
          setOnRecipe(!onRecipe);
        }}
      >
        TEST
      </button> */}
      </div>
      <button className="stop-button">STOP</button>
    </div>
  );
};

export default Main;
