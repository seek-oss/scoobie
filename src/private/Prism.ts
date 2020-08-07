import { Language, Prism } from 'prism-react-renderer';

interface GlobalOrWindow {
  Prism?: typeof Prism;
}

/**
 * Gross!
 *
 * {@link https://github.com/FormidableLabs/prism-react-renderer#faq}
 */
((typeof global !== 'undefined'
  ? global
  : window) as GlobalOrWindow).Prism = Prism;

require('prismjs/components/prism-http');
require('prismjs/components/prism-splunk-spl');

export { Prism } from 'prism-react-renderer';
export { default as prismTheme } from 'prism-react-renderer/themes/github';

const CODE_LANGUAGE_REPLACEMENTS: Record<string, string> = {
  gql: 'graphql',
  js: 'javascript',
  jsonc: 'json',
  sh: 'bash',
  shell: 'bash',
  splunk: 'splunk-spl',
  ts: 'typescript',
};

// The Language type is pointless. We extend it, and there is a fallback anyway.
export const prismLanguage = (language: string) =>
  (CODE_LANGUAGE_REPLACEMENTS[language] ?? language) as Language;
