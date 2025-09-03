import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    parser: '@typescript-eslint/parser',
    plugins: ['prettier', '@typescript-eslint'],
    extends: ['plugin:prettier/recommended'],
    rules: {
      'prettier/prettier': ['off', { tabWidth: 2 }],
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  }),
]

export default eslintConfig
