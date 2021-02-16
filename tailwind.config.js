const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '360px',
      },
      colors: {
        'primary-001': "#FFFAF2",
        'primary-50': "#F2E4CF",
        'primary-100': '#F6F0E6',
        'primary-200': '#F6EBDA',
        'primary': '#D4A45B',
        'primary-light': "#E3B977",
        'gray': "#827F7C",
        'dark': "1C1812",
        'pink-001': "#FFF2F8",
        'secondary-100': "#CDE5F7",
        'secondary-200': "#83C5F7",
        'secondary-300': "#70A9D4",
        'secondary-400': "#527C9C",
        'secondary-500': "#405F78",
      },
      spacing: {
        '140': "35rem",
        '156': "39rem",
        '160': "40rem",
        '192': "48rem",
      },
      height: theme => ({
        "screen-adjusted": "calc(100vh - 1.5rem - 43px)", // vh - padding - logo height - gradient
        "full-adjusted": "calc(100% - 2rem)", // vh - padding - logo height - gradient
      }),
      width: {
        'prose': '40ch',
        'icon-md': '4rem',
      },
      maxWidth: {
        'prose': '40ch'
      }, 
      backgroundImage: theme => ({
        'hero-image': "url('../images/hian-oliveira-n_L_ppO4QtY-unsplash.jpg')",
        'clinic-image': "url('../images/clinica.jpg')",
        'hero-none': "#FFFFFF",
      })
    },
    container: {
      center: true,
    },
    fontFamily: {
      mwr : ['Merriweather-Regular', 'serif'],
      mwb : ['Merriweather-Bold', 'serif'],
      mwsb: ['MerriweatherSans-Bold', 'font-sans'],
      mwsr: ['MerriweatherSans-Regular', 'font-sans'],
      mwsl: ['MerriweatherSans-Light', 'font-sans'],
      mvr: ['MuktaVanni-Regular', 'font-sans'],
      mvl: ['MuktaVanni-Light', 'font-sans'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-question-mark'),
  ],
}