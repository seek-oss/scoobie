import { Stack, Text } from 'braid-design-system';
import React, { ComponentProps, useContext } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { TableCell } from '../private/TableCell';
import { TableContext } from '../private/TableContext';
import { BaseTableRow } from '../private/TableRow';

interface Props {
  children: ComponentProps<typeof Stack>['children'] | string[];
}

export const TableRow = ({ children }: Props) => {
  const { align, component } = useContext(TableContext);

  return (
    <BaseTableRow>
      {React.Children.map(flattenChildren(children), (child, index) => (
        <TableCell align={align?.[index]} component={component}>
          {typeof child === 'number' || typeof child === 'string' ? (
            <Text weight={component === 'td' ? undefined : 'strong'}>
              {child}
            </Text>
          ) : (
            child
          )}
        </TableCell>
      ))}
    </BaseTableRow>
  );
};
