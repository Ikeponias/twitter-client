import * as actionTypes from '../actions/types';

const initialState = {
  myTimelineTweets: {},
}

const tweet = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MY_TIMELINE_GET:
      console.log('action: %o', action.type);
      return Object.assign({}, state, {});
    case actionTypes.TWEET_POST:
      console.log('action: %o', action.type);
      return Object.assign({}, state, {});
    default:
      return state;
  }
}

export default tweet;
