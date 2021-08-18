import { BraidLoadableProvider, Card, ContentBlock } from 'braid-design-system';
import React, { ReactNode } from 'react';
import { select } from 'sku/@storybook/addon-knobs';

import { ScoobieLink } from '..';

interface Props {
  children: ReactNode;
}

// TODO: this isn't working when loaded as a Storybook decorator.
export const StorybookProvider = ({ children }: Props) => (
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
