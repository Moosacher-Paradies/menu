// const colors = require('tailwindcss/colors')

module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {},
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1024px"
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
