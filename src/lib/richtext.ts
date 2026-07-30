/** True when a Lexical rich-text value has actual content (non-empty root). */
export function hasRichText(value: unknown): boolean {
  if (!value || typeof value !== "object") return false;
  const root = (value as { root?: { children?: unknown[] } }).root;
  return Array.isArray(root?.children) && root.children.length > 0;
}
