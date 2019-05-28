import { createStackNavigator } from 'react-navigation'
import {
  withNavigateOnboarding,
  withNavigateSignin,
} from '../views/components/commons'
import { addSafeAreaViewInStackNavigator } from '../utils'

const AuthNavigator = createStackNavigator(
  addSafeAreaViewInStackNavigator({
    [withNavigateOnboarding]: Onboarding,
    [withNavigateSignin]: SigninContainer,
  }),
)

export default AuthNavigator
