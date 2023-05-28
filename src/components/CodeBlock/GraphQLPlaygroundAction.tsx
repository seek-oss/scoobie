import { IconVideo, Text, TextLink } from 'braid-design-system';
import React from 'react';

import { SIZE_TO_SMALLER, type Size } from '../../private/size';

const URL = window.URL;

interface Props {
  query: string;
  variables: string | undefined;
  graphqlPlayground: string;
  size: Size;
}

export const GraphQLPlaygroundAction = ({
  query,
  variables,
  graphqlPlayground,
  size,
}: Props) => {
  const playgroundUrl = new URL(graphqlPlayground);
  playgroundUrl.searchParams.set('query', query);
  playgroundUrl.searchParams.set('variables', variables ?? '{}');
  const href = playgroundUrl.toString();

  const smallerSize = SIZE_TO_SMALLER[size];

  return (
    <Text size={smallerSize} weight="medium">
      <TextLink
        href={href}
        icon={<IconVideo alignY="lowercase" />}
        rel="noreferrer"
        target="_blank"
      >
        GraphQL Explorer
      </TextLink>
    </Text>
  );
};
