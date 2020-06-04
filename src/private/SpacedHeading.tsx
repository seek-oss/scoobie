import { Box, Heading, Inline, Text } from 'braid-design-system';
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useStyles } from 'sku/react-treat';

import { HeadingLevel } from './types';

import * as styleRefs from './SpacedHeading.treat';

type InlineChildren = React.ComponentProps<typeof Inline>['children'];

const headingForLevel: Record<
  HeadingLevel,
  React.FunctionComponent<{ children: InlineChildren }>
> = {
  1: ({ children }) => <Heading level="2">{children}</Heading>,
  2: ({ children }) => <Heading level="3">{children}</Heading>,
  3: ({ children }) => <Heading level="4">{children}</Heading>,
  4: ({ children }) => <Text weight="strong">{children}</Text>,
  5: ({ children }) => (
    <Text weight="strong">
      <Inline space="xsmall">
        <span>| </span>
        {children}
      </Inline>
    </Text>
  ),
  6: ({ children }) => (
    <Text weight="strong">
      <Inline space="xsmall">
        <span>‖ </span>
        {children}
      </Inline>
    </Text>
  ),
};

export const createSpacedHeading = (level: HeadingLevel) => {
  const LevelHeading = headingForLevel[level];

  return ({ children, id }: { children: InlineChildren; id: string }) => {
    const styles = useStyles(styleRefs);

    return (
      <Box className={styles.headingSpacer} id={id} tabIndex={0}>
        <LevelHeading>
          <Inline space="xsmall">
            {children}
            <HashLink className={styles.headingAnchor} smooth to={`#${id}`}>
              ⚓︎
            </HashLink>
          </Inline>
        </LevelHeading>
      </Box>
    );
  };
};
