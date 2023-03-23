import React, { useState } from "react";
import { validNumber } from "../data/regex";
import InvalidMessage from "./InvalidMessage";

const IngredientInput = ({
  setAmount,
  setIngredient,
  index,
  removeIngredient,
    removeAmount,
  ingredientNameValue = "",
  ingredientAmountValue = "",
}) => {
  const [onInvalid, SetOnInvalid] = useState(false);
  const [nameValue, setNameValue] = useState(ingredientNameValue);
  const [amountValue, setAmountValue] = useState(ingredientAmountValue);

  const handleChange = (e) => {
    // If the input is valid
    if (e.target.value === "") {
      SetOnInvalid(false);
      setAmount(index, e.target.value);
      setAmountValue(e.target.value);
    } else if (!validNumber.test(e.target.value)) {
      SetOnInvalid(true);
    } else {
      SetOnInvalid(false);
      setAmount(index, e.target.value);
      setAmountValue(e.target.value);
    }
  };

  const onChangeHandler = (e) => {
    //e.preventDefault();
    //console.log("YOUR INPUT IS ", e.target.value);
    setIngredient(index, e.target.value);
    setNameValue(e.target.value);
  };

  const onRemoveHandler = (e) => {
    removeIngredient(e, index);
    removeAmount(e, index);
  };

  return (
    <>
      <div className="ingredient-input-container">
        <div className="order-box">{index + 1}</div>
        <input
          type="text"
          required
          name="ingredient"
          className="wide-ingredient-input"
          placeholder="Enter the ingredient name"
          onChange={onChangeHandler}
          value={nameValue}
        />
        <input
          type="text"
          required
          name="amount"
          className="wide-amount-input"
          placeholder="Amount"
          onChange={handleChange}
          value={amountValue}
        />
        <button onClick={onRemoveHandler} className="remove-button">Remove</button>
      </div>
      {onInvalid && <InvalidMessage />}
    </>
  );
};

export default IngredientInput;
