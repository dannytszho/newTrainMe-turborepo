import React from 'react'
import { PrevMonthIconS } from './ChangeMonthIconS'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Train Me Design System/Buttons/ChangeMonthButton/PreviousMonthButton',
  component: PrevMonthIconS,
  argTypes: {
    onClick: { action: 'Changed to previous month' },
  },
}

export const PreviousMonthButton = args => {
  return (
    <PrevMonthIconS
      {...args}
      onClick={(...params) => {
        args.onClick(...params)
      }}
    />
  )
}
