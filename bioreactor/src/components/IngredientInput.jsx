import React, { useState } from "react";
import { validNumber } from "../data/regex";
import InvalidMessage from "./InvalidMessage";

const IngredientInput = ({ order = 1 }) => {
  const [onInvalid, SetOnInvalid] = useState(false);

  const handleChange = (e) => {
    // If the input is invalid
    if (e.target.value === "") {
      SetOnInvalid(false);
    } else if (!validNumber.test(e.target.value)) {
      SetOnInvalid(true);
    } else {
      SetOnInvalid(false);
    }
  };

  return (
    <>
      <div className="ingredient-input-container">
        <div className="order-box">{order}</div>
        <input
          type="text"
          required
          name="ingredient"
          className="wide-ingredient-input"
          placeholder="Enter the ingredient name"
        />
        <input
          type="text"
          required
          name="amount"
          className="wide-amount-input"
          placeholder="Amount"
          onChange={handleChange}
        />
      </div>
      {onInvalid && <InvalidMessage />}
    </>
  );
};

export default IngredientInput;
