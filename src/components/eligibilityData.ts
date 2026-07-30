import type { EligibilityRow } from "@/components/EligibilitySection";

// Structural type — matches both the Eligibility global group and a
// FinancingPage's eligibility group (we only read `rows`).
type RowLike = {
  icon?: string | null;
  label?: string | null;
  value?: string | null;
};
type GroupLike = { rows?: RowLike[] | null };

/** Map an eligibility group's rows to the section's row shape. */
export function mapEligibilityRows(
  group: GroupLike | null | undefined,
): EligibilityRow[] {
  return (group?.rows ?? []).map((r) => ({
    icon: r.icon ?? "document",
    label: r.label ?? "",
    value: r.value ?? "",
  }));
}
