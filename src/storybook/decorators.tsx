/**
 * `@storybook/addon-controls` is not currently usable in decorators.
 *
 * {@link https://github.com/storybookjs/storybook/issues/11984}
 */
import { BraidProvider, Card, ContentBlock } from 'braid-design-system';
import React, { ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import loadable from 'sku/@loadable/component';
import { addDecorator } from 'sku/@storybook/react';

import { MdxProvider, ScoobieLink } from '..';
import { robotoHref, robotoMonoHref } from '../../typography';
import { Size } from '../private/size';

import { BraidThemeOptions } from './controls';

const BraidTheme = loadable.lib(
  (props: { themeName: BraidThemeOptions }) =>
    import(`braid-design-system/themes/${props.themeName}`),
);

interface ProviderProps {
  braidThemeName: string;
  children: ReactNode;
}

export const BraidStorybookProvider = ({
  braidThemeName,
  children,
}: ProviderProps) => (
  <BraidTheme themeName={braidThemeName}>
    {({
      default: theme,
    }: {
      default: React.ComponentProps<typeof BraidProvider>['theme'];
    }) => (
      <BraidProvider theme={theme} linkComponent={ScoobieLink}>
        <ContentBlock>
          <Card>{children}</Card>
        </ContentBlock>
      </BraidProvider>
    )}
  </BraidTheme>
);

interface MdxStorybookProviderProps {
  children: ReactNode;
  mdxSize: Size;
}

export const MdxStorybookProvider = ({
  children,
  mdxSize,
}: MdxStorybookProviderProps) => (
  <MdxProvider
    graphqlPlayground="https://graphql.seek.com/graphql"
    size={mdxSize}
  >
    {children}
  </MdxProvider>
);

type DecoratorFn = Parameters<typeof addDecorator>[0];

export const withRouter: DecoratorFn = (story) => (
  <BrowserRouter>
    <HelmetProvider>
      <Helmet>
        <link href={robotoHref} rel="stylesheet" />
        <link href={robotoMonoHref} rel="stylesheet" />
      </Helmet>

      {story()}
    </HelmetProvider>
  </BrowserRouter>
);
