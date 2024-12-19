/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'native': "#1A1C46",
        'dusky-purple': "#CACBFF",
        'special-blue': "#5AABFF",
        'mustard': '#EA9C14'
      }
    },
  },
  plugins: [],
}