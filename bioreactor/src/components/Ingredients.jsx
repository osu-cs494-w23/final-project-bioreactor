import React, { useState } from "react";
import IngredientInput from "./IngredientInput";

const Ingredients = () => {
  const [state, setState] = useState([""]);

  const addIngredient = () => {
    setState([...state, ""]);
  };

  return (
    <div className="ingredient-container">
      {state.map((el) => {
        return <IngredientInput />;
      })}
      <button
        className="add-ingredient"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          addIngredient();
        }}
      >
        +
      </button>
    </div>
  );
};

export default Ingredients;
