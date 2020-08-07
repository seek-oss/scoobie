import {
  Box,
  IconCopy,
  IconNewWindow,
  IconTick,
  Stack,
} from 'braid-design-system';
import Highlight from 'prism-react-renderer';
import React, { useState } from 'react';
import { useStyles } from 'sku/react-treat';

import { Prism, prismLanguage, prismTheme } from '../private/Prism';
import {
  CodeSize,
  DEFAULT_SIZE,
  SIZE_TO_CODE_SIZE,
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

export const CodeBlock = ({
  children,
  language: rawLanguage = 'text',
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

  const language = prismLanguage(rawLanguage);

  const codeSize = SIZE_TO_CODE_SIZE[size];

  const graphqlPlaygroundButton =
    language === 'graphql' && graphqlPlayground ? (
      <Box marginLeft="xsmall">
        <GraphQLPlaygroundButton graphqlPlayground={graphqlPlayground}>
          {codeValue}
        </GraphQLPlaygroundButton>
      </Box>
    ) : undefined;

  return (
    <Box className={styles.codeBlock} position="relative">
      <Highlight
        Prism={Prism}
        code={codeValue}
        language={language}
        theme={prismTheme}
      >
        {({ getTokenProps, tokens }) => (
          <Box
            borderRadius="standard"
            className={styles.codeContainer[codeSize]}
          >
            <Box display="flex">
              <LineNumbers codeSize={codeSize} count={tokens.length} />

              <Lines
                codeSize={codeSize}
                getTokenProps={getTokenProps}
                lines={tokens}
              />
            </Box>
          </Box>
        )}
      </Highlight>

      <Box display="flex" margin="small" position="absolute" right={0} top={0}>
        <CopyButton>{codeValue}</CopyButton>
        {graphqlPlaygroundButton}
      </Box>
    </Box>
  );
};
