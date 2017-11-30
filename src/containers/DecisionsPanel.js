import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { setChimsterAnimation } from '../actions/chimsterActions'

import Button from '../components/Button'

const Container = styled.div`
  display: flex;
`

class DecisionsPanel extends React.Component {
  static propTypes = {
    setChimsterAnimation: propTypes.func
  }

  render() {
    const { setChimsterAnimation } = this.props
    return (
      <Container>
        <Button type='dead' handleButtonClick={setChimsterAnimation}>Dead</Button>
        <Button type='hang' handleButtonClick={setChimsterAnimation}>Hang</Button>
        <Button type='run' handleButtonClick={setChimsterAnimation}>Run</Button>
      </Container>
    )
  }
}

export default connect(null, {
  setChimsterAnimation
})(DecisionsPanel)
