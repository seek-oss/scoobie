import React, { ReactNode } from 'react';

import { ExternalTextLink } from '../private/ExternalTextLink';
import { InternalTextLink } from '../private/InternalTextLink';

interface Props {
  children: ReactNode;
  href: string;
}

export const SmartTextLink = ({ children, href }: Props) =>
  /^[a-z][a-z0-9+.-]*:|^\/\//i.test(href) ? (
    <ExternalTextLink href={href}>{children}</ExternalTextLink>
  ) : (
    <InternalTextLink href={href}>{children}</InternalTextLink>
  );
