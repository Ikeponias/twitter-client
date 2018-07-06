import { createStackNavigator } from "react-navigation";

import PostScreen from "../screens/PostScreen";

const PostTweetNavigator = createStackNavigator({
  Home: {
    screen: PostScreen,
    navigationOptions: {
      headerTitle: "ツイート投稿",
      headerStyle: {
        backgroundColor: "#16a085"
      },
      headerTitleStyle: {
        color: "white"
      }
    }
  }
});

export default PostTweetNavigator;
