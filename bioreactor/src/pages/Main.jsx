import React, {useState} from "react";
import {useSelector} from "react-redux";
import {getLocalStatus} from "../redux/selectors";
import Jar from "../components/Jar";

const Main = ({socket}) => {
    const deviceStatus = useSelector(getLocalStatus);
    const [onRecipe, setOnRecipe] = useState(false);
    if (!deviceStatus.finalJars[0]) {
        return;
    }

    return (
        <div>
            <div className="jar-container">
                {deviceStatus.finalJars.map((jar) => {
                    return <Jar key={jar.name} jar={jar}/>;
                })}

            </div>
            <button className="stop-button">STOP</button>
        </div>
    );
};

export default Main;
