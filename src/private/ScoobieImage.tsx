import { Box } from 'braid-design-system';

import { img } from '../../styles/img.css';

const UNSTYLED_DIRECTIVE = '=style=none';
const TITLE_DIRECTIVE = /^=([0-9]*)x([0-9]*)$/;

interface Props {
  src?: string;
  title?: string;
}

const cleanseDoubleQuotes = (str: string) => str.replace(/"/g, "''");

const processTitle = (inputTitle: string = '') => {
  let width = '';
  let height = '';
  let applyStyle = true;

  const title = cleanseDoubleQuotes(
    inputTitle
      .split(' ')
      .reduce((acc, segment) => {
        const matchResult = TITLE_DIRECTIVE.exec(segment);
        if (matchResult !== null) {
          width = matchResult[1];
          height = matchResult[2];
          return acc;
        }

        if (segment === UNSTYLED_DIRECTIVE) {
          applyStyle = false;
          return acc;
        }

        acc.push(segment);

        return acc;
      }, [] as string[])
      .join(' '),
  );

  if (width === '' && height === '') {
    return {
      applyStyle,
      inlineStyle: {},
      title,
    };
  }

  const inlineStyle = {
    ...(height === '' ? {} : { height: `${height}px` }),
    ...(width === '' ? {} : { maxWidth: '100%', width: `${width}px` }),
  };

  return {
    applyStyle,
    inlineStyle,
    title,
  };
};

export const ScoobieImage = (props: Props) => {
  const { applyStyle, inlineStyle, title } = processTitle(props.title);

  return (
    // For wide SVGs like Mermaid diagrams
    <Box overflow="auto">
      <Box
        {...props}
        className={[applyStyle ? img : undefined]}
        style={inlineStyle}
        title={title}
        component="img"
        display="block"
      />
    </Box>
  );
};
