import React, {useState} from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import MovingText from "react-moving-text";
import {socket} from "../context/socket";

const ProgressPanel = ({jar}) => {
    const [text, setText] = useState(jar.state);
    const [incubateReady, setIncubateReady] = useState(jar.incubateReady);
    console.log("ProgressPanel jar", jar)
    console.log("PrograssPanel state is ", jar.state)

    return (
        <>
            {jar.state === "idle" && (
                <div>
                    <MovingText
                        className="progress-text"
                        type="fadeInFromBottom"
                        duration="1000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none"
                    >
                        Start incubating your jar
                    </MovingText>
                    <button
                        style={{"margin-top": "2em"}}
                        onClick={() => {
                            socket.emit("startIncubationPrep", jar.name, () => {
                                setText(jar.state)
                            })
                        }}
                    >
                        Start incubating
                    </button>
                </div>
            )}
            {jar.state === "incubationPrep" && !jar.incubateReady && (
                <div>
                    <MovingText
                        className="progress-text"
                        type="fadeInFromBottom"
                        duration="1000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none"
                    >
                        Preparing your incubation...
                    </MovingText>
                    <ClimbingBoxLoader color="#FFBC00" size={25}/>
                </div>
            )}
            {jar.state === "incubationPrep" && jar.incubateReady && (
                <div>
                    <MovingText
                        className="progress-text"
                        type="fadeInFromBottom"
                        duration="1000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none"
                    >
                        Press to start
                    </MovingText>
                    <button
                        style={{"margin-top": "2em"}}
                        onClick={() => {
                            socket.emit("startRecipe", jar.name, () => {
                                setText(jar.state)
                            })
                        }}
                    >
                        Start
                    </button>
                </div>
            )}
            {jar.state === "running" && (
                <div>
                    <MovingText
                        className="progress-text"
                        type="fadeInFromBottom"
                        duration="1000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none"
                    >
                        In progress...
                    </MovingText>
                    <ClimbingBoxLoader color="#FFBC00" size={25}/>
                </div>
            )}
            {jar.state === "paused" && (
                <div>
                    PAUSED
                    <button>Restart</button>
                </div>
            )}
        </>
    );
};

export default ProgressPanel;
