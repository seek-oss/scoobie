import { displayLanguage } from './Prism';

describe('displayLanguage', () => {
  it.each([
    ['', ''],
    ['c', 'C'],
    ['c#', 'C#'],
    ['csharp', 'C#'],
    ['java', 'Java'],
    ['javascript', 'JavaScript'],
    ['md', 'Markdown'],
    ['splunk', 'Splunk SPL'],
    ['tsx', 'TSX'],
    ['vba', 'Visual Basic'],
    ['visual-basic', 'Visual Basic'],
  ])("handles '%s'", (input, expected) =>
    expect(displayLanguage(input)).toBe(expected),
  );
});
