import capsize from 'capsize';
import { Theme } from 'treat/theme';

import { CodeSize } from '../src/private/size';

// GitHub default for light theme
export const codeBackgroundColor = '#f6f8fa';

// SEEK's corporate font + GitHub defaults
export const monospaceFontFamily =
  "'Roboto Mono',SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace";

// Roboto Mono metrics from seek-oss.github.io/capsize
const monospaceFontMetrics = {
  capHeight: 1456,
  ascent: 2146,
  descent: -555,
  lineGap: 0,
  unitsPerEm: 2048,
};

const monospaceFontStylesForTarget = (
  theme: Theme,
  codeSize: CodeSize,
  target: 'mobile' | 'tablet',
) =>
  capsize({
    capHeight: theme.typography.text[codeSize][target].capHeight,
    fontMetrics: monospaceFontMetrics,
    leading: theme.typography.text[codeSize][target].rows * theme.grid,
  });

export const monospaceFontStyles = (theme: Theme, codeSize: CodeSize) => ({
  fontFamily: monospaceFontFamily,

  ...theme.utils.responsiveStyle({
    mobile: monospaceFontStylesForTarget(theme, codeSize, 'mobile'),
    tablet: monospaceFontStylesForTarget(theme, codeSize, 'tablet'),
  }),
});
