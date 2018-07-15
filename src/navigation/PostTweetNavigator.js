import { StackNavigator } from 'react-navigation'

import PostScreen from '../screens/PostScreen'

const PostTweetNavigator = StackNavigator({
  Home: {
    screen: PostScreen,
    navigationOptions: {
      headerTitle: 'ツイート投稿',
      headerStyle: {
        backgroundColor: '#16a085'
      },
      headerTitleStyle: {
        color: 'white'
      }
    }
  }
})

export default PostTweetNavigator
