import React from "react";
import {useNavigate} from "react-router-dom";
import LoadButton from "./LoadButton";
import "../css-data/Jar.css";

const EmptyJar = () => {
    const navigate = useNavigate();
    const changePage = () => navigate("load");

    return (
        <>
            <div className="jar">
                <LoadButton className="loadbutton" onClick={changePage}>
                    Load a recipe
                </LoadButton>
            </div>
        </>
    );
};

export default EmptyJar;
