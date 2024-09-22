import { createContext, useContext, useEffect, useReducer } from 'react'

const initialState = {
  user: null,
  role: null,
  token: null,
};

const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch(action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        role: null,
        token: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload.user,
        role: null,
        token: null,
      };
    default:
      break;
  }
}