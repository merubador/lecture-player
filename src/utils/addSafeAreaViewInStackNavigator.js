import React from 'react'
import * as R from 'ramda'
import { SafeAreaView } from 'react-native'

export const withSafeAreaViewInStackNavigator = ({
  style,
} = {}) => BaseComponent => props => (
  <SafeAreaView style={[{ backgroundColor: '#fff' }, style]}>
    <BaseComponent {...props} />
  </SafeAreaView>
)

const addSafeAreaViewInStackNavigator = R.mapObjIndexed(BaseComponent => {
  const Component = withSafeAreaViewInStackNavigator({ style: { flex: 1 } })(
    BaseComponent,
  )
  const { header: Header, ...props } = BaseComponent.navigationOptions
  Component.navigationOptions = {
    header: R.when(
      x => !R.isNil(x),
      withSafeAreaViewInStackNavigator(),
      Header,
    ),
    ...props,
  }
  return Component
})

export default addSafeAreaViewInStackNavigator
