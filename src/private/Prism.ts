import { Language, Prism } from 'prism-react-renderer';
// @ts-ignore
import csharpLang from 'refractor/lang/csharp';
// @ts-ignore
import httpLang from 'refractor/lang/http';
// @ts-ignore
import splunkSplLang from 'refractor/lang/splunk-spl';

csharpLang(Prism);
httpLang(Prism);
splunkSplLang(Prism);

export { Prism } from 'prism-react-renderer';
export { default as prismTheme } from 'prism-react-renderer/themes/github';

const DEFAULT_LANGUAGE = 'text' as Language;

const DISPLAY_LANGUAGE_REPLACEMENTS: Record<string, string> = {
  'splunk-spl': 'Splunk SPL',
  csharp: 'C#',
  fsharp: 'C#',
  graphql: 'GraphQL',
  http: 'HTTP',
  javascript: 'JavaScript',
  json: 'JSON',
  jsx: 'JSX',
  php: 'PHP',
  sql: 'SQL',
  toml: 'TOML',
  tsx: 'TSX',
  typescript: 'TypeScript',
  yaml: 'YAML',
};

const PRISM_LANGUAGE_REPLACEMENTS: Record<string, string> = {
  'c#': 'csharp',
  cs: 'csharp',
  dotnet: 'csharp',
  gql: 'graphql',
  js: 'javascript',
  jsonc: 'json',
  md: 'markdown',
  sh: 'bash',
  shell: 'bash',
  splunk: 'splunk-spl',
  ts: 'typescript',
  vb: 'visual-basic',
  vba: 'visual-basic',
  yml: 'yaml',
};

const titleCase = (kebabcased: string) =>
  kebabcased
    .split('-')
    .map((segment) =>
      segment
        ? `${segment[0].toLocaleUpperCase()}${segment.slice(1)}`
        : segment,
    )
    .join(' ');

export const prismLanguage = (language?: string) => {
  const lower = (language ?? DEFAULT_LANGUAGE).toLocaleLowerCase();

  // This type is pointless. We extend it and there is a fallback anyway.
  return (PRISM_LANGUAGE_REPLACEMENTS[lower] ?? lower) as Language;
};

export const displayLanguage = (language?: string) => {
  const prism = prismLanguage(language);

  return DISPLAY_LANGUAGE_REPLACEMENTS[prism] ?? titleCase(prism);
};
