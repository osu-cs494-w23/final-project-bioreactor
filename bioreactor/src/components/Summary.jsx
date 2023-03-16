import React from "react";
import { useNavigate } from "react-router-dom";

const Summary = ({ onClickHandler, recipe, jarName, socket }) => {
  const navigate = useNavigate();

  const loadRecipe = () => {
    console.log("RECIPE is: ", recipe);
    socket.emit("loadRecipe", recipe, jarName);
    navigate("main");
  };

  return (
    <div className="summary-modal">
      <div className="modal-title">Summary</div>
      <div className="summary-container">
        <div className="left-summary">
          <div className="recipe-name">Recipe: {recipe.name}</div>
          <div>Total Time: {recipe.time}</div>
          <div>Temperature: {recipe.temperature}</div>
          <div>Motor RPM: {recipe.motorSpeed}</div>
          <div>Required ingredient: Something</div>
          <ul>
            <li>Something 001</li>
            <li>Something 002</li>
            <li>Something 003</li>
          </ul>
        </div>
        <div className="right-summary">
          <div>Please check these before start:</div>
        </div>
      </div>
      <div className="button-container">
        <button className="form-button submit" onClick={loadRecipe}>
          Done
        </button>
        <button className="form-button cancel" onClick={onClickHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Summary;
