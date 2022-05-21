import React from 'react'

const StopwatchButon = ({
  onClick,
  children,
}: {
  onClick: any
  children: React.ReactNode
}) => {
  return (
    <button
      className="m-6 h-20 w-20 justify-center rounded-full border border-blue-200 py-1 text-2xl"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}
export default StopwatchButon