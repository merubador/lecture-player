import React from 'React'
import * as R from 'ramda'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const PlayerDumb = () => <Container />

const Player = R.compose(
  connect(
    null,
    {},
  ),
)(PlayerDumb)

export default Player
