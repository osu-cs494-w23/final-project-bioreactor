import React from "react";
import {socket} from "../context/socket";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteWarning = ({onClickHandler, setOnDelete, selectedRecipe}) => {
    const onClickRemoveHandler = () => {
        socket.emit("removeRecipe", selectedRecipe.name)
        notify();
        setOnDelete(false);
    }

    const notify = () => toast.success('Removing recipe went successful!', {
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
        <div className="warn-container">
            <div className="form-title">Delete</div>
            <div className="subject margin-bottom-more">
                Do you really want to delete this recipe?
            </div>
            <div>
                <button className="form-button submit" onClick={onClickRemoveHandler}>Yes</button>
                <button className="form-button cancel" onClick={onClickHandler}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default DeleteWarning;
