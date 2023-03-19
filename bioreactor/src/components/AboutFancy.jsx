import React from "react";
import MovingText from "react-moving-text";

const AboutFancy = () => {
    return (
        <div className="fancy-container">
            <div className="fancy-paragraph">
                <MovingText
                    className="fancy-main"
                    type="fadeInFromBottom"
                    duration="1000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none"
                >
                    What is Bioreactor?
                </MovingText>
            </div>
            <MovingText
                className="fancy-text"
                type="fadeInFromBottom"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none"
            >
                Bioreactor is a web application that can handle a raspberry pi machine
                by using socket.io
            </MovingText>
            <br/>
            <br/>
            <MovingText
                className="fancy-text"
                type="fadeInFromBottom"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none"
            >
                This application is implemented by following people:
            </MovingText>
            <br/>
            <MovingText
                className="fancy-text"
                type="fadeInFromBottom"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none"
            >
                Frank Nguyen &#40;Backend&#41;
            </MovingText>
            <MovingText
                className="fancy-text"
                type="fadeInFromBottom"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none"
            >
                Imgyeong Lee &#40;Frontend&#41;
            </MovingText>
        </div>
    );
};

export default AboutFancy;
