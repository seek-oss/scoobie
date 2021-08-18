import { Box, Heading, IconLink, Text } from 'braid-design-system';
import React, { FunctionComponent, ReactNode } from 'react';

import { SmartTextLink } from '../components/SmartTextLink';

import { HeadingLevel } from './types';

import * as styles from './SpacedHeading.css';

const headingForLevel: Record<
  HeadingLevel,
  FunctionComponent<{ children: ReactNode }>
> = {
  1: ({ children }) => <Heading level="2">{children}</Heading>,
  2: ({ children }) => <Heading level="3">{children}</Heading>,
  3: ({ children }) => <Heading level="4">{children}</Heading>,
  4: ({ children }) => <Text weight="strong">{children}</Text>,
  5: ({ children }) => (
    <Text weight="strong">
      <span>| </span>
      {children}
    </Text>
  ),
  6: ({ children }) => (
    <Text weight="strong">
      <span>‖ </span>
      {children}
    </Text>
  ),
};

interface Props {
  children: ReactNode;
  id: string;
}

export const createSpacedHeading = (level: HeadingLevel) => {
  const LevelHeading = headingForLevel[level];

  return ({ children, id }: Props) => (
    <Box className={styles.headingSpacer} id={id} tabIndex={0}>
      <LevelHeading>
        {children}{' '}
        <SmartTextLink href={`#${id}`}>
          <Box className={styles.headingAnchor} component="span">
            <IconLink alignY="lowercase" />
          </Box>
        </SmartTextLink>
      </LevelHeading>
    </Box>
  );
};
