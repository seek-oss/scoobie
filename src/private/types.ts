import { Stack } from 'braid-design-system';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface MdxElement {
  props: {
    mdxType: string;
  };
}

export type StackChildrenProps = Pick<
  React.ComponentProps<typeof Stack>,
  'children'
>;
