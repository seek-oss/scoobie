import { makeLinkComponent } from 'braid-design-system';
import React from 'react';

import { isExternalHref } from '../private/url';

import { InternalLink } from './InternalLink';

export const ScoobieLink = makeLinkComponent(
  ({ children, href, ...restProps }, ref) =>
    isExternalHref(href) ? (
      <a rel="noreferrer" target="_blank" {...restProps} href={href} ref={ref}>
        {children}
      </a>
    ) : (
      <InternalLink {...restProps} href={href} innerRef={ref}>
        {children}
      </InternalLink>
    ),
);
