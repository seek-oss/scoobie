import 'braid-design-system/reset';
import 'loki/configure-react';
import { Stack, Text, TextLink } from 'braid-design-system';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { TocRenderer } from 'src/components/TocRenderer';
import { WrapperRenderer } from 'src/components/WrapperRenderer';

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

storiesOf('Blockquote', module)
  .add('blockquote', () => <Blockquote />)
  .addDecorator(withBraid);

storiesOf('Headings', module)
  .add('heading', () => <Headings />)
  .addDecorator(withBraid);

storiesOf('Inline', module)
  .add('inline', () => <Inline />)
  .addDecorator(withBraid);

storiesOf('WrapperRenderer', module)
  .add('wrapper', () => (
    <WrapperRenderer document={Wrapper}>
      {({ children }) => (
        <Text>{React.Children.toArray(children).length} top-level node(s)</Text>
      )}
    </WrapperRenderer>
  ))
  .addDecorator(withBraid);

storiesOf('ToC', module)
  .add('toc', () => (
    <Stack space="medium">
      <TocRenderer document={Headings}>
        {(toc) => (
          <Text>
            <Stack space="small">
              {toc.map((item) => (
                <TextLink href={`#${item.id}`} key={item.id}>
                  {'|'.repeat(item.level)} {item.children}
                </TextLink>
              ))}
            </Stack>
          </Text>
        )}
      </TocRenderer>

      <Headings />
    </Stack>
  ))
  .addDecorator(withBraid);

storiesOf('Table', module)
  .add('table', () => <Table />)
  .addDecorator(withBraid);

storiesOf('Lists', module)
  .add('lists', () => <Lists />)
  .addDecorator(withBraid);

storiesOf('Images (External)', module)
  // @ts-ignore
  .lokiSkip('images-external', () => <ImagesExternal />)
  .addDecorator(withBraid);

storiesOf('Images (Internal)', module)
  .add('images-internal', () => <ImagesInternal />)
  .addDecorator(withBraid);

storiesOf('Code', module)
  .add('code', () => <Code />)
  .addDecorator(withBraid);

storiesOf('List-link', module)
  .add('list-link', () => <Combination />)
  .addDecorator(withBraid);
