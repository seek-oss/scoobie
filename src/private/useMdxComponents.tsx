import { Box, List, Stack, Strong, Text } from 'braid-design-system';
import React from 'react';
import { useStyles } from 'sku/react-treat';

import { Blockquote } from '../components/Blockquote';
import { InlineCode } from '../components/InlineCode';
import { SmartTextLink } from '../components/SmartTextLink';
import { useImageStyles } from '../hooks/useImageStyles';

import { HorizontalRule } from './HorizontalRule';
import { createMdxCodeBlock } from './MdxCodeBlock';
import { MdxOrderedList } from './MdxOrderedList';
import { createSpacedHeading } from './SpacedHeading';
import { MdxTable } from './Table';
import { TableCell } from './TableCell';
import { BaseTableRow } from './TableRow';
import { Wrapper } from './Wrapper';
import { SIZE_TO_SPACE, Size } from './size';

import * as styleRefs from './useMdxComponents.treat';

interface Props {
  size: Size;
}

export const useMdxComponents = ({ size }: Props): MDX.ProviderComponents => {
  const imageStyles = useImageStyles();
  const styles = useStyles(styleRefs);

  const space = SIZE_TO_SPACE[size];

  return {
    a: SmartTextLink,
    blockquote: ({ children }) => (
      <Blockquote size={size}>{children}</Blockquote>
    ),
    code: createMdxCodeBlock(size),
    inlineCode: InlineCode,
    h1: createSpacedHeading(1),
    h2: createSpacedHeading(2),
    h3: createSpacedHeading(3),
    h4: createSpacedHeading(4),
    h5: createSpacedHeading(5),
    h6: createSpacedHeading(6),
    hr: HorizontalRule,
    img: (props) => (
      <Box {...props} className={imageStyles.img} component="img" />
    ),
    li: ({ children }) => <Stack space={space}>{children}</Stack>,
    ol: (props) => <MdxOrderedList {...props} size={size} />,
    // Don't try to be clever here, this is what you want. No, really. `Text`
    // renders inline formatting correctly and fixes the line height. If some
    // node is not wrapped in a paragraph and it should be, wrap it using a
    // remark plugin, not here.
    p: ({ children }) => <Text size={size}>{children}</Text>,
    pre: ({ children }) => <Box className={styles.pre}>{children}</Box>,
    span: (props) => (
      // For wide SVGs like Mermaid diagrams
      <Box overflow="auto">
        <Box {...props} component="span" />
      </Box>
    ),
    strong: Strong,
    table: ({ children }) => <MdxTable>{children}</MdxTable>,
    td: ({ align, children }) => (
      <TableCell align={align} component="td">
        {children}
      </TableCell>
    ),
    th: ({ align, children }) => (
      <TableCell align={align} component="th">
        {children}
      </TableCell>
    ),
    tr: ({ children }) => <BaseTableRow>{children}</BaseTableRow>,
    ul: ({ children }) => (
      <List size={size} space={space} type="bullet">
        {children}
      </List>
    ),
    wrapper: ({ children }) => <Wrapper size={size}>{children}</Wrapper>,
  };
};
