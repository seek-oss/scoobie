const { remarkPlugin } = require('../remark');

/**
 * Vendored from `sku/config/webpack/utils`.
 *
 * {@link https://github.com/seek-oss/sku/blob/v11.0.1/config/webpack/utils/index.js#L10-L11}
 */
const SKU_WEBPACK_UTILS = {
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

const createSvgRule = (compiler) => ({
  test: /\.svg$/i,
  use: [
    {
      loader: require.resolve('file-loader'),
      options: {
        // Avoid emitting static assets twice, which is unnecessary and can lead
        // to mismatches in markup.
        emitFile: compiler.options.name === 'client',
      },
    },
    {
      loader: require.resolve('svgo-loader'),
      options: {
        plugins: [
          {
            addAttributesToSVGElement: {
              attribute: 'focusable="false"',
            },
          },
          {
            removeViewBox: false,
          },
          {
            // This destyles mermaid diagram text for some reason.
            inlineStyles: false,
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
     * Get rid of the SVG loaders from `SkuWebpackPlugin`.
     *
     * `raw-loader` loads the SVG as raw HTML, which prevents us from styling
     * the container through the MDX processing pipeline. Instead, we load SVGs
     * into a regular `img` tag and style it like any other image.
     *
     * This means that you can't directly import an SVG into a JSX file. This
     * doesn't seem super useful in practice since you can natively represent
     * SVGs in JSX.
     */
    const rules = compiler.options.module.rules.filter(
      (rule) => !ruleTestsToRemove.has(String(rule.test)),
    );

    rules.push(createMdxRule(this.remarkPlugins));
    rules.push(createSvgRule(compiler));

    compiler.options.module.rules = rules;
  }
}

module.exports = {
  ScoobieWebpackPlugin,
};
