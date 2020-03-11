module.exports = {
  theme: {
    extend: {
      colors: {
        //for background
        'app-gray-light': "#F5F6FA",
        //for article excerpt
        'app-gray': "#9798A7",
        //for article title
        'app-indigo': '#484987',
        //for the line before "lire plus"
        'app-turqoise': '#4DF0E0'
      },
      borderRadius : {
        "app": "30px"
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
