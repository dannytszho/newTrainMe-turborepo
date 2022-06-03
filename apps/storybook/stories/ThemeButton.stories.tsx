import React from 'react'
import { ThemeButtonS } from './ThemeButtonS'
import useTheme from 'ui/hooks/useTheme'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Train Me Design System/Buttons/ThemeButton',
  component: ThemeButtonS,
  argTypes: {
    size: { options: ['w-6 h-6', 'w-10 h-10', 'w-16 h-16'] },
    onClick: { action: 'Theme Changed' },
  },
}

const ThemeButton = args => {
  const [setTheme, colorTheme] = useTheme()
  return (
    <ThemeButtonS
      {...args}
      onClick={(...params) => {
        args.onClick(...params)
        setTheme(colorTheme)
      }}
    >
      {colorTheme === 'light' ? '' : ''}
    </ThemeButtonS>
  )
}

export const Primary = ThemeButton.bind({})

Primary.args = {
  size: 'w-6 h-6',
}

export const Secondary = ThemeButton.bind({})

Secondary.args = {
  size: 'w-16 h-16',
}
