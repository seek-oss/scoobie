import { defineConfig } from 'tsdown/config';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';

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
    // node10 resolution does not support subpath exports
    excludeEntrypoints: ['./typography'],
  },
  plugins: [vanillaExtractPlugin()],
});
