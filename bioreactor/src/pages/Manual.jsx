import React, { useState } from "react";
import EmptyJar from "../components/EmptyJar";
import ProgressJar from "../components/ProgressJar";
import color from "../data/color.json";

const Manual = () => {
  const [onRecipe, setOnRecipe] = useState(false);

  return (
    <>
      <div className="manual-mode-notification">You are on manual mode.</div>
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

export default Manual;
