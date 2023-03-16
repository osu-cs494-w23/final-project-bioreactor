import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getRecipe } from "../redux/selectors";
import Ingredients from "./Ingredients";

const EditForm = ({ onClickHandler }) => {
  const selectedRecipe = useSelector(getRecipe);
  const [name, setName] = useState(selectedRecipe.name);

  // Make...object...and..be..happy.......................

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <form className="addform">
        <div className="form-title">Edit your recipe</div>
        <label>
          <div className="subject">
            Recipe Name<span className="required"> *</span>
          </div>
          <input
            required
            type="text"
            name="name"
            value={name}
            onInput={handleChangeName}
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
            value={selectedRecipe.temperature}
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
            value={selectedRecipe.motorSpeed}
          />
        </label>
        <label>
          <div className="subject">
            Required Ingredient<span className="required"> *</span>
          </div>
          <Ingredients />
        </label>
        <div>
          <input type="submit" value="Edit" className="form-button submit" />
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

export default EditForm;
