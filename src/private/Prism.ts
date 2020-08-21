import { Language, Prism } from 'prism-react-renderer';
// @ts-ignore
import httpLang from 'refractor/lang/http';
// @ts-ignore
import splunkSplLang from 'refractor/lang/splunk-spl';

httpLang(Prism);
splunkSplLang(Prism);

export { Prism } from 'prism-react-renderer';
export { default as prismTheme } from 'prism-react-renderer/themes/github';

const DISPLAY_LANGUAGE_REPLACEMENTS: Record<string, string> = {
  'splunk-spl': 'Splunk SPL',
  bash: 'Bash',
  csharp: 'C#',
  graphql: 'GraphQL',
  go: 'Go',
  markdown: 'Markdown',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  text: 'Text',
};

const PRISM_LANGUAGE_REPLACEMENTS: Record<string, string> = {
  'c#': 'csharp',
  gql: 'graphql',
  js: 'javascript',
  jsonc: 'json',
  sh: 'bash',
  shell: 'bash',
  splunk: 'splunk-spl',
  ts: 'typescript',
};

export const displayLanguage = (language: string) => {
  const prism = prismLanguage(language);

  return DISPLAY_LANGUAGE_REPLACEMENTS[prism] ?? prism.toLocaleUpperCase();
};

export const prismLanguage = (language: string) => {
  const lower = language.toLocaleLowerCase();

  // This type is pointless. We extend it and there is a fallback anyway.
  return (PRISM_LANGUAGE_REPLACEMENTS[lower] ?? lower) as Language;
};
