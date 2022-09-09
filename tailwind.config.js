/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  content: [],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1080px'
      }
    },
    extend: {
      fontFamily: {
        'sans': ["Patrick Hand", "Arial", "sans-serif"],
      }
    },
  },
  plugins: [
    
  ],
}
