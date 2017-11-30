import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';

import logo from 'images/logo.svg';

const AppContainer = styled.div`
  text-align: center;
`

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`

const Header = styled.h1`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const Title = styled.div`
  font-size: 1.5em;
`

const Intro = styled.p`
  font-size: large;
`

const TechContainer = styled.div`
  display: flex;
  justify-content: center;
`

const TechList = styled.ul`
  text-align: initial;
`

const Tech = styled.li`
  color: green;
  padding: 5px 0;
`

export default class Game extends PureComponent {
  render() {
    return (
      <AppContainer>
        <Header>
          <Logo src={logo} />
          <Title>Custom React Skel</Title>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
        <TechContainer>
          <TechList>
            <Tech>Webpack</Tech>
            <Tech>React</Tech>
            <Tech>Styled Components</Tech>
            <Tech>Flow</Tech>
            <Tech>Redux</Tech>
          </TechList>
        </TechContainer>
      </AppContainer>
    )
  }
}
