/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#f8f1e9',
          500: '#8c5c2e',
          700: '#5c3d1f',
          900: '#2c2118',
        },
        gold: '#d4af37',
      },
    },
  },
  plugins: [],
}