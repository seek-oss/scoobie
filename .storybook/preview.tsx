import React from 'react';
import 'braid-design-system/reset';
import { BrowserRouter } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { robotoHref, robotoMonoHref } from '../typography';
import type { Preview } from 'sku/@storybook/react';
import { DEFAULT_SIZE, SIZES, type Size } from '../src/private/size';
import { ScoobieLink } from '../src/components/ScoobieLink';
import { BraidProvider, Card, PageBlock } from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import seekJobs from 'braid-design-system/themes/seekJobs';
import docs from 'braid-design-system/themes/docs';
import wireframe from 'braid-design-system/themes/wireframe';

const THEMES = { seekJobs, apac, docs, wireframe };
export interface BraidArgs {
  braidThemeName: BraidThemeName;
}

export interface MdxArgs {
  mdxSize: Size;
}

export const defaultArgs = {
  braidThemeName: 'apac' as const,
  mdxSize: DEFAULT_SIZE,
  size: 'standard',
};

export type BraidThemeName = 'seekJobs' | 'apac' | 'docs' | 'wireframe';

export const defaultArgTypes = {
  braidThemeName: {
    control: { type: 'radio' },
    name: 'Braid theme',
    options: ['apac', 'docs', 'wireframe'],
  },
  mdxSize: {
    control: { type: 'radio' },
    name: 'MDX size',
    options: SIZES,
  },
  size: {
    control: { type: 'radio' },
    options: ['standard', 'large'],
  },
};

export default {
  globalTypes: {
    theme: {
      description: 'Braid theme to use',
      defaultValue: 'seekJobs',
      toolbar: {
        title: 'Theme',
        icon: 'contrast',
        items: ['seekJobs', 'apac', 'docs', 'wireframe'],
      },
    },
  },
  decorators: [
    (Story, { globals }) => (
      <BraidProvider theme={THEMES[globals.theme]} linkComponent={ScoobieLink}>
        <BrowserRouter>
          <HelmetProvider>
            <Helmet>
              <link href={robotoHref} rel="stylesheet" />
              <link href={robotoMonoHref} rel="stylesheet" />
            </Helmet>
            <PageBlock>
              <Card>
                <Story />
              </Card>
            </PageBlock>
          </HelmetProvider>
        </BrowserRouter>
      </BraidProvider>
    ),
  ],
} satisfies Preview;
