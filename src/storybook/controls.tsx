import { DEFAULT_SIZE, SIZES, Size } from '../private/size';

export interface BraidArgs {
  braidThemeName: string;
}

export interface MdxArgs {
  mdxSize: Size;
}

export const defaultArgs = {
  braidThemeName: 'apac',
  mdxSize: DEFAULT_SIZE,
  size: 'standard',
};

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
