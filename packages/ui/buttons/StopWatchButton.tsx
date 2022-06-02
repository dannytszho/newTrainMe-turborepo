import React from 'react'

const StopwatchButon = ({
  onClick,
  children,
  size
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
  size: string
}) => {
  return (
    <button
      className={`m-6 ${size} justify-center rounded-full border border-blue-200 py-1 text-2xl`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}
export default StopwatchButon