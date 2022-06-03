import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { StopWatchButtonS } from './StopWatchButtonS'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Train Me Design System/Buttons/StopWatchButton',
  component: StopWatchButtonS,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: 'clicked' },
    size: { options: ['w-14 h-14', 'w-20 h-20', 'w-32 h-32'] },
    borderColor: { control: 'color' },
    borderSize: { options: ['2px', '5px', '8px'], control: 'radio' },
    label: { control: { disable: true } },
    // labela: { control: { type: 'text'} }
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const StopwatchButton = args => {
  const [isActive, setIsActive] = useState(args.isActive ?? '')

  return (
    <StopWatchButtonS
      {...args}
      onClick={(...params) => {
        args.onClick(...params)
        setIsActive(!isActive)
      }}
      label={isActive ? 'Pause' : 'Start'}
    />
  )
}

// const Template = (args) => <StopwatchButton {...args} />;
StopwatchButton.args = {}
