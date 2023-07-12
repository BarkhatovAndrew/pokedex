/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    'plugin:perfectionist/recommended-line-length',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'perfectionist'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
        groups: [
          'type',
          'react',
          'nanostores',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'side-effect',
          'style',
          'object',
          'unknown',
        ],
        'custom-groups': {
          value: {
            react: ['react', 'react-*'],
            nanostores: '@nanostores/**',
          },
          type: {
            react: 'react',
          },
        },
        'newlines-between': 'always',
        'internal-pattern': [
          '@/components/**',
          '@/stores/**',
          '@/pages/**',
          '@/lib/**',
        ],
        'read-tsconfig': false,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
