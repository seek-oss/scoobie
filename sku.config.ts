import type { SkuConfig } from 'sku';

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
  dangerouslySetTSConfig: (tsConfig) => ({
    ...tsConfig,
    include: [
      '**/*', // Implicit default value if `include` is not set and `files` is not set
      '.storybook/*', // 👈 Add this line
    ],
  }),
};

export default config;
