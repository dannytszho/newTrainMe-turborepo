import React from 'react'
import { FontsS } from './FontsS'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Train Me Design System/Styles/Fonts',
  component: FontsS,
}

export const Fonts = args => {
  return <FontsS {...args} />
}

Fonts.args = {}
