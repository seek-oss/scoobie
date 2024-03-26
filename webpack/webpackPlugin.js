const remarkGfm = require('remark-gfm').default;

const { recmaPlugins } = require('../recma');
const { rehypePlugins } = require('../rehype');
const { remarkPlugin } = require('../remark');

const ruleTestsToRemove = new Set([String(/\.svg$/)]);

const createMdxRule = (remarkPlugins) => ({
  test: /\.mdx?$/i,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
    {
      loader: '@mdx-js/loader',
      options: {
        providerImportSource: '@mdx-js/react',
        remarkPlugins,
        recmaPlugins,
        rehypePlugins,
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

export class ScoobieWebpackPlugin {
  constructor(config = {}) {
    const defaultRemarkPlugins = [
      remarkGfm,
      ...(config.mermaid ? [[remarkPlugin.mermaid, config.mermaid]] : []),
      remarkPlugin.slug,
      remarkPlugin.mergeCodeBlocks,
      remarkPlugin.spreadListItems,
      remarkPlugin.formatTableCells,
      remarkPlugin.importImages,
    ];

    this.remarkPlugins = config.remark
      ? config.remark(defaultRemarkPlugins)
      : defaultRemarkPlugins;
  }

  apply(compiler) {
    /**
     * Get rid of the SVG rules from `SkuWebpackPlugin`.
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
      (rule) =>
        !(typeof rule === 'object' && rule !== null) ||
        !ruleTestsToRemove.has(String(rule.test)),
    );

    rules.push(createMdxRule(this.remarkPlugins));
    rules.push(createSvgRule(compiler));

    compiler.options.module.rules = rules;
  }
}
