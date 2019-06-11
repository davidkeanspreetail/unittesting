import { combineReducers } from "redux";
import { createReducer } from "redux-starter-kit";
import initialState from "./initialState";
import * as actionCreators from "./actions";

export const username = createReducer(initialState.username, {
    [actionCreators.updateUsername]: (state, action) => {
        return action.payload;
    }
});

export default combineReducers({
    username
});
