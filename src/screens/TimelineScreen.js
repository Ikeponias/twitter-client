import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions, StackActions } from 'react-navigation'
import TweetsListComponent from '../components/TweetsListComponent';

/* import twitter */
import twitter from 'react-native-simple-twitter'

@connect(
  state => ({
    user: state.user
  })
)

export default class TimelineScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation
    const { params = {} } = navigation.state

    return {
      headerTitle: "タイムライン"
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      items: null,
      loaded: false,
    }
  }

  componentDidMount() {
    this.getTweet();
  }

  renderLoadingView() {
    return (
      <Text>
        Loading Tweets...
      </Text>
    );
  }

  onButtonPress = (e) => {
    this.props.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Post' })
      ]
    }))
  }

  getTweet() {
    twitter.get('statuses/home_timeline.json', this.getParams)
      .then((responseTweets) => {
        console.log(responseTweets)
        this.setState({
          items: responseTweets,
          loaded: true,
        });
      })
      .catch((error) => console.log(error));
  }


  render() {
    return (
      this.state.loaded ?
        <TweetsListComponent
          data={this.state.items}
          navigator={this.props.navigator}
        /> :
        this.renderLoadingView()
    );
  }
}
