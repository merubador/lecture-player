import React from 'react'
import * as R from 'ramda'
import Video from 'react-native-video'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  getCurrentLecture,
  playLecture,
  getPlayerStatus,
  puseLecture,
  resumeLecture,
  getIsAudio,
} from '../../modules/player'
import { playIcon, pauseIcon, audioIcon } from '../../assets'
import { withHandlers, withStateHandlers } from 'recompose'
import { TrackLine } from '../components'
import { AudioService } from '../../services'

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

const PlayIcon = styled.Image`
  width: 100px;
  height: 100px;
`

const Button = styled.TouchableOpacity``

const VideoPlayer = styled(Video)`
  width: 100%;
  height: 300px;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
`

const AudioIcon = styled.Image.attrs({
  source: audioIcon,
})`
  width: 256px;
  height: 256px;
`

const Footer = styled.View`
  flex-direction: column;
  align-items: center;
`

const PlayerDumb = ({
  resume,
  pause,
  playerStatus,
  isAudio,
  onProgress,
  currentTime,
  changeTime,
  currentLecture: { name, uri, duration } = {},
}) => (
  <Container>
    <Title>{name}</Title>
    <VideoPlayer
      ref={AudioService.setPlayerRef}
      visible={!isAudio}
      source={{ uri }}
      paused={playerStatus === 'stop'}
      onProgress={onProgress}
    />
    {isAudio && <AudioIcon />}
    <Footer>
      <Button onPress={playerStatus === 'playing' ? pause : resume}>
        <PlayIcon source={playerStatus === 'playing' ? pauseIcon : playIcon} />
      </Button>
      <TrackLine
        value={currentTime / duration}
        changeTime={changeTime}
        duration={duration}
      />
    </Footer>
  </Container>
)

const Player = R.compose(
  connect(
    R.applySpec({
      currentLecture: getCurrentLecture,
      playerStatus: getPlayerStatus,
      isAudio: getIsAudio,
    }),
    { playLecture, puseLecture, resumeLecture },
  ),
  withHandlers({
    resume: ({ resumeLecture }) => () => resumeLecture(),
    pause: ({ puseLecture }) => () => puseLecture(),
  }),
  withStateHandlers(
    { currentTime: 0 },
    {
      changeTime: (_, { currentLecture: { duration } }) => value => ({
        currentTime: value,
      }),
      onProgress: ({ currentTime }) => ({ currentTime: value }) => {
        if (value - currentTime > 1) {
          return { currentTime: value }
        }
      },
    },
  ),
)(PlayerDumb)

export default Player
