import {SELECT_AMOUNTS} from "./actions";

const initState = [];

function recipeReducer(state = initState, action) {
    switch (action.type) {
        case SELECT_AMOUNTS:
            state = action.amounts;
            return state;
        default:
            return state;
    }
}

export default recipeReducer;
