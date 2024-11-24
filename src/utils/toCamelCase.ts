 
export function toCamelCase(str: string): string {
  return str.replace(/_./g, (match) => match.charAt(1).toUpperCase());
}
