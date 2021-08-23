import 'braid-design-system/reset';
import 'loki/configure-react';

import { Stack, Text } from 'braid-design-system';
import React from 'react';

import { BraidArgs, defaultArgTypes, defaultArgs } from '../storybook/controls';
import { BraidStorybookProvider, withRouter } from '../storybook/decorators';
import HeadingMarkdown from '../storybook/markdown/heading.mdx';

import { SmartTextLink } from './SmartTextLink';
import { TocRenderer as Component } from './TocRenderer';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    mdxSize: defaultArgs.mdxSize,
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    mdxSize: defaultArgTypes.mdxSize,
  },
  component: Component,
  decorators: [withRouter],
  title: 'MDX/TocRenderer',
};

type Args = BraidArgs;

export const TocRenderer = ({ braidThemeName }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <Stack space="medium">
      <Component document={HeadingMarkdown}>
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
      </Component>
    </Stack>
  </BraidStorybookProvider>
);
TocRenderer.storyName = 'TocRenderer';
