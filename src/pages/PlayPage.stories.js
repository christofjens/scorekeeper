import React from 'react'
import PlayPage from './PlayPage'

export default {
  title: 'Pages/PlayPage',
  component: PlayPage,
}

const Template = args => <PlayPage {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'PlayPage',
}
