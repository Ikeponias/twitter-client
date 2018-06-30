import * as actionTypes from "../actions/types";
import { AsyncStorage } from "react-native";

const initialState = {};


export default function reducer(state = initialState, action) {
  console.log("actionType: %o", action.type);
  console.log("action: %o", action);
  switch (action.type) {
    case actionTypes.TOKEN_SET:
      return Object.assign({}, state, {
        token: action.token,
        token_secret: action.tokenSecret
      });
    case actionTypes.USER_SET:
      console.log("user: %o", action.user);
      return Object.assign({}, state, action.user);
    case actionTypes.STORE_TOKEN:
      return state;
    case actionTypes.FETCH_TOKEN:
      return state;
    default:
      return state;
  }
}
