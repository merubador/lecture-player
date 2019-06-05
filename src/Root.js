import React from 'react'
import * as R from 'ramda'
import { connect, Provider } from 'react-redux'
import styled from 'styled-components'
import store from './modules'
import { setNavigator } from './modules/navigation'
import { AppNavigator } from './navigators'
import { getCurrentLecture, getPlayerStatus } from './modules/player'

const Container = styled.View`
  flex: 1;
  padding-bottom: 28px;
  background: #1f242b;
`

const AppDumb = ({ playerStatus, currentLecture: { name, uri } = {} }) => (
  <Container>
    <AppNavigator ref={setNavigator} />
  </Container>
)

const App = R.compose(
  connect(
    R.applySpec({
      currentLecture: getCurrentLecture,
      playerStatus: getPlayerStatus,
    }),
  ),
)(AppDumb)

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root
