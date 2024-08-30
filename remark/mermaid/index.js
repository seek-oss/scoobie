/* eslint-disable no-sync */
const path = require('path');

const fs = require('fs-extra');
const visitParents = require('unist-util-visit-parents');

const { MERMAID_DIR } = require('./constants');
const { createMermaidRenderer } = require('./utils');

function mermaid(options) {
  const render = createMermaidRenderer(options);

  return function transformer(ast, file) {
    fs.ensureDirSync(path.join(options.rootDir, MERMAID_DIR));

    const instances = [];

    visitParents(ast, { type: 'code', lang: 'mermaid' }, (node, ancestors) => {
      instances.push([...ancestors, node]);
    });

    return render(
      instances.map((ancestors) => ancestors.at(-1)),
      options,
    ).then((results) => {
      for (const [i, ancestors] of instances.entries()) {
        const result = results[i];
        const node = ancestors.at(-1);
        const parent = ancestors.at(-2);
        const nodeIndex = parent.children.indexOf(node);

        if (result.status === 'fulfilled') {
          const { svgNodeUrl } = result.value;
          parent.children[nodeIndex] = {
            type: 'image',
            // Directive for Scoobie to skip custom SVG styling (e.g. box shadow).
            title: `${node.meta || ''} =style=none`,
            url: svgNodeUrl,
          };
        } else {
          const message = file.message(result.reason, {
            ruleId: 'remark-mermaidjs',
            source: 'remark-mermaidjs',
            ancestors,
          });
          message.fatal = true;
          throw message;
        }
      }
    });
  };
}

module.exports = {
  mermaid,
};
