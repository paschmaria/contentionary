import { updateObject } from '../../utils/utils';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL
  } from '../actions/actionTypes';

const initialState = {
    isAuthenticated: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return updateObject(
                state, { isAuthenticated: true }
            );
        default:
            return state;
    }
}

export default reducer;