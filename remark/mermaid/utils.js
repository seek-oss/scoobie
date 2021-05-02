/* eslint-disable no-sync */

const { execSync } = require('child_process');
const crypto = require('crypto');
const path = require('path');

const fs = require('fs-extra');
const which = require('which');

const { MERMAID_DIR, PLUGIN_NAME } = require('./constants');

let mmdcPath;

const CSS_PATH = path.join(__dirname, 'style.css');
const MERMAID_BASE_CONFIG_PATH = path.join(__dirname, 'mermaid.config.json');
const PUPPETEER_CONFIG_PATH = path.join(__dirname, 'puppeteer.config.json');

const createHash = (...data) =>
  data
    .map((datum) =>
      crypto.createHmac('sha1', PLUGIN_NAME).update(datum).digest('hex'),
    )
    .reduce(
      (hmac, hex) => hmac.update(hex),
      crypto.createHmac('sha1', PLUGIN_NAME),
    )
    .digest('hex');

const loadBaseMermaidConfig = (rootDir) => {
  const baseConfig = fs.readJsonSync(MERMAID_BASE_CONFIG_PATH);

  const themeCSS = fs.readFileSync(CSS_PATH, 'utf8');

  baseConfig.themeCSS = themeCSS;

  const basePath = path.join(rootDir, MERMAID_DIR, '.mermaid.config.json');

  fs.writeJsonSync(basePath, baseConfig);

  return {
    baseConfig,
    basePath,
  };
};

const resolveMermaidConfig = (rootDir, mmdPath) => {
  // Do not cache so we can hot-reload changes to config
  const { baseConfig, basePath } = loadBaseMermaidConfig(rootDir);

  const baseResponse = {
    configData: JSON.stringify(baseConfig),
    configPath: basePath,
  };

  // No path, so there can't be a corresponding .mmd.json file
  if (!mmdPath) {
    return baseResponse;
  }

  const inputConfigPath = `${mmdPath}.json`;

  // Merge in config from corresponding .mmd.json file if it exists
  try {
    const inputConfig = fs.readJsonSync(inputConfigPath);

    const configData = JSON.stringify({
      ...baseConfig,
      ...inputConfig,
    });

    const hash = createHash(configData);

    const outputConfigPath = path.join(
      rootDir,
      MERMAID_DIR,
      `.${hash}.mmd.json`,
    );

    fs.writeFileSync(outputConfigPath, configData);

    return {
      configData,
      configPath: outputConfigPath,
    };
  } catch (err) {
    if (typeof err === 'object' && err !== null && err.code === 'ENOENT') {
      return baseResponse;
    }

    throw err;
  }
};

const generateFilePaths = (rootDir, data) => {
  const hash = createHash(...data);

  return {
    mmdPath: path.join(rootDir, MERMAID_DIR, `.${hash}.mmd`),
    // `imageToJsx` will resolve this URL relative to `rootDir`.
    svgNodeUrl: path.join('/', MERMAID_DIR, `.${hash}.svg`),
    svgPath: path.join(rootDir, MERMAID_DIR, `.${hash}.svg`),
  };
};

const mmdc = ({ configPath, mmdPath, svgPath }) => {
  const command = [
    mmdcPath || (mmdcPath = which.sync('mmdc')),
    '--backgroundColor',
    'transparent',
    '--configFile',
    configPath,
    '--input',
    mmdPath,
    '--output',
    svgPath,
    '--puppeteerConfigFile',
    PUPPETEER_CONFIG_PATH,
  ].join(' ');

  execSync(command);
};

/**
 * Accepts the `mmdData` of the graph as a string, and render an SVG using
 * mermaid CLI. Returns the path to the rendered SVG.
 *
 * @param  {string} mmdData
 * @param  {string} rootDir
 * @return {string}
 */
function render(mmdData, rootDir) {
  const { configData, configPath } = resolveMermaidConfig(rootDir);

  const { mmdPath, svgNodeUrl, svgPath } = generateFilePaths(rootDir, [
    configData,
    mmdData,
  ]);

  if (fs.existsSync(svgPath)) {
    // Our filename is based on a hash of the config and diagram. If the file
    // exists, we know it's already up-to-date.
    return svgNodeUrl;
  }

  // Write temporary file
  fs.outputFileSync(mmdPath, mmdData);

  // Invoke mermaid CLI
  mmdc({ configPath, mmdPath, svgPath });

  // Clean up temporary file
  fs.removeSync(mmdPath);

  return svgNodeUrl;
}

/**
 * Accepts the `source` of the graph as a string, and render an SVG using
 * mermaid CLI. Returns the path to the rendered SVG.
 *
 * @param  {string} mmdPath
 * @param  {string} rootDir
 * @return {string}
 */
function renderFromFile(mmdPath, rootDir) {
  const { configData, configPath } = resolveMermaidConfig(rootDir, mmdPath);

  const mmdData = fs.readFileSync(mmdPath);

  const { svgNodeUrl, svgPath } = generateFilePaths(rootDir, [
    configData,
    mmdData,
  ]);

  if (fs.existsSync(svgPath)) {
    // Our filename is based on a hash of the config and diagram. If the file
    // exists, we know it's already up-to-date.
    return svgNodeUrl;
  }

  // Invoke mermaid CLI
  mmdc({ configPath, mmdPath, svgPath });

  return svgNodeUrl;
}

/**
 * Given the contents, returns a MDAST representation of a HTML node.
 *
 * @param  {string} contents
 * @return {object}
 */
function createMermaidDiv(contents) {
  return {
    type: 'html',
    value: `<div class="mermaid">
  ${contents}
</div>`,
  };
}

module.exports = {
  createMermaidDiv,
  render,
  renderFromFile,
};
