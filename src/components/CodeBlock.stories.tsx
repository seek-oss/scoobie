import '../storybook/register';

import { boolean, select, text } from 'sku/@storybook/addon-knobs';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { BraidStorybookProvider, withProviders } from '../storybook/provider';

import { CodeBlock } from './CodeBlock';

storiesOf('CodeBlock', module)
  .add('Single', () => (
    <BraidStorybookProvider>
      <CodeBlock
        language={text('language', 'graphql')}
        graphqlPlayground={text(
          'graphqlPlayground',
          'https://graphql.seek.com/graphql',
        )}
        size={select('size', ['standard', 'large'], 'standard')}
        trim={boolean('trim', true)}
      >
        {text('children', 'query {\n  version\n}\n')}
      </CodeBlock>
    </BraidStorybookProvider>
  ))
  .add('Multi', () => (
    <BraidStorybookProvider>
      <CodeBlock
        graphqlPlayground={text(
          'graphqlPlayground',
          'https://graphql.seek.com/graphql',
        )}
        size={select('size', ['standard', 'large'], 'standard')}
        trim={boolean('trim', true)}
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
    </BraidStorybookProvider>
  ))
  .addDecorator(withProviders);
