import {combineReducers} from "redux";

import jarReducer from "./reducers";
import recipeReducer from "./recipeReducer";
import statusReducer from "./statusReducer";
import jarNameReducer from "./jarNameReducer";
import namesReducer from "./namesReducer";
import amountReducer from "./amountReducer";
import recipeListReducer from "./recipeListReducer";

const rootReducer = combineReducers({
    recipe: recipeReducer,
    recipeList: recipeListReducer,
    jars: jarReducer,
    machineStatus: statusReducer,
    jarName: jarNameReducer,
    names: namesReducer,
    amounts: amountReducer,
});

export default rootReducer;
