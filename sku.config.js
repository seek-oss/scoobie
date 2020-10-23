const { dangerouslySetWebpackConfig } = require('./webpack');

module.exports = {
  orderImports: true,
  rootResolution: false,

  dangerouslySetESLintConfig: (skuEslintConfig) => ({
    ...skuEslintConfig,

    rules: {
      ...skuEslintConfig.rules,

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
