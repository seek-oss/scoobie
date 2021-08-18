import '../storybook/register';

import { Stack, Text } from 'braid-design-system';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import Headings from '../storybook/markdown/headings.mdx';
import { BraidStorybookProvider, withProviders } from '../storybook/provider';

import { SmartTextLink } from './SmartTextLink';
import { TocRenderer } from './TocRenderer';

storiesOf('TocRenderer', module)
  .add('Example', () => (
    <BraidStorybookProvider>
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
    </BraidStorybookProvider>
  ))
  .addDecorator(withProviders);
