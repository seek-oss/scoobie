import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import { defineConfig } from 'tsdown/config';

// eslint-disable-next-line
export default defineConfig({
  failOnWarn: true,
  entry: ['src/index.ts', 'src/typography.ts'],
  format: ['esm', 'cjs'],
  outDir: 'lib',
  platform: 'browser',
  dts: true,
  publint: true,
  attw: {
    profile: 'node16',
  },
  unbundle: true,
  checks: {
    legacyCjs: false,
  },
  plugins: [
    vanillaExtractPlugin({
      unstable_injectFilescopes: true,
    }),
  ],
});
