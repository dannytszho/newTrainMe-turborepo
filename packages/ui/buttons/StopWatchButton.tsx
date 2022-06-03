import React from 'react'

const StopwatchButon = ({
  onClick,
  children,
  size,
  borderColor,
  borderSize,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
  size: string
  borderColor: string
  borderSize: string
}) => {
  return (
    <button
      type="button"
      className={`m-6 ${size} justify-center rounded-full py-1 text-2xl`}
      onClick={onClick}
      style={{ border: `${borderSize} solid ${borderColor}` }}
    >
      {children}
    </button>
  )
}
export default StopwatchButon
