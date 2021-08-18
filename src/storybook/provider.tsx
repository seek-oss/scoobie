import { BraidLoadableProvider, Card, ContentBlock } from 'braid-design-system';
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import { select, text } from 'sku/@storybook/addon-knobs';
import { addDecorator } from 'sku/@storybook/react';

import { MdxProvider, ScoobieLink } from '..';
import { robotoHref, robotoMonoHref } from '../../typography';
import { DEFAULT_SIZE, SIZES } from '../private/size';

interface BraidStorybookProviderProps {
  children: ReactNode;
}

// TODO: this isn't working when loaded as a Storybook decorator.
export const BraidStorybookProvider = ({
  children,
}: BraidStorybookProviderProps) => (
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
    <ContentBlock>
      <Card>{children}</Card>
    </ContentBlock>
  </BraidLoadableProvider>
);

type DecoratorFunction = Parameters<typeof addDecorator>[0];

export const withProviders: DecoratorFunction = (story) => (
  <MdxProvider
    graphqlPlayground={
      text(
        'MdxProvider.graphqlPlayground',
        'https://graphql.seek.com/graphql',
      ) || undefined
    }
    size={select('MdxProvider.size', SIZES, DEFAULT_SIZE)}
  >
    <BrowserRouter>
      <Helmet>
        <link href={robotoHref} rel="stylesheet" />
        <link href={robotoMonoHref} rel="stylesheet" />
      </Helmet>

      {story()}
    </BrowserRouter>
  </MdxProvider>
);
