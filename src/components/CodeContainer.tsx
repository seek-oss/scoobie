import { Box, Stack } from 'braid-design-system';
import { Highlight, type Token } from 'prism-react-renderer';

import { Prism } from '../private/Prism';
import { codeThemes } from '../private/codeThemes';

import { useCodeTheme } from './CodeThemeProvider';

import * as styles from './CodeContainer.css';
import * as fontStyles from '../private/font.css';

export const CodeContainer = ({
  code,
  language,
  lineNumbers,
}: {
  code: string;
  language: string;
  lineNumbers?: boolean;
}) => {
  const theme = useCodeTheme();

  return (
    <Box borderRadius="large" className={styles.codeContainer}>
      <Highlight
        prism={Prism}
        code={code}
        language={language}
        theme={codeThemes[theme]}
      >
        {({ getTokenProps, tokens }) => (
          <Box display="flex">
            {lineNumbers ? <LineNumbers count={tokens.length} /> : null}

            <Lines getTokenProps={getTokenProps} lines={tokens} />
          </Box>
        )}
      </Highlight>
    </Box>
  );
};

const LineNumbers = ({ count }: { count: number }) => {
  const numbers = [...new Array(count)].map((_, index) => index + 1);

  return (
    <Box aria-hidden className={styles.lineNumberContainer} padding="medium">
      <Stack align="right" space="small">
        {numbers.map((number) => (
          <Box className={fontStyles.code} key={number}>
            <Box component="pre">{number}</Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

type HighlightProps = Parameters<
  Parameters<typeof Highlight>[0]['children']
>[0];

const Lines = ({
  getTokenProps,
  lines,
}: {
  getTokenProps: HighlightProps['getTokenProps'];
  lines: Token[][];
}) => (
  <Box padding="medium">
    <Stack space="small">
      {lines.map((line, lineIndex) => (
        <Box className={fontStyles.code} key={lineIndex}>
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
