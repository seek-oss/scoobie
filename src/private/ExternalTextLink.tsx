import { IconNewWindow, TextLink } from 'braid-design-system';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
}

export const ExternalTextLink = ({ children, href }: Props) => (
  <TextLink href={href} rel="noreferrer" target="_blank">
    {children} <IconNewWindow />
  </TextLink>
);
