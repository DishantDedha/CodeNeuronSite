export default function Logo({ className = '', width = 160, height = 40 }) {
  return (
    <svg
      viewBox="0 0 320 80"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      aria-label="Codeneuron"
      role="img"
    >
      <path
        d="M 28 20 L 14 40 L 28 60"
        stroke="#4F46E5"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M 52 20 L 66 40 L 52 60"
        stroke="#4F46E5"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="40" cy="40" r="5.5" fill="#4F46E5" />
      <text
        x="84"
        y="50"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize="32"
        fontWeight="600"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        codeneuron
      </text>
    </svg>
  )
}
