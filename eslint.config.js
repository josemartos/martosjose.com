const nextConfig = require('eslint-config-next/core-web-vitals');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  ...nextConfig,
  prettierConfig,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      'react/display-name': 'off',
      '@next/next/no-page-custom-font': 'off',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton'],
        },
      ],
    },
  },
];
