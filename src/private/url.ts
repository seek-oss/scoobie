const URL = window.URL;
const URLSearchParams = window.URLSearchParams;

const EXAMPLE_BASE_URL = 'https://example.com';

const parseVersionParams = (search: string) => {
  const urlSearchParams = new URLSearchParams(search);

  return {
    v: urlSearchParams.get('v'),
    vPanel: urlSearchParams.get('v-panel'),
  };
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

  const { v, vPanel } = parseVersionParams(location.search);

  if (v !== null) {
    searchParams.set('v', v);
  }
  if (vPanel !== null) {
    searchParams.set('v-panel', vPanel);
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
