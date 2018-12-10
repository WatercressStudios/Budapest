export default function parseCommand(input: string): string[] {
  const elements = input.split(/([^"]\S*|".+?")\s*/);
  const matches = [];
  for (const element of elements) {
    if (element.length > 0) {
      if (element.charAt(0) === '"') {
        matches.push(element.substring(1, element.length - 1));
      } else {
        matches.push(element);
      }
    }
  }
  return matches;
}