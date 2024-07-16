import { babel, webpackFinal } from 'sku/config/storybook';
import type { StorybookConfig } from '@storybook/react-webpack5';

export default {
  stories: ['../src/**/*.stories.tsx'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        fsCache: true, // For faster startup times after the first `storybook dev`
      },
    },
  },
  addons: [
    '@storybook/addon-webpack5-compiler-babel', // Required for Storybook >=8.0.0
    '@storybook/addon-essentials',
  ],
  babel,
  webpackFinal,
} satisfies StorybookConfig;
