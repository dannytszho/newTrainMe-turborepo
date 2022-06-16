import React from 'react'
import PropTypes from 'prop-types'
import ThemeButton from 'ui/buttons/ThemeButton'

export const ThemeButtonS = ({
  size,
  onClick,
  children,
}: {
  size: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}) => {
  return (
    <>
      <ThemeButton size={size} onClick={onClick}>
        {children}
      </ThemeButton>
    </>
  )
}

ThemeButtonS.propTypes = {
  size: PropTypes.string,
}

ThemeButtonS.defaultProps = {
  size: 'w-6 h-6',
}
