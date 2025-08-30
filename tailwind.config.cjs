/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
        dark: '#1e293b',
        light: '#f8fafc'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif']
      }
    }
  },
  plugins: [],
}
