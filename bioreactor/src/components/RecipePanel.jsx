import React from "react";

const RecipePanel = ({ onClickEdit, onClickDelete }) => {
  return (
    <>
      <div className="panel-header">
        <div className="header-text">Recipe Name</div>
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
            <div className="bold card-subject">Temperature</div>
            <div className="card-value">Value</div>
          </div>
          <div className="card small">
            <div className="bold card-subject">Motor RPM</div>
            <div className="card-value">Value</div>
          </div>
        </div>
        <div className="side-card-container">
          <div className="card big">
            <div className="bold card-subject">Required ingredient</div>
            <ul className="card-value list">
              <li>Something with some amount ldkfa;lkefj</li>
              <li>Something with some amount ldkfa;lkefj</li>
              <li>Something with some amount ldkfa;lkefj</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipePanel;
