import {useSocket} from "./hooks/socketHook";
import {css} from "@emotion/css";
import FinalJar from "./components/FinalJar";
import {useSelector} from "react-redux";
import {getLocalStatus} from "./selectors";

function App() {
    const deviceStatus = useSelector(getLocalStatus);
    let socket = useSocket(500)

    let finalJarComponents = null
    if (deviceStatus && deviceStatus["finalJars"])
        finalJarComponents = deviceStatus["finalJars"].map(jar => <FinalJar key={jar["name"]} jar={jar}
                                                                            socket={socket}/>)

    return (
        <div>
            sup lmao
            <div className={css`display: flex`}>
                {finalJarComponents}
            </div>
        </div>
    );
}

export default App;
