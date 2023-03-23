import React from "react";
import {useSelector} from "react-redux";
import {getLocalStatus} from "../redux/selectors";
import Jar from "../components/Jar";
import {socket} from "../context/socket";
import { ToastContainer, toast } from "react-toastify";

const Main = () => {
    const deviceStatus = useSelector(getLocalStatus);
    if (!deviceStatus.finalJars[0]) {
        return;
    }

    const notify = () => toast.error('Cancel all progresses!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    return (
        <div>
            <div className="jar-container">
                {deviceStatus.finalJars.map((jar) => {
                    return <Jar key={jar.name} jar={jar}/>;
                })}

            </div>
            <button className="stop-button" onClick={() => {
                deviceStatus.finalJars.map((jar) => {
                    socket.emit("cancelRecipe", jar.name)
                })
                notify();
            }
            }>STOP</button>
        </div>
    );
};

export default Main;
