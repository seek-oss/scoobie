/**
 * `@storybook/addon-controls` is not currently usable in decorators.
 *
 * {@link https://github.com/storybookjs/storybook/issues/11984}
 */
import { BraidProvider, Card, PageBlock } from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import docs from 'braid-design-system/themes/docs';
import wireframe from 'braid-design-system/themes/wireframe';
import React, { type ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import type { addDecorator } from 'sku/@storybook/react';

import { MdxProvider, ScoobieLink } from '..';
import { robotoHref, robotoMonoHref } from '../../typography';
import type { Size } from '../private/size';

import type { BraidThemeName } from './controls';

const THEMES = { apac, docs, wireframe };

interface ProviderProps {
  braidThemeName: BraidThemeName;
  children: ReactNode;
}

export const BraidStorybookProvider = ({
  braidThemeName,
  children,
}: ProviderProps) => (
  <BraidProvider theme={THEMES[braidThemeName]} linkComponent={ScoobieLink}>
    <PageBlock>
      <Card>{children}</Card>
    </PageBlock>
  </BraidProvider>
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
