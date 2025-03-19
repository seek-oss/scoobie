import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const header = `const { Prism, themes } = require('prism-react-renderer'); /* eslint-disable */`;
const footer = `module.exports = { Prism, themes };`;

// Also see src/private/prismUtils.ts for language names
const languages = [
  // Required for other languages
  'markup-templating',

  'bash',
  'csharp',
  'diff',
  'http',
  'java',
  'php',
  'splunk-spl',
];

const languageDefinitions = await Promise.all(
  languages.map(async (language) => {
    const definition = await fs.readFile(
      fileURLToPath(
        import.meta.resolve(`prismjs/components/prism-${language}.js`),
      ),
      'utf8',
    );
    return `// Language: ${language}\n\n${definition}\n\n`;
  }),
);

const content = [header, ...languageDefinitions, footer].join('\n');

await fs.writeFile(
  path.join(import.meta.dirname, 'src/private/Prism.js'),
  content,
);
