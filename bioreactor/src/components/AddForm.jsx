import React, { useState } from "react";
import Ingredients from "./Ingredients";
import { useSelector } from "react-redux";
import { getIngredientAmounts, getIngredientNames } from "../redux/selectors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {socket} from "../context/socket";

const AddForm = ({ onClickHandler, setOnAdd }) => {
  const ingredientNames = useSelector(getIngredientNames);
  const ingredientAmounts = useSelector(getIngredientAmounts);

  const notify = () => toast.success('Adding recipe went successful!', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const [formValue, setFormValue] = useState({
    name: "",
    time: undefined,
    motorSpeed: undefined,
    temperature: undefined,
    ingredients: undefined,
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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const finalIngredients = arrayToObject(ingredientNames, ingredientAmounts);
    formValue.ingredients = finalIngredients;
    // WOW it doesn't work at all INTERESTING!!!
    //setFormValue({ ...formValue, ingredients: finalIngredients });
    console.log(formValue);
    socket.emit("setRecipe", formValue)
    setOnAdd(false);
    notify()
    // recipes.push(formValue);
  };

  return (
    <>
      <form className="addform" onSubmit={onSubmitHandler}>
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
            value={formValue.name}
            onChange={(e) => {
              e.preventDefault();
              setFormValue({
                ...formValue,
                name: e.target.value,
              });
            }}
          />
        </label>
        <label>
          <div className="subject">
            Recipe Time<span className="required"> *</span>
          </div>
          <input
            required
            type="text"
            name="time"
            className="general-text-input"
            value={formValue.time}
            onChange={(e) => {
              e.preventDefault();
              setFormValue({
                ...formValue,
                time: e.target.value,
              });
            }}
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
            name="motorSpeed"
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
