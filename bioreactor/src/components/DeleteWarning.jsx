import React from "react";

const DeleteWarning = ({ onClickHandler }) => {
  return (
    <div className="warn-container">
      <div className="form-title">Delete</div>
      <div className="subject margin-bottom-more">
        Do you really want to delete this recipe?
      </div>
      <div>
        <button className="form-button submit">Yes</button>
        <button className="form-button cancel" onClick={onClickHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteWarning;
