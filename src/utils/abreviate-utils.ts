import { truncate } from 'lodash';

export class AbreviateString {
  static abbreviate(text: string, maxLength: number): string {
    const trimmedText = truncate(text, { length: maxLength });

    if (trimmedText.length < text.length) {
      return trimmedText;
    } else {
      return text;
    }
  }
}
