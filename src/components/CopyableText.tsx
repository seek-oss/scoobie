import { IconCopy, IconTick, Text, TextLinkButton } from 'braid-design-system';
import React, {
  ComponentProps,
  Fragment,
  ReactNode,
  useCallback,
  useState,
} from 'react';

const DefaultCopiedLabel = () => (
  <Fragment>
    <IconTick alignY="lowercase" /> Copied
  </Fragment>
);

const DefaultCopyLabel = () => (
  <Fragment>
    <IconCopy alignY="lowercase" /> Copy
  </Fragment>
);

interface Props {
  children: string;
  copiedLabel?: ReactNode;
  copyLabel?: ReactNode;
  size?: ComponentProps<typeof Text>['size'];
}

export const CopyableText = ({
  children,
  copiedLabel = <DefaultCopiedLabel />,
  copyLabel = <DefaultCopyLabel />,
  size,
}: Props) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyText = useCallback(async () => {
    if (copied) {
      return;
    }

    setCopied(true);

    await navigator.clipboard.writeText(children);

    setTimeout(() => setCopied(false), 2000);
  }, [children, copied]);

  return copied ? (
    <Text size={size} tone="positive" weight="medium">
      {copiedLabel}
    </Text>
  ) : (
    <Text size={size} weight="medium">
      <TextLinkButton onClick={copyText}>{copyLabel}</TextLinkButton>
    </Text>
  );
};
