import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from './actionTypes';

// Register User
export const register = data => dispatch => {
  const {
    firstName,
    lastName,
    email,
    phone,
    password,
    rePassword
  } = data;
  
  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    phone,
    password,
    rePassword
  });
  
  return (
    // simulate posting of data to endpoint
    setTimeout(() => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data
      })
    }, 2000)
  );
};