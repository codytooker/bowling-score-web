/* eslint-disable */
const purgecss = require('@fullhuman/postcss-purgecss');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('tailwindcss')('./tailwind.js'),
    require('postcss-nested')(),
    require('autoprefixer')(),
    process.env.NODE_ENV === "production" &&  purgecss({
      content: ['./src/**/*.js', './public/**/*.html'],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['js', 'html']
        }
      ],
    }),
  ]
}