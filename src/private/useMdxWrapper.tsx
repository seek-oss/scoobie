import React from 'react';

import { Wrapper, type WrapperComponent } from './Wrapper';
import type { Size } from './size';
import type { StackChildrenProps } from './types';

export const useMdxWrapper =
  (component: WrapperComponent, size: Size) =>
  ({ children }: StackChildrenProps) =>
    (
      <Wrapper component={component} size={size}>
        {children}
      </Wrapper>
    );
