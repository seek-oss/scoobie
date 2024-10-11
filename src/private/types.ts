import type { Stack } from 'braid-design-system';
import type { ComponentProps } from 'react';

export type StackChildrenProps = Pick<ComponentProps<typeof Stack>, 'children'>;
