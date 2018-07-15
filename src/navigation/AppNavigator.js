import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import LoginScreen from '../screens/LoginScreen'
import TwitterScreen from '../screens/TwitterScreen'
import { connect } from 'react-redux'

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  TwitterHome: { screen: TwitterScreen }
})

export class AppNavigatorwithHelper extends Component {
  render () {
    const helper = {
      state: this.props.nav,
      dispatch: this.props.dispatch,
      addListener: createReduxBoundAddListener('root')
    }
    return <AppNavigator navigation={helper} />
  }
}

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(AppNavigatorwithHelper)
