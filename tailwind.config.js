module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTempateColumns: {
        NavButton: '100px 1fr',
      },
      fontFamily: {
        Montserrat: [`"Montserrat"`],
        Roboto: [`Roboto`],
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
      colors: {
        orange: '#f79264',
        'orange-focus': '#F67A41',
        'orange-content': '#30323d',
        blue: '#4082a5',
        'blue-focus': '#326581',
        'blue-content': '#f3fcf0',
        green: '#287a6b',
        'green-focus': '#1b554a',
        'green-content': '#f3fcf0',
        light: '#f3fcf0',
        dark: '#30323d',
      },
      screens: {
        nav: '1210px',
      },
    },
  },
  plugins: [],
}
