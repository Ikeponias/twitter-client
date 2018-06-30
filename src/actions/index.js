import * as actionTypes from "./types";

// user
export const tokenSet = (token, tokenSecret) => ({
  type: actionTypes.TOKEN_SET,
  token: token,
  tokenSecret: tokenSecret
});

export const userSet = (user) => ({
  type: actionTypes.USER_SET,
  user,
});

export const storeToken = (token, tokenSecret) => ({
  type: actionTypes.STORE_TOKEN,
  token,
  tokenSecret
});

export const fetchToken = () => ({
  type: actionTypes.FETCH_TOKEN,
});

// tweet
export const myTimelineGet = () => ({
  type: actionTypes.MY_TIMELINE_GET,
});
export const tweetPost = () => ({
  type: actionTypes.TWEET_POST,
});
