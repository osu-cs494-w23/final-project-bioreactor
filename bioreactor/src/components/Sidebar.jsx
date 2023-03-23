import React, {useState, useEffect} from "react";
import {FaSearch} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {selectRecipe} from "../redux/actions";
import {socket} from "../context/socket";

const Sidebar = ({onClickHandler, recipes}) => {
    const dispatch = useDispatch();
    const [result, setResult] = useState([])
    const [initialData, setInitialData] = useState([])

    console.log("Socket is", socket)

    useEffect(()=>{
        if(socket !== undefined) {
            socket.emit("getRecipeList", (data) => {
                if (data["status"] === "error") {
                    console.log("getManual error:", data["errorMessage"])
                    return
                }
                if (data["list"] === {}) {
                    setInitialData([])
                } else {
                    setInitialData(Object.values(data["list"]))
                    //setResult(initialData)
                }
            })
        }
    }, [initialData])

    const onChangeHandler = (e) => {
        e.preventDefault()
        if (e.target.value === "") {
            setResult(initialData)
            return
        }
        setResult(initialData.filter(data => data.name.toLowerCase().includes(e.target.value)))
    }

    return (
        <div className="sidebar">
            <div className="bold list-header">Recipe List</div>

            <div className="search">
                <input
                    className="searchbox"
                    placeholder="Search recipes..."
                    type="text"
                    onChange={onChangeHandler}
                />
                <button className="searchbutton">
                    <FaSearch/>
                </button>
            </div>
            <div className="recipe-list">
                {!(Object.keys(result).length === 0) && (result.map((data) => {
                        return (
                            <li key={data.name}>
                                <button
                                    className="recipe-link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(selectRecipe(data));
                                    }}
                                >
                                    {data.name}
                                </button>
                            </li>
                        );
                    }))}

            </div>
            <button className="add-button" onClick={onClickHandler}>
                + Add Recipe
            </button>
        </div>
    );
};

export default Sidebar;
