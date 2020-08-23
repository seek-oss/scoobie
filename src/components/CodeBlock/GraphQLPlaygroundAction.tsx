import { IconVideo, Text, TextLink } from 'braid-design-system';
import React from 'react';

import { SIZE_TO_CODE_SIZE, Size } from '../../private/size';

interface Props {
  children: string;
  graphqlPlayground: string;
  size: Size;
}

export const GraphQLPlaygroundAction = ({
  children,
  graphqlPlayground,
  size,
}: Props) => {
  const url = new URL(graphqlPlayground);
  url.searchParams.set('query', children);

  const codeSize = SIZE_TO_CODE_SIZE[size];

  return (
    <Text size={codeSize} weight="medium">
      <TextLink href={url.toString()} rel="noreferrer" target="_blank">
        <IconVideo alignY="lowercase" /> Playground
      </TextLink>
    </Text>
  );
};
