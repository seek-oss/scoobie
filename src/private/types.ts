import type { Stack } from 'braid-design-system';
import type { ComponentProps } from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type StackChildrenProps = Pick<ComponentProps<typeof Stack>, 'children'>;
