/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'display': ['Fjalla One', 'sans-serif'],
      'body': ['Nunito', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
