import * as actionTypes from "../actions/types";

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOKEN_SET:
      return Object.assign({}, state, {
        token: action.token,
        token_secret: action.tokenSecret
      });
    case actionTypes.USER_SET:
      return Object.assign({}, state, action.user);
    case actionTypes.STORE_TOKEN:
      return state;
    case actionTypes.FETCH_TOKEN:
      return state;
    default:
      return state;
  }
}
