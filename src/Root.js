import React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import store from './modules'

const Block = styled.Text``

const App = () => (
  <>
    <Block>Hello</Block>
  </>
)

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root
