import React from 'react'
import { connect } from 'react-redux'
import * as R from 'ramda'
import Slider from '@react-native-community/slider'
import styled from 'styled-components'
import { withHandlers } from 'recompose'
import { puseLecture, resumeLecture } from '../../modules/player'
import { AudioService } from '../../services'

const Container = styled(Slider)`
  width: 200px;
  height: 40px;
`

const TrackLineDumb = ({
  value,
  onValueChange,
  onSlidingStart,
  onSlidingComplete,
}) => (
  <Container
    onSlidingStart={onSlidingStart}
    onSlidingComplete={onSlidingComplete}
    value={value}
    minimumValue={0}
    maximumValue={1}
    minimumTrackTintColor="#FFFFFF"
    maximumTrackTintColor="#000000"
  />
)

const TrackLine = R.compose(
  connect(
    null,
    {
      puseLecture,
      resumeLecture,
    },
  ),
  withHandlers({
    onSlidingStart: ({ puseLecture }) => () => puseLecture(),
    onSlidingComplete: ({ changeTime, resumeLecture, duration }) => value => {
      const time = value * duration
      AudioService.seek(time)
      changeTime(time)
      resumeLecture()
    },
  }),
)(TrackLineDumb)

export default TrackLine
