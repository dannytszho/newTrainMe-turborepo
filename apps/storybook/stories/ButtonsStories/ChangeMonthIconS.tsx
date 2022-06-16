import React from 'react'
import PropTypes from 'prop-types'
import { NextMonthIcon, PrevMonthIcon } from 'ui/buttons/ChangeMonthIcon'

interface Props {
  onClick: () => void
  size: 'small' | 'medium' | 'large'
}

export const PrevMonthIconS = ({ onClick, size }: Props) => {
  return <PrevMonthIcon previousMonth={onClick} size={size} />
}
PrevMonthIconS.propTypes = {
  onClick: PropTypes.func,
}

PrevMonthIconS.defaultProps = {
  onClick: undefined,
}

export const NextMonthIconS = ({ onClick, size }: Props) => {
  return <NextMonthIcon nextMonth={onClick} size={size} />
}

NextMonthIconS.propTypes = {
  onClick: PropTypes.func,
}

NextMonthIconS.defaultProps = {
  onClick: undefined,
}
