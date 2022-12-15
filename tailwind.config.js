module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          // default: '#3699ff',
          1: '#a9a9a9',
        },
        blue: {
          default: '#3a72d6',
        },
        orange: {
          primary: '#ed7a57',
        },
      },
    },
  },
  plugins: [],
};
