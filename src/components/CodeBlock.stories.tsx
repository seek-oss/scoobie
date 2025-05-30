import type { Meta, StoryObj } from '@storybook/react';

import { CodeBlock as Component } from './CodeBlock';

export default {
  title: 'Standalone/CodeBlock',
  component: Component,
  args: {
    graphqlPlayground: 'https://manage.developer.seek.com/graphql-explorer',
    initialIndex: 0,
    language: 'graphql',
    trim: true,
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Single: Story = {
  args: {
    children: 'query {\n  version\n}\n',
  },
};

export const Multi: Story = {
  args: {
    children: [
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
    ],
    initialIndex: 1,
  },
  parameters: {
    docs: {
      source: {
        /**
         * Storybook mangles the children array without this.
         *
         * ```text
         * Objects are not valid as a React child (found: object with keys {code, label, language}).
         * If you meant to render a collection of children, use an array instead.
         * ```
         *
         * {@link https://github.com/storybookjs/storybook/issues/11543#issuecomment-684130442}
         */
        type: 'code',
      },
    },
  },
};

export const Bash: Story = {
  args: {
    language: 'bash',
    children: 'echo "Hello, World!"\n',
  },
};

export const Csharp: Story = {
  args: {
    language: 'csharp',
    children:
      'using System;\n\npublic class Program\n{\n    public static void Main()\n    {\n        Console.WriteLine("Hello, World!");\n    }\n}\n',
  },
};

export const Diff: Story = {
  args: {
    language: 'diff',
    children:
      '--- a/oldfile\n+++ b/newfile\n@@ -1,3 +1,3 @@\n-Hello, World!\n+Goodbye, World!\n',
  },
};

export const GraphQl: Story = {
  args: {
    language: 'graphql',
    children: 'query {\n  version\n}\n',
  },
};

export const Html: Story = {
  args: {
    language: 'html',
    children:
      '<html>\n  <body>\n    <h1>Hello, World!</h1>\n  </body>\n</html>\n',
  },
};

export const Http: Story = {
  args: {
    language: 'http',
    children: 'GET / HTTP/1.1\nHost: example.com\n\n',
  },
};

export const Java: Story = {
  args: {
    language: 'java',
    children:
      'public class Program {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}\n',
  },
};

export const Javascript: Story = {
  args: {
    language: 'javascript',
    children: 'console.log("Hello, World!");\n',
  },
};

export const Json: Story = {
  args: {
    language: 'json',
    children: '{\n  "hello": "world"\n}\n',
  },
};

export const Jsonc: Story = {
  args: {
    language: 'jsonc',
    children: '{\n  // "hello": "world"\n "goodbye": "world"\n}\n',
  },
};

export const JSX: Story = {
  args: {
    language: 'jsx',
    children: 'const MyComponent = () => <div>Hello, World!</div>;\n',
  },
};

export const Kotlin: Story = {
  args: {
    language: 'kotlin',
    children: 'fun main() {\n    println("Hello, World!")\n}\n',
  },
};

export const Php: Story = {
  args: {
    language: 'php',
    children: '<?php\n\necho "Hello, World!";\n',
  },
};

export const Python: Story = {
  args: {
    language: 'python',
    children: 'print("Hello, World!")\n',
  },
};

export const Shell: Story = {
  args: {
    language: 'shell',
    children: 'echo "Hello, World!"\n',
  },
};

export const Sql: Story = {
  args: {
    language: 'sql',
    children: 'SELECT "Hello, World!";\n',
  },
};

export const Swift: Story = {
  args: {
    language: 'swift',
    children: 'print("Hello, World!")\n',
  },
};

export const SplunkSpl: Story = {
  args: {
    language: 'splunk-spl',
    children:
      'index=_internal sourcetype=splunkd\n| stats count by component\n',
  },
};

export const XML: Story = {
  args: {
    language: 'xml',
    children: '<xml>\n  <message>Hello, World!</message>\n</xml>\n',
  },
};
