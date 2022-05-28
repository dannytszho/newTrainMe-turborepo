module.exports = {
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    '../storybook/stories/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      Animation: {
        textclip: 'textclip 2s linear infinite',
        show: 'show 4s linear infinite'
      },
      keyframes: {
        textclip: {
          '0%, 100%': {
            'background-size':'200% 200%',
             'background-position': 'left center'
         },
         '50%': {
            'background-size':'200% 200%',
             'background-position': 'right center'
         }
        },
        show: {
          '0%': {
            'margin-top':'0px'
          },
          '5% ': {
            'margin-top':'0px'
          },
          '33%': {
            'margin-top':'0px'
          },
          '38%': {
            'margin-top':'-90px'
          },
          '66%': {
            'margin-top':'0px'
          },
          '71%': {
            'margin-top':'0px'
          },
          '99.99%': {
            'margin-top':'0px'
          },
          '100%': {
            'margin-top':'-270px'
          }
        }
      }
    },
  },
  plugins: [],
}