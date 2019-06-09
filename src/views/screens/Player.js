import React from 'react'
import * as R from 'ramda'
import moment from 'moment'
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
import { withHandlers, withStateHandlers, withProps } from 'recompose'
import { TrackLine, LectureInfo } from '../components'
import { AudioService } from '../../services'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background: #1f242b;
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

const PlayerControl = styled.View`
  align-items: center;
`

const TrackLineContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`

const Time = styled.Text`
  width: 50px;
  align-items: center;
  font-size: 18px;
  color: #adadad;
`

const PlayerDumb = ({
  resume,
  pause,
  playerStatus,
  isAudio,
  onProgress,
  currentTime,
  changeTime,
  currentLecture: { name, uri, duration, author } = {},
  convertedCurrentTime,
  convertedLectureDuration,
}) => (
  <Container>
    <LectureInfo name={name} author={author} />
    <VideoPlayer
      ref={AudioService.setPlayerRef}
      visible={!isAudio}
      source={{ uri }}
      paused={playerStatus === 'stop'}
      onProgress={onProgress}
    />
    {isAudio && <AudioIcon />}
    <PlayerControl>
      <Button onPress={playerStatus === 'playing' ? pause : resume}>
        <PlayIcon source={playerStatus === 'playing' ? pauseIcon : playIcon} />
      </Button>
      <TrackLineContainer>
        <Time>{convertedCurrentTime}</Time>
        <TrackLine
          value={currentTime / duration}
          changeTime={changeTime}
          duration={duration}
        />
        <Time>{convertedLectureDuration}</Time>
      </TrackLineContainer>
    </PlayerControl>
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
  withProps(
    ({ currentTime, currentLecture: { duration } }) =>
      console.log(currentTime, duration, '<===') || {
        convertedCurrentTime: moment.unix(currentTime).format('mm:ss'),
        convertedLectureDuration: moment.unix(duration).format('mm:ss'),
      },
  ),
)(PlayerDumb)

export default Player
