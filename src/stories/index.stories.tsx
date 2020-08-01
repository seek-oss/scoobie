import 'braid-design-system/reset';
import 'loki/configure-react';
import { Alert, Stack, Text } from 'braid-design-system';
import React from 'react';
import { boolean, number, select, text } from 'sku/@storybook/addon-knobs';
import { storiesOf } from 'sku/@storybook/react';
import {
  CodeBlock,
  InlineCode,
  InternalLink,
  ListItem,
  OrderedList,
  SmartTextLink,
  TocRenderer,
  UnorderedList,
  WrapperRenderer,
} from 'src';

import { withBraid } from './decorator';
import Blockquote from './markdowns/blockquote.mdx';
import Code from './markdowns/code.mdx';
import Combination from './markdowns/combination.mdx';
import Headings from './markdowns/headings.mdx';
import ImagesExternal from './markdowns/images-external.mdx';
import ImagesInternal from './markdowns/images-internal.mdx';
import Inline from './markdowns/inline.mdx';
import Lists from './markdowns/lists.mdx';
import Table from './markdowns/table.mdx';
import Wrapper from './markdowns/wrapper.mdx';

const generateListItems = (
  Container: typeof OrderedList | typeof UnorderedList,
  count: number,
) => (
  <Stack space="medium">
    <Text weight="medium">
      {count} item{count === 1 ? '' : 's'}:
    </Text>

    <Container>
      {[...new Array(count)].map((_, index) => (
        <ListItem key={index}>
          <Text>{index + 1}</Text>
        </ListItem>
      ))}
    </Container>
  </Stack>
);

storiesOf('CodeBlock', module)
  .add('Custom', () => (
    <CodeBlock
      language={text('language', 'graphql')}
      graphqlPlayground={text(
        'graphqlPlayground',
        'https://graphql.seek.com/graphql',
      )}
    >
      {text('children', 'query {\n  version\n}\n')}
    </CodeBlock>
  ))
  .addDecorator(withBraid);

storiesOf('InlineCode', module)
  .add('Custom', () => (
    <Text>
      Some text with <InlineCode>{text('children', 'inline code')}</InlineCode>!
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
  .add('Blockquote', () => <Blockquote />)
  .add('Code', () => <Code />)
  .add('Combination', () => <Combination />)
  .add('Headings', () => <Headings />)
  .add('ImagesExternal', () => <ImagesExternal />, { loki: { skip: true } })
  .add('ImagesInternal', () => <ImagesInternal />)
  .add('Inline', () => <Inline />)
  .add('Lists', () => <Lists />)
  .add('Table', () => <Table />)
  .addDecorator(withBraid);

storiesOf('OrderedList', module)
  .add('1 item', () => generateListItems(OrderedList, 1))
  .add('10 items', () => generateListItems(OrderedList, 10))
  .add('Custom', () => {
    const textSize = select(
      'Text.size',
      ['xsmall', 'small', 'standard', 'large'],
      'standard',
    );

    return (
      <OrderedList
        size={select('size', ['standard', 'large'], 'standard')}
        start={number('start', 100)}
      >
        <ListItem>
          <Text size={textSize}>First item</Text>
        </ListItem>

        <ListItem>
          <Text size={textSize}>Second item</Text>
        </ListItem>
      </OrderedList>
    );
  })
  .add('Nested', () => (
    <OrderedList>
      <ListItem>
        <Stack space="medium">
          <Text>Level 1</Text>

          <OrderedList>
            <ListItem>
              <Stack space="medium">
                <Text>Level 2</Text>

                <OrderedList>
                  <ListItem>
                    <Text>Level 3</Text>
                  </ListItem>
                </OrderedList>
              </Stack>
            </ListItem>
          </OrderedList>
        </Stack>
      </ListItem>
    </OrderedList>
  ))
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

storiesOf('UnorderedList', module)
  .add('1 item', () => generateListItems(UnorderedList, 1))
  .add('10 items', () => generateListItems(UnorderedList, 10))
  .add('Custom', () => {
    const textSize = select(
      'Text.size',
      ['xsmall', 'small', 'standard', 'large'],
      'standard',
    );

    return (
      <UnorderedList size={select('size', ['standard', 'large'], 'standard')}>
        <ListItem>
          <Text size={textSize}>First item</Text>
        </ListItem>

        <ListItem>
          <Text size={textSize}>Second item</Text>
        </ListItem>
      </UnorderedList>
    );
  })
  .add('Nested', () => (
    <UnorderedList>
      <ListItem>
        <Stack space="medium">
          <Text>Level 1</Text>

          <UnorderedList>
            <ListItem>
              <Stack space="medium">
                <Text>Level 2</Text>

                <UnorderedList>
                  <ListItem>
                    <Text>Level 3</Text>
                  </ListItem>
                </UnorderedList>
              </Stack>
            </ListItem>
          </UnorderedList>
        </Stack>
      </ListItem>
    </UnorderedList>
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
