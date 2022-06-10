module.exports = {
  content: ['./**/*.{js,ts,jsx,tsx}', '../../packages/ui/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        notoSans: ['notoSans', 'thinItalic'],
        titilliumWeb: ['titilliumWeb', 'light'],
      },
    },
  },
  plugins: [],
}
