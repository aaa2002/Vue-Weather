/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71"
      }
    },
    fontFamily: {
      Monserrat: ["Montserrat, sans-serif"]
    },
    container: {
      padding: "2rem",
      center: true
    },
    screens: {
      small: "650px",
      medium: "1150px"
    }
  },
  plugins: [],
}

