import React from 'react';
import propTypes from 'prop-types'
import styled from 'styled-components';

const Box = styled.div`
  background-color: #E1E1E7;
  color: #7A7A8B;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #7A7A8B;
  border-radius: 10px;
  margin: 20px;
`

export default class Button extends React.PureComponent {
  static propTypes = {
    children: propTypes.node,
    handleButtonClick: propTypes.func,
    type: propTypes.string
  }
  handleButtonClick = () => {
    this.props.handleButtonClick(this.props.type)
  }
  render() {
    return <Box onClick={this.handleButtonClick}>{this.props.children}</Box>
  }
}
