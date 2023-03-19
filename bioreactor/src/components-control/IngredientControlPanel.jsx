import React from "react";
import MotorPanel from "../components/MotorPanel";

const IngredientControlPanel = ({jar}) => {
    // if (!finalJars[0]) {
    //   return;
    // }

    // console.log("FinalJars == ", finalJars);

    return (
        <section className="control-panel-card">
            <div className="control-subject">{jar.jarName}</div>
            <MotorPanel device={jar}/>
            {/*<div className="valve-panel">*/}
            {/*  <div className="control-subject small-subject">Valves</div>*/}
            {/*  <ul>*/}
            {/*    {finalJars.map((jar) => {*/}
            {/*      return jar.valves.map((valve) => {*/}
            {/*        console.log("VALVE!!!!!!!!!!!!!!!!!", valve);*/}
            {/*        return <ValveControl valve={valve} />;*/}
            {/*      });*/}
            {/*    })}*/}
            {/*  </ul>*/}
            {/*</div>*/}
        </section>
    );
};

export default IngredientControlPanel;
