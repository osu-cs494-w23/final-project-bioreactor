import React from "react";
import Ingredients from "./Ingredients";

const AddForm = ({ onClickHandler }) => {
  return (
    <>
      <form className="addform">
        <div className="form-title">Add your recipe</div>
        <label>
          <div className="subject">
            Recipe Name<span className="required"> *</span>
          </div>
          <input
            required
            type="text"
            name="name"
            className="general-text-input"
          />
        </label>
        <label>
          <div className="subject">
            Required Temperature<span className="required"> *</span>
          </div>
          <input
            required
            type="text"
            name="temperature"
            className="general-text-input"
          />
        </label>
        <label>
          <div className="subject">
            Required Motor RPM<span className="required"> *</span>
          </div>
          <input
            required
            type="text"
            name="rpm"
            className="general-text-input"
          />
        </label>
        <label>
          <div className="subject">
            Required Ingredient<span className="required"> *</span>
          </div>
          <Ingredients />
        </label>
        <div>
          <input type="submit" value="Submit" className="form-button submit" />
          <button
            type="button"
            onClick={onClickHandler}
            className="form-button cancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default AddForm;
