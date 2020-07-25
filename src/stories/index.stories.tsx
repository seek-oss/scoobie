import 'braid-design-system/reset';
import 'loki/configure-react';
import { Alert, Stack, Text } from 'braid-design-system';
import React from 'react';
import { boolean, text } from 'sku/@storybook/addon-knobs';
import { storiesOf } from 'sku/@storybook/react';
import {
  CodeBlock,
  InternalLink,
  SmartTextLink,
  TocRenderer,
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

storiesOf('WrapperRenderer', module)
  .add('Example', () => (
    <WrapperRenderer document={Wrapper}>
      {({ children }) => (
        <Text>{React.Children.toArray(children).length} top-level node(s)</Text>
      )}
    </WrapperRenderer>
  ))
  .addDecorator(withBraid);
