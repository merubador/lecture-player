import React from 'react'
import styled from 'styled-components'

const Container = styled.View`
  flex-direction: column;
  align-items: center;
`

const Title = styled.Text`
  font-size: 38px;
  color: #f7f7f7;
  text-align: center;
`

const Author = styled.Text`
  font-size: 24px;
  color: #adadad;
  text-align: center;
`

const LectureInfo = ({ name, author }) => (
  <Container>
    <Title>{name}</Title>
    <Author>{author}</Author>
  </Container>
)

export default LectureInfo
