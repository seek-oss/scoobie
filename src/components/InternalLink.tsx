import classNames from 'classnames';
import React, { CSSProperties, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useStyles } from 'sku/react-treat';

import { parseInternalHref } from '../private/InternalTextLink';

import * as styleRefs from './InternalLink.treat';

interface Props {
  children: ReactNode;
  className?: Parameters<typeof classNames>[0];
  href: string;
  reset?: boolean;
  style?: CSSProperties;
}

export const InternalLink = ({
  children,
  className,
  href,
  reset = true,
  style,
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
    <HashLink
      className={mergedClassNames}
      scroll={scroll}
      smooth
      style={style}
      to={to}
    >
      {children}
    </HashLink>
  );
};
