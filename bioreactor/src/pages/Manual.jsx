import React, { useState } from "react";
import MotorPanel from "../components/MotorPanel";
import ValvePanel from "../components/ValvePanel";
import ValveControl from "../components/ValveControl";
import IngredientControlPanel from "../components-control/IngredientControlPanel";
import { useSelector } from "react-redux";
import { getLocalStatus } from "../redux/selectors";

const Manual = ({ socket }) => {
  const deviceStatus = useSelector(getLocalStatus);
  if (!deviceStatus.startJars[0]) {
    return;
  }

  if (!deviceStatus.finalJars[0]) {
    return;
  }
  return (
    <>
      <div className="manual-container">
        <div>
          <h1 className="control-topic">Ingredients</h1>
          <div className="ingredient">
            {deviceStatus.startJars.map((jar) => {
              return (
                <IngredientControlPanel
                  jar={jar}
                  // finalJars={deviceStatus.finalJars}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="control-topic">Cool water bucket</h1>
          <section className="control-panel-card">
            <MotorPanel currentRPM={deviceStatus.coolantMotor.speed} />
            {/*<div className="valve-panel">*/}
            {/*  <div className="control-subject small-subject">Valves</div>*/}
            {/*  <ul>*/}
            {/*    {deviceStatus.finalJars.map((jar) => {*/}
            {/*      return jar.valves.map((valve) => {*/}
            {/*        return <ValveControl valve={valve} />;*/}
            {/*      });*/}
            {/*    })}*/}
            {/*  </ul>*/}
            {/*</div>*/}
          </section>
        </div>
        <div>
          <h1 className="control-topic">Jars</h1>
          {deviceStatus.finalJars.map(jar =>
              <section className="control-panel-card">
                <MotorPanel />
                <ValvePanel valves={[...jar.valves, jar.tempValve]}/>
              </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Manual;
