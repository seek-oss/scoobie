import React from 'react';

import { WrapperComponent } from '../private/Wrapper';
import { useMdxWrapper } from '../private/useMdxWrapper';

export const WrapperRenderer = ({
  children,
  document: Document,
}: {
  children: WrapperComponent;
  document: MDX.Document;
}) => {
  const wrapper = useMdxWrapper(children);

  return (
    <Document
      components={(components) => ({
        ...components,
        wrapper,
      })}
    />
  );
};
