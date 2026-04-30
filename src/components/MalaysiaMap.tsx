"use client";

/**
 * Dotted halftone Malaysia map SVG.
 * Shows Peninsular Malaysia (West) and East Malaysia (Sarawak + Sabah).
 * Kuching, Sarawak is highlighted with an animated pulse marker.
 */
export default function MalaysiaMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 630 275"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Dotted map of Malaysia with Kuching, Sarawak highlighted"
    >
      <defs>
        {/* Halftone dot grid */}
        <pattern id="my-dot" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="2.4" fill="#0d2461" />
        </pattern>

        {/* ── Peninsular Malaysia ── */}
        <clipPath id="my-peninsular">
          <path d="
            M 44,22
            L 62,15
            L 82,16
            L 110,30
            L 128,46
            L 148,76
            L 158,110
            L 164,148
            L 163,185
            L 154,218
            L 140,240
            L 126,252
            L 112,257
            L 96,254
            L 80,246
            L 65,234
            L 50,218
            L 38,196
            L 28,168
            L 26,138
            L 26,108
            L 30,80
            L 36,58
            Z
          " />
        </clipPath>

        {/* ── Sarawak ── */}
        <clipPath id="my-sarawak">
          <path d="
            M 256,240
            L 260,212
            L 268,188
            L 282,168
            L 300,155
            L 322,145
            L 348,136
            L 372,127
            L 398,121
            L 422,117
            L 452,114
            L 478,114
            L 498,116
            L 512,122
            L 524,130
            L 521,152
            L 512,172
            L 496,192
            L 474,210
            L 446,225
            L 416,236
            L 382,245
            L 348,250
            L 314,251
            L 284,246
            L 264,242
            Z
          " />
        </clipPath>

        {/* ── Sabah ── */}
        <clipPath id="my-sabah">
          <path d="
            M 524,130
            L 528,108
            L 534,86
            L 540,64
            L 552,46
            L 566,36
            L 582,34
            L 598,42
            L 612,60
            L 622,86
            L 624,112
            L 618,136
            L 606,154
            L 588,164
            L 568,168
            L 548,163
            L 532,150
            Z
          " />
        </clipPath>
      </defs>

      {/* Peninsular Malaysia – dot-filled */}
      <rect width="630" height="275" fill="url(#my-dot)" clipPath="url(#my-peninsular)" opacity="0.65" />

      {/* Sarawak – dot-filled */}
      <rect width="630" height="275" fill="url(#my-dot)" clipPath="url(#my-sarawak)" opacity="0.65" />

      {/* Sabah – dot-filled */}
      <rect width="630" height="275" fill="url(#my-dot)" clipPath="url(#my-sabah)" opacity="0.65" />

      {/* ── Kuching, Sarawak marker ── */}
      {/* Outer pulse ring */}
      <circle cx="305" cy="163" r="20" fill="#EE4720" fillOpacity="0.1">
        <animate attributeName="r" values="16;26;16" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="fill-opacity" values="0.12;0.03;0.12" dur="2.4s" repeatCount="indefinite" />
      </circle>
      {/* Mid ring */}
      <circle cx="305" cy="163" r="10" fill="#EE4720" fillOpacity="0.28" />
      {/* Core dot */}
      <circle cx="305" cy="163" r="5" fill="#EE4720" />

      {/* Label */}
      <text
        x="316"
        y="160"
        fontSize="9.5"
        fill="#EE4720"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.4"
      >
        Kuching
      </text>
    </svg>
  );
}
