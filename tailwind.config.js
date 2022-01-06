module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTempateColumns: {
        NavButton: '100px 1fr',
      },
      fontFamily: {
        Montserrat: [`"Montserrat"`],
      },
    },
  },
  plugins: [],
}
