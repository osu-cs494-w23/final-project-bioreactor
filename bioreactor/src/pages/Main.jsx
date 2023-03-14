import React, { useState } from "react";
import EmptyJar from "../components/EmptyJar";
import ProgressJar from "../components/ProgressJar";
import { useSocket } from "../hooks/socketHook";
import color from "../data/color.json";

const Main = () => {
  const [onRecipe, setOnRecipe] = useState(false);
  const socket = useSocket(500);

  console.log(socket);
  return (
    <>
      {!onRecipe && (
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
      </button>
    </>
  );
};

export default Main;
