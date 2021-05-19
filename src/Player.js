import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import styled from 'styled-components'

Player.propTypes = {
  onMinus: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number,
}

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <Wrapper>
      <div>{name}</div>
      <Button onClick={onMinus}>-</Button>
      <div>{score}</div>
      <Button onClick={onPlus}>+</Button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-self: center;

  div {
    padding: 20px;
  }
`
