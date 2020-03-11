// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({

    content: [
      './public/index.html',
      './src/**/*.js',
      './src/**/*.jsx',
    ],
  
    defaultExtractor: content => content.match(/[\w-/:%]+(?<!:)/g) || []
  })
  
  module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      // purgecss will run only when building for production
      // to get rid of all unused css
      ...process.env.NODE_ENV === 'production'
        ? [purgecss]
        : []
    ]
  }