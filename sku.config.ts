import type { SkuConfig } from 'sku';

// TODO: This is included from other package's Sku config which doesn't seem
// to work with TypeScript
// @ts-ignore
import { ScoobieWebpackPlugin, merge } from './webpack';

const config: SkuConfig = {
  orderImports: true,
  rootResolution: false,
  srcPaths: ['./src', './styles'],
  storybookAddons: ['@storybook/addon-essentials'],

  dangerouslySetESLintConfig: (skuConfig) => ({
    ...skuConfig,
    overrides: [
      ...(skuConfig.overrides ?? []),
      {
        files: [
          // sku configuration
          './sku.config.ts',
          // External type declarations
          '*.d.ts',
          // Storybook stories
          '*.docs.tsx',
          '*.stories.tsx',
        ],
        rules: {
          'import/no-default-export': 'off',
        },
      },
    ],
    rules: {
      ...skuConfig.rules,
      // https://basarat.gitbook.io/typescript/main-1/defaultisbad
      'import/no-default-export': 'error',
      'sort-imports': ['error', { ignoreDeclarationSort: true }],
    },
  }),
  dangerouslySetWebpackConfig: (skuConfig) =>
    merge(skuConfig, {
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
