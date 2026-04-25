/** Nova mascot SVG (from reference homepage-kidfriendly.html script). */
export default function NovaMascot() {
  return (
    <svg
      viewBox="0 0 300 320"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full max-h-[320px] max-w-[300px]"
      aria-hidden
    >
      <defs>
        <radialGradient id="nGlareHome" cx="30%" cy="25%">
          <stop offset="0%" stopColor="white" stopOpacity="0.7" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="125" cy="295" rx="22" ry="13" fill="#0ea5e9" stroke="#0284c7" strokeWidth="3" />
      <ellipse cx="175" cy="295" rx="22" ry="13" fill="#0ea5e9" stroke="#0284c7" strokeWidth="3" />
      <ellipse cx="150" cy="245" rx="78" ry="55" fill="white" />
      <ellipse cx="150" cy="245" rx="78" ry="55" fill="none" stroke="#bae6fd" strokeWidth="4" />
      <ellipse cx="78" cy="240" rx="18" ry="22" fill="white" stroke="#bae6fd" strokeWidth="4" />
      <circle cx="72" cy="262" r="20" fill="#0ea5e9" stroke="#0284c7" strokeWidth="3" />
      <circle cx="65" cy="255" r="6" fill="white" opacity="0.5" />
      <ellipse
        cx="232"
        cy="218"
        rx="16"
        ry="22"
        fill="white"
        stroke="#bae6fd"
        strokeWidth="4"
        transform="rotate(30 232 218)"
      />
      <circle cx="248" cy="195" r="20" fill="#0ea5e9" stroke="#0284c7" strokeWidth="3" />
      <circle cx="241" cy="188" r="6" fill="white" opacity="0.6" />
      <circle cx="150" cy="248" r="20" fill="#fbbf24" stroke="#d97706" strokeWidth="3" />
      <text
        x="150"
        y="256"
        fontSize="18"
        fill="white"
        textAnchor="middle"
        fontWeight="900"
        fontFamily="Nunito, system-ui, sans-serif"
      >
        AI
      </text>
      <ellipse cx="150" cy="195" rx="85" ry="14" fill="#0ea5e9" />
      <ellipse cx="150" cy="192" rx="85" ry="10" fill="#38bdf8" />
      <circle cx="80" cy="195" r="6" fill="#fbbf24" />
      <circle cx="220" cy="195" r="6" fill="#fbbf24" />
      <circle cx="150" cy="125" r="85" fill="white" />
      <circle cx="150" cy="125" r="85" fill="none" stroke="#bae6fd" strokeWidth="4" />
      <ellipse cx="92" cy="155" rx="14" ry="9" fill="#fda4af" opacity="0.75" />
      <ellipse cx="208" cy="155" rx="14" ry="9" fill="#fda4af" opacity="0.75" />
      <ellipse cx="110" cy="128" rx="16" ry="22" fill="#1a1a2e" />
      <ellipse cx="190" cy="128" rx="16" ry="22" fill="#1a1a2e" />
      <circle cx="116" cy="120" r="6" fill="white" />
      <circle cx="105" cy="135" r="3" fill="white" />
      <circle cx="196" cy="120" r="6" fill="white" />
      <circle cx="185" cy="135" r="3" fill="white" />
      <path
        d="M 138 168 Q 150 178 162 168"
        stroke="#1a1a2e"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="150" cy="125" r="95" fill="#bae6fd" opacity="0.18" />
      <circle cx="150" cy="125" r="95" fill="url(#nGlareHome)" />
      <circle cx="150" cy="125" r="95" fill="none" stroke="#0ea5e9" strokeWidth="5" />
      <ellipse cx="105" cy="80" rx="18" ry="28" fill="white" opacity="0.7" />
      <circle cx="100" cy="70" r="8" fill="white" />
      <line x1="150" y1="30" x2="150" y2="12" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" />
      <polygon
        points="150,0 157,14 173,14 160,24 166,40 150,30 134,40 140,24 127,14 143,14"
        fill="#fbbf24"
        stroke="#d97706"
        strokeWidth="2"
      />
    </svg>
  );
}
