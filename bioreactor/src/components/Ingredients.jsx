import React, {useState} from "react";
import IngredientInput from "./IngredientInput";
import {useDispatch} from "react-redux";
import {selectAmounts, selectNames} from "../redux/actions";

const Ingredients = () => {
    const dispatch = useDispatch();

    const [state, setState] = useState([""]);
    const [amounts, setAmounts] = useState([""]);

    const addIngredient = () => {
        setState([...state, ""]);
        setAmount([...amounts, ""]);
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
                        Ingredients={state}
                        setIngredient={setIngredient}
                        setAmount={setAmount}
                        index={index}
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
