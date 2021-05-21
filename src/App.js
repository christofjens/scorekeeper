import { useState } from 'react'
import styled from 'styled-components'
import Navigation from './components/Navigation'
import CreatePage from './pages/CreatePage'
import GamePage from './pages/GamePage'
import HistoryPage from './pages/HistoryPage'

export default function App() {
  const [currentPageId, setCurrentPageId] = useState('create')
  const [history, setHistory] = useState([])
  const [currentGame, setCurrentGame] = useState({})
  const { players, nameOfGame } = currentGame
  const onNavigate = setCurrentPageId

  return (
    <AppGrid>
      {currentPageId === 'create' && (
        <CreatePage onNavigate={setCurrentPageId} onSubmit={handleSubmit} />
      )}
      {currentPageId === 'game' && (
        <GamePage
          onResetScores={resetScores}
          onEndGame={handleEndGame}
          onPlayerUpdate={updateScore}
          nameOfGame={nameOfGame}
          players={players}
        />
      )}
      {currentPageId === 'history' && (
        <HistoryPage games={history} onNavigate={setCurrentPageId} />
      )}
      <Navigation
        onNavigate={onNavigate}
        pages={[
          { title: 'Create', id: 'create' },
          { title: 'History', id: 'history' },
        ]}
      />
    </AppGrid>
  )

  function handleSubmit(game) {
    setCurrentGame(game)
    setCurrentPageId('game')
  }

  function handleEndGame() {
    setCurrentPageId('history')
    setHistory([currentGame, ...history])
    setCurrentGame({})
  }

  function resetScores() {
    setCurrentGame({
      ...currentGame,
      players: players.map(player => ({ ...player, score: 0 })),
    })
  }

  function updateScore(index, value) {
    const playerToUpdate = players[index]
    const updatedGame = {
      ...currentGame,
      players: [
        ...players.slice(0, index),
        { ...playerToUpdate, score: playerToUpdate.score + value },
        ...players.slice(index + 1),
      ],
    }

    setCurrentGame(updatedGame)
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto min-content;
  padding: 12px;
  gap: 20px;
`
