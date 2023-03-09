import React from "react";

const Summary = ({ onClickHandler }) => {
  return (
    <div className="summary-modal">
      <div className="modal-title">Summary</div>
      <div className="summary-container">
        <div className="left-summary">
          <div>Temperature: Something</div>
          <div>Motor RPM: Something</div>
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
        <button className="form-button submit">Done</button>
        <button className="form-button cancel" onClick={onClickHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Summary;
