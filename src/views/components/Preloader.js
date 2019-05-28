import React from 'React'
import styled from 'styled-components'
import { preloader } from '../../assets'

const Container = styled.Image.attrs({
  source: preloader,
})`
  width: 110px;
  height: 110px;
`

const Preloader = ({ className }) => <Container className={className} />

export default Preloader
