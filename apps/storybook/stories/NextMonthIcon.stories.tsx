import React from 'react'
import { NextMonthIconS } from './ChangeMonthIconS'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Train Me Design System/Buttons/ChangeMonthButton/NextMonthButton',
  component: NextMonthIconS,
  argTypes: {
    onClick: { action: 'Changed to Next month' },
  },
}

export const NextMonthButton = args => {
  return (
    <NextMonthIconS
      {...args}
      onClick={(...params) => {
        args.onClick(...params)
      }}
    />
  )
}
