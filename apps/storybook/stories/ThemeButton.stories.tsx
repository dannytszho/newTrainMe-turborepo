import React from 'react'
import { ThemeButtonS } from './ThemeButtonS'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Train Me Design System/Buttons/ThemeButton',
  component: ThemeButtonS,
  argTypes: {
    size: { options: ['w-6 h-6', 'w-10 h-10', 'w-16 h-16'] },
    label: { control: { type: 'text' } },
  },
}

const ThemeButton = args => {
  return <ThemeButtonS {...args} />
}

export const Primary = ThemeButton.bind({})

Primary.args = {
  size: 'w-6 h-6',
}
