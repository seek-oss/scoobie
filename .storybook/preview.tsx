import 'braid-design-system/reset';
import 'loki/configure-react';

import type { Preview } from '@storybook/react';
import { BraidProvider, Card, PageBlock } from 'braid-design-system';
import seekJobs from 'braid-design-system/themes/seekJobs';
import { useEffect, useState } from 'react';
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
    (Story) => {
      const [fontsData, setFontsData] = useState('');

      useEffect(() => {
        let cancelled = false;
        document.fonts.ready.then(() => {
          setFontsData(document.fonts.check('16px SeekSans-Medium').toString());
        });

        return () => {
          cancelled = true;
        };
      }, []);

      return (
        <div>
          {fontsData}
          {fontsData === '' ? null : <Story />}
        </div>
      );
    },
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
