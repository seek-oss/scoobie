const path = require('path');

const findUp = require('find-up');
const visit = require('unist-util-visit');

const UNSTYLED_DIRECTIVE = '=style=none';
const TITLE_DIRECTIVE = /^=([0-9]*)x([0-9]*)$/;

/**
 * @param {string} str
 */
const cleanseDoubleQuotes = (str) => str.replace(/"/g, "''");

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
 * @param {string} inputTitle
 * @returns {{
 *   style: 'default' | 'none';
 *   styleLines: string[];
 *   title: string;
 * }}
 */
const processTitle = (inputTitle) => {
  let width = '';
  let height = '';
  let style = 'default';

  const title = cleanseDoubleQuotes(
    inputTitle
      .split(' ')
      .reduce((acc, segment) => {
        const matchResult = TITLE_DIRECTIVE.exec(segment);
        if (matchResult !== null) {
          width = matchResult[1];
          height = matchResult[2];
          return acc;
        }

        if (segment === UNSTYLED_DIRECTIVE) {
          style = 'none';
          return acc;
        }

        acc.push(segment);

        return acc;
      }, [])
      .join(' '),
  );

  if (width === '' && height === '') {
    return {
      style,
      styleLines: [],
      title,
    };
  }

  const props = [
    ...(height === '' ? [] : [`height: ${height}`]),
    ...(width === '' ? [] : ["maxWidth: '100%'", `width: ${width}`]),
  ].join(', ');

  return {
    style,
    styleLines: [`  style={{ ${props} }}`],
    title,
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

  // Resolve default export for other images
  return `require('${processModulePath(url)}').default`;
};

/**
 * Transform `![]()` image nodes into JSX nodes that are compatible with the
 * Webpack image loaders baked into sku.
 */
module.exports.imageToJsx = () => (tree, file) => {
  const processModulePath = createModulePathProcessor(file);

  return visit(tree, 'image', (node) => {
    if (
      typeof node.url !== 'string' ||
      node.url.includes("'") ||
      node.url.includes('"')
    ) {
      return;
    }

    const { style, styleLines, title } = processTitle(node.title || '');

    const imageSrc = inferImageSrc(processModulePath, node.url);

    node.type = 'jsx';

    node.value = [
      '<img',
      `  alt="${cleanseDoubleQuotes(node.alt || '')}"`,
      // Custom styling attribute for the MDX `<img>` renderer.
      `  data-scoobie-style="${style}"`,
      `  src={${imageSrc}}`,
      ...styleLines,
      `  title="${title}"`,
      `/>`,
    ].join('\n');

    delete node.alt;
    delete node.title;
    delete node.url;
  });
};
