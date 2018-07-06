import * as actionTypes from "../actions/types";

const initialState = {
  myTimelineTweets: {}
};

const tweet = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MY_TIMELINE_GET:
      return state;
    case actionTypes.TWEET_POST:
      return state;
    default:
      return state;
  }
};

export default tweet;
