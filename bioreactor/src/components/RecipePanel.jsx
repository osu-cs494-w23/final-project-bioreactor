import React from "react";

const RecipePanel = () => {
  return (
    <>
      <div className="panel-header">
        <div className="header-text">Recipe Name</div>
        <div className="button-container">
          <button className="basic-button edit">Edit</button>
          <button className="basic-button delete">Delete</button>
        </div>
      </div>

      <div className="panel-content">
        <div className="card">
          <div className="bold">Temperature</div>
          <div>Value</div>
        </div>
        <div className="card">
          <div className="bold">Motor RPM</div>
          <div>Value</div>
        </div>
        <div className="card">
          <div className="bold">Required ingredient</div>
          <li>Something</li>
          <li>Something</li>
          <li>Something</li>
        </div>
      </div>
    </>
  );
};

export default RecipePanel;
