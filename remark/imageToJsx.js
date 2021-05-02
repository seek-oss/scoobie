const path = require('path');

const findUp = require('find-up');
const visit = require('unist-util-visit');

const INLINE_DIRECTIVE = '=inline'
const TITLE_DIRECTIVE = /^=([0-9]*)x([0-9]*)$/;

/**
 * @param {string} str
 */
const cleanseDoubleQuotes = (str) => str.replace('"', "''");

/**
 *
 * @param {string} url
 */
const isSvgUrl = (url) => url.toLocaleLowerCase().endsWith('.svg');

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
 * @param {string} inputUrl
 */
const processTitle = (inputTitle, inputUrl) => {
  let width = '';
  let height = '';
  let inlineSvg = false;

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

        if (segment === INLINE_DIRECTIVE) {
          inlineSvg = inlineSvg || isSvgUrl(inputUrl);
          return acc;
        }

        acc.push(segment);

        return acc;
      }, [])
      .join(' '),
  );

  if (width === '' && height === '') {
    return {
      inlineSvg,
      styleLines: [],
      title,
    };
  }

  const props = [
    ...(height === '' ? [] : [`height: ${height}`]),
    ...(width === '' ? [] : ["maxWidth: '100%'", `width: ${width}`]),
  ].join(', ');

  return {
    inlineSvg,
    styleLines: [`  style={{ ${props} }}`],
    title,
  };
};

/**
 * Infer JSX `src` from an incoming image URL.
 *
 * @param {(modulePath: string) => string} processModulePath
 * @param {string} url
 * @param {boolean} inline - Whether an SVG should be rendered inline with the
 *                           HTML document or referenced as an external image.
 * @returns {string}
 */
const inferImageSrc = (processModulePath, url, inlineSvg) => {
  if (url.includes("'") || url.includes('"')) {
    throw Error('URL cannot contain unescaped quotes');
  }

  // Use directly
  if (url.startsWith('https://')) {
    return `"${encodeURI(url)}"`;
  }

  // Resolve direct export for file-loaded SVGs
  if (!inlineSvg && isSvgUrl(url)) {
    return `require('${processModulePath(url)}')`;
  }

  // Resolve default export for other images and raw-loaded SVGs
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

    const { inlineSvg, styleLines, title } = processTitle(
      node.title || '',
      node.url,
    );

    const imageSrc = inferImageSrc(processModulePath, node.url, inlineSvg);

    node.type = 'jsx';

    node.value = inlineSvg
      ? [
          '<span',
          '  dangerouslySetInnerHTML={{',
          `    __html: ${imageSrc},`,
          '  }}',
          `  title="${title || cleanseDoubleQuotes(node.alt || '')}"`,
          '/>',
        ].join('\n')
      : [
          '<img',
          `  alt="${cleanseDoubleQuotes(node.alt || '')}"`,
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
