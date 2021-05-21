import styled from 'styled-components'
import HistoryEntry from '../components/HistoryEntry'
import PropTypes from 'prop-types'

HistoryPage.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      nameOfGame: PropTypes.string,
      players: PropTypes.arrayOf({
        name: PropTypes.string,
        score: PropTypes.string,
      }),
    })
  ),
  onNavigate: PropTypes.func.isRequired,
}

export default function HistoryPage({ games, onNavigate }) {
  return (
    <Grid>
      <div>
        {games.map((game, index) => (
          <HistoryEntry
            key={index}
            nameOfGame={game.nameOfGame}
            players={game.players}
          />
        ))}
      </div>
    </Grid>
  )
}

const Grid = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
`
