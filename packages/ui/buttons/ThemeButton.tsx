import React from 'react'

const ThemeButton = ({
  size,
  children,
  onClick,
}: {
  size: string
  children: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <button
      className={`rounded-full ${size} bg-black text-black drop-shadow-xl dark:bg-white`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default ThemeButton
