/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */

const config = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jsx-a11y/recommended',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['import', 'unused-imports', 'jsx-a11y', 'tailwindcss', '@typescript-eslint'],
  rules: {
    /* eslint */
    'no-unused-vars': 'off',
    'arrow-body-style': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: 'DO NOT DECLARE ENUM',
      },
    ],
    /* typescript */
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': false,
        'ts-nocheck': false,
        'ts-check': false,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    /* react */
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unknown-property': ['error', { ignore: ['space'] }],
    /* import */
    'unused-imports/no-unused-imports': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'newlines-between': 'always',
        'pathGroups': [
          {
            pattern: '{react,react-dom/**,react-router-dom}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/app/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/components/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/stores/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/providers/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/hooks/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/constants/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/libs/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/utils/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
        ],
        'alphabetize': {
          order: 'asc',
        },
      },
    ],
    /* jsx-a11y */
    'jsx-a11y/label-has-associated-control': 'off',
    /* tailwindcss */
    'tailwindcss/no-custom-classname': [
      'warn',
      {
        config: 'tailwind.config.cjs',
        cssFiles: ['**/*.scss', '!**/node_modules', '!**/.*', '!**/dist', '!**/build'],
      },
    ],
    'tailwindcss/classnames-order': 'off',
  },
};

module.exports = config;
