import React from 'React'
import * as R from 'ramda'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  getCurrentLecture,
  playLecture,
  getPlayerStatus,
  puseLecture,
  resumeLecture,
} from '../../modules/player'
import { play } from '../../assets'
import { withHandlers } from 'recompose'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background: #1f242b;
`

const Title = styled.Text`
  font-size: 60px;
  color: #f7f7f7;
`

const PlayIcon = styled.Image.attrs({
  source: play,
})`
  width: 100px;
  height: 100px;
`

const Button = styled.TouchableOpacity``

const PlayerDumb = ({
  resume,
  pause,
  playerStatus,
  currentLecture: { name, uri } = {},
}) => (
  <Container>
    <Title>{name}</Title>
    <Button onPress={playerStatus === 'playing' ? pause : resume}>
      <PlayIcon />
    </Button>
  </Container>
)

const Player = R.compose(
  connect(
    R.applySpec({
      currentLecture: getCurrentLecture,
      playerStatus: getPlayerStatus,
    }),
    { playLecture, puseLecture, resumeLecture },
  ),
  withHandlers({
    resume: ({ resumeLecture }) => () => resumeLecture(),
    pause: ({ puseLecture }) => () => puseLecture(),
  }),
)(PlayerDumb)

export default Player
