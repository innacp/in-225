import antfu from '@antfu/eslint-config';

export default antfu({
  react: true,
  stylistic: {
    semi: true,
  },
  rules: {
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'off',
    'object-curly-newline': ['error', {
      multiline: true,
      consistent: true,
    }],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
  },
});
