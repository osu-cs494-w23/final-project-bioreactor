import {combineReducers} from "redux";

import jarReducer from "./reducers";
import recipeReducer from "./recipeReducer";
import statusReducer from "./statusReducer";
import jarNameReducer from "./jarNameReducer";
import namesReducer from "./namesReducer";
import amountReducer from "./amountReducer";

const rootReducer = combineReducers({
    recipe: recipeReducer,
    jars: jarReducer,
    machineStatus: statusReducer,
    jarName: jarNameReducer,
    names: namesReducer,
    amounts: amountReducer,
});

export default rootReducer;
