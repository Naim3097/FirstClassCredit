import type { Eligibility } from "@/payload-types";
import type { EligibilityRow } from "@/components/EligibilitySection";

type Group = NonNullable<Eligibility["motorcycle"]>;

/** Map an Eligibility product group's rows to the section's row shape. */
export function mapEligibilityRows(
  group: Group | null | undefined,
): EligibilityRow[] {
  return (group?.rows ?? []).map((r) => ({
    icon: r.icon ?? "document",
    label: r.label ?? "",
    value: r.value ?? "",
  }));
}
