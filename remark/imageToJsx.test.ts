import path from 'path';

import { imageToJsx } from './imageToJsx';

describe('imageToJsx', () => {
  const runPlugin = (ast: Readonly<Record<string, unknown>>) => {
    const astCopy = { ...ast };

    imageToJsx()(astCopy, {
      history: [path.join(__dirname, 'test.mdx')],
    });

    return astCopy;
  };

  describe('non-SVG', () => {
    it('transforms relative image URL', () => {
      const ast = {
        type: 'image',
        url: './assets/image.png',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toMatchInlineSnapshot(`
        Object {
          "type": "jsx",
          "value": "<img
          alt=\\"\\"
          data-scoobie-style=\\"default\\"
          src={require('./assets/image.png')}
          title=\\"\\"
        />",
        }
      `);
    });

    it('transforms relative image URL without prefix', () => {
      const ast = {
        type: 'image',
        url: 'assets/image.png',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toMatchInlineSnapshot(`
        Object {
          "type": "jsx",
          "value": "<img
          alt=\\"\\"
          data-scoobie-style=\\"default\\"
          src={require('./assets/image.png')}
          title=\\"\\"
        />",
        }
      `);
    });

    it('transforms root-relative image URL in same directory', () => {
      const ast = {
        type: 'image',
        url: '/remark/image.png',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toMatchInlineSnapshot(`
        Object {
          "type": "jsx",
          "value": "<img
          alt=\\"\\"
          data-scoobie-style=\\"default\\"
          src={require('./image.png')}
          title=\\"\\"
        />",
        }
      `);
    });

    it('transforms root-relative image URL in different directory', () => {
      const ast = {
        type: 'image',
        url: '/src/assets/image.png',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toMatchInlineSnapshot(`
        Object {
          "type": "jsx",
          "value": "<img
          alt=\\"\\"
          data-scoobie-style=\\"default\\"
          src={require('../src/assets/image.png')}
          title=\\"\\"
        />",
        }
      `);
    });

    it('transforms external image URL', () => {
      const ast = {
        type: 'image',
        url: 'https://example.com/pong.png',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toMatchInlineSnapshot(`
        Object {
          "type": "jsx",
          "value": "<img
          alt=\\"\\"
          data-scoobie-style=\\"default\\"
          src={\\"https://example.com/pong.png\\"}
          title=\\"\\"
        />",
        }
      `);
    });

    it('supports title and alt props', () => {
      const ast = {
        type: 'image',
        url: 'https://example.com/pong.png',
        title: 'alpha""danger"alpha',
        alt: '"bravo"',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toMatchInlineSnapshot(`
        Object {
          "type": "jsx",
          "value": "<img
          alt=\\"''bravo''\\"
          data-scoobie-style=\\"default\\"
          src={\\"https://example.com/pong.png\\"}
          title=\\"alpha''''danger''alpha\\"
        />",
        }
      `);
    });

    it('pulls width from title', () => {
      const ast = {
        type: 'image',
        url: 'https://example.com/pong.png',
        title: '=100x',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toMatchInlineSnapshot(`
        Object {
          "type": "jsx",
          "value": "<img
          alt=\\"\\"
          data-scoobie-style=\\"default\\"
          src={\\"https://example.com/pong.png\\"}
          style={{ maxWidth: '100%', width: 100 }}
          title=\\"\\"
        />",
        }
      `);
    });

    it('pulls height from title', () => {
      const ast = {
        type: 'image',
        url: 'https://example.com/pong.png',
        title: '=x200',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toMatchInlineSnapshot(`
        Object {
          "type": "jsx",
          "value": "<img
          alt=\\"\\"
          data-scoobie-style=\\"default\\"
          src={\\"https://example.com/pong.png\\"}
          style={{ height: 200 }}
          title=\\"\\"
        />",
        }
      `);
    });

    it('pulls width and height from title', () => {
      const ast = {
        type: 'image',
        url: 'https://example.com/pong.png',
        title: '=100x200',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toMatchInlineSnapshot(`
        Object {
          "type": "jsx",
          "value": "<img
          alt=\\"\\"
          data-scoobie-style=\\"default\\"
          src={\\"https://example.com/pong.png\\"}
          style={{ height: 200, maxWidth: '100%', width: 100 }}
          title=\\"\\"
        />",
        }
      `);
    });

    it('preserves rest of the title', () => {
      const ast = {
        type: 'image',
        url: 'https://example.com/pong.png',
        title: '=100x Alpha',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toMatchInlineSnapshot(`
        Object {
          "type": "jsx",
          "value": "<img
          alt=\\"\\"
          data-scoobie-style=\\"default\\"
          src={\\"https://example.com/pong.png\\"}
          style={{ maxWidth: '100%', width: 100 }}
          title=\\"Alpha\\"
        />",
        }
      `);
    });

    it('respects unstyled directive', () => {
      const ast = {
        type: 'image',
        url: 'https://example.com/pong.png',
        title: 'Alpha =style=none',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toMatchInlineSnapshot(`
        Object {
          "type": "jsx",
          "value": "<img
          alt=\\"\\"
          data-scoobie-style=\\"none\\"
          src={\\"https://example.com/pong.png\\"}
          title=\\"Alpha\\"
        />",
        }
      `);
    });

    it('ignores missing URL', () => {
      const ast = {
        type: 'image',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toStrictEqual(ast);
    });

    it('ignores dangerous URL', () => {
      const ast = {
        type: 'image',
        url: "./'pong'.png",
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toStrictEqual(ast);
    });
  });

  describe('SVG', () => {
    it('transforms relative image URL', () => {
      const ast = {
        type: 'image',
        url: './drawing.svg',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toMatchInlineSnapshot(`
        Object {
          "type": "jsx",
          "value": "<img
          alt=\\"\\"
          data-scoobie-style=\\"default\\"
          src={require('./drawing.svg')}
          title=\\"\\"
        />",
        }
      `);
    });

    it('transforms root-relative image URL in same directory', () => {
      const ast = {
        type: 'image',
        url: '/remark/drawing.svg',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toMatchInlineSnapshot(`
        Object {
          "type": "jsx",
          "value": "<img
          alt=\\"\\"
          data-scoobie-style=\\"default\\"
          src={require('./drawing.svg')}
          title=\\"\\"
        />",
        }
      `);
    });

    it('transforms root-relative image URL in different directory', () => {
      const ast = {
        type: 'image',
        url: '/src/assets/drawing.svg',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toMatchInlineSnapshot(`
        Object {
          "type": "jsx",
          "value": "<img
          alt=\\"\\"
          data-scoobie-style=\\"default\\"
          src={require('../src/assets/drawing.svg')}
          title=\\"\\"
        />",
        }
      `);
    });

    it('prefers title prop over alt prop', () => {
      const ast = {
        type: 'image',
        url: './drawing.svg',
        title: 'alpha',
        alt: 'bravo',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toMatchInlineSnapshot(`
        Object {
          "type": "jsx",
          "value": "<img
          alt=\\"bravo\\"
          data-scoobie-style=\\"default\\"
          src={require('./drawing.svg')}
          title=\\"alpha\\"
        />",
        }
      `);
    });

    it('falls back to alt prop', () => {
      const ast = {
        type: 'image',
        url: './drawing.svg',
        alt: 'bravo',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toMatchInlineSnapshot(`
        Object {
          "type": "jsx",
          "value": "<img
          alt=\\"bravo\\"
          data-scoobie-style=\\"default\\"
          src={require('./drawing.svg')}
          title=\\"\\"
        />",
        }
      `);
    });

    it('transforms SVG external image URL', () => {
      const ast = {
        type: 'image',
        url: 'https://example.com/drawing.svg',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toMatchInlineSnapshot(`
        Object {
          "type": "jsx",
          "value": "<img
          alt=\\"\\"
          data-scoobie-style=\\"default\\"
          src={\\"https://example.com/drawing.svg\\"}
          title=\\"\\"
        />",
        }
      `);
    });

    it('respects dimension directive', () => {
      const ast = {
        type: 'image',
        url: './drawing.svg',
        title: '=100x50 Alpha',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toMatchInlineSnapshot(`
        Object {
          "type": "jsx",
          "value": "<img
          alt=\\"\\"
          data-scoobie-style=\\"default\\"
          src={require('./drawing.svg')}
          style={{ height: 50, maxWidth: '100%', width: 100 }}
          title=\\"Alpha\\"
        />",
      }
  `);
    });

    it('respects unstyled directive', () => {
      const ast = {
        type: 'image',
        url: './drawing.svg',
        title: 'Alpha =style=none',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toMatchInlineSnapshot(`
        Object {
          "type": "jsx",
          "value": "<img
          alt=\\"\\"
          data-scoobie-style=\\"none\\"
          src={require('./drawing.svg')}
          title=\\"Alpha\\"
        />",
        }
      `);
    });

    it('ignores missing URL', () => {
      const ast = {
        type: 'image',
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toStrictEqual(ast);
    });

    it('ignores dangerous URL', () => {
      const ast = {
        type: 'image',
        url: "./'drawing'.svg",
      } as const;

      const astCopy = runPlugin(ast);

      expect(astCopy).toStrictEqual(ast);
    });
  });
});
