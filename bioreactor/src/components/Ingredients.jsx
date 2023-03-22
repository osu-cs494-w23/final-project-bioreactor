import React, { useState } from "react";
import IngredientInput from "./IngredientInput";
import { useDispatch } from "react-redux";
import { selectAmounts, selectNames } from "../redux/actions";

const Ingredients = ({ recipe = { "": "" } }) => {
  const dispatch = useDispatch();

  // I was trying to map all ingredients for edit form.
  const [state, setState] = useState(Object.keys(recipe));
  const [amounts, setAmounts] = useState(Object.values(recipe));

  const addIngredient = () => {
    setState([...state, ""]);
    setAmount([...amounts, ""]);
  };

  // Remove
  const removeIngredient = (e, idx) => {
    e.preventDefault();

    var result = [];

    for (let i = 0; i < state.length; i++) {
      if (i !== idx) {
        result.push(state[i]);
      }
    }

    setState(result);
    console.log("Triggered!");
  };

  const setIngredient = (idx, value) => {
    let temp = state;
    temp[idx] = value;
    setState(temp);
    dispatch(selectNames(state));
  };

  const setAmount = (idx, value) => {
    let temp = amounts;
    temp[idx] = value;
    setAmounts(temp);
    dispatch(selectAmounts(amounts));
  };

  return (
    <div className="ingredient-container">
      {state.map((el, index) => {
        // console.log("Does it work?", state[index]);
        console.log("Current State: ", state);
        console.log("Current Amounts=== ", amounts);
        return (
          <IngredientInput
            setIngredient={setIngredient}
            setAmount={setAmount}
            index={index}
            removeIngredient={removeIngredient}
            ingredientNameValue={state[index]}
            ingredientAmountValue={amounts[index]}
          />
        );
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
