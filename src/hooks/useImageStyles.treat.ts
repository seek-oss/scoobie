import { style } from 'sku/treat';
import { Theme } from 'treat/theme';

const commonStyles = (theme: Theme) => ({
  borderColor: theme.border.color.standard,
  borderWidth: theme.border.width.standard,
  borderStyle: 'solid',
  display: 'block',

  borderRadius: theme.border.radius.standard,
  boxShadow: theme.shadows.small,
  maxWidth: '100%',
});

export const img = style(commonStyles);

export const svg = style(commonStyles);
