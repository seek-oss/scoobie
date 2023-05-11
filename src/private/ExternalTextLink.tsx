import { IconNewWindow, TextLink } from 'braid-design-system';
import React, { type ComponentProps, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
  icon?: ComponentProps<typeof TextLink>['icon'];
  title?: string;
}

export const ExternalTextLink = ({ children, href, icon, title }: Props) => (
  <TextLink
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
