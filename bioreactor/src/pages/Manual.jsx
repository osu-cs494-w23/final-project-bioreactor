import React, { useState } from "react";
import MotorPanel from "../components/MotorPanel";
import ValvePanel from "../components/ValvePanel";

const Manual = () => {
  const [onRecipe, setOnRecipe] = useState(false);

  return (
    <>
      <div className="manual-container">
        <div>
          <h1 className="control-topic">Ingredients</h1>
          <div className="ingredient">
            <section className="control-panel-card">
              <div className="control-subject">Ingredient 001</div>
              <MotorPanel />
              <ValvePanel />
            </section>
            <section className="control-panel-card">
              <div className="control-subject">Ingredient 002</div>
              <MotorPanel />
              <ValvePanel />
            </section>
          </div>
        </div>
        <div>
          <h1 className="control-topic">Cool water bucket</h1>
          <section className="control-panel-card">
            <MotorPanel />
            <ValvePanel />
          </section>
        </div>
        <div>
          <h1 className="control-topic">Jars</h1>
          <section className="control-panel-card">
            <MotorPanel />
            <ValvePanel />
          </section>
        </div>
      </div>
    </>
  );
};

export default Manual;
