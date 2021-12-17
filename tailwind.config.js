module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-hero':
          "linear-gradient(rgba(10, 10, 10, 0.6), rgba(0, 0, 0, 0.6)), repeating-linear-gradient(0, transparent, transparent 2px, black 3px, black 3px), url('/light.jpg')",

        'login-hero':
          "linear-gradient(rgba(10, 10, 10, 0.8), rgba(0, 0, 0, 0.8)), repeating-linear-gradient(0, transparent, transparent 2px, black 3px, black 3px), url('/explosion.jpg')",
      },
    },
    fontFamily: {
      specialelite: ['Special Elite'],
      amatic: ['Amatic SC', 'cursive'],
      cinzel: ['Cinzel', 'serif'],
      rajdhani: ['Rajdhani'],
      orbitron: ['Orbitron'],
      mulish: ['Mulish'],
      russo: ['Russo One', 'sans-serif'],
      shadows: ['Shadows Into Light', 'cursive']
    }
  },
  plugins: [],
}