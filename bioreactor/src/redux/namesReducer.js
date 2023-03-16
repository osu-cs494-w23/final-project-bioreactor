// reducer that holds the selected recipe
import { SELECT_INGRE_NAME } from "./actions";

const initState = [];

function recipeReducer(state = initState, action) {
  switch (action.type) {
    case SELECT_INGRE_NAME:
      state = action.names;
      return state;
    default:
      return state;
  }
}

export default recipeReducer;
