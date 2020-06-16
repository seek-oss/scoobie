import url from 'url';

import { TextLinkRenderer, useSpace } from 'braid-design-system';
import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const URL = url.URL ?? window.URL;
const URLSearchParams = url.URLSearchParams ?? window.URLSearchParams;

interface Props {
  children: ReactNode;
  href: string;
}

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

const scrollWithYOffset = (yOffset: number) => (element: Element) =>
  setTimeout(() => {
    const yCoordinate =
      element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      behavior: 'smooth',
      top: yCoordinate + yOffset,
    });
  });

export const InternalTextLink = ({ children, href }: Props) => {
  const { grid, space } = useSpace();

  const scroll = scrollWithYOffset(-(grid * space.small));

  const location = useLocation();

  const to = parseInternalHref(href, location);

  return (
    <TextLinkRenderer>
      {(rendererProps) => (
        <HashLink {...rendererProps} scroll={scroll} smooth to={to}>
          {children}
        </HashLink>
      )}
    </TextLinkRenderer>
  );
};
