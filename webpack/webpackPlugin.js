const { remarkPlugin } = require('../remark');

/**
 * Vendored from `sku/config/webpack/utils`.
 *
 * {@link https://github.com/seek-oss/sku/blob/v11.0.1/config/webpack/utils/index.js#L10-L11}
 */
const SKU_WEBPACK_UTILS = {
  IMAGE: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
  SVG: /\.svg$/,
};

const ruleTestsToRemove = new Set(Object.values(SKU_WEBPACK_UTILS).map(String));

const createMdxRule = (remarkPlugins) => ({
  test: /\.mdx?$/i,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    },
    {
      loader: '@mdx-js/loader',
      options: {
        remarkPlugins,
      },
    },
  ],
});

/**
 * Avoid emitting static assets twice, which is unnecessary and can lead to
 * mismatches in markup.
 *
 * - `client` is from sku, which also has `render`.
 * - `preview` is from Storybook, which also has `manager`.
 *
 * {@link https://github.com/seek-oss/sku/blob/v11.0.2/config/webpack/webpack.config.js#L125}
 */
const shouldEmit = (compiler) =>
  compiler.options.name === 'client' || compiler.options.name === 'preview';

const createImageRule = (compiler) => ({
  test: [/\.jpe?g$/i, /\.png$/i],
  type: 'asset/resource',
  generator: {
    emit: shouldEmit(compiler),
  },
});

const createSvgRule = (compiler) => ({
  test: /\.svg$/i,
  type: 'asset/resource',
  generator: {
    emit: shouldEmit(compiler),
  },
  use: [
    {
      loader: require.resolve('svgo-loader'),
      options: {
        configFile: false,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                // This breaks our mermaid diagram `<style>`.
                inlineStyles: false,

                removeViewBox: false,
              },
            },
          },
          {
            name: 'removeAttrs',
            params: {
              attrs: 'style',
            },
          },
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ focusable: false }],
            },
          },
        ],
      },
    },
  ],
});

class ScoobieWebpackPlugin {
  /**
   * @param {{
   *   mermaid?: { rootDir: string };
   *   remark?: (defaultPlugins: unknown[]) => unknown[];
   * }} config
   */
  constructor(config = {}) {
    const defaultRemarkPlugins = [
      ...(config.mermaid ? [[remarkPlugin.mermaid, config.mermaid]] : []),
      remarkPlugin.slug,
      remarkPlugin.mergeCodeBlocks,
      remarkPlugin.spreadListItems,
      remarkPlugin.formatTableCells,
      remarkPlugin.imageToJsx,
    ];

    this.remarkPlugins = config.remark
      ? config.remark(defaultRemarkPlugins)
      : defaultRemarkPlugins;
  }

  apply(compiler) {
    /**
     * Get rid of the image and SVG rules from `SkuWebpackPlugin`.
     *
     * The image loaders can be made compatible, but it's probably better for us
     * to declare our own so we can manage the dependency between our Asset
     * Modules and Remark `imageToJsx` plugin.
     *
     * `asset/source` exports each SVG as source, which prevents us from styling
     * the container through the MDX processing pipeline. Instead, we load SVGs
     * into a regular `img` tag and style it like any other image.
     *
     * This means that you can't directly import an SVG into a JSX file. This
     * doesn't seem super useful in practice since you can natively represent
     * SVGs in JSX.
     *
     * {@link https://webpack.js.org/guides/asset-modules/}
     */
    const rules = compiler.options.module.rules.filter(
      (rule) => !ruleTestsToRemove.has(String(rule.test)),
    );

    rules.push(createMdxRule(this.remarkPlugins));
    rules.push(createImageRule(compiler));
    rules.push(createSvgRule(compiler));

    compiler.options.module.rules = rules;
  }
}

module.exports = {
  ScoobieWebpackPlugin,
};
