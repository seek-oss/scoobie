const path = require('path');

const findUp = require('find-up');
const visit = require('unist-util-visit');

const TITLE_REGEX = /^=([0-9]*)x([0-9]*) ?(.*)$/;

/**
 * @param {string} str
 */
const cleanseDoubleQuotes = (str) => str.replace('"', "''");

const containsParagraphNode = (node) =>
  (node.type === 'jsx' &&
    typeof node.value === 'string' &&
    node.value.toLocaleLowerCase().trim().replace(/[\s/]/g, '') === '<p>') ||
  (Array.isArray(node.children) && node.children.some(containsParagraphNode));

let $repoRoot;
/**
 * @returns {string}
 */
const findRepoRoot = () =>
  $repoRoot ||
  ($repoRoot = (() => {
    const dotGitPath = findUp.sync('.git', { type: 'directory' });

    if (typeof dotGitPath === 'undefined') {
      throw Error('could not find repository root');
    }

    return path.resolve(path.join(dotGitPath, '..'));
  })());

/**
 * @param {string} str
 */
const processTitle = (str) => {
  const matchResult = TITLE_REGEX.exec(str);

  if (matchResult === null) {
    return {
      styleLines: [],
      title: str,
    };
  }

  const [, width, height, title] = matchResult;

  if (width === '' && height === '') {
    return {
      styleLines: [],
      title,
    };
  }

  const props = [
    ...(height === '' ? [] : [`height: ${height}`]),
    ...(width === '' ? [] : ["maxWidth: '100%'", `width: ${width}`]),
  ].join(', ');

  return {
    styleLines: [`  style={{ ${props} }}`],
    title,
  };
};

/**
 * @param {{history: Array<string|void>}} file
 */
const createModulePathProcessor = (file) => {
  const filePath = file.history[0];

  if (typeof filePath === 'undefined') {
    throw Error('could not extract file path');
  }

  const fileDir = path.dirname(filePath);

  const repoRoot = findRepoRoot();

  return (modulePath) => {
    if (modulePath.startsWith('.')) {
      return modulePath;
    }

    let newModulePath = modulePath;

    if (modulePath.startsWith('/')) {
      newModulePath = path.relative(fileDir, path.join(repoRoot, modulePath));
    }

    return newModulePath.startsWith('.') ? newModulePath : `./${newModulePath}`;
  };
};

/**
 * Infer JSX `src` from an incoming image URL.
 *
 * @param {(modulePath: string) => string} processModulePath
 * @param {string} url
 * @returns {string}
 */
const inferImageSrc = (processModulePath, url) => {
  if (url.includes("'") || url.includes('"')) {
    throw Error('URL cannot contain unescaped quotes');
  }

  // Use directly
  if (url.startsWith('https://')) {
    return `"${encodeURI(url)}"`;
  }

  // Resolve direct export for SVGs
  if (url.endsWith('.svg')) {
    return `{require('${processModulePath(url)}')}`;
  }

  // Resolve default export for other images
  return `{require('${processModulePath(url)}').default}`;
};

/**
 * Transform `![]()` image nodes into JSX nodes that can be loaded by Webpack.
 */
module.exports.remarkImgFixer = () => (tree, file) => {
  const processModulePath = createModulePathProcessor(file);

  return visit(tree, 'image', (node) => {
    if (
      typeof node.url !== 'string' ||
      node.url.includes("'") ||
      node.url.includes('"')
    ) {
      return;
    }

    const imageSrc = inferImageSrc(processModulePath, node.url);

    const { styleLines, title } = processTitle(node.title || '');

    node.type = 'jsx';

    node.value = [
      '<img',
      `  alt="${cleanseDoubleQuotes(node.alt || '')}"`,
      `  src=${imageSrc}`,
      ...styleLines,
      `  title="${cleanseDoubleQuotes(title)}"`,
      `/>`,
    ].join('\n');

    delete node.alt;
    delete node.title;
    delete node.url;
  });
};

module.exports.remarkSlug = require('remark-slug');

/**
 * Treat all list items as if they have a blank line between them.
 *
 * This achieves consistent spacing between items.
 */
module.exports.remarkSpreadListItems = () => (tree) =>
  visit(tree, 'listItem', (node) => (node.spread = true));

/**
 * Apply default formatting to table cells for improved rendering in a Braid
 * context:
 *
 * - Wrap cell in a `<strong>` if it is a header cell
 * - Wrap cell in a `<p>`
 *
 * This can be disabled by using an explicit `<p>` tag in the cell.
 */
module.exports.remarkTableFixer = () => (tree) =>
  visit(tree, 'table', (node) =>
    node.children.forEach((row, rowIndex) =>
      row.children.forEach((cell) => {
        if (containsParagraphNode(cell)) {
          return;
        }

        if (rowIndex === 0) {
          cell.children = [
            {
              children: cell.children,
              type: 'strong',
            },
          ];
        }

        cell.children = [
          {
            children: cell.children,
            type: 'paragraph',
          },
        ];
      }),
    ),
  );

module.exports.remarkPlugins = [
  module.exports.remarkSlug,
  module.exports.remarkSpreadListItems,
  module.exports.remarkTableFixer,
  module.exports.remarkSvgFixer,
  module.exports.remarkImgFixer,
];
