/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tiled-avatar': "url('./components/images/CBPBackgroundTiled.png')",
      },
      backgroundSize: {
        'small': '500px',
      },
      transform: {
        'preserve-3d': 'preserve-3d',
      },
      fontFamily: {
        michroma: ['Michroma', 'sans-serif'], // Add Michroma font
        sarpanch: ['Sarpanch', 'sans-serif'], // Add Sarpanch font
      },
    },
  },
  plugins: [],
}

