import { AppNavigator } from '../navigation/AppNavigator'

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Login')
)

export default function nav (state = initialState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  return nextState || state
}
