/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        'grape-nuts':["Grape", 'sans-serif'],
      },
      colors: {
        padrao: '#5F7C60',
        green1: '#219625',
        green2: '#60866B',
      }
    },
  },
  plugins: [],
}