export type Locale = "en" | "ms";

export function getLocale(pathname: string): Locale {
  return pathname === "/ms" || pathname.startsWith("/ms/") ? "ms" : "en";
}

/** Prefix an EN base path for the given locale. Home is "/" (en) or "/ms" (ms). */
export function localizeHref(path: string, locale: Locale): string {
  if (locale === "en") return path;
  if (path === "/") return "/ms";
  return "/ms" + path;
}

/** The equivalent path in the other language (used by the EN | BM toggle). */
export function toggleLocalePath(pathname: string): string {
  if (pathname === "/ms") return "/";
  if (pathname.startsWith("/ms/")) return pathname.slice(3);
  if (pathname === "/") return "/ms";
  return "/ms" + pathname;
}
