/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#c292c9',
        'custom-green': '#95efc3',
      },
    },
  },
  plugins: [],
}