import url from 'url';

import { TextLinkRenderer } from 'braid-design-system';
import React, { ReactNode } from 'react';

import { InternalLink } from '../components/InternalLink';

const URL = url.URL ?? window.URL;
const URLSearchParams = url.URLSearchParams ?? window.URLSearchParams;

const EXAMPLE_BASE_URL = 'https://example.com';

const parseVersionParam = (search: string) => {
  const urlSearchParams = new URLSearchParams(search);

  return urlSearchParams.get('v');
};

const hrefToUrl = (href: string, pathname: string) => {
  if (href.startsWith('/')) {
    return new URL(`${EXAMPLE_BASE_URL}${href}`);
  }

  if (pathname.endsWith('/') || href.startsWith('#') || href.startsWith('?')) {
    return new URL(`${EXAMPLE_BASE_URL}${pathname}${href}`);
  }

  return new URL(`${EXAMPLE_BASE_URL}${pathname}/${href}`);
};

export const parseInternalHref = (
  href: string,
  location: {
    pathname: string;
    search: string;
  },
) => {
  const { hash, pathname, searchParams } = hrefToUrl(href, location.pathname);

  const v = parseVersionParam(location.search);

  if (v !== null) {
    searchParams.set('v', v);
  }

  const search = searchParams.toString();

  return {
    hash,
    pathname,
    search,
  };
};

interface Props {
  children: ReactNode;
  href: string;
}

export const InternalTextLink = ({ children, href }: Props) => (
  <TextLinkRenderer>
    {(rendererProps) => (
      <InternalLink {...rendererProps} href={href} reset={false}>
        {children}
      </InternalLink>
    )}
  </TextLinkRenderer>
);
