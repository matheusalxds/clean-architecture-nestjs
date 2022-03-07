module.exports = {
  parserOptions: {
    project: './tsconfig.json'
  },
  extends: 'standard-with-typescript',
  plugins: ['unused-imports'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/return-await': 'off',
    'import/export': 'off',
    'unused-imports/no-unused-imports': 'error'
  }
}
