import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'

/* import twitter */
import twitter from 'react-native-simple-twitter'

import PostTweetComponent from '../components/PostTweetComponent';

@connect(
  state => ({
    user: state.user
  })
)
export default class PostScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation
    const { params = {} } = navigation.state
  }

  constructor(props) {
    super(props)
  }

  postTweet(text) {
    const postParams = {
      status: "API投稿テスト",
    }

    postParams.status = text;
    twitter.post('statuses/update.json', postParams)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
  }

  render() {
    return (
      <PostTweetComponent onPress={this.postTweet} />
      /*
      <View style={styles.container}>
        <View style={{ justifyContent: "center", alignItems: "center", paddingTop: 32, }}>
          <Image source={require('../../assets/images/ok_man.png')} style={{ width: 184, height: 200 }} />
        </View>
        <View style={styles.content}>
          <Text style={styles.name}>{this.props.user.name} @{this.props.user.screen_name}</Text>
          <Text style={styles.description}>{this.props.user.description}</Text>
          <TouchableOpacity style={styles.button} onPress={this.onButtonPress}>
            <Text style={styles.buttonText}>Tweetする</Text>
          </TouchableOpacity>
        </View>
      </View>
      */
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    padding: 32
  },
  name: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#1da1f2",
    paddingVertical: 16
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: "#fff"
  }
})
