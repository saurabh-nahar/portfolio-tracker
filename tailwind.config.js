/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Green Screen': ['Green Screen', 'sans-serif'],
    }
  },
  plugins: [ ],
};
