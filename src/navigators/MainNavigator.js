import { createStackNavigator } from 'react-navigation'
import { NAVIGATORS } from '../constants'
import { Lectures, Player } from '../views/screens'

const MainNavigator = createStackNavigator({
  [NAVIGATORS.LECTURES]: {
    screen: Lectures,
  },
  [NAVIGATORS.PLAYER]: {
    screen: Player,
  },
})

export default MainNavigator
