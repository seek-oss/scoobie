import { IconNewWindow, TextLink, TextLinkRenderer } from 'braid-design-system';
import React, { ReactNode } from 'react';
import { HashLink } from 'react-router-hash-link';

interface Props {
  children: ReactNode;
  href: string;
}

export const SmartTextLink = ({ children, href }: Props) =>
  /^[a-z][a-z0-9+.-]*:|^\/\//i.test(href) ? (
    <TextLink href={href} rel="noreferrer" target="_blank">
      {children} <IconNewWindow />
    </TextLink>
  ) : (
    <TextLinkRenderer>
      {(rendererProps) => (
        <HashLink {...rendererProps} smooth to={href}>
          {children}
        </HashLink>
      )}
    </TextLinkRenderer>
  );
