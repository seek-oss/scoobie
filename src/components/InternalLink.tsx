import clsx, { ClassValue } from 'clsx';
import React, { ComponentProps, forwardRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { parseInternalHref } from '../private/url';

import * as styles from './InternalLink.css';

interface Props
  extends Omit<ComponentProps<typeof NavLink>, 'className' | 'to'> {
  className?: ClassValue | ((isActive: boolean) => ClassValue);
  href: string;
  reset?: boolean;
  state?: any;
}

export const InternalLink = forwardRef<HTMLAnchorElement, Props>(
  ({ className, href, reset = true, state, ...restProps }, ref) => {
    const location = useLocation();

    const to = { ...parseInternalHref(href, location), state };

    return (
      <NavLink
        {...restProps}
        className={(prop) => {
          // The boolean prop was introduced in React Router v5.3 as a bridge to
          // v6, then v6 decided to break the function signature anyway 🙃.
          const isActive = typeof prop === 'boolean' ? prop : prop.isActive;

          return clsx(
            reset ? styles.reset : null,
            typeof className === 'function' ? className(isActive) : className,
          );
        }}
        ref={ref}
        to={to}
      />
    );
  },
);
