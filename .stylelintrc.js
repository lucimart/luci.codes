module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-styled-components',
    'stylelint-a11y/recommended',
  ],
  plugins: ['stylelint-order', 'stylelint-use-logical'],
  customSyntax: 'postcss-scss',
  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'csstools/use-logical': 'always',
  },
};
