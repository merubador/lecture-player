import React from 'react'
import * as R from 'ramda'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getLectureList } from '../../modules/lectures'
import LectureItem from './LectureItem'

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 15px 0;
  background: #1f242b;
`

const LecturesDumb = ({ lectures }) => (
  <Container>
    <FlatList
      data={lectures}
      renderItem={({ item }) => <LectureItem lecture={item} />}
    />
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
