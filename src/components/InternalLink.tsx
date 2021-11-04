import clsx, { ClassValue } from 'clsx';
import React, { ComponentProps, forwardRef } from 'react';
import { useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import { parseInternalHref } from '../private/url';

import * as styles from './InternalLink.css';

interface Props
  extends Omit<
    ComponentProps<typeof NavHashLink>,
    'className' | 'scroll' | 'smooth' | 'to'
  > {
  className?: ClassValue | ((isActive: boolean) => ClassValue);
  href: string;
  reset?: boolean;
  state?: any;
}

export const InternalLink = forwardRef(
  ({ className, href, reset = true, state, ...restProps }: Props, ref) => {
    const scroll = (element: Element) =>
      setTimeout(() => {
        // Scroll to the header's `Stack` element so we don't cut off the heading
        (element.parentElement ?? element).scrollIntoView({
          behavior: 'smooth',
        });
      });

    const location = useLocation();

    const to = { ...parseInternalHref(href, location), state };

    return (
      <NavHashLink
        {...restProps}
        className={
          // TODO: DefinitelyTyped/DefinitelyTyped#56976
          (((isActive: boolean) =>
            clsx(
              reset ? styles.reset : null,
              typeof className === 'function' ? className(isActive) : className,
            )) as unknown) as string
        }
        // TODO: verify if this actually works as intended
        ref={ref as any}
        scroll={scroll}
        smooth
        to={to}
      />
    );
  },
);
