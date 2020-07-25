import { Box, Stack, Strong, Text } from 'braid-design-system';
import React from 'react';
import { useStyles } from 'sku/react-treat';

import { InlineCode } from '../components/InlineCode';
import { SmartTextLink } from '../components/SmartTextLink';
import { useImageStyles } from '../hooks/useImageStyles';

import { Blockquote } from './Blockquote';
import { CodeBlockWithPlayground } from './CodeBlockWithPlayground';
import { ListItem, OrderedList, UnorderedList } from './List';
import { createSpacedHeading } from './SpacedHeading';
import { Wrapper } from './Wrapper';
import { SIZE_TO_PADDING, SIZE_TO_SPACE, Size } from './size';

import * as styleRefs from './useMdxComponents.treat';

interface Props {
  size: Size;
}

export const useMdxComponents = ({ size }: Props): MDX.ProviderComponents => {
  const imageStyles = useImageStyles();
  const styles = useStyles(styleRefs);

  const padding = SIZE_TO_PADDING[size];
  const space = SIZE_TO_SPACE[size];

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
    li: ({ children }) => <ListItem size={size}>{children}</ListItem>,
    ol: ({ children }) => <OrderedList size={size}>{children}</OrderedList>,
    // Don't try to be clever here, this is what you want. No, really. `Text`
    // renders inline formatting correctly and fixes the line height. If some
    // node is not wrapped in a paragraph and it should be, wrap it using a
    // remark plugin, not here.
    p: ({ children }) => <Text size={size}>{children}</Text>,
    pre: ({ children }) => (
      <Box className={styles.pre} component="pre">
        {children}
      </Box>
    ),
    span: (props) => (
      // For wide SVGs like Mermaid diagrams
      <Box overflow="auto">
        <Box {...props} component="span" />
      </Box>
    ),
    strong: Strong,
    table: ({ children }) => (
      <Box className={styles.tableWrapper}>
        <Box component="table" className={styles.table}>
          {children}
        </Box>
      </Box>
    ),
    td: ({ align, children }) => (
      <Box
        className={[styles.tableCell, styles.td]}
        component="td"
        padding={padding}
        textAlign={align === null ? 'left' : align}
      >
        <Stack space={space}>{children}</Stack>
      </Box>
    ),
    th: ({ align, children }) => (
      <Box
        className={[styles.tableCell, styles.th]}
        component="th"
        padding={padding}
        textAlign={align === null ? 'center' : align}
      >
        <Stack space={space}>{children}</Stack>
      </Box>
    ),
    tr: ({ children }) => (
      <Box className={styles.tableRow} component="tr">
        {children}
      </Box>
    ),
    ul: ({ children }) => <UnorderedList size={size}>{children}</UnorderedList>,
    wrapper: ({ children }) => <Wrapper size={size}>{children}</Wrapper>,
  };
};
