/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        'primary': {
          moderateViolet:'hsl(263, 55%, 52%)',
          VeryDarkGrayishBlue:'hsl(217, 19%, 35%)',
          VeryDarkBlackishBlue:'hsl(219, 29%, 14%)',
        },
         'neutral': {
          lightGray:'hsl(0, 0%, 81%)',
          lightGrayishBlue:'hsl(210, 46%, 95%)',
        },

      }
    },
  },
  plugins: [],
}

