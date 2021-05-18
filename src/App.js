import './App.css'
import Player from './Player'
import Button from './Button'
import PlayerForm from './PlayerForm'
import { useState } from 'react'

function App() {
  const [players, setPlayers] = useState([
    { name: 'Mary Jane', score: 32 },
    { name: 'Peter Parker', score: 30 },
  ])

  return (
    <div className="App">
      <PlayerForm onSubmit={createPlayer}></PlayerForm>
      <ul className="App__player-list">
        {players.map((player, index) => (
          <li>
            <Player
              onMinus={() => updateScore(index, -1)}
              onPlus={() => updateScore(index, 1)}
              key={player.name}
              name={player.name}
              score={player.score}
            />
          </li>
        ))}
      </ul>
      <Button onClick={resetScores}>Reset Scores</Button>
      <Button onClick={resetAll}>Reset All</Button>
    </div>
  )

  function resetAll() {
    setPlayers([])
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function updateScore(index, value) {
    const playerToUpdate = players[index]
    setPlayers(players => [
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + value },
      ...players.slice(index + 1),
    ])
  }

  function createPlayer(name) {
    setPlayers([...players, { name, score: 0 }])
  }
}
export default App
