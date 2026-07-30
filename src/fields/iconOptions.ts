/**
 * Icon keys that content editors can choose from. Each key maps to an inline
 * SVG in the render layer (see src/components/icons). Keeping this as a fixed
 * list means editors pick from designer-approved icons rather than pasting SVG.
 */
export const ICON_OPTIONS = [
  { label: "Calendar (tenure)", value: "calendar" },
  { label: "Lightning bolt (speed)", value: "bolt" },
  { label: "Percent (rate)", value: "percent" },
  { label: "Clock (turnaround)", value: "clock" },
  { label: "Apple", value: "apple" },
  { label: "Person (nationality)", value: "person" },
  { label: "Document", value: "document" },
  { label: "ID / income", value: "income" },
  { label: "Shield (trust)", value: "shield" },
  { label: "Chart (margin)", value: "chart" },
] as const;

export type IconKey = (typeof ICON_OPTIONS)[number]["value"];
