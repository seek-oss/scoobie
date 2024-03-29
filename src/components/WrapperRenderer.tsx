import React from 'react';

import type { WrapperComponent } from '../private/Wrapper';
import { DEFAULT_SIZE } from '../private/size';
import { useMdxWrapper } from '../private/useMdxWrapper';

export const WrapperRenderer = ({
  children,
  document: Document,
}: {
  children: WrapperComponent;
  document: MDX.Document;
}) => {
  // The built-in wrapper size doesn't really matter here as the provided
  // component can overwrite it.
  const wrapper = useMdxWrapper(children, DEFAULT_SIZE);

  return (
    <Document
      components={(components) => ({
        ...components,
        wrapper,
      })}
    />
  );
};
