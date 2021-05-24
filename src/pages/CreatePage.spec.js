import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CreatePage from './CreatePage'

describe('CreatePage', () => {
  it('contains a form with two inputs and one button', async () => {
    render(<CreatePage onSubmit={jest.fn()} />)

    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()

    const input = screen.getAllByRole('textbox')
    expect(input).toHaveLength(2)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('calls onSubmit with formatted game data', () => {
    const handleSubmit = jest.fn()
    render(<CreatePage onSubmit={handleSubmit} />)

    const expectedGame = {
      nameOfGame: 'Uno',
      players: [
        { name: 'James', score: 0 },
        { name: 'Peter', score: 0 },
      ],
    }

    const nameInput = screen.getByLabelText(/name.*game/i)
    userEvent.type(nameInput, 'Uno')

    const playerInput = screen.getByLabelText(/player.*names/i)
    userEvent.type(playerInput, 'James, Peter')

    const button = screen.getByRole('button', { name: /create/i })
    userEvent.click(button)

    expect(handleSubmit).toHaveBeenCalledWith(expectedGame)
  })
})
