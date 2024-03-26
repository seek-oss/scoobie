import { Box, List, Stack, Strong, Text } from 'braid-design-system';
import type { MDXComponents } from 'mdx/types';
import {
  type ReactElement,
  type ReactNode,
  createContext,
  useContext,
} from 'react';

import { Blockquote } from '../components/Blockquote';
import { InlineCode } from '../components/InlineCode';
import { SmartTextLink } from '../components/SmartTextLink';

import { HorizontalRule } from './HorizontalRule';
import { MdxCodeBlock } from './MdxCodeBlock';
import { MdxOrderedList } from './MdxOrderedList';
import { ScoobieImage } from './ScoobieImage';
import { createSpacedHeading } from './SpacedHeading';
import { MdxTable } from './Table';
import { TableCell } from './TableCell';
import { BaseTableRow } from './TableRow';
import { Wrapper } from './Wrapper';
import { SIZE_TO_SPACE, type Size } from './size';

import * as styles from './useMdxComponents.css';

interface Props {
  size: Size;
}

const PreContext = createContext<string | undefined>(undefined);

const Code = (
  props: Record<string, unknown> & { size: Size; children: string },
) => {
  const meta = useContext(PreContext);
  if (typeof meta === 'string') {
    return <MdxCodeBlock {...props} metastring={meta} />;
  }
  return <InlineCode {...props} />;
};

const isIterable = (children: ReactNode): children is Iterable<ReactNode> =>
  Array.isArray(children);

const toStackChildren = (children: React.ReactNode): ReactElement | null =>
  typeof children === 'object' && !isIterable(children) ? (
    children
  ) : (
    <>{children}</>
  );

export const useMdxComponents = ({ size }: Props): MDXComponents => {
  const space = SIZE_TO_SPACE[size];

  return {
    a: SmartTextLink,
    blockquote: ({ children }) => (
      <Blockquote size={size}>{toStackChildren(children)}</Blockquote>
    ),
    code: ({ children, ...rest }) => {
      if (typeof children !== 'string') {
        throw new Error(
          `Expected children of code block to be a string, but got ${typeof children}`,
        );
      }

      return (
        <Code {...rest} size={size}>
          {children}
        </Code>
      );
    },
    h1: createSpacedHeading(1),
    h2: createSpacedHeading(2),
    h3: createSpacedHeading(3),
    h4: createSpacedHeading(4),
    h5: createSpacedHeading(5),
    h6: createSpacedHeading(6),
    hr: HorizontalRule,
    img: ScoobieImage,
    li: ({ children }) => (
      <Stack space={space}>{toStackChildren(children)}</Stack>
    ),
    ol: ({ children, ...rest }) => (
      <MdxOrderedList {...rest} size={size}>
        {toStackChildren(children)}
      </MdxOrderedList>
    ),
    // Don't try to be clever here, this is what you want. No, really. `Text`
    // renders inline formatting correctly and fixes the line height. If some
    // node is not wrapped in a paragraph and it should be, wrap it using a
    // remark plugin, not here.
    p: ({ children }) => <Text size={size}>{children}</Text>,
    pre: ({ children, ...rest }) => {
      const meta = (rest as Record<string, string>).meta;
      return (
        <PreContext.Provider value={meta ?? ''}>
          <Box className={styles.pre}>{children}</Box>
        </PreContext.Provider>
      );
    },
    span: ({ ref, ...rest }) => <Box {...rest} component="span" />,
    strong: ({ children, ...rest }) => (
      <Strong {...rest}>{children ?? null}</Strong>
    ),
    table: ({ children }) => <MdxTable>{children}</MdxTable>,
    td: ({ style: { textAlign } = {}, children }) => (
      <TableCell align={textAlign} component="td">
        {toStackChildren(children)}
      </TableCell>
    ),
    th: ({ style: { textAlign } = {}, children }) => (
      <TableCell align={textAlign} component="th">
        {toStackChildren(children)}
      </TableCell>
    ),
    tr: ({ children }) => (
      <BaseTableRow>{toStackChildren(children)}</BaseTableRow>
    ),
    ul: ({ children }) => (
      <List size={size} space={space} type="bullet">
        {toStackChildren(children)}
      </List>
    ),
    wrapper: ({ children }) => <Wrapper size={size}>{children}</Wrapper>,
  };
};
