import React from 'React'
import * as R from 'ramda'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getLectureList } from '../../modules/lectures'
import LectureItem from './LectureItem'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background: #1f242b;
`

const Title = styled.Text`
  margin-bottom: 25px;
  font-size: 32px;
  color: #f7f7f7;
`

const LecturesDumb = ({ lectures }) =>
  console.log(lectures, 'lectures') || (
    <Container>
      <Title>Лекции</Title>
      {lectures.map((lecture, index) => (
        <LectureItem key={index} lecture={lecture} />
      ))}
    </Container>
  )

const Lectures = R.compose(
  connect(
    R.applySpec({
      lectures: getLectureList,
    }),
    {},
  ),
)(LecturesDumb)

export default Lectures
