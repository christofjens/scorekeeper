import Button from './Button'

describe('Button', () => {
    it('returns a button' () => {
        render(
            <Button /> 
        )
        const buttons = screen.getAllByRole('button')
    })
    const button = screen.getByRole('button')
})