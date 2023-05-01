import type { Stack } from 'braid-design-system';
import type { ComponentProps } from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface MdxElement {
  props: {
    mdxType: string;
  };
}

export type StackChildrenProps = Pick<ComponentProps<typeof Stack>, 'children'>;
