import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import { select, text } from 'sku/@storybook/addon-knobs';
import { addDecorator } from 'sku/@storybook/react';

import { MdxProvider } from '..';
import { robotoHref, robotoMonoHref } from '../../typography';
import { DEFAULT_SIZE, SIZES } from '../private/size';

type DecoratorFunction = Parameters<typeof addDecorator>[0];

export const withDecorator: DecoratorFunction = (story) => (
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
