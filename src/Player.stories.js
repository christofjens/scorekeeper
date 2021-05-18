import React from 'react'
import Player from './Player'

export default {
  title: 'Player',
  component: Player,
}

const Template = args => <Player {...args} />
export const DefaultPlayer = Template.bind({})
DefaultPlayer.args = {
  name: 'James Bond',
  score: 0,
}

export const ScoringPlayer = Template.bind({})
ScoringPlayer.args = {
  name: 'Winner Bond',
  score: 40,
}
