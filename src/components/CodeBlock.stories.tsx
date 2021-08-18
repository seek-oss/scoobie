import 'braid-design-system/reset';
import 'loki/configure-react';

import { boolean, select, text } from '@storybook/addon-knobs';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { withDecorator } from '../storybook/decorator';

import { CodeBlock } from './CodeBlock';

storiesOf('CodeBlock', module)
  .addDecorator(withDecorator)
  .add('Single', () => (
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
  ))
  .add('Multi', () => (
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
  ));
