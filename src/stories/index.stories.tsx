import 'braid-design-system/reset';
import 'loki/configure-react';
import { Stack, Text, TextLink } from 'braid-design-system';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { TocRenderer, WrapperRenderer } from 'src';

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

storiesOf('MdxProvider', module)
  .add('Blockquote', () => <Blockquote />)
  .add('Code', () => <Code />)
  .add('Combination', () => <Combination />)
  .add('Headings', () => <Headings />)
  // @ts-ignore
  .lokiSkip('ImagesExternal', () => <ImagesExternal />)
  .add('ImagesInternal', () => <ImagesInternal />)
  .add('Inline', () => <Inline />)
  .add('Lists', () => <Lists />)
  .add('Table', () => <Table />)
  .addDecorator(withBraid);

storiesOf('TocRenderer', module)
  .add('Example', () => (
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
