import classNames from 'classnames';
import React, { ComponentProps } from 'react';
import { useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { useStyles } from 'sku/react-treat';

import { parseInternalHref } from '../private/url';

import * as styleRefs from './InternalLink.treat';

interface Props
  extends Omit<ComponentProps<typeof NavHashLink>, 'scroll' | 'smooth' | 'to'> {
  href: string;
  reset?: boolean;
}

export const InternalLink = ({
  activeClassName,
  className,
  href,
  reset = true,
  ...restProps
}: Props) => {
  const scroll = (element: Element) =>
    setTimeout(() => {
      // Scroll to the header's `Stack` element so we don't cut off the heading
      (element.parentElement ?? element).scrollIntoView({
        behavior: 'smooth',
      });
    });

  const location = useLocation();

  const to = parseInternalHref(href, location);

  const styles = useStyles(styleRefs);

  const mergedClassNames = classNames(
    {
      [styles.reset]: reset,
    },
    className,
  );

  return (
    <NavHashLink
      {...restProps}
      activeClassName={classNames(activeClassName)}
      className={mergedClassNames}
      scroll={scroll}
      smooth
      to={to}
    />
  );
};
