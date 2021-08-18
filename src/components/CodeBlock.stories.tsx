import '../storybook/register';

import React from 'react';
import { boolean, select, text } from 'sku/@storybook/addon-knobs';
import { storiesOf } from 'sku/@storybook/react';

import { withDecorator } from '../storybook/decorator';
import { StorybookProvider } from '../storybook/provider';

import { CodeBlock } from './CodeBlock';

storiesOf('CodeBlock', module)
  .add('Single', () => (
    <StorybookProvider>
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
    </StorybookProvider>
  ))
  .add('Multi', () => (
    <StorybookProvider>
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
    </StorybookProvider>
  ))
  .addDecorator(withDecorator);
