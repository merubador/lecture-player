import React from 'React'
import * as R from 'ramda'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 35px;
`

const Name = styled.Text`
  font-size: 16px;
`

const LectureItemDumb = ({ lecture: { name, uri } = {} }) => (
  <Container>
    <Name>{name}</Name>
  </Container>
)

const LectureItem = R.compose(
  connect(
    null,
    {},
  ),
)(LectureItemDumb)

export default LectureItem
