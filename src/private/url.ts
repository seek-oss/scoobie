const EXAMPLE_BASE_URL = 'https://example.com';

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
  propagateSearchParams: string[],
) => {
  const { hash, pathname, searchParams } = hrefToUrl(href, location.pathname);

  const priorSearchParams = new URLSearchParams(location.search);

  for (const key of propagateSearchParams) {
    const value = priorSearchParams.get(key);

    if (value !== null) {
      searchParams.set(key, value);
    }
  }

  const search = searchParams.toString();

  return {
    hash,
    pathname,
    search,
  };
};

export const isExternalHref = (href: string) =>
  /^[a-z][a-z0-9+.-]*:|^\/\//i.test(href);
