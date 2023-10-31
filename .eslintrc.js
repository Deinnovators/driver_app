module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        bracketSameLine: true,
        singleQuote: true,
        jsxSingleQuote: false,
        trailingComma: 'all',
        arrowParens: 'avoid',
      },
    ],
  },
};
