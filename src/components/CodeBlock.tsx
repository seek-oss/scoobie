import { Box, Stack, Text, TextLinkButton } from 'braid-design-system';
import Highlight from 'prism-react-renderer';
import React, { useState } from 'react';
import { useStyles } from 'sku/react-treat';

import { Prism, prismTheme } from '../private/Prism';
import { ScrollableInline } from '../private/ScrollableInline';
import {
  DEFAULT_SIZE,
  SIZE_TO_CODE_SIZE,
  SIZE_TO_TABLE_PADDING,
  Size,
} from '../private/size';

import { CodeChildProps, normaliseChild } from './CodeBlock/CodeChild';
import { CopyAction } from './CodeBlock/CopyAction';
import { GraphQLPlaygroundAction } from './CodeBlock/GraphQLPlaygroundAction';
import { LineNumbers } from './CodeBlock/LineNumbers';
import { Lines } from './CodeBlock/Lines';

import * as styleRefs from './CodeBlock.treat';

type Props = {
  graphqlPlayground?: string;
  size?: Size;
} & (
  | { children: string; language: string }
  | {
      children: CodeChildProps[];
      language?: undefined;
    }
);

export const CodeBlock = ({
  children: rawChildren,
  language: rawLanguage = 'text',
  graphqlPlayground,
  size = DEFAULT_SIZE,
}: Props) => {
  const styles = useStyles(styleRefs);

  const children = (typeof rawChildren === 'string'
    ? [
        {
          code: rawChildren,
          language: rawLanguage,
        },
      ]
    : rawChildren
  ).map(normaliseChild);

  const codeSize = SIZE_TO_CODE_SIZE[size];
  const tablePadding = SIZE_TO_TABLE_PADDING[size];

  const [index, setIndex] = useState(0);

  const child = children[index];

  const graphqlPlaygroundButton =
    child.language === 'graphql' && graphqlPlayground ? (
      <Box component="span" paddingLeft={tablePadding}>
        <GraphQLPlaygroundAction
          graphqlPlayground={graphqlPlayground}
          size={size}
        >
          {child.code}
        </GraphQLPlaygroundAction>
      </Box>
    ) : undefined;

  return (
    <Stack space={tablePadding}>
      <ScrollableInline>
        <Box display="flex" justifyContent="spaceBetween">
          <Box display="flex">
            {children.map(({ label }, labelIndex) => (
              <Box
                component="span"
                key={label}
                paddingLeft={labelIndex === 0 ? undefined : tablePadding}
              >
                <Text
                  size={codeSize}
                  tone={index === labelIndex ? 'secondary' : undefined}
                  weight="medium"
                >
                  {children.length === 1 || index === labelIndex ? (
                    label
                  ) : (
                    <TextLinkButton onClick={() => setIndex(labelIndex)}>
                      {label}
                    </TextLinkButton>
                  )}
                </Text>
              </Box>
            ))}
          </Box>

          <Box display="flex">
            <Box component="span" paddingLeft={tablePadding}>
              <CopyAction size={size}>{child.code}</CopyAction>
            </Box>

            {graphqlPlaygroundButton}
          </Box>
        </Box>
      </ScrollableInline>

      <Box borderRadius="standard" className={styles.codeContainer[codeSize]}>
        <Highlight
          Prism={Prism}
          code={child.code}
          language={child.language}
          theme={prismTheme}
        >
          {({ getTokenProps, tokens }) => (
            <Box display="flex">
              <LineNumbers codeSize={codeSize} count={tokens.length} />

              <Lines
                codeSize={codeSize}
                getTokenProps={getTokenProps}
                lines={tokens}
              />
            </Box>
          )}
        </Highlight>
      </Box>
    </Stack>
  );
};
