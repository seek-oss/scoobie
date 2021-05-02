const { remarkPlugins: defaultRemarkPlugins } = require('../remark');

/**
 * Vendored from `sku/config/webpack/utils`.
 *
 * {@link https://github.com/seek-oss/sku/blob/v10.12.0/config/webpack/utils/index.js#L10-L11}
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

const createSvgRules = (compiler, mermaid) => [
  {
    test: /\.svg$/i,
    ...(mermaid && { exclude: [mermaid.path] }),
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
              inlineStyles: {
                onlyMatchedOnce: false,
              },
            },
          ],
        },
      },
    ],
  },
  ...(mermaid && [
    {
      test: /.svg$/,
      include: [mermaid.path],
      use: [
        {
          loader: require.resolve('raw-loader'),
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
                addClassesToSVGElement: {
                  className: 'mermaidDiagram',
                },
              },
              {
                removeViewBox: false,
              },
              {
                // For some reason, this destyles Mermaid flow charts.
                inlineStyles: false,
              },
            ],
          },
        },
      ],
    },
  ]),
];

class ScoobieWebpackPlugin {
  /**
   * @param {{
   *   mermaid?: {
   *     path: string;
   *   };
   *   remark?: (defaultPlugins: unknown[]) => unknown[];
   * }} config
   */
  constructor(config = {}) {
    this.mermaid = config.mermaid;

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

    rules.push(
      createMdxRule(this.remarkPlugins),
      ...createSvgRules(compiler, this.mermaid),
    );

    compiler.options.module.rules = rules;
  }
}

module.exports = {
  ScoobieWebpackPlugin,
};
