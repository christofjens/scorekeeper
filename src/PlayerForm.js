import PropTypes from 'prop-types'
import styled from 'styled-components'

PlayerForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default function PlayerForm({ onSubmit }) {
  return (
    <FormWrapper onSubmit={handleSubmit} className="PlayerForm">
      <label>
        Add Player:{' '}
        <input name="name" type="text" placeholder="Add player name"></input>
      </label>
    </FormWrapper>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.name
    onSubmit(input.value)
  }
}

const FormWrapper = styled.form`
  padding: 7px;
  height: 40px;
  text-align: center;

  input {
    padding: 7px;
    margin: 0;
    border: 1px solid #999;
    border-radius: 7px;
    font-size: 1rem;
  }
`
