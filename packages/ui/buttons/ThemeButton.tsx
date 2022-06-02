import useTheme from '../hooks/useTheme'
import React from 'react'

const ThemeButton = ({ size }: { size: string }) => {
  const [setTheme, colorTheme] = useTheme()
  return (
    <button
      className={`rounded-full ${size} bg-black text-black drop-shadow-xl dark:bg-white`}
      type="button"
      onClick={() => setTheme(colorTheme)}
    >
      {colorTheme === 'light' ? '' : ''}
    </button>
  )
}
export default ThemeButton
