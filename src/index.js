import React from 'react'
import { StatusBar, View } from 'react-native'
import { Provider } from 'react-redux'

import store from './store'
import AppNavigatorwithHelper from './navigation/AppNavigator'

export default class Navigation extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar barStyle="default" />
        <Provider store={store}>
          <AppNavigatorwithHelper />
        </Provider>
      </View>
    )
  }
}
