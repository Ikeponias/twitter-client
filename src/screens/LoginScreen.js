import React from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import { connect } from "react-redux";
import { Constants } from "expo";

import { tokenSet, userSet } from '../actions/index'

/* import twitter */
import twitter, {
  TWLoginButton,
  decodeHTMLEntities,
  getRelativeTime
} from "react-native-simple-twitter";

export class LoginScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    const { params = {} } = navigation.state;

    return {
      header: null
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      authUrl: null
    };

    console.log(
      decodeHTMLEntities(
        "&amp; &apos; &#x27; &#x2F; &#39; &#47; &lt; &gt; &nbsp; &quot;"
      )
    );
    console.log(getRelativeTime(new Date(new Date().getTime() - 32390)));
    console.log(getRelativeTime("Thu Apr 06 15:28:43 +0000 2017"));
  }

  async componentWillMount() {
    if (this.props.user.token) {
      twitter.setAccessToken(
        this.props.user.token,
        this.props.user.token_secret
      );

      try {
        const user = await twitter.get("account/verify_credentials.json", {
          include_entities: false,
          skip_status: true,
          include_email: true
        });
        this.props.userSet(user)

        this.props.navigation.navigate("TwitterHome")
        /*
        this.props.dispatch(
          StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "TwitterHome" })]
          })
        );*/
      } catch (err) {
        console.log(err);
      }
    }
  }

  onGetAccessToken = ({ oauth_token, oauth_token_secret }) => {
    this.props.tokenSet({
      token: oauth_token,
      token_secret: oauth_token_secret
    });
  };

  onSuccess = user => {
    this.props.userSet(user);

    this.props.navigation.navigate("TwitterHome")
    /*
    this.props.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "TwitterHome" })]
      })
    );*/
  };

  onPress = e => {
    console.log("button pressed");
  };

  onClose = e => {
    console.log("press close button");
  };

  onError = err => {
    console.log(err);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Login</Text>
        </View>
        <TWLoginButton
          style={{ width: "100%", height: 60, backgroundColor: "blue" }}
          type="TouchableOpacity"
          onPress={this.onPress}
          onGetAccessToken={this.onGetAccessToken}
          onSuccess={this.onSuccess}
          onClose={this.onClose}
          onError={this.onError}
        >
          <Text
            style={{
              marginTop: 10,
              textAlign: "center",
              fontSize: 20,
              color: "#fff"
            }}
          >
            Twitterでログインする
          </Text>
        </TWLoginButton>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  nav: state.nav
});

const mapDispatchToProps = {
  tokenSet,
  userSet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1DA1F2"
  },
  title: {
    flex: 1,
    padding: 64
  },
  titleText: {
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold"
  }
});
