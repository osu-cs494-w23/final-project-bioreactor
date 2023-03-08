import React from "react";
import { NavLink } from "react-router-dom";
import datas from "../data/sample.json";
import { FaSearch } from "react-icons/fa";

const Sidebar = () => {
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
          <FaSearch />
        </button>
      </div>
      <div className="recipe-list">
        {datas.map((data) => {
          return (
            <li className="recipe-link">
              <NavLink to={data.url}>{data.name}</NavLink>
            </li>
          );
        })}
      </div>
      <button className="add-button">+ Add Recipe</button>
    </div>
  );
};

export default Sidebar;
