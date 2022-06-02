import React from 'react'
import { NavButtonS } from './NavButtonS'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Train Me Design System/Buttons/NavButton',
  component: NavButtonS,
  argTypes: {
    size: { options: ['w-20 h-6', 'w-28 h-8', 'w-36 h-10'] },
    label: { control: { type: 'text' } },
  },
}

const NavButton = args => {
  return <NavButtonS {...args} />
}

export const Primary = NavButton.bind({})

Primary.args = {
  label: 'YOYO',
  size: 'w-32 h-10',
}
