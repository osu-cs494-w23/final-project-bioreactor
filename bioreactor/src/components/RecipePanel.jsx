import React from "react";
import { useSelector } from "react-redux";
import { getRecipe } from "../redux/selectors";

const RecipePanel = ({ onClickEdit, onClickDelete }) => {
  const selectedRecipe = useSelector(getRecipe);
  const ingredients = Object.keys(selectedRecipe.ingredients);
  const amounts = Object.values(selectedRecipe.ingredients);
  // console.log(ingredients);

  return (
    <>
      <div className="panel-header">
        <div className="header-text">{selectedRecipe.name}</div>
        <div className="button-container">
          <button className="basic-button edit" onClick={onClickEdit}>
            Edit
          </button>
          <button className="basic-button delete" onClick={onClickDelete}>
            Delete
          </button>
        </div>
      </div>

      <div className="panel-content">
        <div className="side-card-container">
          <div className="card small">
            <div className="bold card-subject">Total Time</div>
            <div className="card-value">{selectedRecipe.time}</div>
          </div>
          <div className="card small">
            <div className="bold card-subject">Temperature</div>
            <div className="card-value">{selectedRecipe.temperature}</div>
          </div>
          <div className="card small">
            <div className="bold card-subject">Motor RPM</div>
            <div className="card-value">{selectedRecipe.motorSpeed}</div>
          </div>
        </div>
        <div className="side-card-container">
          <div className="card big">
            <div className="bold card-subject">Required ingredient</div>
            <ul className="card-value list">
              {ingredients.map((igd) => {
                return <li>{igd}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipePanel;
