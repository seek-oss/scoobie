import 'loki/configure-react';
import 'braid-design-system/reset';

import type { Preview } from '@storybook/react';
import { BraidProvider, Card, PageBlock } from 'braid-design-system';
import seekJobs from 'braid-design-system/themes/seekJobs';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router';

import { CodeThemeProvider } from '../src/components/CodeThemeProvider';
import { ScoobieLink } from '../src/components/ScoobieLink';
import { codeThemes } from '../src/private/codeThemes';
import { robotoHref, robotoMonoHref } from '../typography';

export default {
  globalTypes: {
    colorMode: {
      description: 'Color mode to use',
      defaultValue: 'lightMode',
      toolbar: {
        title: 'Color mode',
        icon: 'contrast',
        items: ['darkMode', 'lightMode'],
      },
    },
    codeTheme: {
      description: 'Code theme to use',
      defaultValue: 'github',
      toolbar: {
        title: 'Code theme',
        icon: 'contrast',
        items: Object.keys(codeThemes),
      },
    },
  },
  decorators: [
    (Story, { globals }) => {
      const DARK_MODE_CLASS = 'sprinkles_darkMode__1t46ksg10';

      if (globals.colorMode === 'darkMode') {
        document.documentElement.classList.add(DARK_MODE_CLASS);
      } else {
        document.documentElement.classList.remove(DARK_MODE_CLASS);
      }

      return (
        <BraidProvider theme={seekJobs} linkComponent={ScoobieLink}>
          <CodeThemeProvider theme={globals.codeTheme}>
            <BrowserRouter>
              <HelmetProvider>
                <Helmet>
                  <link href={robotoHref} rel="stylesheet" />
                  <link href={robotoMonoHref} rel="stylesheet" />
                  {seekJobs.webFonts.map((font) => (
                    <link key={font.href} href={font.href} rel="stylesheet" />
                  ))}
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
      );
    },
  ],
} satisfies Preview;
