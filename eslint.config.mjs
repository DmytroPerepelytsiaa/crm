// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
      },
      singleline: {
        delimiter: 'semi',
      },
    }],
    '@stylistic/no-trailing-spaces': 'off',
  },
});
