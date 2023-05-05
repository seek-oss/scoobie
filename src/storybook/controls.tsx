import { DEFAULT_SIZE, SIZES, type Size } from '../private/size';

export interface BraidArgs {
  braidThemeName: BraidThemeName;
}

export interface MdxArgs {
  mdxSize: Size;
}

export const defaultArgs = {
  braidThemeName: 'apac' as const,
  mdxSize: DEFAULT_SIZE,
  size: 'standard',
};

export type BraidThemeName = 'apac' | 'docs' | 'wireframe';

export const defaultArgTypes = {
  braidThemeName: {
    control: { type: 'radio' },
    name: 'Braid theme',
    options: ['apac', 'docs', 'wireframe'],
  },
  mdxSize: {
    control: { type: 'radio' },
    name: 'MDX size',
    options: SIZES,
  },
  size: {
    control: { type: 'radio' },
    options: ['standard', 'large'],
  },
};
