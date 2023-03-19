import React from "react";
import datas from "../data/sample.json";
import {FaSearch} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {selectRecipe} from "../redux/actions";

const Sidebar = ({onClickHandler}) => {
    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <div className="bold list-header">Recipe List</div>

            <div className="search">
                <input
                    className="searchbox"
                    placeholder="Search recipes..."
                    type="text"
                />
                <button className="searchbutton">
                    <FaSearch/>
                </button>
            </div>
            <div className="recipe-list">
                {datas.map((data) => {
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
                })}
            </div>
            <button className="add-button" onClick={onClickHandler}>
                + Add Recipe
            </button>
        </div>
    );
};

export default Sidebar;
