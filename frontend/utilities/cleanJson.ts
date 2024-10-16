/**
 * Cleans a JSON string by escaping unescaped line breaks within string literals.
 * @param {string} jsonStr - The JSON string to clean.
 * @returns {string} - The cleaned JSON string with line breaks escaped.
 */
export function cleanJson(jsonStr: string): string {
  let inString = false; // Tracks if we're inside a string literal
  let escaped = false; // Tracks if the current character is escaped
  let result = ''; // Accumulates the cleaned JSON string

  for (let i = 0; i < jsonStr.length; i++) {
    let char = jsonStr[i];

    if (char === '"' && !escaped) {
      inString = !inString; // Toggle inString status
      result += char;
      continue;
    }

    if (inString) {
      if (char === '\\' && !escaped) {
        escaped = true; // Next character is escaped
        result += char;
        continue;
      }

      // If we encounter a line break inside a string, replace it with \\n
      if ((char === '\n' || char === '\r') && !escaped) {
        result += '\\n';
        continue;
      }
    }

    // Reset escaped status if it was set
    if (escaped) {
      escaped = false;
    }

    result += char;
  }

  return result;
}
