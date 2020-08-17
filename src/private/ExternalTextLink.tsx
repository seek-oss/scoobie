import { IconNewWindow, TextLink } from 'braid-design-system';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
  title?: string;
}

export const ExternalTextLink = ({ children, href, title }: Props) => (
  <TextLink href={href} title={title} rel="noreferrer" target="_blank">
    {children} <IconNewWindow />
  </TextLink>
);
