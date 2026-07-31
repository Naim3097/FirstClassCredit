import type { Field, GlobalConfig } from "payload";

/**
 * Controls which financing application forms are available, their labels, and
 * which individual questions each form asks.
 *
 * Every field toggle defaults to ON — unchecking one hides that question from
 * the Apply form (both EN and BM) and drops it from the validation, the
 * submitted lead and the WhatsApp summary. The two products are independent:
 * you can drop NRIC from the Smartphone form and keep it on Motorcycle.
 */

const toggle = (name: string, label: string, description?: string): Field => ({
  name,
  type: "checkbox",
  defaultValue: true,
  label,
  admin: { width: "50%", description },
});

// Questions shared by both products (steps 2 and 3).
const sharedSteps = (): Field[] => [
  {
    name: "financialProfile",
    type: "group",
    label: "Step 2 — Financial Profile",
    admin: {
      description:
        "Turn every question in this step off and the step is skipped entirely.",
    },
    fields: [
      {
        type: "row",
        fields: [
          toggle("employment", "Employment Type"),
          toggle("salary", "Monthly Basic Salary (RM)"),
        ],
      },
      {
        type: "row",
        fields: [
          toggle("commitments", "Total Monthly Commitments (RM) — optional"),
          toggle("location", "Current Location (state)"),
        ],
      },
      {
        type: "row",
        fields: [toggle("creditIssues", "Existing Credit Issues?")],
      },
    ],
  },
  {
    name: "personalDetails",
    type: "group",
    label: "Step 3 — Personal Details",
    admin: {
      description:
        "Full Name, Phone Number and the PDPA consent are always asked — they are the minimum needed to follow up on a lead lawfully.",
    },
    fields: [
      {
        type: "row",
        fields: [toggle("age", "Age"), toggle("nric", "NRIC Number")],
      },
      {
        type: "row",
        fields: [
          toggle("email", "Email Address"),
          toggle("preferredComm", "Preferred Communication"),
        ],
      },
      {
        type: "row",
        fields: [toggle("payslip", "Payslip Upload — optional")],
      },
    ],
  },
];

export const ApplySettings: GlobalConfig = {
  slug: "apply-settings",
  label: "Apply Forms",
  access: { read: () => true },
  admin: {
    group: "Settings",
    description:
      "Enable/disable each financing application form, edit its label, and choose which questions it asks.",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Forms",
          description:
            "Switch a whole financing type on or off, and edit how it reads in the Financing Type dropdown.",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "motorcycleEnabled",
                  type: "checkbox",
                  defaultValue: true,
                  label: "Motorcycle form enabled",
                  admin: { width: "50%" },
                },
                {
                  name: "motorcycleLabel",
                  type: "text",
                  localized: true,
                  defaultValue: "First Class Motorcycle HP Financing",
                  admin: { width: "50%" },
                },
              ],
            },
            {
              type: "row",
              fields: [
                {
                  name: "smartphoneEnabled",
                  type: "checkbox",
                  defaultValue: true,
                  label: "Smartphone form enabled",
                  admin: { width: "50%" },
                },
                {
                  name: "smartphoneLabel",
                  type: "text",
                  localized: true,
                  defaultValue: "First Class Smartphone HP Financing",
                  admin: { width: "50%" },
                },
              ],
            },
          ],
        },
        {
          name: "motorcycleFields",
          label: "Motorcycle Questions",
          description:
            "Which questions the First Class Motorcycle HP Financing application asks. Unchecked = hidden and no longer required.",
          fields: [
            {
              name: "financingDetails",
              type: "group",
              label: "Step 1 — Financing Details",
              fields: [
                {
                  type: "row",
                  fields: [
                    toggle("condition", "Motorcycle Condition"),
                    toggle("brand", "Motorcycle Brand & Model"),
                  ],
                },
                {
                  type: "row",
                  fields: [
                    toggle("year", "Year of Manufacture"),
                    toggle("tenure", "Loan Tenure"),
                  ],
                },
                {
                  type: "row",
                  fields: [
                    toggle("price", "Motorcycle Price (RM)"),
                    toggle("downpayment", "Downpayment (RM)"),
                  ],
                },
              ],
            },
            ...sharedSteps(),
          ],
        },
        {
          name: "smartphoneFields",
          label: "Smartphone Questions",
          description:
            "Which questions the First Class Smartphone HP Financing application asks. Unchecked = hidden and no longer required.",
          fields: [
            {
              name: "financingDetails",
              type: "group",
              label: "Step 1 — Financing Details",
              fields: [
                {
                  type: "row",
                  fields: [
                    toggle("deviceModel", "Device Model"),
                    toggle("smartphoneTenure", "Preferred Financing Tenure"),
                  ],
                },
              ],
            },
            ...sharedSteps(),
          ],
        },
      ],
    },
  ],
};
