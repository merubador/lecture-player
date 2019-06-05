import React from 'react'
import * as R from 'ramda'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { playIcon } from '../../assets'
import { playLecture } from '../../modules/player'
import { withHandlers } from 'recompose'

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #3b4451;
  border-style: solid;
`

const Name = styled.Text`
  font-size: 16px;
  color: #f7f7f7;
`

const PlayIcon = styled.Image.attrs({
  source: playIcon,
})`
  width: 35px;
  height: 35px;
`

const Button = styled.TouchableOpacity``

const LectureItemDumb = ({ play, lecture: { name } = {} }) => (
  <Container>
    <Name>{name}</Name>
    <Button onPress={play}>
      <PlayIcon />
    </Button>
  </Container>
)

const LectureItem = R.compose(
  connect(
    null,
    { playLecture },
  ),
  withHandlers({
    play: ({ lecture, playLecture }) => () => playLecture(lecture),
  }),
)(LectureItemDumb)

export default LectureItem
