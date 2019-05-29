import React from 'React'
import * as R from 'ramda'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { play } from '../../assets'

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
  source: play,
})`
  width: 44px;
  height: 44px;
`

const LectureItemDumb = ({ lecture: { name, uri } = {} }) => (
  <Container>
    <Name>{name}</Name>
    <PlayIcon />
  </Container>
)

const LectureItem = R.compose(
  connect(
    null,
    {},
  ),
)(LectureItemDumb)

export default LectureItem
