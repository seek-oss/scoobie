import { Box, Stack, Text, TextLinkButton } from 'braid-design-system';
import { parse } from 'jsonc-parser';
import { useEffect, useState } from 'react';

import { ScrollableInline } from '../private/ScrollableInline';

import { type CodeChildProps, normaliseChildren } from './CodeBlock/CodeChild';
import { GraphQLPlaygroundAction } from './CodeBlock/GraphQLPlaygroundAction';
import { CodeContainer } from './CodeContainer';
import { CopyableText } from './CopyableText';

interface Props {
  children: readonly CodeChildProps[] | string;
  graphqlPlayground?: string;
  initialIndex?: number;
  label: string;
  language: string;
  trim?: boolean;
  lineNumbers?: boolean;
}

export const CodeBlock = ({
  children: rawChildren,
  graphqlPlayground,
  initialIndex = 0,
  label: rawLabel,
  language: rawLanguage,
  trim = true,
  lineNumbers = true,
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

  const [index, setIndex] = useState({ dirty: false, value: initialIndex });

  useEffect(
    () => setIndex((i) => (i.dirty ? i : { ...i, value: initialIndex })),
    [initialIndex],
  );

  const child = children[index.value] ?? children[0];

  const variableIndexBlock = [index.value, 1].find(
    (idx) =>
      children[idx]?.language?.startsWith('json') &&
      children[idx]?.label?.startsWith('Variables'),
  );

  const jsoncVariables =
    children[0].language === 'graphql' && variableIndexBlock !== undefined
      ? children[variableIndexBlock].code
      : undefined;

  const variables =
    jsoncVariables && JSON.stringify(parse(jsoncVariables), null, 2);

  const graphqlPlaygroundButton =
    children[0].language === 'graphql' && graphqlPlayground ? (
      <Box component="span" paddingLeft="small">
        <GraphQLPlaygroundAction
          graphqlPlayground={graphqlPlayground}
          query={children[0].code}
          variables={variables}
        />
      </Box>
    ) : undefined;

  return (
    <Stack space="small">
      <ScrollableInline whiteSpace="nowrap">
        <Box display="flex" justifyContent="spaceBetween">
          <Box display="flex">
            {children.map(({ label }, labelIndex) =>
              label ? (
                <Box
                  component="span"
                  key={label}
                  paddingLeft={labelIndex === 0 ? undefined : 'small'}
                >
                  <Text
                    size="small"
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
              ) : null,
            )}
          </Box>

          <Box display="flex">
            <Box component="span" paddingLeft="small">
              <CopyableText size="small">{child.code}</CopyableText>
            </Box>

            {graphqlPlaygroundButton}
          </Box>
        </Box>
      </ScrollableInline>

      <CodeContainer
        code={child.code}
        language={child.language}
        lineNumbers={lineNumbers}
      />
    </Stack>
  );
};
