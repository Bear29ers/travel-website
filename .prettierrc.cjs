/** @type {import('pretteir').Config} */

const config = {
  printWidth: 120,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  bracketSameLine: true,
  trailingComma: 'es5',
  quoteProps: 'consistent',
  bracketSpacing: true,
  arrowParens: 'always',
  plugins: ['prettier-plugin-tailwindcss'],
};

module.exports = config;
