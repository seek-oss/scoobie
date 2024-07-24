import { Prism } from 'prism-react-renderer';
// @ts-expect-error
import bashLang from 'refractor/lang/bash';
// @ts-expect-error
import csharpLang from 'refractor/lang/csharp';
// @ts-expect-error
import diffLang from 'refractor/lang/diff';
// @ts-expect-error
import httpLang from 'refractor/lang/http';
// @ts-expect-error
import javaLang from 'refractor/lang/java';
// @ts-expect-error
import jsonLang from 'refractor/lang/json';
// @ts-expect-error
import phpLang from 'refractor/lang/php';
// @ts-expect-error
import splunkSplLang from 'refractor/lang/splunk-spl';

bashLang(Prism);
csharpLang(Prism);
diffLang(Prism);
httpLang(Prism);
javaLang(Prism);
jsonLang(Prism);
phpLang(Prism);
splunkSplLang(Prism);

export { Prism } from 'prism-react-renderer';
export { themes } from 'prism-react-renderer';

const DEFAULT_LANGUAGE = 'text';

const DISPLAY_LANGUAGE_REPLACEMENTS: Record<string, string> = {
  'splunk-spl': 'Splunk SPL',
  csharp: 'C#',
  fsharp: 'F#',
  graphql: 'GraphQL',
  html: 'HTML',
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
  return PRISM_LANGUAGE_REPLACEMENTS[lower] ?? lower;
};

export const displayLanguage = (language?: string) => {
  const prism = prismLanguage(language);

  return DISPLAY_LANGUAGE_REPLACEMENTS[prism] ?? titleCase(prism);
};
