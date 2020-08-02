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
import React, { ReactNode, ReactNodeArray, useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ghcolors } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useStyles } from 'sku/react-treat';

import { DEFAULT_SIZE, SIZE_TO_CODE_SIZE, Size } from '../private/size';

import * as styleRefs from './CodeBlock.treat';

const CODE_LANGUAGE_REPLACEMENTS: Record<string, string> = {
  js: 'javascript',
  jsonc: 'json',
  sh: 'bash',
  shell: 'bash',
  splunk: 'splunk-spl',
  ts: 'typescript',
};

const createCode = (size: Size) => ({
  children,
}: {
  children: ReactNodeArray;
}) => {
  const styles = useStyles(styleRefs);

  const [numbers, ...lines] = children;

  const codeSize = SIZE_TO_CODE_SIZE[size];

  return (
    <Columns space="none">
      <Column aria-hidden width="content">
        <Box className={styles.lineNumberBox} padding="medium">
          <Text align="right" size={codeSize} tone="secondary">
            <Box className={styles.lineNumberContainer} component="code">
              {numbers}
            </Box>
          </Text>
        </Box>
      </Column>

      <Column>
        <Box padding="medium">
          <Text size={codeSize}>
            <Box className={styles.codeTag} component="code">
              {lines}
            </Box>
          </Text>
        </Box>
      </Column>
    </Columns>
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

const Pre = ({ children }: { children: ReactNode }) => {
  const styles = useStyles(styleRefs);

  return (
    <Box borderRadius="standard" className={styles.preTag} component="pre">
      {children}
    </Box>
  );
};

export const CodeBlock = ({
  children,
  language = 'text',
  graphqlPlayground,
  size = DEFAULT_SIZE,
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
        CodeTag={createCode(size)}
        PreTag={Pre}
        language={CODE_LANGUAGE_REPLACEMENTS[language] ?? language}
        // react-syntax-highlighter specifies some opinionated defaults, but
        // they can be overwritten via object merge.
        lineNumberContainerStyle={{
          color: undefined,
          fontFamily: 'inherit',
          fontSize: undefined,
          lineHeight: undefined,
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
