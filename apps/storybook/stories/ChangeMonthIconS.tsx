import React from 'react'
import PropTypes from 'prop-types'
import { NextMonthIcon, PrevMonthIcon } from 'ui/buttons/ChangeMonthIcon'

export const PrevMonthIconS = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <PrevMonthIcon previousMonth={onClick} />
    </>
  )
}
PrevMonthIconS.propTypes = {
  onClick: PropTypes.func,
}

PrevMonthIconS.defaultProps = {
  onClick: undefined,
}

export const NextMonthIconS = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <NextMonthIcon nextMonth={onClick} />
    </>
  )
}

NextMonthIconS.propTypes = {
  onClick: PropTypes.func,
}

NextMonthIconS.defaultProps = {
  onClick: undefined,
}
