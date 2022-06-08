import React from 'react'
import { ColorsS } from './ColorsS'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Train Me Design System/Styles/Colors',
  component: ColorsS,
}

export const Colors = args => {
  return <ColorsS {...args} />
}
