import React from "react";
import MotorPanel from "../components/MotorPanel";
import ValvePanel from "../components/ValvePanel";
import IngredientControlPanel from "../components-control/IngredientControlPanel";
import {useSelector} from "react-redux";
import {getLocalStatus} from "../redux/selectors";

const Manual = () => {
    const deviceStatus = useSelector(getLocalStatus);
    if (!deviceStatus.startJars[0]) {
        return;
    }

    if (!deviceStatus.finalJars[0]) {
        return;
    }
    // console.log(deviceStatus)
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
                        <MotorPanel device={deviceStatus.coolantMotor}/>
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
                            <MotorPanel device={jar.impellerMotor}/>
                            <ValvePanel valves={[...jar.valves, jar.tempValve]}/>
                        </section>
                    )}
                </div>
            </div>
        </>
    );
};

export default Manual;
