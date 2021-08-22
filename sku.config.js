const { ScoobieWebpackPlugin, merge } = require('./webpack');

module.exports = {
  orderImports: true,
  rootResolution: false,
  srcPaths: ['./src', './styles'],
  storybookAddons: ['@storybook/addon-essentials'],

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
  dangerouslySetWebpackConfig: (config) =>
    merge(config, {
      plugins: [
        new ScoobieWebpackPlugin({
          mermaid: {
            rootDir: __dirname,
          },
        }),
      ],
    }),
};
