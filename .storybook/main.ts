import type { StorybookConfig } from '@storybook/react-webpack5';
import seekJobs from 'braid-design-system/themes/seekJobs';
import { babel, webpackFinal } from 'sku/config/storybook';

import { robotoHtml, robotoMonoHtml } from '../typography';

export default {
  previewHead: (head) => `
    ${head}
    ${robotoHtml}
    ${robotoMonoHtml}
    ${seekJobs.webFonts.map((font) => font.linkTag).join('\n')}
  `,
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
  ],
  babel,
  webpackFinal,
} satisfies StorybookConfig;
