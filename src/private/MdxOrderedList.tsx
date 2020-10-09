import { List } from 'braid-design-system';
import React from 'react';

import { useOrderedListContext } from './OrderedListContext';
import { SIZE_TO_SPACE, Size } from './size';
import { StackChildrenProps } from './types';

type Props = StackChildrenProps & {
  size: Size;
  start?: number;
};

export const MdxOrderedList = ({ children, size, start }: Props) => {
  const { NextOrderedListProvider, type } = useOrderedListContext();

  const space = SIZE_TO_SPACE[size];

  return (
    <NextOrderedListProvider>
      <List size={size} space={space} start={start} type={type}>
        {children}
      </List>
    </NextOrderedListProvider>
  );
};
