import { IconCopy, IconTick, Text, TextLinkButton } from 'braid-design-system';
import {
  type ComponentProps,
  type MouseEventHandler,
  type ReactNode,
  useCallback,
  useState,
} from 'react';

interface Props {
  children: string;
  copiedIcon?: ComponentProps<typeof Text>['icon'] | false;
  copiedLabel?: ReactNode;
  copyIcon?: ComponentProps<typeof TextLinkButton>['icon'] | false;
  copyLabel?: ReactNode;
  size?: ComponentProps<typeof Text>['size'];
}

export const CopyableText = ({
  children,
  copiedIcon = <IconTick alignY="lowercase" />,
  copiedLabel = 'Copied',
  copyIcon = <IconCopy alignY="lowercase" />,
  copyLabel = 'Copy',
  size,
}: Props) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyText: MouseEventHandler<HTMLSpanElement> = useCallback(
    async (event) => {
      event.stopPropagation();

      if (copied) {
        return;
      }

      setCopied(true);

      await navigator.clipboard.writeText(children);

      setTimeout(() => setCopied(false), 2000);
    },
    [children, copied],
  );

  return copied ? (
    <Text
      icon={copiedIcon || undefined}
      size={size}
      tone="positive"
      weight="medium"
    >
      {copiedLabel}
    </Text>
  ) : (
    <Text size={size} weight="medium">
      <TextLinkButton icon={copyIcon || undefined} onClick={copyText}>
        {copyLabel}
      </TextLinkButton>
    </Text>
  );
};
