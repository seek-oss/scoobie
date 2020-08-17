import classNames from 'classnames';
import React, { CSSProperties, ComponentProps, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { useStyles } from 'sku/react-treat';

import { parseInternalHref } from '../private/InternalTextLink';

import * as styleRefs from './InternalLink.treat';

interface NavLinkProps {
  activeClassName?: Parameters<typeof classNames>[0];
  exact?: boolean;
  isActive?: ComponentProps<typeof NavHashLink>['isActive'];
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

interface Props extends NavLinkProps {
  children: ReactNode;
  className?: Parameters<typeof classNames>[0];
  href: string;
  title?: string;
  reset?: boolean;
  style?: CSSProperties;
}

export const InternalLink = ({
  activeClassName,
  children,
  className,
  exact,
  href,
  title,
  isActive,
  onClick,
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
    <NavHashLink
      activeClassName={classNames(activeClassName)}
      className={mergedClassNames}
      exact={exact}
      isActive={isActive}
      onClick={onClick}
      scroll={scroll}
      title={title}
      smooth
      style={style}
      to={to}
    >
      {children}
    </NavHashLink>
  );
};
