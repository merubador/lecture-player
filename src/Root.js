import React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import store from './modules'
import { setNavigator } from './modules/navigation'
import { AppNavigator } from './navigators'

const Container = styled.View`
  flex: 1;
  background: #1f242b;
`

const App = () => (
  <Container>
    <AppNavigator ref={setNavigator} />
  </Container>
)

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root
