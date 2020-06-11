import {
  Box,
  IconNewWindow,
  Stack,
  Strong,
  Text,
  TextLink,
  TextLinkRenderer,
} from 'braid-design-system';
import React, { Fragment } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useStyles } from 'sku/react-treat';

import { Blockquote } from './Blockquote';
import { CodeBlockWithPlayground } from './CodeBlockWithPlayground';
import { createSpacedHeading } from './SpacedHeading';
import { Wrapper } from './Wrapper';
import { SIZE_TO_PADDING, SIZE_TO_SPACE, Size } from './size';

import * as styleRefs from './useMdxComponents.treat';

interface Props {
  size: Size;
}

export const useMdxComponents = ({ size }: Props): MDX.ProviderComponents => {
  const styles = useStyles(styleRefs);

  const padding = SIZE_TO_PADDING[size];
  const space = SIZE_TO_SPACE[size];

  return {
    a: ({ children, href }) =>
      /^[a-z][a-z0-9+.-]*:|^\/\//i.test(href) ? (
        <TextLink href={href} rel="noreferrer" target="_blank">
          {children} <IconNewWindow />
        </TextLink>
      ) : (
        <TextLinkRenderer>
          {(rendererProps) => (
            <HashLink {...rendererProps} smooth to={href}>
              {children}
            </HashLink>
          )}
        </TextLinkRenderer>
      ),
    blockquote: Blockquote,
    code: ({ children, className = 'text' }) => {
      const language = className.replace(/^language-/, '');

      return (
        <CodeBlockWithPlayground language={language} size={size}>
          {String(children)}
        </CodeBlockWithPlayground>
      );
    },
    inlineCode: ({ children }) => (
      <Box className={styles.inlineCode} component="code" padding="xxsmall">
        {children}
      </Box>
    ),
    h1: createSpacedHeading(1),
    h2: createSpacedHeading(2),
    h3: createSpacedHeading(3),
    h4: createSpacedHeading(4),
    h5: createSpacedHeading(5),
    h6: createSpacedHeading(6),
    img: (props) => <img {...props} className={styles.image} />,
    li: ({ children }) => (
      <Fragment>
        <Text size={size}>
          <Box className={styles.listItem} />
        </Text>
        <Box component="li">
          <Stack space={space}>{children}</Stack>
        </Box>
      </Fragment>
    ),
    ol: ({ children }) => (
      <Box
        className={[styles.listGrid[size], styles.orderedList]}
        component="ol"
      >
        {children}
      </Box>
    ),
    // Don't try to be clever here, this is what you want. No, really. `Text`
    // renders inline formatting correctly and fixes the line height. If some
    // node is not wrapped in a paragraph and it should be, wrap it using a
    // remark plugin, not here.
    p: ({ children }) => <Text size={size}>{children}</Text>,
    pre: ({ children }) => <pre className={styles.pre}>{children}</pre>,
    strong: Strong,
    table: ({ children }) => <table className={styles.table}>{children}</table>,
    td: ({ align, children }) => (
      <Box
        className={styles.tableCell}
        component="td"
        padding={padding}
        textAlign={align === null ? 'left' : align}
      >
        <Stack space={space}>{children}</Stack>
      </Box>
    ),
    th: ({ align, children }) => (
      <Box
        className={styles.tableCell}
        component="th"
        padding={padding}
        textAlign={align === null ? 'center' : align}
      >
        <Stack space={space}>{children}</Stack>
      </Box>
    ),
    tr: ({ children }) => <tr className={styles.tableRow}>{children}</tr>,
    ul: ({ children }) => (
      <Box
        className={[styles.listGrid[size], styles.unorderedList]}
        component="ul"
      >
        {children}
      </Box>
    ),
    wrapper: ({ children }) => <Wrapper size={size}>{children}</Wrapper>,
  };
};
