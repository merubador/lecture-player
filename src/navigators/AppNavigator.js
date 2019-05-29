import { createSwitchNavigator } from 'react-navigation'
import { createAppContainer } from 'react-navigation'
import MainNavigator from './MainNavigator'
import { NAVIGATORS } from '../constants'
import { Loading } from '../views/screens'

const AppSwitch = createSwitchNavigator(
  {
    [NAVIGATORS.LOADING]: Loading,
    [NAVIGATORS.MAIN]: MainNavigator,
  },
  {
    initialRouteName: NAVIGATORS.LOADING,
  },
)

const AppNavigator = createAppContainer(AppSwitch)

export default AppNavigator
