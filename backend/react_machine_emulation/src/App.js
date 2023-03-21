import {useSocket} from "./hooks/socketHook";
import {css} from "@emotion/css";
import FinalJar from "./components/FinalJar";
import {useSelector} from "react-redux";
import {getLocalStatus} from "./selectors";
import MotorDevice from "./components/MotorDevice";
import RecipeInput from "./components/RecipeInput";

function App() {
    const deviceStatus = useSelector(getLocalStatus);
    let socket = useSocket(500)
    if(!deviceStatus || Object.keys(deviceStatus).length < 1)
        return

    let finalJarComponents = deviceStatus["finalJars"].map(jar => <FinalJar key={jar["name"]} jar={jar} socket={socket}/>)
    let ingredientPumpComponents = deviceStatus["startJars"].map(jar => <MotorDevice device={jar} socket={socket} key={jar["name"]}/>)

    return (
        <div>
            sup lmao
            <RecipeInput socket={socket}/>
            <MotorDevice device={deviceStatus["coolantMotor"]} socket={socket}/>
            {ingredientPumpComponents}

            <div className={css`display: flex`}>
                {finalJarComponents}
            </div>
        </div>
    );
}

export default App;
