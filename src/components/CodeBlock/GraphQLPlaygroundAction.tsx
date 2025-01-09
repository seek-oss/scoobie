import { IconVideo, Text, TextLink } from 'braid-design-system';

import type { Size } from '../../private/size';

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
}: Props) => {
  const playgroundUrl = new URL(graphqlPlayground);
  playgroundUrl.searchParams.set('query', query);
  playgroundUrl.searchParams.set('variables', variables ?? '{}');
  const href = playgroundUrl.toString();

  return (
    <Text size="small" weight="medium">
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
