import { select, text } from '@storybook/addon-knobs';
import { BraidLoadableProvider, Card, ContentBlock } from 'braid-design-system';
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import { addDecorator } from 'sku/@storybook/react';

import { MdxProvider, ScoobieLink } from '..';
import { robotoHref, robotoMonoHref } from '../../typography';
import { DEFAULT_SIZE, SIZES } from '../private/size';

interface Props {
  children: ReactNode;
}

const BraidStorybookProvider = ({ children }: Props) => (
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

const MdxStorybookProvider = ({ children }: Props) => (
  <MdxProvider
    graphqlPlayground={
      text(
        'MdxProvider.graphqlPlayground',
        'https://graphql.seek.com/graphql',
      ) || undefined
    }
    size={select('MdxProvider.size', SIZES, DEFAULT_SIZE)}
  >
    {children}
  </MdxProvider>
);

type DecoratorFunction = Parameters<typeof addDecorator>[0];

export const ScoobieDecorator: DecoratorFunction = (story) => (
  <BrowserRouter>
    <Helmet>
      <link href={robotoHref} rel="stylesheet" />
      <link href={robotoMonoHref} rel="stylesheet" />
    </Helmet>

    <BraidStorybookProvider>
      <MdxStorybookProvider>
        <ContentBlock>
          <Card>{story()}</Card>
        </ContentBlock>
      </MdxStorybookProvider>
    </BraidStorybookProvider>
  </BrowserRouter>
);
