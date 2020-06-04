import React from 'react';

import { Wrapper, WrapperComponent } from './Wrapper';
import { StackChildrenProps } from './types';

export const useMdxWrapper = (component: WrapperComponent) => ({
  children,
}: StackChildrenProps) => <Wrapper component={component}>{children}</Wrapper>;
