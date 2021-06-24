type TablePadding = 'small' | 'medium';

type Space = 'medium' | 'large';

export const DEFAULT_SIZE: Size = 'standard';

export const SIZES = ['standard', 'large'] as const;

export const SMALLER_SIZES = ['small', 'standard'] as const;

export type SmallerSize = typeof SMALLER_SIZES[number];

export type Size = typeof SIZES[number];

export const SIZE_TO_SMALLER: Record<Size, SmallerSize> = {
  standard: 'small',
  large: 'standard',
};

export const SIZE_TO_TABLE_PADDING: Record<Size, TablePadding> = {
  standard: 'small',
  large: 'medium',
};

export const SIZE_TO_SPACE: Record<Size, Space> = {
  standard: 'medium',
  large: 'large',
};
