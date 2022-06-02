import React from 'react'
import PropTypes from 'prop-types'
import ThemeButton from 'ui/buttons/ThemeButton'

export const ThemeButtonS = ({ size }) => {
  return (
    <>
      <ThemeButton size={size} />
    </>
  )
}

ThemeButtonS.propTypes = {
  size: PropTypes.string,
}

ThemeButtonS.defaultProps = {
  size: 'w-6 h-6',
}
