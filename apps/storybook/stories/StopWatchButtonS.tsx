import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StopWatchButton from 'ui/buttons/StopWatchButton'

/**
 * Primary UI component for user interaction
 */

export const StopWatchButtonS = ({
  label,
  size,
  onClick,
  borderColor,
  borderSize,
  ...props
}) => {
  // const [isActive, setIsActive] = useState(false)
  // const onclick = () => {
  //   setIsActive(!isActive)
  // }

  return (
    <>
      <StopWatchButton
        size={size}
        borderColor={borderColor}
        borderSize={borderSize}
        onClick={onClick}
      >
        {label}
      </StopWatchButton>

      {/* <button
      className={`m-6 h-20 w-20 justify-center rounded-full bg-[${backgroundColor}] border border-blue-200 py-1 text-2xl`}
      onClick={onClick}
      type="button"
    >
      {label}
      </button> */}
    </>
  )
}

StopWatchButtonS.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.string,
  borderColor: PropTypes.string,
  borderSize: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

StopWatchButtonS.defaultProps = {
  size: 'w-20 h-20',
  primary: false,
  borderColor: null,
  borderSize: '2px',
  onClick: undefined,
}
