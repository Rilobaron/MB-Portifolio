export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="1" y="1" width="38" height="38" rx="10" fill="#262933" />
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="10"
        fill="none"
        stroke="#CCAA4B"
        strokeWidth="1.5"
      />
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Manrope, Inter, sans-serif"
        fontWeight="800"
        fontSize="17"
        fill="#CCAA4B"
        letterSpacing="-0.5"
      >
        MB
      </text>
    </svg>
  );
}
