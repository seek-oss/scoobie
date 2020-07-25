type CodeSize = 'small' | 'standard';

type Padding = 'small' | 'medium';

type Space = 'medium' | 'large';

export type Size = typeof SIZES[number];

export const DEFAULT_SIZE: Size = 'standard';

export const SIZES = ['standard', 'large'] as const;

export const SIZE_TO_CODE_SIZE: Record<Size, CodeSize> = {
  standard: 'small',
  large: 'standard',
};

export const SIZE_TO_PADDING: Record<Size, Padding> = {
  standard: 'small',
  large: 'medium',
};

export const SIZE_TO_SPACE: Record<Size, Space> = {
  standard: 'medium',
  large: 'large',
};
