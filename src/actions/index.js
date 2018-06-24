import * as actionTypes from "./types";

// user
export const tokenSet = () => ({
  type: actionTypes.TOKEN_SET,
});

export const userSet = () => ({
  type: actionTypes.USER_SET,
});

// tweet
export const myTimelineGet = () => ({
  type: actionTypes.MY_TIMELINE_GET,
});
export const tweetPost = () => ({
  type: actionTypes.TWEET_POST,
});
