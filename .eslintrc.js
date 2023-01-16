module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'next', 'plugin:import/recommended', 'plugin:react/jsx-runtime', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
  globals: {
    React: 'readonly'
  },
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@next/next', 'react', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'import/order': ['warn', {
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true
      }
    }],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'max-lines': ['error', 80],
    '@typescript-eslint/no-use-before-define': 'warn',
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': [1, {
      extensions: ['.tsx']
    }],
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'always']
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    }
  }
};