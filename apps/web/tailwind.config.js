module.exports = {
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    '../storybook/stories/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        notoSans: ['notoSans'],
        titilliumWeb: ['titilliumWeb'],
        spline: ['Spline'],
      },
      Animation: {
        textclip: 'textclip 2s linear infinite',
        show: 'show 4s linear infinite',
        shadows: 'shawdows 1.2s ease-in infinite',
        move: 'move 1.2s ease-in-out infinite',
      },
      keyframes: {
        textclip: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        show: {
          '0%': {
            'margin-top': '0px',
          },
          '5% ': {
            'margin-top': '0px',
          },
          '33%': {
            'margin-top': '0px',
          },
          '38%': {
            'margin-top': '-60px',
          },
          '66%': {
            'margin-top': '-60px',
          },
          '71%': {
            'margin-top': '0px',
          },
          '100%': {
            'margin-top': '0px',
          },
        },
        shawdows: {
          '0%': {
            'text-shadow': 'none',
          },
          '10%': {
            'text-shadow': '3px 3px 0 text-[#f49b90]',
          },
          '20%': {
            'text-shadow': '3px 3px 0 text-[#f49b90], 6px 6px 0 text-[#f28b7d]',
          },
          '30%': {
            'text-shadow':
              '3px 3px 0 text-[#f49b90], 6px 6px 0 text-[#f28b7d] , 9px 9px text-[#f07a6a]',
          },
          '40%': {
            'text-shadow':
              '3px 3px 0 text-[#f49b90], 6px 6px 0 text-[#f28b7d], 9px 9px text-[#f07a6a], 12px 12px 0 text-[#ee6352]',
          },
          '50%': {
            'text-shadow':
              '3px 3px 0 text-[#f49b90], 6px 6px 0 text-[#f28b7d], 9px 9px text-[#f07a6a], 12px 12px 0 text-[#ee6352]',
          },
          '60%': {
            'text-shadow':
              '3px 3px 0 text-[#f49b90], 6px 6px 0 text-[#f28b7d], 9px 9px text-[#f07a6a], 12px 12px 0 text-[#ee6352]',
          },
          '70%': {
            'text-shadow':
              '3px 3px 0 text-[#f49b90], 6px 6px 0 text-[#f28b7d], 9px 9px text-[#f07a6a]',
          },
          '80%': {
            'text-shadow': '3px 3px 0 text-[#f49b90], 6px 6px 0 text-[#f28b7d]',
          },
          '90%': {
            'text-shadow': '3px 3px 0 text-[#f49b90]',
          },
          '100%': {
            'text-shadow': 'none',
          },
        },
        move: {
          '0%': {
            transform: 'translate(0px, 0px)',
          },
          '40%': {
            transform: 'translate(-12px, -12px)',
          },
          '50%': {
            transform: 'translate(-12px, -12px)',
          },
          '60%': {
            transform: 'translate(-12px, -12px)',
          },
          '100%': {
            transform: 'translate(0px, 0px)',
          },
        },
      },
    },
  },
  plugins: [],
}
