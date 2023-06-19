import { isExternalHref, parseInternalHref } from './url';

describe('isExternalHref', () => {
  test.each`
    href                     | expected
    ${'ftp://example.com'}   | ${true}
    ${'http://example.com'}  | ${true}
    ${'https://example.com'} | ${true}
    ${'//example.com'}       | ${true}
    ${'/'}                   | ${false}
    ${'example.com'}         | ${false}
    ${'.'}                   | ${false}
    ${'..'}                  | ${false}
    ${'example.com/'}        | ${false}
    ${'./'}                  | ${false}
    ${'../'}                 | ${false}
    ${'/path'}               | ${false}
    ${'/.'}                  | ${false}
    ${'/..'}                 | ${false}
  `('$href', ({ href, expected }) =>
    expect(isExternalHref(href)).toBe(expected),
  );
});

describe('parseInternalHref', () => {
  it('preferences the v URL parameter from location', () => {
    const to = parseInternalHref(
      '/hello?v=v1&b=b1',
      {
        pathname: '/',
        search: '?a=1&v=2&b=3',
      },
      ['v'],
    );

    expect(to).toEqual({
      hash: '',
      pathname: '/hello',
      search: 'v=2&b=b1',
    });
  });

  it('preferences the v-panel URL parameter from location', () => {
    const to = parseInternalHref(
      '/hello?v-panel=v1&b=b1',
      {
        pathname: '/',
        search: '?a=1&v-panel=2&b=3',
      },
      ['v', 'v-panel'],
    );

    expect(to).toEqual({
      hash: '',
      pathname: '/hello',
      search: 'v-panel=2&b=b1',
    });
  });

  it('propagates multiple parameters from location', () => {
    const to = parseInternalHref(
      '/hello?d=4',
      {
        pathname: '/',
        search: '?a=1&b=2&c=3',
      },
      ['a', 'b'],
    );

    expect(to).toEqual({
      hash: '',
      pathname: '/hello',
      search: 'd=4&a=1&b=2',
    });
  });

  describe.each(['/page-1', '/page-1/'])(
    'given pathname %s',
    (inputPathname) => {
      it.each([
        [
          'hash',
          '#heading-1',
          {
            hash: '#heading-1',
            pathname: inputPathname,
            search: '',
          },
        ],
        [
          'URL parameters',
          '?a=1&b=2',
          {
            hash: '',
            pathname: inputPathname,
            search: 'a=1&b=2',
          },
        ],
        [
          'relative',
          'subpage',
          {
            hash: '',
            pathname: '/page-1/subpage',
            search: '',
          },
        ],
        [
          'relative with hash and URL parameters',
          'subpage?a=1#heading-1',
          {
            hash: '#heading-1',
            pathname: '/page-1/subpage',
            search: 'a=1',
          },
        ],
        [
          'relative with .',
          './subpage',
          {
            hash: '',
            pathname: '/page-1/subpage',
            search: '',
          },
        ],
        [
          'relative with ..',
          '../page-2',
          {
            hash: '',
            pathname: '/page-2',
            search: '',
          },
        ],
        [
          'root-relative',
          '/page-2',
          {
            hash: '',
            pathname: '/page-2',
            search: '',
          },
        ],
      ])('handles %s', (_, inputHref, expected) => {
        const to = parseInternalHref(
          inputHref,
          {
            pathname: inputPathname,
            search: '',
          },
          ['debug'],
        );

        expect(to).toEqual(expected);
      });
    },
  );
});
