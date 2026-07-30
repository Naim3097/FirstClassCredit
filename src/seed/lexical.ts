/**
 * Minimal helpers to build valid Lexical (Payload richText) values from plain
 * strings, for use in the seed script. Editors can enrich these afterwards.
 */

type LexicalChild = { type: string; version: number; [k: string]: unknown };

export type RichTextValue = {
  root: {
    type: string;
    children: LexicalChild[];
    direction: "ltr" | "rtl" | null;
    format: "" | "left" | "start" | "center" | "right" | "end" | "justify";
    indent: number;
    version: number;
  };
  [k: string]: unknown;
};

const textNode = (text: string): LexicalChild => ({
  type: "text",
  detail: 0,
  format: 0,
  mode: "normal",
  style: "",
  text,
  version: 1,
});

const paragraphNode = (text: string): LexicalChild => ({
  type: "paragraph",
  version: 1,
  direction: "ltr",
  format: "",
  indent: 0,
  textFormat: 0,
  textStyle: "",
  children: text ? [textNode(text)] : [],
});

const headingNode = (tag: "h2" | "h3", text: string): LexicalChild => ({
  type: "heading",
  tag,
  version: 1,
  direction: "ltr",
  format: "",
  indent: 0,
  children: [textNode(text)],
});

const listItemNode = (text: string, i: number): LexicalChild => ({
  type: "listitem",
  value: i + 1,
  version: 1,
  direction: "ltr",
  format: "",
  indent: 0,
  children: [textNode(text)],
});

const listNode = (
  listType: "bullet" | "number",
  tag: "ul" | "ol",
  items: string[],
): LexicalChild => ({
  type: "list",
  listType,
  tag,
  start: 1,
  version: 1,
  direction: "ltr",
  format: "",
  indent: 0,
  children: items.map(listItemNode),
});

/** Build a richText value from one or more paragraphs of plain text. */
export function richText(...paragraphs: string[]): RichTextValue {
  return {
    root: {
      type: "root",
      version: 1,
      direction: "ltr",
      format: "",
      indent: 0,
      children: paragraphs.map(paragraphNode),
    },
  };
}

type SeedBlock =
  | { type: "p" | "h2" | "h3" | "callout"; text: string }
  | { type: "ul" | "ol"; items: string[] };

/** Convert structured blog blocks into a Lexical richText value. */
export function richTextFromBlocks(blocks: SeedBlock[]): RichTextValue {
  const children: LexicalChild[] = [];
  for (const b of blocks) {
    if (b.type === "h2" || b.type === "h3") children.push(headingNode(b.type, b.text));
    else if (b.type === "p" || b.type === "callout") children.push(paragraphNode(b.text));
    else if (b.type === "ul") children.push(listNode("bullet", "ul", b.items));
    else if (b.type === "ol") children.push(listNode("number", "ol", b.items));
  }
  return {
    root: {
      type: "root",
      version: 1,
      direction: "ltr",
      format: "",
      indent: 0,
      children,
    },
  };
}
