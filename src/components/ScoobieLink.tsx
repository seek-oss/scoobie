import { makeLinkComponent } from 'braid-design-system';
import React from 'react';

import { isExternalHref } from '../private/url';

import { InternalLink } from './InternalLink';

export const ScoobieLink = makeLinkComponent(
  ({ children, href, datatype, ...restProps }, ref) => {
    if (isExternalHref(href) || datatype === 'attachments') {
      return (
        <a
          rel="noreferrer"
          target="_blank"
          {...restProps}
          href={href}
          ref={ref}
        >
          {children}
        </a>
      );
    }

    return (
      <InternalLink
        {...restProps}
        href={href}
        innerRef={ref}
        reset={false}
        datatype={datatype}
      >
        {children}
      </InternalLink>
    );
  },
);
