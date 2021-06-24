import url from 'url';

import { IconVideo, Text, TextLink } from 'braid-design-system';
import React from 'react';

import { SIZE_TO_SMALLER, Size } from '../../private/size';

const URL = url.URL ?? window.URL;

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
  const playgroundUrl = new URL(graphqlPlayground);
  playgroundUrl.searchParams.set('query', children);
  const href = playgroundUrl.toString();

  const smallerSize = SIZE_TO_SMALLER[size];

  return (
    <Text size={smallerSize} weight="medium">
      <TextLink href={href} rel="noreferrer" target="_blank">
        <IconVideo alignY="lowercase" /> Playground
      </TextLink>
    </Text>
  );
};
