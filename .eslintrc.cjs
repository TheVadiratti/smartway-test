module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-refresh',
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.app.json',
  },
  rules: {
    'jsx-a11y/no-autofocus': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: 'react-dom',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: '*',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@app/**',
            group: 'internal',
            position: 'after',
          },
        ],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        warnOnUnassignedImports: true,
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': ['warn', { custom: 'ignore' }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['vite.config.ts'],
      },
    ],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
  },
};