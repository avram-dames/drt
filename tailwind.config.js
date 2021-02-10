const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#D4A45B',
        'primary-light': "#E3B977",
        'gray': "#827F7C",
        'dark': "1C1812"
      }
    },
    container: {
      center: true,
    },
    fontFamily: {
      mwb : ['Merriweather-Bold', 'serif'],
      mwsb: ['MerriweatherSans-Bold', 'font-sans'],
      mwsr: ['MerriweatherSans-Regular', 'font-sans'],
      mwsl: ['MerriweatherSans-Light', 'font-sans'],
      mvr: ['MuktaVanni-Regular', 'font-sans'],
    },
    backgroundImage: theme => ({
      'hero-image': "url('../images/hian-oliveira-n_L_ppO4QtY-unsplash.jpg')",
      'hero-none': "#FFFFFF"
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
