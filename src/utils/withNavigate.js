import { withNavigation } from 'react-navigation'
import { createFactory } from 'react'

export const withNavigate = (propName, nameScreen) => {
  function withNavigateWrapper(BaseComponent) {
    const factory = createFactory(BaseComponent)
    const WithNavigate = withNavigation(props =>
      factory({
        [propName]: () => props.navigation.navigate(nameScreen),
        ...props,
      }),
    )
    return WithNavigate
  }
  withNavigateWrapper.toString = () => nameScreen
  return withNavigateWrapper
}

export const withNavigateGoBack = (propName, redefine) => BaseComponent => {
  const factory = createFactory(BaseComponent)
  const WithNavigateGoBack = withNavigation(
    redefine
      ? props =>
          factory({
            [propName]: () => props.navigation.goBack(null),
            ...props,
          })
      : props =>
          factory({
            ...props,
            [propName]: () => props.navigation.goBack(null),
          }),
  )
  return WithNavigateGoBack
}
