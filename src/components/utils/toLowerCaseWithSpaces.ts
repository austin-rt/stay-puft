export const toLowerCaseWithSpaces = (str: string): string =>
  str.replace(/([A-Z])/g, ' $1').toLowerCase();
