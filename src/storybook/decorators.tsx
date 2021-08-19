/**
 * `@storybook/addon-controls` is not currently usable in decorators.
 *
 * {@link https://github.com/storybookjs/storybook/issues/11984}
 */
import { select, text } from '@storybook/addon-knobs';
import { BraidLoadableProvider, Card, ContentBlock } from 'braid-design-system';
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import { addDecorator } from 'sku/@storybook/react';

import { MdxProvider, ScoobieLink } from '..';
import { robotoHref, robotoMonoHref } from '../../typography';
import { DEFAULT_SIZE, SIZES } from '../private/size';

interface ProviderProps {
  children: ReactNode;
}

const BraidStorybookProvider = ({ children }: ProviderProps) => (
  <BraidLoadableProvider
    linkComponent={ScoobieLink}
    themeName={select(
      'BraidLoadableProvider.themeName',
      [
        'apac',
        'catho',
        'docs',
        'jobsDb',
        'jobStreet',
        'occ',
        'seekAnz',
        'seekBusiness',
        'wireframe',
      ],
      'apac',
    )}
  >
    {children}
  </BraidLoadableProvider>
);

type DecoratorFn = Parameters<typeof addDecorator>[0];

export const withBraidProvider: DecoratorFn = (story) => (
  <BrowserRouter>
    <Helmet>
      <link href={robotoHref} rel="stylesheet" />
      <link href={robotoMonoHref} rel="stylesheet" />
    </Helmet>

    <BraidStorybookProvider>
      <ContentBlock>
        <Card>{story()}</Card>
      </ContentBlock>
    </BraidStorybookProvider>
  </BrowserRouter>
);

export const withMdxProvider: DecoratorFn = (story) => (
  <MdxProvider
    graphqlPlayground={
      text(
        'MdxProvider.graphqlPlayground',
        'https://graphql.seek.com/graphql',
      ) || undefined
    }
    size={select('MdxProvider.size', SIZES, DEFAULT_SIZE)}
  >
    {story()}
  </MdxProvider>
);
