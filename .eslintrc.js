module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: { node: true },
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  overrides: [{
    files: ['*.ts'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': ['error', {ignoreRestSiblings: true}]
    }
  }],
};
