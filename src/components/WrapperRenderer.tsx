import { MDXProvider } from '@mdx-js/react';
import type { MDXContent } from 'mdx/types';

import type { WrapperComponent } from '../private/Wrapper';
import { DEFAULT_SIZE } from '../private/size';
import { useMdxWrapper } from '../private/useMdxWrapper';

export const WrapperRenderer = ({
  children,
  document: Document,
}: {
  children: WrapperComponent;
  document: MDXContent;
}) => {
  // The built-in wrapper size doesn't really matter here as the provided
  // component can overwrite it.
  const wrapper = useMdxWrapper(children, DEFAULT_SIZE);

  return (
    <MDXProvider components={{ wrapper }}>
      <Document />
    </MDXProvider>
  );
};
