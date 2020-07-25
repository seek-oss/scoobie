import {
  Box,
  Column,
  Columns,
  IconCopy,
  IconNewWindow,
  IconTick,
  Inline,
  Text,
} from 'braid-design-system';
import React, { ReactChild, ReactNodeArray, useState } from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ghcolors } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useStyles } from 'sku/react-treat';

import { SIZE_TO_CODE_SIZE, Size } from '../private/size';

import * as styleRefs from './CodeBlock.treat';

const CODE_LANGUAGE_REPLACEMENTS: Record<string, string> = {
  js: 'javascript',
  jsonc: 'json',
  sh: 'bash',
  shell: 'bash',
  splunk: 'splunk-spl',
  ts: 'typescript',
};

const Code = ({ children }: { children: ReactChild }) => {
  const styles = useStyles(styleRefs);

  return (
    <Box className={styles.codeTag} component="code">
      {children}
    </Box>
  );
};

const CopyButton = ({ children }: { children: string }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const styles = useStyles(styleRefs);

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

  return (
    <Box
      background={copied ? 'positiveLight' : 'card'}
      borderRadius="standard"
      className={styles.buttonOuter}
      onClick={copyText}
      padding="xxsmall"
      transition="touchable"
      title="Copy to Clipboard"
    >
      <Box className={styles.buttonInner} transition="touchable">
        {copied ? (
          <IconTick size="xsmall" tone="positive" />
        ) : (
          <IconCopy size="xsmall" tone="link" />
        )}
      </Box>
    </Box>
  );
};

const GraphQLPlaygroundButton = ({
  graphqlPlayground,
  children,
}: {
  graphqlPlayground: string;
  children: string;
}) => {
  const styles = useStyles(styleRefs);

  const tryInPlayground = () => {
    const graphqlPlaygroundUrl = new URL(graphqlPlayground);
    graphqlPlaygroundUrl.searchParams.set('query', children);

    window.open(graphqlPlaygroundUrl.toString(), '_blank');
  };

  return (
    <Box
      background="card"
      borderRadius="standard"
      className={styles.buttonOuter}
      onClick={tryInPlayground}
      padding="xxsmall"
      transition="touchable"
      title="Try in Playground"
    >
      <Box className={styles.buttonInner} transition="touchable">
        <IconNewWindow size="xsmall" tone="link" />
      </Box>
    </Box>
  );
};

const createPre = (size: Size) => ({
  children: [numbers, lines],
}: {
  children: ReactNodeArray;
}) => {
  const styles = useStyles(styleRefs);

  const codeSize = SIZE_TO_CODE_SIZE[size];

  return (
    <Box borderRadius="standard" className={styles.preTag} component="pre">
      <Columns space="none">
        <Column aria-hidden width="content">
          <Box className={styles.lineNumberBox} padding="medium">
            <Text align="right" size={codeSize}>
              {numbers}
            </Text>
          </Box>
        </Column>
        <Column>
          <Box padding="medium">
            <Text size={codeSize}>{lines}</Text>
          </Box>
        </Column>
      </Columns>
    </Box>
  );
};

export const CodeBlock = ({
  children,
  language = 'text',
  graphqlPlayground,
  size = 'standard',
}: {
  children: string;
  language: string;
  graphqlPlayground?: string;
  size?: Size;
}) => {
  const styles = useStyles(styleRefs);

  const codeValue = children.trim();

  const graphqlPlaygroundButton =
    language === 'graphql' && graphqlPlayground ? (
      <GraphQLPlaygroundButton graphqlPlayground={graphqlPlayground}>
        {codeValue}
      </GraphQLPlaygroundButton>
    ) : undefined;

  return (
    <Box className={styles.codeBlock} position="relative">
      <SyntaxHighlighter
        CodeTag={Code}
        PreTag={createPre(size)}
        language={CODE_LANGUAGE_REPLACEMENTS[language] ?? language}
        lineNumberContainerProps={{
          className: styles.lineNumberContainer,
          // react-syntax-highlighter specifies some nonsense defaults, but they
          // can be overwritten via object merge.
          style: {
            color: undefined,
            fontFamily: undefined,
            fontSize: undefined,
            lineHeight: undefined,
            userSelect: undefined,
          },
        }}
        showLineNumbers
        style={ghcolors}
      >
        {codeValue}
      </SyntaxHighlighter>

      <Box marginRight="small" position="absolute" right={0} top={0}>
        <Inline space="xsmall">
          <CopyButton>{codeValue}</CopyButton>
          {graphqlPlaygroundButton}
        </Inline>
      </Box>
    </Box>
  );
};
