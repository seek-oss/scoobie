import { makeLinkComponent } from 'braid-design-system';
import React from 'react';

import { isExternalHref } from '../private/url';

import { InternalLink } from './InternalLink';

export const ScoobieLink = makeLinkComponent(
  ({ children, href, download, ...restProps }, ref) => {
    if (isExternalHref(href) || download) {
      return (
        <a
          rel="noreferrer"
          target="_blank"
          {...restProps}
          href={href}
          ref={ref}
          download={download}
        >
          {children}
        </a>
      );
    }

    return (
      <InternalLink {...restProps} href={href} innerRef={ref} reset={false}>
        {children}
      </InternalLink>
    );
  },
);
