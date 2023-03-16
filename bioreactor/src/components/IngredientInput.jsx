import React, { useState } from "react";
import { validNumber } from "../data/regex";
import InvalidMessage from "./InvalidMessage";

const IngredientInput = ({ setAmount, setIngredient, index, order = 1 }) => {
  const [onInvalid, SetOnInvalid] = useState(false);

  const handleChange = (e) => {
    // If the input is valid
    if (e.target.value === "") {
      SetOnInvalid(false);
      setAmount(index, e.target.value);
    } else if (!validNumber.test(e.target.value)) {
      SetOnInvalid(true);
    } else {
      SetOnInvalid(false);
      setAmount(index, e.target.value);
    }
  };

  const onChangeHandler = (e) => {
    //e.preventDefault();
    //console.log("YOUR INPUT IS ", e.target.value);
    setIngredient(index, e.target.value);
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
          onChange={onChangeHandler}
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
