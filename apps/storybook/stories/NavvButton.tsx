import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavButton from 'ui/buttons/NavButton';

/**
 * Primary UI component for user interaction
 */

export const NavvButton = ({ label, navButtonSize }) => {
  return (
    <>
      <NavButton href={'/'} size={navButtonSize} description={label} />
      
    </>
  );
};


NavvButton.propTypes = {
  navButtonSize: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
};

NavvButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  navButtonSize: 'w-28 h-8',
};
