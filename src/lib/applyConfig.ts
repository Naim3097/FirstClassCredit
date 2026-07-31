import type { ApplySetting } from "@/payload-types";

/**
 * Which questions a single financing form asks. Every key defaults to `true`
 * so a form that has never been touched in the CMS (or a DB row predating
 * these columns) keeps asking everything it used to.
 *
 * Both products share one shape; each ignores the other's step-1 keys.
 */
export type FieldToggles = {
  // Step 1 — motorcycle
  condition: boolean;
  brand: boolean;
  year: boolean;
  price: boolean;
  downpayment: boolean;
  tenure: boolean;
  // Step 1 — smartphone
  deviceModel: boolean;
  smartphoneTenure: boolean;
  // Step 2 — financial profile (shared)
  employment: boolean;
  salary: boolean;
  commitments: boolean;
  location: boolean;
  creditIssues: boolean;
  // Step 3 — personal details (shared).
  // Full name, phone and PDPA consent are always asked, so they have no toggle.
  age: boolean;
  nric: boolean;
  email: boolean;
  preferredComm: boolean;
  payslip: boolean;
};

export type ApplyConfig = {
  motorcycleEnabled: boolean;
  smartphoneEnabled: boolean;
  motorcycleLabel: string;
  smartphoneLabel: string;
  motorcycleFields: FieldToggles;
  smartphoneFields: FieldToggles;
};

/** Only an explicit `false` from the CMS hides a question. */
const on = (v: boolean | null | undefined) => v !== false;

type ProductFields =
  | ApplySetting["motorcycleFields"]
  | ApplySetting["smartphoneFields"];

function toToggles(group: ProductFields | undefined): FieldToggles {
  const step1 = (group?.financingDetails ?? {}) as Record<
    string,
    boolean | null | undefined
  >;
  const step2 = group?.financialProfile ?? {};
  const step3 = group?.personalDetails ?? {};
  return {
    condition: on(step1.condition),
    brand: on(step1.brand),
    year: on(step1.year),
    price: on(step1.price),
    downpayment: on(step1.downpayment),
    tenure: on(step1.tenure),
    deviceModel: on(step1.deviceModel),
    smartphoneTenure: on(step1.smartphoneTenure),
    employment: on(step2.employment),
    salary: on(step2.salary),
    commitments: on(step2.commitments),
    location: on(step2.location),
    creditIssues: on(step2.creditIssues),
    age: on(step3.age),
    nric: on(step3.nric),
    email: on(step3.email),
    preferredComm: on(step3.preferredComm),
    payslip: on(step3.payslip),
  };
}

/**
 * Build the props the Apply form needs from the CMS global, falling back to
 * "everything on" with the given labels when Payload is unavailable.
 */
export function toApplyConfig(
  settings: ApplySetting | null,
  fallbackLabels: { motorcycle: string; smartphone: string },
): ApplyConfig {
  return {
    // Default both on; only hide a form when explicitly disabled in the CMS.
    motorcycleEnabled: settings?.motorcycleEnabled ?? true,
    smartphoneEnabled: settings?.smartphoneEnabled ?? true,
    motorcycleLabel: settings?.motorcycleLabel || fallbackLabels.motorcycle,
    smartphoneLabel: settings?.smartphoneLabel || fallbackLabels.smartphone,
    motorcycleFields: toToggles(settings?.motorcycleFields),
    smartphoneFields: toToggles(settings?.smartphoneFields),
  };
}
