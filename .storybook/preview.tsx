import 'braid-design-system/reset';
import 'loki/configure-react';

import createAsyncCallback from '@loki/create-async-callback';
import isLokiRunning from '@loki/is-loki-running';
import type { Preview } from '@storybook/react';
import { BraidProvider, Card, PageBlock } from 'braid-design-system';
import seekJobs from 'braid-design-system/themes/seekJobs';
import { useEffect, useMemo } from 'react';
import { BrowserRouter } from 'react-router';

import { CodeThemeProvider } from '../src/components/CodeThemeProvider';
import { ScoobieLink } from '../src/components/ScoobieLink';
import { codeThemes } from '../src/private/codeThemes';
import { robotoHtml, robotoMonoHtml } from '../typography';

seekJobs.webFonts.forEach((font) => {
  document.head.innerHTML += font.linkTag;
});

document.head.innerHTML += robotoHtml;
document.head.innerHTML += robotoMonoHtml;

// https://github.com/oblador/loki/discussions/411
const delayDecorators = isLokiRunning()
  ? ([
      (Story) => {
        const onDone = useMemo(createAsyncCallback, []);

        useEffect(() => {
          const start = Date.now();
          const interval = setInterval(() => {
            if (
              document.fonts.check('1rem SeekSans-Medium') ||
              Date.now() - start > 10_000
            ) {
              onDone();
              clearInterval(interval);
              return;
            }
          }, 10);

          return () => clearInterval(interval);
        }, [onDone]);

        return <Story />;
      },
    ] satisfies Preview['decorators'])
  : [];

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
    ...delayDecorators,
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
              <PageBlock>
                <Card>
                  <Story />
                </Card>
              </PageBlock>
            </BrowserRouter>
          </CodeThemeProvider>
        </BraidProvider>
      );
    },
  ],
} satisfies Preview;
