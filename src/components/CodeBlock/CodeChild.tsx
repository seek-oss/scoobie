import { displayLanguage, prismLanguage } from '../../private/Prism';

export interface CodeChildProps {
  code: string;
  label?: string;
  language?: string;
}

/**
 * Apply labels to the provided code nodes.
 */
const withLabels = <T extends CodeChildProps>(
  children: T[],
  labels: string[],
) =>
  children.map((child, index) => ({
    ...child,
    label: labels[index],
  }));

interface CodeChildWithLanguage {
  code: string;
  label?: string;
  language: string;
}

/**
 * Determine a unique label for each code node.
 *
 * If an explicit label is not provided, the language field is used instead. On
 * conflicts, the label is suffixed with an incrementing integer starting at 1.
 */
const determineUniqueLabels = (rawChildren: CodeChildProps[]) => {
  const children = withLabels(
    rawChildren,
    rawChildren.map((child) => child.label ?? displayLanguage(child.language)),
  );

  const originalLabelCounts = children.reduce((map, child) => {
    map.set(child.label, (map.get(child.label) ?? 0) + 1);
    return map;
  }, new Map<string, number>());

  const usedLabels = new Set<string>();

  return children.map((child) => {
    let label = child.label;

    while (usedLabels.has(label) || (originalLabelCounts.get(label) ?? 0) > 1) {
      const increment = label.match(/ (\d+)$/)?.[1];

      label = increment
        ? label.replace(/\d+$/, String(Number(increment) + 1))
        : `${label} 1`;
    }

    usedLabels.add(label);

    return label;
  });
};

type Labeller = (children: CodeChildWithLanguage[]) => string[];

const createLabeller = (
  fallback: Labeller,
  ...matchers: Array<{
    languages: string[];
    labels: Labeller;
  }>
) => (children: CodeChildWithLanguage[]) => {
  if (children.some((child) => child.label)) {
    return fallback(children);
  }

  const actualLanguages = JSON.stringify(
    children.map((child) => child.language),
  );

  for (const { languages, labels } of matchers) {
    if (JSON.stringify(languages) === actualLanguages) {
      return labels(children);
    }
  }

  return fallback(children);
};

/**
 * Infer the operation type from a trimmed GraphQL operation definition.
 */
const inferGraphQLOperationType = ({ code }: CodeChildProps) => {
  if (code.startsWith('mutation')) {
    return 'Mutation';
  }

  if (code.startsWith('subscription')) {
    return 'Subscription';
  }

  return 'Query';
};

const labeller = createLabeller(
  determineUniqueLabels,
  {
    languages: ['graphql', 'json', 'json'],
    labels: ([child]) => [
      inferGraphQLOperationType(child),
      'Variables',
      'Result',
    ],
  },
  {
    languages: ['graphql', 'json'],
    labels: ([child]) => [inferGraphQLOperationType(child), 'Variables'],
  },
  {
    languages: ['http', 'http'],
    labels: () => ['Request', 'Response'],
  },
);

/**
 * Normalise code nodes with the following operations:
 *
 * - Trim code whitespace
 * - Map language to Prism value
 * - Infer label based on language(s)
 * - Ensure label uniqueness
 */
export const normaliseChildren = (
  rawChildren: CodeChildProps[],
  trim: boolean,
) => {
  const children = rawChildren.map((child) => ({
    code: trim ? child.code.trim() : child.code,
    label: child.label,
    language: prismLanguage(child.language),
  }));

  const labels = labeller(children);

  return withLabels(children, labels);
};
