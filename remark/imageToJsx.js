const path = require('path');

const findUp = require('find-up');
const visit = require('unist-util-visit');

const TITLE_REGEX = /^=([0-9]*)x([0-9]*) ?(.*)$/;

/**
 * @param {string} str
 */
const cleanseDoubleQuotes = (str) => str.replace('"', "''");

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
 * Transform `![]()` image nodes into JSX nodes that are compatible with the
 * Webpack image loaders baked into sku.
 */
module.exports.imageToJsx = () => (tree, file) => {
  const processModulePath = createModulePathProcessor(file);

  const svgToJsx = (node) => {
    node.type = 'jsx';

    node.value = [
      '<span',
      '  dangerouslySetInnerHTML={{',
      `    __html: require('${processModulePath(node.url)}').default,`,
      '  }}',
      `  title="${cleanseDoubleQuotes(node.title || node.alt || '')}"`,
      '/>',
    ].join('\n');

    delete node.alt;
    delete node.title;
    delete node.url;
  };

  return visit(tree, 'image', (node) => {
    if (
      typeof node.url !== 'string' ||
      node.url.includes("'") ||
      node.url.includes('"')
    ) {
      return;
    }

    if (node.url.endsWith('.svg')) {
      return node.url.startsWith('https://') ? undefined : svgToJsx(node);
    }

    const imageSrc = node.url.startsWith('https://')
      ? `"${node.url}"`
      : `{require('${processModulePath(node.url)}').default}`;

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
