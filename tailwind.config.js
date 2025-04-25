/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      transform: {
        'preserve-3d': 'preserve-3d',
      },
    },
  },
  plugins: [],
}

