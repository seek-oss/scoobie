/**
 * `@storybook/addon-controls` is not currently usable in decorators.
 *
 * {@link https://github.com/storybookjs/storybook/issues/11984}
 */
import { BraidLoadableProvider, Card, ContentBlock } from 'braid-design-system';
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import { addDecorator } from 'sku/@storybook/react';

import { MdxProvider, ScoobieLink } from '..';
import { robotoHref, robotoMonoHref } from '../../typography';
import { Size } from '../private/size';

interface ProviderProps {
  braidThemeName: string;
  children: ReactNode;
}

export const BraidStorybookProvider = ({
  braidThemeName,
  children,
}: ProviderProps) => (
  <BraidLoadableProvider linkComponent={ScoobieLink} themeName={braidThemeName}>
    <ContentBlock>
      <Card>{children}</Card>
    </ContentBlock>
  </BraidLoadableProvider>
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
    <Helmet>
      <link href={robotoHref} rel="stylesheet" />
      <link href={robotoMonoHref} rel="stylesheet" />
    </Helmet>

    {story()}
  </BrowserRouter>
);
