import { IconNewWindow, TextLink } from 'braid-design-system';
import type React from 'react';
import type { ComponentProps, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
  icon?: ComponentProps<typeof TextLink>['icon'];
  title?: string;
}

export const ExternalTextLink = ({
  children,
  href,
  icon,
  title,
  ...props
}: React.ComponentProps<typeof TextLink> & Props) => (
  <TextLink
    {...props}
    href={href}
    icon={icon}
    rel="noreferrer"
    target="_blank"
    title={title}
  >
    {children}&nbsp;
    <IconNewWindow alignY="lowercase" />
  </TextLink>
);
