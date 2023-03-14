import { combineReducers } from "redux";

import jarReducer from "./reducers";
import recipeReducer from "./recipeReducer";

const rootReducer = combineReducers({
  recipe: recipeReducer,
  jars: jarReducer,
});

export default rootReducer;
