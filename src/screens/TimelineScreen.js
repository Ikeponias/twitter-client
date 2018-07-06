import React from "react";
import { Text, FlatList, RefreshControl } from "react-native";
import { connect } from "react-redux";
import { NavigationActions, StackActions } from "react-navigation";
import TweetComponent from "../components/TweetComponent";

import twitter from "react-native-simple-twitter";

connect(state => ({
  user: state.user
}));
export default class TimelineScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    const { params = {} } = navigation.state;

    return {
      headerTitle: "タイムライン"
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      items: null,
      loaded: false,
      refreshing: false
    };
  }

  componentDidMount() {
    this.getTimeline();
  }

  renderLoadingView() {
    return <Text>Loading Tweets...</Text>;
  }

  onButtonPress = e => {
    this.props.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Post" })]
      })
    );
  };

  getTimeline() {
    this.setState({ refreshing: true });
    twitter
      .get("statuses/home_timeline.json")
      .then(responseTweets => {
        console.log(responseTweets);
        this.setState({
          items: responseTweets,
          loaded: true,
          refreshing: false
        });
      })
      .catch(error => console.log(error));
  }

  _keyExtractor = (item, index) => item.id.toString();

  render() {
    console.log("items: %o", this.state.items);
    return this.state.loaded ? (
      <FlatList
        data={this.state.items}
        extraData={this.state.items}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) => <TweetComponent item={item} />}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.getTimeline.bind(this)}
          />
        }
      />
    ) : (
      this.renderLoadingView()
    );
  }
}
