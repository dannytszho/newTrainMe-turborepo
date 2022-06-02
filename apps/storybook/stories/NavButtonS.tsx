import React, { useState } from 'react'
import PropTypes from 'prop-types'
import NavButton from 'ui/buttons/NavButton'

/**
 * Primary UI component for user interaction
 */

export const NavButtonS = ({ label, size }) => {
  return (
    <>
      <NavButton href={'/'} size={size} description={label} />
    </>
  )
}

NavButtonS.propTypes = {
  size: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
}

NavButtonS.defaultProps = {
  label: 'hello',
  size: 'w-28 h-8',
}
