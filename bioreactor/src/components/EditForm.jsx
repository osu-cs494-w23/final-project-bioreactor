import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getRecipe } from "../redux/selectors";
import Ingredients from "./Ingredients";
import {socket} from "../context/socket";
import { getIngredientAmounts, getIngredientNames } from "../redux/selectors";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditForm = ({ onClickHandler, setOnEdit }) => {
  const selectedRecipe = useSelector(getRecipe);
  const ingredientNames = useSelector(getIngredientNames);
  const ingredientAmounts = useSelector(getIngredientAmounts);

  const [formValue, setFormValue] = useState({
    name: selectedRecipe.name,
    time: selectedRecipe.time,
    motorSpeed: selectedRecipe.motorSpeed,
    temperature: selectedRecipe.temperature,
    ingredients: null,
  });

  const arrayToObject = (names, amounts) => {
    if (
      names.length !== amounts.length ||
      names.length === 0 ||
      amounts.length === 0
    ) {
      return null;
    }

    let ingredientObject = {};

    // Using the foreach method
    names.forEach((k, i) => {
      ingredientObject[k] = amounts[i];
    });
    return ingredientObject;
  };

  const notify = () => toast.success('Editing recipe went successful!', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  useEffect(() => {
    console.log("selected recipe changed:", selectedRecipe);
  }, [selectedRecipe]);

  const [name, setName] = useState(selectedRecipe.name);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const finalIngredients = arrayToObject(ingredientNames, ingredientAmounts);
    formValue.ingredients = finalIngredients;
    console.log(formValue);
    socket.emit("setRecipe", formValue);
    setOnEdit(false);
    notify();
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  let recipeLabel = null;

  if (selectedRecipe) {
    recipeLabel = (
      <label>
        <div className="subject">
          Required Ingredient<span className="required"> *</span>
        </div>
        <Ingredients recipe={selectedRecipe.ingredients} />
      </label>
    );
  }

  return (
    <>
      <form className="addform" onSubmit={onSubmitHandler}>
        <div className="form-title">Edit your recipe</div>
        <label>
          <div className="subject">
            Recipe Name<span className="required"> *</span>
          </div>
          <input
            required
            type="text"
            name="name"
            value={formValue.name}
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
            value={formValue.temperature}
            onChange={(e) => {
              e.preventDefault();
              setFormValue({
                ...formValue,
                temperature: e.target.value,
              });
            }}
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
            value={formValue.motorSpeed}
            onChange={(e) => {
              e.preventDefault();
              setFormValue({
                ...formValue,
                motorSpeed: e.target.value,
              });
            }}
          />
        </label>
        {recipeLabel}
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
