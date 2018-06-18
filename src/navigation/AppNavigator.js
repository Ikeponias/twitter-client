import React from "react";
import { AppState } from "react-native";
import { connect } from "react-redux";
import { StackNavigator, NavigationActions } from "react-navigation";
import { createReduxBoundAddListener } from "react-navigation-redux-helpers";

/* screen */
import LoginScreen from "../screens/LoginScreen";
import TwitterScreen from "../screens/TwitterScreen";

/* AppNavigator */
export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  TwitterHome: { screen: TwitterScreen }
});

const navigateOnce = getStateForAction => (action, state) => {
  const { type, routeName } = action;
  return state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
    ? null
    : getStateForAction(action, state);
};

AppNavigator.router.getStateForAction = navigateOnce(
  AppNavigator.router.getStateForAction
);

/* AppWithNavigationState */
@connect(state => ({
  nav: state.nav
}))
export default class AppWithNavigationState extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const helper = {
      dispatch: this.props.dispatch,
      state: this.props.nav,
      addListener: createReduxBoundAddListener("root")
    };

    return <AppNavigator navigation={helper} />;
  }
}
