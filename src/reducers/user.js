import * as actionTypes from '../actions/types';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOKEN_SET:
    console.log('action: %o', action.type)
      return Object.assign({}, state, { token: action.token, token_secret: action.token_secret });
    case actionTypes.USER_SET:
    console.log('action: %o', action.type)
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
}

