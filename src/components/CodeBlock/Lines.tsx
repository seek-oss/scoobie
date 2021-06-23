import { Box, Stack } from 'braid-design-system';
import Highlight from 'prism-react-renderer';
import React from 'react';
import { useStyles } from 'sku/react-treat';

import { CodeSize } from '../../private/size';

import * as treatStyleRefs from '../CodeBlock.treat';

type Token = Parameters<Highlight['getTokenProps']>[0]['token'];

interface Props {
  codeSize: CodeSize;
  getTokenProps: Highlight['getTokenProps'];
  lines: Token[][];
}

export const Lines = ({ codeSize, getTokenProps, lines }: Props) => {
  const treatStyles = useStyles(treatStyleRefs);

  return (
    <Box padding="medium">
      <Stack space="small">
        {lines.map((line, lineIndex) => (
          <Box className={treatStyles.code[codeSize]} key={lineIndex}>
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
};
