import { Box, Stack } from 'braid-design-system';
import type { Highlight } from 'prism-react-renderer';
import React from 'react';

import type { Size } from '../../private/size';

import { code } from '../../../styles/code.css';

type Highlight = Parameters<Parameters<typeof Highlight>[0]['children']>[0];

type Token = Parameters<Highlight['getTokenProps']>[0]['token'];

interface Props {
  getTokenProps: Highlight['getTokenProps'];
  lines: Token[][];
  size: Size;
}

export const Lines = ({ getTokenProps, lines, size }: Props) => (
  <Box padding="medium">
    <Stack space="small">
      {lines.map((line, lineIndex) => (
        <Box className={code[size]} key={lineIndex}>
          <Box component="pre">
            {line.map((token, tokenIndex) => {
              const props = getTokenProps({ token });

              return <Box component="span" {...props} key={tokenIndex} />;
            })}
          </Box>
        </Box>
      ))}
    </Stack>
  </Box>
);
