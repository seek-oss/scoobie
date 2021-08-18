const { dangerouslySetWebpackConfig } = require('./webpack');

module.exports = {
  orderImports: true,
  rootResolution: false,
  srcPaths: ['./src', './styles'],
  storybookAddons: ['@storybook/addon-knobs'],

  dangerouslySetESLintConfig: (config) => ({
    ...config,
    rules: {
      ...config.rules,
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
        },
      ],
    },
  }),
  dangerouslySetWebpackConfig,
};
