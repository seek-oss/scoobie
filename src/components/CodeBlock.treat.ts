import { styleMap } from 'sku/treat';

import { monospaceFontStyles } from '../../styles';
import { CodeSize } from '../private/size';

export const code = styleMap<CodeSize>((theme) => ({
  small: monospaceFontStyles(theme, 'small'),
  standard: monospaceFontStyles(theme, 'standard'),
}));
