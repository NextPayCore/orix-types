export const toJson = (value: string) => {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

export const toInt = (value: unknown): number | undefined => {
  try {
    switch (typeof value) {
      case 'number':
        return value;
      case 'string':
        return parseInt(value);
      default:
        return undefined;
    }
  } catch {
    return undefined;
  }
};

export const decodeHtmlEntities = (text: string): string => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '');
  return textarea.value;
};
