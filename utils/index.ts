export const getCookieValue = (name: string): string | false =>
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() ??
  false;
