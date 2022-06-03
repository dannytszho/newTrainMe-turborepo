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
  size: 'small' | 'medium' | 'large'
  borderColor: string
  borderSize: string
}) => {
  const sizeMap = {
    small: 'w-16 h-16',
    medium: 'w-20 h-20',
    large: 'w-32 h-32',
  }
  return (
    <button
      type="button"
      className={[
        'm-6 justify-center rounded-full py-1 text-2xl',
        `${sizeMap[size]}`,
      ].join(' ')}
      onClick={onClick}
      style={{ border: `${borderSize} solid ${borderColor}` }}
    >
      {children}
    </button>
  )
}
export default StopwatchButon
