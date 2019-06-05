import { createStackNavigator } from 'react-navigation'
import { NAVIGATORS } from '../constants'
import { Lectures, Player } from '../views/screens'

const MainNavigator = createStackNavigator(
  {
    [NAVIGATORS.LECTURES]: {
      screen: Lectures,
      navigationOptions: ({ navigation }) => ({
        title: 'Лекции',
      }),
    },
    [NAVIGATORS.PLAYER]: {
      screen: Player,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#c15358',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 28,
      },
    },
  },
)

export default MainNavigator
