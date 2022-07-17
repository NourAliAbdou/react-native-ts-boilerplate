module.exports = {
  root: true,
  // extends: '@react-native-community',
  extends: [
    '@react-native-community',
    '@react-native-community/eslint-config',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-undef': 1,
        'react-native/no-unused-styles': 'warn',
        'no-multiple-empty-lines': 'error',
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
          },
        ],
        'no-console': 1,
        'react/prop-types': 1,
        'react/prefer-stateless-function': 1,
        'class-methods-use-this': 1,
      },
    },
  ],
};
