import React, { Children, FunctionComponent, ReactNode } from 'react';

import { HeadingLevel, StackChildrenProps } from '../private/types';
import { isMdxElement } from '../private/validation';

import { WrapperRenderer } from './WrapperRenderer';

interface HeadingElement {
  props: {
    children: string;
    id: string;
    mdxType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  };
}

export type Toc = TocItem[];

export interface TocItem {
  children: ReactNode;
  id: string;
  level: HeadingLevel;
}

const headingToLevel = (component: HeadingElement): HeadingLevel =>
  Number(component.props.mdxType.replace(/^h/, '')) as HeadingLevel;

const isHeading = (component: unknown): component is HeadingElement =>
  isMdxElement(component) && /^h[1-6]$/.test(component.props.mdxType);

const wrapperToToc = ({ children }: StackChildrenProps): Toc =>
  Children.toArray(children)
    .filter(isHeading)
    .map((child) => ({
      children: child.props.children,
      id: child.props.id,
      level: headingToLevel(child),
    }));

export const TocRenderer = ({
  children: render,
  document: Document,
}: {
  children: (toc: Toc) => ReturnType<FunctionComponent>;
  document: MDX.Document;
}) => (
  <WrapperRenderer document={Document}>
    {({ children }) => {
      const toc = wrapperToToc({ children });

      return render(toc);
    }}
  </WrapperRenderer>
);
