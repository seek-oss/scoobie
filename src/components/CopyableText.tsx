import { IconCopy, IconTick, Text, TextLinkButton } from 'braid-design-system';
import React, { ComponentProps, Fragment, useCallback, useState } from 'react';

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
  copiedLabel?: React.ReactNode;
  copyLabel?: React.ReactNode;
  size?: ComponentProps<typeof Text>['size'];
}

export const CopyableText = ({
  children,
  copiedLabel = <DefaultCopiedLabel />,
  copyLabel = <DefaultCopyLabel />,
  size,
}: Props) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyText = useCallback(() => {
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
