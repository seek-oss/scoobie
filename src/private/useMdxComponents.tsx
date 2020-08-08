import { Box, Strong, Text } from 'braid-design-system';
import React from 'react';
import { useStyles } from 'sku/react-treat';

import { InlineCode } from '../components/InlineCode';
import { ListItem, OrderedList, UnorderedList } from '../components/List';
import { SmartTextLink } from '../components/SmartTextLink';
import { useImageStyles } from '../hooks/useImageStyles';

import { Blockquote } from './Blockquote';
import { CodeBlockWithPlayground } from './CodeBlockWithPlayground';
import { createSpacedHeading } from './SpacedHeading';
import { MdxTable } from './Table';
import { TableCell } from './TableCell';
import { BaseTableRow } from './TableRow';
import { Wrapper } from './Wrapper';
import { Size } from './size';

import * as styleRefs from './useMdxComponents.treat';

interface Props {
  size: Size;
}

export const useMdxComponents = ({ size }: Props): MDX.ProviderComponents => {
  const imageStyles = useImageStyles();
  const styles = useStyles(styleRefs);

  return {
    a: SmartTextLink,
    blockquote: Blockquote,
    code: ({ children, className = 'text' }) => {
      const language = className.replace(/^language-/, '');

      return (
        <CodeBlockWithPlayground language={language} size={size}>
          {String(children)}
        </CodeBlockWithPlayground>
      );
    },
    inlineCode: InlineCode,
    h1: createSpacedHeading(1),
    h2: createSpacedHeading(2),
    h3: createSpacedHeading(3),
    h4: createSpacedHeading(4),
    h5: createSpacedHeading(5),
    h6: createSpacedHeading(6),
    img: (props) => (
      <Box {...props} className={imageStyles.img} component="img" />
    ),
    li: ListItem,
    ol: ({ children, start }) => (
      <OrderedList size={size} start={start}>
        {children}
      </OrderedList>
    ),
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
    ul: ({ children }) => <UnorderedList size={size}>{children}</UnorderedList>,
    wrapper: ({ children }) => <Wrapper size={size}>{children}</Wrapper>,
  };
};
