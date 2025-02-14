import { type PrismTheme, themes } from 'prism-react-renderer';

import { palette } from './color';

export type CodeTheme = keyof typeof codeThemes;

export const codeThemes = {
  ...themes,
  scoobieLight: {
    plain: {
      color: palette.grey[700],
    },
    styles: [
      {
        types: [
          'class-name',
          'entity',
          'url',
          'symbol',
          'number',
          'boolean',
          'variable',
          'constant',
          'regex',
        ],
        style: {
          color: palette.cyan[700],
        },
      },
      {
        types: ['comment', 'prolog', 'doctype', 'cdata', 'inserted'],
        style: {
          color: palette.mint[700],
        },
      },
      {
        types: ['comment', 'prolog', 'doctype', 'cdata'],
        style: {
          fontStyle: 'italic',
        },
      },
      {
        types: ['namespace'],
        style: {
          color: palette.grey[500],
        },
      },
      {
        types: ['string', 'attr-value'],
        style: {
          color: palette.orange[700],
        },
      },
      {
        types: ['atrule', 'keyword', 'attr-name', 'selector'],
        style: {
          color: palette.blue[600],
        },
      },
      {
        types: ['function', 'deleted', 'tag'],
        style: {
          color: palette.red[700],
        },
      },
      {
        types: ['tag', 'selector', 'keyword'],
        style: {
          color: palette.indigo[700],
        },
      },
    ],
  },
  scoobieDark: {
    plain: {
      color: '#fff',
    },
    styles: [
      {
        types: [
          'class-name',
          'entity',
          'url',
          'symbol',
          'number',
          'boolean',
          'variable',
          'constant',
          'regex',
        ],
        style: {
          color: palette.cyan[400],
        },
      },
      {
        types: ['comment', 'prolog', 'doctype', 'cdata', 'inserted'],
        style: {
          color: palette.mint[500],
        },
      },
      {
        types: ['comment', 'prolog', 'doctype', 'cdata'],
        style: {
          fontStyle: 'italic',
        },
      },
      {
        types: ['namespace'],
        style: {
          color: palette.grey[200],
        },
      },
      {
        types: ['string', 'attr-value'],
        style: {
          color: palette.orange[400],
        },
      },
      {
        types: ['atrule', 'keyword', 'attr-name', 'selector'],
        style: {
          color: palette.blue[400],
        },
      },
      {
        types: ['function', 'deleted', 'tag'],
        style: {
          color: palette.red[300],
        },
      },
      {
        types: ['tag', 'selector', 'keyword'],
        style: {
          color: palette.indigo[300],
        },
      },
    ],
  },
} satisfies Record<string, PrismTheme>;
