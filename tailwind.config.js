module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTempateColumns: {
        NavButton: '100px 1fr',
      },
      fontFamily: {
        Montserrat: [`"Montserrat"`],
      },
      keyframes: {
        flash: {
          '0%': {
            transform: 'scale(0.9)',
            opacity: '.15',
          },

          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
      animation: {
        flash: 'flash 1s ease-in-out',
      },
    },
  },
  plugins: [],
}
