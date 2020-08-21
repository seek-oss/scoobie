import {
  Box,
  IconCopy,
  IconTick,
  IconVideo,
  Stack,
  Text,
  TextLinkButton,
} from 'braid-design-system';
import Highlight from 'prism-react-renderer';
import React, { useState } from 'react';
import { useStyles } from 'sku/react-treat';

import {
  Prism,
  displayLanguage,
  prismLanguage,
  prismTheme,
} from '../private/Prism';
import { ScrollableInline } from '../private/ScrollableInline';
import {
  CodeSize,
  DEFAULT_SIZE,
  SIZE_TO_CODE_SIZE,
  SIZE_TO_TABLE_PADDING,
  Size,
} from '../private/size';

import * as styleRefs from './CodeBlock.treat';

type Token = Parameters<Highlight['getTokenProps']>[0]['token'];

interface LineNumberProps {
  codeSize: CodeSize;
  count: number;
}

const LineNumbers = ({ count, codeSize }: LineNumberProps) => {
  const styles = useStyles(styleRefs);

  const numbers = [...new Array(count)].map((_, index) => index + 1);

  return (
    <Box aria-hidden className={styles.lineNumberContainer} padding="medium">
      <Stack align="right" space="small">
        {numbers.map((number) => (
          <Box className={styles.code[codeSize]} component="pre" key={number}>
            {number}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

interface LineProps {
  codeSize: CodeSize;
  getTokenProps: Highlight['getTokenProps'];
  lines: Token[][];
}

const Lines = ({ codeSize, getTokenProps, lines }: LineProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box padding="medium">
      <Stack space="small">
        {lines.map((line, lineIndex) => (
          <Box
            className={styles.code[codeSize]}
            component="pre"
            key={lineIndex}
          >
            {line.map((token, tokenIndex) => {
              const props = getTokenProps({ token });

              return <Box component="span" {...props} key={tokenIndex} />;
            })}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

const CopyButton = ({ children, size }: { children: string; size: Size }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyText = () => {
    if (copied) {
      return;
    }

    setCopied(true);

    const textarea = document.createElement('textarea');
    textarea.readOnly = true;
    textarea.style.height = '0';
    textarea.style.opacity = '0.01';
    textarea.style.position = 'absolute';
    textarea.style.zIndex = '-1';
    textarea.value = children;

    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');
    textarea.remove();

    setTimeout(() => setCopied(false), 2000);
  };

  const codeSize = SIZE_TO_CODE_SIZE[size];

  return copied ? (
    <Text size={codeSize} tone="positive" weight="medium">
      <IconTick alignY="lowercase" /> Copied
    </Text>
  ) : (
    <Text size={codeSize} weight="medium">
      <TextLinkButton onClick={copyText}>
        <IconCopy alignY="lowercase" /> Copy
      </TextLinkButton>
    </Text>
  );
};

const GraphQLPlaygroundButton = ({
  children,
  graphqlPlayground,
  size,
}: {
  children: string;
  graphqlPlayground: string;
  size: Size;
}) => {
  const tryInPlayground = () => {
    const graphqlPlaygroundUrl = new URL(graphqlPlayground);
    graphqlPlaygroundUrl.searchParams.set('query', children);

    window.open(graphqlPlaygroundUrl.toString(), '_blank');
  };

  const codeSize = SIZE_TO_CODE_SIZE[size];

  return (
    <Text size={codeSize} weight="medium">
      <TextLinkButton onClick={tryInPlayground}>
        <IconVideo alignY="lowercase" /> Playground
      </TextLinkButton>
    </Text>
  );
};

interface ChildProps {
  code: string;
  label?: string;
  language: string;
}

const normaliseChild = (child: ChildProps) => ({
  code: child.code.trim(),
  label: child.label ?? displayLanguage(child.language),
  language: prismLanguage(child.language),
});

type Props = {
  graphqlPlayground?: string;
  size?: Size;
} & (
  | { children: string; language: string }
  | {
      children: ChildProps[];
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
        <GraphQLPlaygroundButton
          graphqlPlayground={graphqlPlayground}
          size={size}
        >
          {child.code}
        </GraphQLPlaygroundButton>
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
              <CopyButton size={size}>{child.code}</CopyButton>
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
