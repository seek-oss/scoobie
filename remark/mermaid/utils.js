/* eslint-disable no-sync */

const { execSync } = require('child_process');
const crypto = require('crypto');
const path = require('path');

const fs = require('fs-extra');
const which = require('which');

const PLUGIN_NAME = 'remark-mermaid';

let mmdcPath;

const CSS_PATH = path.join(__dirname, 'style.css');
const MERMAID_BASE_CONFIG_PATH = path.join(__dirname, 'mermaid.config.json');
const MERMAID_RENDER_CONFIG_PATH = path.join(__dirname, '.mermaid.config.json');
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

const loadBaseMermaidConfig = () => {
  const baseConfig = fs.readJsonSync(MERMAID_BASE_CONFIG_PATH);

  const themeCSS = fs.readFileSync(CSS_PATH, 'utf8');

  baseConfig.themeCSS = themeCSS;

  fs.writeJsonSync(MERMAID_RENDER_CONFIG_PATH, baseConfig);

  return {
    baseConfig,
    basePath: MERMAID_RENDER_CONFIG_PATH,
  };
};

const resolveMermaidConfig = (mmdPath) => {
  // Do not cache so we can hot-reload changes to config
  const { baseConfig, basePath } = loadBaseMermaidConfig();

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

    const outputConfigPath = path.join(__dirname, `.${hash}.mmd.json`);

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

const generateFilePaths = (...data) => {
  const hash = createHash(...data);

  return {
    mmdPath: path.join(__dirname, `.${hash}.mmd`),
    // Scoobie will resolve this URL relative to repo root
    svgNodeUrl: path.join('/mermaid', `.${hash}.svg`),
    svgPath: path.join(__dirname, `.${hash}.svg`),
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
 * @param  {string} _destination
 * @return {string}
 */
function render(mmdData, _destination) {
  const { configData, configPath } = resolveMermaidConfig();

  const { mmdPath, svgNodeUrl, svgPath } = generateFilePaths(
    configData,
    mmdData,
  );

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
 * @param  {string} _destination
 * @return {string}
 */
function renderFromFile(mmdPath, _destination) {
  const { configData, configPath } = resolveMermaidConfig(mmdPath);

  const mmdData = fs.readFileSync(mmdPath);

  const { svgNodeUrl, svgPath } = generateFilePaths(configData, mmdData);

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
 * Returns the destination for the SVG to be rendered at, explicity defined
 * using `vFile.data.destinationDir`, or falling back to the file's current
 * directory.
 *
 * @param {vFile} vFile
 * @return {string}
 */
function getDestinationDir(vFile) {
  if (vFile.data.destinationDir) {
    return vFile.data.destinationDir;
  }

  return vFile.dirname;
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
  getDestinationDir,
  render,
  renderFromFile,
};
