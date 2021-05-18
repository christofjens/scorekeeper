import React from 'react'
import './Player.css'
import PropTypes from 'prop-types'
import Button from './Button'

Player.propTypes = {
  onMinus: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number,
}

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <section className="Player">
      <div className="Player__textbox flex1">{name}</div>
      <Button className="flex2" onClick={onMinus}>
        -
      </Button>
      <div className="Player__textbox flex2">{score}</div>
      <Button className="flex2" onClick={onPlus}>
        +
      </Button>
    </section>
  )
}
