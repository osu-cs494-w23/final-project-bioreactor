import React from "react";
import { useState } from "react";
import EmptyJar from "../components/EmptyJar";
import ProgressJar from "../components/ProgressJar";
import color from "../css-data/color.json";

const Main = () => {
  const [onRecipe, setOnRecipe] = useState(false);

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
          <ProgressJar status={color.success} />
          <ProgressJar status={color.loading} />
          <ProgressJar status={color.warning} />
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
