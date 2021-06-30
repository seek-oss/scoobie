import React from 'react';

import { Wrapper, WrapperComponent } from './Wrapper';
import { Size } from './size';
import { StackChildrenProps } from './types';

export const useMdxWrapper =
  (component: WrapperComponent, size: Size) =>
  ({ children }: StackChildrenProps) =>
    (
      <Wrapper component={component} size={size}>
        {children}
      </Wrapper>
    );
