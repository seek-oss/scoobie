import { List } from 'braid-design-system';
import React, { useContext } from 'react';

import { ListContext } from './ListContext';
import { SIZE_TO_SPACE, Size } from './size';
import { StackChildrenProps } from './types';

type Props = StackChildrenProps & {
  size: Size;
  start?: number;
};

export const MdxOrderedList = ({ children, size, start }: Props) => {
  const { type } = useContext(ListContext);

  const space = SIZE_TO_SPACE[size];

  return (
    <ListContext.Provider
      value={{
        type: type === 'alpha' ? 'number' : 'alpha',
      }}
    >
      <List size={size} space={space} start={start} type={type}>
        {children}
      </List>
    </ListContext.Provider>
  );
};
