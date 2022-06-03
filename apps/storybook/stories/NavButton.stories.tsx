import React from 'react'
import { NavButtonS } from './NavButtonS'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Train Me Design System/Buttons/NavButton',
  component: NavButtonS,
  argTypes: {
    size: { options: ['xSmall', 'small', 'medium', 'large', 'xLarge'] },
    label: { control: { type: 'text' } },
    backgroundColor: { control: 'color' },
  },
}

const NavButton = args => {
  return <NavButtonS {...args} />
}

export const Primary = NavButton.bind({})

Primary.args = {
  label: 'YOLO',
  size: 'medium',
  backgroundColor: '#60A5FA',
}

export const Secondary = NavButton.bind({})

Secondary.args = {
  label: "Don't repeat yourself",
  size: 'xLarge',
  backgroundColor: '#FA466F',
}
