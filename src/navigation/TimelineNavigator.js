import { StackNavigator } from 'react-navigation'

import TimelineScreen from '../screens/TimelineScreen'

const TimelineNavigator = StackNavigator({
  Home: {
    screen: TimelineScreen,
    navigationOptions: {
      title: 'タイムライン',
      headerStyle: {
        backgroundColor: '#16a085'
      },
      headerTitleStyle: {
        color: 'white'
      }
    }
  }
})

export default TimelineNavigator
