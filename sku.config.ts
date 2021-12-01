import type { SkuConfig } from 'sku';

import { ScoobieWebpackPlugin, merge } from './webpack';

const config: SkuConfig = {
  orderImports: true,
  rootResolution: false,
  srcPaths: ['./src', './styles'],
  storybookAddons: ['@storybook/addon-essentials'],

  dangerouslySetESLintConfig: (prevConfig) => ({
    ...prevConfig,
    rules: {
      ...prevConfig.rules,
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
        },
      ],
    },
  }),
  dangerouslySetWebpackConfig: (prevConfig) =>
    merge(prevConfig, {
      plugins: [
        new ScoobieWebpackPlugin({
          mermaid: {
            rootDir: __dirname,
          },
        }),
      ],
    }),
};

export default config;
