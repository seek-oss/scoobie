import React, { ReactNode } from 'react';

import { ExternalTextLink } from '../private/ExternalTextLink';
import { InternalTextLink } from '../private/InternalTextLink';

interface Props {
  children: ReactNode;
  href: string;
  title?: string;
}

export const SmartTextLink = ({ children, href, title }: Props) =>
  /^[a-z][a-z0-9+.-]*:|^\/\//i.test(href) ? (
    <ExternalTextLink href={href} title={title}>
      {children}
    </ExternalTextLink>
  ) : (
    <InternalTextLink href={href} title={title}>
      {children}
    </InternalTextLink>
  );
