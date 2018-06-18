import React from 'react';
import { StatusBar, View, Platform } from 'react-native';
import { Provider } from 'react-redux';

import store, { configureStore } from './store';
import AppWithNavigationState from './navigation/AppNavigator';

export default class Navigation extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar barStyle="default" />
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
      </View>
    );
  }
}
