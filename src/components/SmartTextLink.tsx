import { TextLink } from 'braid-design-system';
import React, { ReactNode } from 'react';

import { ExternalTextLink } from '../private/ExternalTextLink';
import { isExternalHref } from '../private/url';

interface Props {
  children: ReactNode;
  href: string;
  title?: string;
}

export const SmartTextLink = ({ children, href, title }: Props) =>
  isExternalHref(href) ? (
    <ExternalTextLink href={href} title={title}>
      {children}
    </ExternalTextLink>
  ) : (
    <TextLink href={href} title={title}>
      {children}
    </TextLink>
  );
