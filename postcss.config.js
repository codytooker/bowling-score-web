module.exports = {
  plugins: [
    require('postcss-import')(),
    require('tailwindcss')('./src/tailwind.js'),
    require('postcss-nested')(),
    require('autoprefixer')(),
  ],
};
