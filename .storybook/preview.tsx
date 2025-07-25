import 'braid-design-system/reset';
import 'loki/configure-react';

import createAsyncCallback from '@loki/create-async-callback';
import isLokiRunning from '@loki/is-loki-running';
import type { Preview } from '@storybook/react';
import { BraidProvider, Card, PageBlock } from 'braid-design-system';
import seekJobs from 'braid-design-system/themes/seekJobs';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router';

import { CodeThemeProvider } from '../src/components/CodeThemeProvider';
import { ScoobieLink } from '../src/components/ScoobieLink';
import { codeThemes } from '../src/private/codeThemes';

/**
 * https://github.com/oblador/loki/discussions/411
 */
const useLokiCaptureDelay = (delayInMs: number) => {
  useEffect(() => {
    if (isLokiRunning() && delayInMs) {
      const onDone = createAsyncCallback();
      // Here! This is where the delay is set and Loki wil not fire until onDone
      // is called, after the delay time has passed by.
      const timer = setTimeout(() => onDone(), delayInMs);
      return () => clearTimeout(timer);
    }
  }, [delayInMs]);
};

const delayDecorators = isLokiRunning()
  ? ([
      (Story) => {
        useLokiCaptureDelay(3000);

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
