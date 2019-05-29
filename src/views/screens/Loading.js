import React from 'React'
import * as R from 'ramda'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { lifecycle } from 'recompose'
import { fetchLecturesRequest } from '../../modules/lectures'
import { Preloader } from '../components'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const LoadingDumb = () => (
  <Container>
    <Preloader />
  </Container>
)

const Loading = R.compose(
  connect(
    null,
    { fetchLecturesRequest },
  ),
  lifecycle({
    componentDidMount() {
      const { fetchLecturesRequest } = this.props

      fetchLecturesRequest()
    },
  }),
)(LoadingDumb)

export default Loading
