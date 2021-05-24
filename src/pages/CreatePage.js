import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import LabeledInput from '../components/LabeledInput'

CreatePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function CreatePage({ onSubmit }) {
  return (
    <Grid>
      <Form aria-label="Create Game" onSubmit={handleSubmit}>
        <LabeledInput
          label="Name of Game"
          name="name"
          placeholder="e.g. Carcassonne"
        />
        <LabeledInput
          label="Names of Players"
          name="players"
          placeholder="e.g. Peter, Paul, Mary"
        />
        <Button>Create Game</Button>
      </Form>
    </Grid>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const nameInput = form.elements.name
    const playersInput = form.elements.players
    const nameOfGame = nameInput.value
    const players = playersInput.value
      .split(',')
      .map(name => ({ name: name.trim(), score: 0 }))

    const game = {
      nameOfGame,
      players,
    }

    onSubmit(game)
  }
}

const Grid = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 20px;
`

const Form = styled.form`
  display: grid;
  padding: 20px;
  gap: 12px;
  label {
    display: grid;
    gap: 4px;
  }
  input {
    padding: 4px;
  }
`
