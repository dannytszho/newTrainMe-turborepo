import useTheme from '../hooks/useTheme'

const ThemeButton = () => {
  const [setTheme, colorTheme] = useTheme()
  return (
    <button
      className="h-6 w-6 rounded-full bg-black text-black drop-shadow-xl dark:bg-white"
      type="button"
      onClick={() => setTheme(colorTheme)}
    >
      {colorTheme === 'light' ? '' : ''}
    </button>
  )
}
export default ThemeButton
