import React from 'react'
import PropTypes from 'prop-types'
import NavButton from 'ui/buttons/NavButton'

/**
 * Primary UI component for user interaction
 */

export const NavButtonS = ({ label, size, backgroundColor, borderRadius }) => {
  return (
    <>
      <NavButton
        href={'/'}
        size={size}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        description={label}
      />
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
  backgroundColor: PropTypes.string,
}

NavButtonS.defaultProps = {}
