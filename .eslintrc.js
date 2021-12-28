module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['!.*.js', '!.storybook'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['tsx'] }],
  },
  overrides: [
    {
      files: ['.storybook/*.js'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
      },
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
