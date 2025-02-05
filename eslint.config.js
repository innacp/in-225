import antfu from '@antfu/eslint-config';

export default antfu({
  react: true,
  stylistic: {
    semi: true,
  },
  rules: {
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'off',
  },
});
