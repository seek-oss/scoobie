import { TextLink } from 'braid-design-system';
import type React from 'react';
import type { ComponentProps, ReactNode } from 'react';

import { ExternalTextLink } from '../private/ExternalTextLink';
import { isExternalHref } from '../private/url';

interface Props {
  children: ReactNode;
  href: string;
  icon?: ComponentProps<typeof TextLink>['icon'];
  title?: string;
}

export const SmartTextLink = ({
  children,
  href,
  icon,
  title,
  ...props
}: React.ComponentProps<typeof TextLink> & Props) =>
  isExternalHref(href) ? (
    <ExternalTextLink {...props} href={href} icon={icon} title={title}>
      {children}
    </ExternalTextLink>
  ) : (
    <TextLink {...props} href={href} icon={icon} title={title}>
      {children}
    </TextLink>
  );
