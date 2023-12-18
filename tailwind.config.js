/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./app/core_modules/components/**/*.{js,jsx,ts,tsx}",
    "./app/core_modules/models/**/*.{js,jsx,ts,tsx}",
    "./app/core_modules/screens/**/*.{js,jsx,ts,tsx}",
    "./app/core_modules/services/**/*.{js,jsx,ts,tsx}",
    "./app/core_modules/utils/**/*.{js,jsx,ts,tsx}",
    "./app/assets/**/*.{js,jsx,ts,tsx}",
    "./app/user_input_modules/components/**/*.{js,jsx,ts,tsx}",
    "./app/user_modules/models/**/*.{js,jsx,ts,tsx}",
    "./app/user_modules/services/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dark_main': '#0070AD',
      'light_main': '#12B3DB',
      'orange_accent': '#FF4411',
      'grey_accent': '#686666',
      'red_accent': '#FF0000',
    },
  },
  plugins: [],
}

