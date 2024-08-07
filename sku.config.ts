import type { SkuConfig } from 'sku';

// TODO: This is included from other package's Sku config which doesn't seem
// to work with TypeScript
// @ts-ignore
import { ScoobieWebpackPlugin, merge } from './webpack';

const config: SkuConfig = {
  rootResolution: false,
  srcPaths: ['./src', './styles'],

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
    settings: {
      react: {
        version: 'detect',
      },
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
  dangerouslySetTSConfig: (tsConfig) => ({
    ...tsConfig,
    include: [
      '**/*', // Implicit default value if `include` is not set and `files` is not set
      '.storybook/*', // 👈 Add this line
    ],
  }),
};

export default config;
