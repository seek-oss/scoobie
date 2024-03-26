import type { MDXContent } from 'mdx/types';
import { Children, type FunctionComponent, type ReactNode } from 'react';

import type { HeadingLevel, StackChildrenProps } from '../private/types';

import { WrapperRenderer } from './WrapperRenderer';

interface HeadingElement {
  props: {
    children: string;
    id: string;
  };
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export type Toc = TocItem[];

export interface TocItem {
  children: ReactNode;
  id: string;
  level: HeadingLevel;
}

const headingToLevel = (component: HeadingElement): HeadingLevel =>
  Number(component.type.replace(/^h/, '')) as HeadingLevel;

const isHeading = (component: unknown): component is HeadingElement =>
  typeof component === 'object' &&
  component !== null &&
  'type' in component &&
  typeof component.type === 'string' &&
  /^h[1-6]$/.test(component.type);

const wrapperToToc = ({ children }: StackChildrenProps): Toc =>
  Children.toArray(children)
    .filter(isHeading)
    .map((incorrectlyTypedChild) => {
      // TypeScript isn't respecting our `isHeading` type guard here ☹️
      const child = incorrectlyTypedChild as unknown as HeadingElement;

      return {
        children: child.props.children,
        id: child.props.id,
        level: headingToLevel(child),
      };
    });

export const TocRenderer = ({
  children: render,
  document: Document,
}: {
  children: (toc: Toc) => ReturnType<FunctionComponent>;
  document: MDXContent;
}) => (
  <WrapperRenderer document={Document}>
    {({ children }) => {
      const toc = wrapperToToc({ children });

      return render(toc);
    }}
  </WrapperRenderer>
);
