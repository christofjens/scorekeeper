import './PlayerForm.css'
import PropTypes from 'prop-types'

PlayerForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default function PlayerForm({ onSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="PlayerForm">
      <label>
        Add Player:
        <input name="name" type="text" placeholder="Add player name"></input>
      </label>
    </form>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.name
    onSubmit(input.value)
  }
}
