import { Box, Stack, Text } from 'braid-design-system';
import React, {
  ComponentProps,
  Fragment,
  ReactNode,
  createContext,
  useContext,
} from 'react';
import { useStyles } from 'sku/react-treat';

import { DEFAULT_SIZE, SIZE_TO_SPACE, Size } from './size';

import * as styleRefs from './List.treat';

interface ListContextValue {
  size: Size;
  type: ListType;
}

type ListType = 'ordered' | 'unordered';

const DEFAULT_TYPE: ListType = 'unordered';

const ListContext = createContext<ListContextValue>({
  size: DEFAULT_SIZE,
  type: DEFAULT_TYPE,
});

type ListItemProps = Pick<ComponentProps<typeof Stack>, 'children'>;

export const ListItem = ({ children }: ListItemProps) => {
  const { size, type } = useContext(ListContext);

  const styles = useStyles(styleRefs);

  const space = SIZE_TO_SPACE[size];

  return (
    <Fragment>
      <Text size={size}>
        {type === 'ordered' ? (
          <Box className={styles.orderedListItem} />
        ) : (
          <Box
            alignItems="center"
            className={styles.unorderedListItem[size]}
            display="flex"
          >
            <Box
              borderRadius="full"
              className={[styles.bulletColor, styles.bulletSize[size]]}
            />
          </Box>
        )}
      </Text>

      <Box component="li">
        <Stack space={space}>{children}</Stack>
      </Box>
    </Fragment>
  );
};

interface ListProps {
  children: ReactNode;
  size?: Size;
}

export const OrderedList = ({ children, size = DEFAULT_SIZE }: ListProps) => {
  const styles = useStyles(styleRefs);

  return (
    <ListContext.Provider
      value={{
        size,
        type: 'ordered',
      }}
    >
      <Box
        className={[styles.listGrid[size], styles.orderedList]}
        component="ol"
      >
        {children}
      </Box>
    </ListContext.Provider>
  );
};

export const UnorderedList = ({ children, size = DEFAULT_SIZE }: ListProps) => {
  const styles = useStyles(styleRefs);

  return (
    <ListContext.Provider
      value={{
        size,
        type: 'unordered',
      }}
    >
      <Box
        className={[styles.listGrid[size], styles.unorderedList]}
        component="ul"
      >
        {children}
      </Box>
    </ListContext.Provider>
  );
};
