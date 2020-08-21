import 'braid-design-system/reset';
import 'loki/configure-react';
import { Alert, List, Stack, Text } from 'braid-design-system';
import React, { Fragment } from 'react';
import { boolean, select, text } from 'sku/@storybook/addon-knobs';
import { storiesOf } from 'sku/@storybook/react';
import {
  Blockquote,
  CodeBlock,
  InlineCode,
  InternalLink,
  SmartTextLink,
  Table,
  TableRow,
  TocRenderer,
  WrapperRenderer,
} from 'src';

import { withBraid } from './decorator';
import BlockquoteMarkdown from './markdowns/blockquote.mdx';
import Code from './markdowns/code.mdx';
import Combination from './markdowns/combination.mdx';
import Headings from './markdowns/headings.mdx';
import ImagesExternal from './markdowns/images-external.mdx';
import ImagesInternal from './markdowns/images-internal.mdx';
import Inline from './markdowns/inline.mdx';
import Lists from './markdowns/lists.mdx';
import TableMarkdown from './markdowns/table.mdx';
import Wrapper from './markdowns/wrapper.mdx';

storiesOf('Blockquote', module)
  .add('Custom', () => {
    const size = select('size', ['standard', 'large'], 'standard');

    return (
      <Blockquote size={size}>
        <Text size={size}>This is a paragraph.</Text>
        <List size={size}>
          <Text size={size}>This is a bullet point.</Text>
        </List>
      </Blockquote>
    );
  })
  .addDecorator(withBraid);

storiesOf('CodeBlock', module)
  .add('Single', () => (
    <CodeBlock
      language={text('language', 'graphql')}
      graphqlPlayground={text(
        'graphqlPlayground',
        'https://graphql.seek.com/graphql',
      )}
      size={select('size', ['standard', 'large'], 'standard')}
    >
      {text('children', 'query {\n  version\n}\n')}
    </CodeBlock>
  ))
  .add('Multi', () => (
    <CodeBlock
      graphqlPlayground={text(
        'graphqlPlayground',
        'https://graphql.seek.com/graphql',
      )}
      size={select('size', ['standard', 'large'], 'standard')}
    >
      {[
        {
          code: 'query {\n  version\n}\n',
          label: 'Operation',
          language: 'graphql',
        },
        {
          code: '{}',
          label: 'Variables',
          language: 'jsonc',
        },
        {
          code: '{\n  "data": null\n}\n',
          label: 'Response',
          language: 'jsonc',
        },
      ]}
    </CodeBlock>
  ))
  .addDecorator(withBraid);

storiesOf('InlineCode', module)
  .add('Custom', () => (
    <Text>
      Some text with{' '}
      <InlineCode weight={select('weight', ['regular', 'weak'], 'regular')}>
        {text('children', 'inline code')}
      </InlineCode>
      !
    </Text>
  ))
  .addDecorator(withBraid);

storiesOf('InternalLink', module)
  .add('Custom', () => (
    <InternalLink href={text('href', 'page#id')} reset={boolean('reset', true)}>
      <Alert tone="caution">
        <Stack space="gutter">
          <Text>
            {text('line1', 'InternalLink supports complex components.')}
          </Text>

          <Text size="small">
            {text('line2', 'For example, this whole Alert is a link!')}
          </Text>
        </Stack>
      </Alert>
    </InternalLink>
  ))
  .addDecorator(withBraid);

storiesOf('MdxProvider', module)
  .add('Blockquote', () => <BlockquoteMarkdown />)
  .add('Code', () => <Code />)
  .add('Combination', () => <Combination />)
  .add('Headings', () => <Headings />)
  .add('ImagesExternal', () => <ImagesExternal />, { loki: { skip: true } })
  .add('ImagesInternal', () => <ImagesInternal />)
  .add('Inline', () => <Inline />)
  .add('Lists', () => <Lists />)
  .add('Table', () => <TableMarkdown />)
  .addDecorator(withBraid);

storiesOf('SmartTextLink', module)
  .add('Custom', () => (
    <Text>
      <SmartTextLink href={text('href', 'https://developer.seek.com/schema')}>
        {text('children', 'SEEK Schema')}
      </SmartTextLink>
    </Text>
  ))
  .addDecorator(withBraid);

storiesOf('TocRenderer', module)
  .add('Example', () => (
    <Stack space="medium">
      <TocRenderer document={Headings}>
        {(toc) => (
          <Text>
            <Stack space="small">
              {toc.map((item) => (
                <SmartTextLink href={`#${item.id}`} key={item.id}>
                  {'|'.repeat(item.level)} {item.children}
                </SmartTextLink>
              ))}
            </Stack>
          </Text>
        )}
      </TocRenderer>
    </Stack>
  ))
  .addDecorator(withBraid);

storiesOf('Table', module)
  .add('Defaults', () => (
    <Table header={['Column A', 'Column B']}>
      <TableRow>
        <Fragment>This is body cell A1.</Fragment>
        <Fragment>B1</Fragment>
      </TableRow>

      <TableRow>
        <Fragment>A2</Fragment>
        <Fragment>This is body cell B2.</Fragment>
      </TableRow>
    </Table>
  ))
  .add('Stripe', () => (
    <Table
      align={['left', 'right']}
      header={
        <Fragment>
          <Fragment>Column A</Fragment>
          <Text weight="regular">Column B</Text>
        </Fragment>
      }
      size={select('size', ['standard', 'large'], 'standard')}
      type="stripe"
    >
      <TableRow>
        <Text>This is body cell A1.</Text>
        <Text weight="strong">B1</Text>
      </TableRow>

      <TableRow>
        <Fragment>A2</Fragment>
        <Fragment>This is body cell B2.</Fragment>
      </TableRow>
    </Table>
  ))
  .add('Subtle', () => (
    <Table header={['Column A', 'Column B']} type="subtle">
      <TableRow>
        <Fragment>This is body cell A1.</Fragment>
        <Fragment>B1</Fragment>
      </TableRow>

      <TableRow>
        <Fragment>A2</Fragment>
        <Fragment>This is body cell B2.</Fragment>
      </TableRow>
    </Table>
  ))
  .addDecorator(withBraid);

storiesOf('WrapperRenderer', module)
  .add('Example', () => (
    <WrapperRenderer document={Wrapper}>
      {({ children }) => (
        <Text>{React.Children.toArray(children).length} top-level node(s)</Text>
      )}
    </WrapperRenderer>
  ))
  .addDecorator(withBraid);
