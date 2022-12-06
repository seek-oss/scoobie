import { TextLink } from 'braid-design-system';
import React, { ComponentProps, ReactNode } from 'react';

import { ExternalTextLink } from '../private/ExternalTextLink';
import { isExternalHref } from '../private/url';

interface Props {
  children: ReactNode;
  href: string;
  icon?: ComponentProps<typeof TextLink>['icon'];
  title?: string;
}

export const SmartTextLink = ({ children, href, icon, title }: Props) =>
  isExternalHref(href) ? (
    <ExternalTextLink href={href} icon={icon} title={title}>
      {children}
    </ExternalTextLink>
  ) : (
    <TextLink href={href} icon={icon} title={title}>
      {children}
    </TextLink>
  );
