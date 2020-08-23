import { IconCopy, IconTick, Text, TextLinkButton } from 'braid-design-system';
import React, { useState } from 'react';

import { SIZE_TO_CODE_SIZE, Size } from '../../private/size';

interface Props {
  children: string;
  size: Size;
}

export const CopyAction = ({ children, size }: Props) => {
  const [copied, setCopied] = useState<boolean>(false);

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

  const codeSize = SIZE_TO_CODE_SIZE[size];

  return copied ? (
    <Text size={codeSize} tone="positive" weight="medium">
      <IconTick alignY="lowercase" /> Copied
    </Text>
  ) : (
    <Text size={codeSize} weight="medium">
      <TextLinkButton onClick={copyText}>
        <IconCopy alignY="lowercase" /> Copy
      </TextLinkButton>
    </Text>
  );
};
