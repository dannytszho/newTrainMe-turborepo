module.exports = {
  content: ['./**/*.{js,ts,jsx,tsx}', '../../packages/ui/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        fascinate: ['fascinate', 'regular'],
        notoSans: ['notoSans', 'thinItalic'],
        titilliumWeb: ['titilliumWeb', 'light'],
      },
    },
  },
  plugins: [],
}
