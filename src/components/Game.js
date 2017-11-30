import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Chimster from '../containers/Chimster'
import DecisionsPanel from '../containers/DecisionsPanel'

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`

class Game extends React.Component {
  componentDidMount() {
    this.props.dispatch({ type: 'PLAY_SOUND', payload: { filename: 'sound-sample' }})
  }
  render() {
    return (
      <Screen>
        <Chimster />
        <DecisionsPanel />
      </Screen>
    )
  }
}

export default connect()(Game)
