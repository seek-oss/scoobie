import type { SkuConfig } from 'sku';

const config: SkuConfig = {
  rootResolution: false,
  srcPaths: ['./src', './styles'],

  dangerouslySetESLintConfig: (skuConfig) => [
    ...skuConfig,
    {
      rules: {
        // https://basarat.gitbook.io/typescript/main-1/defaultisbad
        'import-x/no-default-export': 'error',
        'import-x/order': ['error'],
      },
    },
    {
      files: [
        '.storybook/*.{ts,tsx}',
        '*.d.ts',
        '*.docs.tsx',
        '**/*.stories.tsx',
        'eslint.config.mjs',
        'sku.config.ts',
      ],
      rules: {
        'import-x/no-default-export': 'off',
      },
    },
  ],

  dangerouslySetTSConfig: (tsConfig) => ({
    ...tsConfig,
    include: [
      '**/*', // Implicit default value if `include` is not set and `files` is not set
      '.storybook/*', // 👈 Add this line
    ],
  }),

  eslintIgnore: [
    '**/dist-storybook-tmp/',
    '**/typography.ts',
    '**/dist-storybook/',
  ],
};

export default config;
