import React from "react";
import { AppLoading } from "expo";
import Navigation from "./src/index";
import twitter from "react-native-simple-twitter";

import ENV from "./env";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingComplete: false
    };
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    } else {
      return <Navigation />;
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      twitter.setConsumerKey(ENV.consumerKey, ENV.consumerKeySecret)
    ]);
  };
}
