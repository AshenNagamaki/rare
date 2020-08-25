export const capitalize = (s: string, locale?: string): string =>
  s.length > 0 ? `${s.charAt(0).toLocaleUpperCase(locale)}${s.slice(1)}` : s;

export const getDate = (v: number, locale?: string): string =>
  new Date(v).toLocaleDateString(locale);
