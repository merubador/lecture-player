import React from 'react'
import * as R from 'ramda'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import Video from 'react-native-video'
import store from './modules'
import { setNavigator } from './modules/navigation'
import { AppNavigator } from './navigators'
import { getCurrentLecture, getPlayerStatus } from './modules/player'

const Container = styled.View`
  flex: 1;
  background: #1f242b;
`

const AppDumb = ({ playerStatus, currentLecture: { name, uri } = {} }) => (
  <Container>
    <AppNavigator ref={setNavigator} />
    <Video
      source={{ uri }}
      muted={playerStatus === 'stop' ? true : false}
      audioOnly
    />
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
