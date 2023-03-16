import React, { useState, useEffect } from "react";
import EmptyJar from "./EmptyJar";
import ProgressJar from "./ProgressJar";
import color from "../data/color.json";

const Jar = ({ jar }) => {
  if (!jar) {
    return;
  }

  return (
    <>
      {!jar.recipe && <EmptyJar jarName={jar.name} />}
      {jar.recipe && <ProgressJar status={color.success} jar={jar} />}
    </>
  );
};

export default Jar;
