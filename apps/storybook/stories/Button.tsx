import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StopWatchButton from 'ui/buttons/StopWatchButton';

/**
 * Primary UI component for user interaction
 */

export const Button = ({ label, onClick, backgroundColor, size, ...props }) => {
  // const [isActive, setIsActive] = useState(false)
  // const onclick = () => {
  //   setIsActive(!isActive)
  // }

  return (
    <>
      <StopWatchButton size={size} onClick={onClick}>
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
  );
};


Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'w-20 h-20',
  onClick: undefined
};
