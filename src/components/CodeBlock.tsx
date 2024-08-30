import { Box, Stack, Text, TextLinkButton } from 'braid-design-system';
import { parse } from 'jsonc-parser';
import { Highlight } from 'prism-react-renderer';
import React, { useEffect, useState } from 'react';

import { Prism, themes } from '../private/Prism';
import { ScrollableInline } from '../private/ScrollableInline';
import {
  DEFAULT_SIZE,
  SIZE_TO_SMALLER,
  SIZE_TO_TABLE_PADDING,
  type Size,
} from '../private/size';

import { type CodeChildProps, normaliseChildren } from './CodeBlock/CodeChild';
import { GraphQLPlaygroundAction } from './CodeBlock/GraphQLPlaygroundAction';
import { LineNumbers } from './CodeBlock/LineNumbers';
import { Lines } from './CodeBlock/Lines';
import { CopyableText } from './CopyableText';

import * as styles from './CodeBlock.css';

interface Props {
  children: readonly CodeChildProps[] | string;
  graphqlPlayground?: string;
  initialIndex?: number;
  label?: string;
  language?: string;
  size?: Size;
  trim?: boolean;
}

export const CodeBlock = ({
  children: rawChildren,
  graphqlPlayground,
  initialIndex = 0,
  label: rawLabel,
  language: rawLanguage,
  size = DEFAULT_SIZE,
  trim = true,
}: Props) => {
  const children = normaliseChildren(
    typeof rawChildren === 'string'
      ? [
          {
            code: rawChildren,
            label: rawLabel,
            language: rawLanguage,
          },
        ]
      : rawChildren,
    trim,
  );

  const smallerSize = SIZE_TO_SMALLER[size];
  const tablePadding = SIZE_TO_TABLE_PADDING[size];

  const [index, setIndex] = useState({ dirty: false, value: initialIndex });

  useEffect(
    () => setIndex((i) => (i.dirty ? i : { ...i, value: initialIndex })),
    [initialIndex],
  );

  const child = children[index.value] ?? children[0];

  const jsoncVariables =
    children[0].language === 'graphql' && children[1]?.label === 'Variables'
      ? children[1].code
      : undefined;

  const variables =
    jsoncVariables && JSON.stringify(parse(jsoncVariables), null, 2);

  const graphqlPlaygroundButton =
    children[0].language === 'graphql' && graphqlPlayground ? (
      <Box component="span" paddingLeft={tablePadding}>
        <GraphQLPlaygroundAction
          graphqlPlayground={graphqlPlayground}
          size={size}
          query={children[0].code}
          variables={variables}
        />
      </Box>
    ) : undefined;

  return (
    <Stack space={tablePadding}>
      <ScrollableInline whiteSpace="nowrap">
        <Box display="flex" justifyContent="spaceBetween">
          <Box display="flex">
            {children.map(({ label }, labelIndex) => (
              <Box
                component="span"
                key={label}
                paddingLeft={labelIndex === 0 ? undefined : tablePadding}
              >
                <Text
                  size={smallerSize}
                  tone={index.value === labelIndex ? 'secondary' : undefined}
                  weight="medium"
                >
                  {children.length === 1 || index.value === labelIndex ? (
                    label
                  ) : (
                    <TextLinkButton
                      onClick={() =>
                        setIndex({ dirty: true, value: labelIndex })
                      }
                    >
                      {label}
                    </TextLinkButton>
                  )}
                </Text>
              </Box>
            ))}
          </Box>

          <Box display="flex">
            <Box component="span" paddingLeft={tablePadding}>
              <CopyableText size={smallerSize}>{child.code}</CopyableText>
            </Box>

            {graphqlPlaygroundButton}
          </Box>
        </Box>
      </ScrollableInline>

      <Box borderRadius="large" className={styles.codeContainer}>
        <Highlight
          prism={Prism}
          code={child.code}
          language={child.language}
          theme={themes.github}
        >
          {({ getTokenProps, tokens }) => (
            <Box display="flex">
              <LineNumbers count={tokens.length} size={size} />

              <Lines getTokenProps={getTokenProps} lines={tokens} size={size} />
            </Box>
          )}
        </Highlight>
      </Box>
    </Stack>
  );
};
