import React from "react";
import Sidebar from "../components/Sidebar";
import RecipePanel from "../components/RecipePanel";
import { NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const Manage = () => {
  return (
    <div className="manage-page">
      <Sidebar />
      <div className="rightside">
        <div className="back-container">
          <NavLink to="/" className="back">
            <FaAngleLeft className="arrow" />
            Back
          </NavLink>
        </div>
        <div className="recipe-panel">
          <RecipePanel />
        </div>
      </div>
    </div>
  );
};

export default Manage;
