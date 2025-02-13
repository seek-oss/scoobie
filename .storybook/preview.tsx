import 'braid-design-system/reset';

import type { Preview } from '@storybook/react';
import { BraidProvider, Card, PageBlock } from 'braid-design-system';
import docs from 'braid-design-system/themes/docs';
import seekJobs from 'braid-design-system/themes/seekJobs';
import wireframe from 'braid-design-system/themes/wireframe';
import { themes } from 'prism-react-renderer';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { CodeThemeProvider } from '../src/components/CodeThemeProvider';
import { ScoobieLink } from '../src/components/ScoobieLink';
import { robotoHref, robotoMonoHref } from '../typography';

const THEMES = { docs, seekJobs, wireframe };

export type BraidThemeName = 'docs' | 'seekJobs' | 'wireframe';

export default {
  globalTypes: {
    codeTheme: {
      description: 'Code theme to use',
      defaultValue: 'github',
      toolbar: {
        title: 'Code theme',
        icon: 'contrast',
        items: Object.keys(themes),
      },
    },
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
      <BraidProvider
        theme={THEMES[globals.theme as BraidThemeName]}
        linkComponent={ScoobieLink}
      >
        <CodeThemeProvider theme={globals.codeTheme}>
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
        </CodeThemeProvider>
      </BraidProvider>
    ),
  ],
} satisfies Preview;
