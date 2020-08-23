import { displayLanguage, prismLanguage } from '../../private/Prism';

export interface CodeChildProps {
  code: string;
  label?: string;
  language: string;
}

export const normaliseChild = (child: CodeChildProps) => ({
  code: child.code.trim(),
  label: child.label ?? displayLanguage(child.language),
  language: prismLanguage(child.language),
});
