/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./app/components/**/*.{js,jsx,ts,tsx}",
    "./app/models/**/*.{js,jsx,ts,tsx}",
    "./app/screens/**/*.{js,jsx,ts,tsx}",
    "./app/services/**/*.{js,jsx,ts,tsx}",
    "./app/utils/**/*.{js,jsx,ts,tsx}",
    "./app/assets/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
