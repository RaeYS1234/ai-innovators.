/** Custom SVG icon library (matches reference homepage-kidfriendly.html). */
export default function IconSprite() {
  return (
    <svg
      width={0}
      height={0}
      className="pointer-events-none absolute"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <symbol id="i-rocket" viewBox="0 0 32 32">
          <path
            d="M16 2 C 11 7 8 13 8 18 L 8 24 L 12 22 L 12 26 L 16 24 L 20 26 L 20 22 L 24 24 L 24 18 C 24 13 21 7 16 2 Z"
            fill="#0ea5e9"
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="14" r="3" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
          <path
            d="M10 22 L 6 28 L 12 26"
            fill="#fbbf24"
            stroke="#d97706"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <path
            d="M22 22 L 26 28 L 20 26"
            fill="#fbbf24"
            stroke="#d97706"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-flame" viewBox="0 0 32 32">
          <path
            d="M16 4 C 12 10 8 12 8 18 C 8 24 12 28 16 28 C 20 28 24 24 24 18 C 24 14 22 12 20 14 C 20 10 18 6 16 4 Z"
            fill="#ef4444"
            stroke="#b91c1c"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M16 14 C 14 17 13 19 13 22 C 13 25 14 27 16 27 C 18 27 19 25 19 22 C 19 19 17 17 16 14 Z"
            fill="#fbbf24"
          />
        </symbol>
        <symbol id="i-star" viewBox="0 0 32 32">
          <path
            d="M16 3 L 20 12 L 30 13 L 22 20 L 25 30 L 16 24 L 7 30 L 10 20 L 2 13 L 12 12 Z"
            fill="#fbbf24"
            stroke="#d97706"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-heart" viewBox="0 0 32 32">
          <path
            d="M16 28 C 6 20 2 14 2 10 C 2 6 5 3 9 3 C 12 3 14 5 16 8 C 18 5 20 3 23 3 C 27 3 30 6 30 10 C 30 14 26 20 16 28 Z"
            fill="#ec4899"
            stroke="#be185d"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <ellipse cx="11" cy="9" rx="2" ry="3" fill="white" opacity="0.4" />
        </symbol>
        <symbol id="i-trophy" viewBox="0 0 32 32">
          <path
            d="M10 4 L 22 4 L 22 14 C 22 18 19 21 16 21 C 13 21 10 18 10 14 Z"
            fill="#fbbf24"
            stroke="#d97706"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M10 6 L 5 6 L 5 10 C 5 12 7 14 10 14" fill="none" stroke="#d97706" strokeWidth="1.5" />
          <path d="M22 6 L 27 6 L 27 10 C 27 12 25 14 22 14" fill="none" stroke="#d97706" strokeWidth="1.5" />
          <rect x="13" y="21" width="6" height="4" fill="#d97706" />
          <rect x="9" y="25" width="14" height="3" rx="1" fill="#92400e" />
        </symbol>
        <symbol id="i-bulb" viewBox="0 0 32 32">
          <path
            d="M16 3 C 10 3 6 7 6 13 C 6 17 9 19 10 21 L 10 24 L 22 24 L 22 21 C 23 19 26 17 26 13 C 26 7 22 3 16 3 Z"
            fill="#fbbf24"
            stroke="#d97706"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <rect x="11" y="25" width="10" height="2" rx="1" fill="#475569" />
          <rect x="12" y="28" width="8" height="2" rx="1" fill="#475569" />
        </symbol>
        <symbol id="i-robot" viewBox="0 0 32 32">
          <rect x="6" y="10" width="20" height="16" rx="3" fill="#0ea5e9" stroke="#0284c7" strokeWidth="1.5" />
          <rect x="10" y="14" width="4" height="4" rx="1" fill="white" />
          <rect x="18" y="14" width="4" height="4" rx="1" fill="white" />
          <circle cx="12" cy="16" r="1" fill="#0c1e3e" />
          <circle cx="20" cy="16" r="1" fill="#0c1e3e" />
          <rect x="12" y="21" width="8" height="2" rx="1" fill="white" />
          <line x1="16" y1="6" x2="16" y2="10" stroke="#0284c7" strokeWidth="2" />
          <circle cx="16" cy="5" r="2" fill="#fbbf24" />
          <line x1="6" y1="16" x2="3" y2="16" stroke="#0284c7" strokeWidth="2" />
          <line x1="29" y1="16" x2="26" y2="16" stroke="#0284c7" strokeWidth="2" />
        </symbol>
        <symbol id="i-money" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="13" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
          <text
            x="16"
            y="22"
            fontSize="16"
            fontWeight="900"
            fill="white"
            textAnchor="middle"
            fontFamily="Nunito, sans-serif"
          >
            $
          </text>
        </symbol>
        <symbol id="i-briefcase" viewBox="0 0 32 32">
          <path
            d="M11 8 L 11 6 C 11 4 12 3 14 3 L 18 3 C 20 3 21 4 21 6 L 21 8"
            fill="none"
            stroke="#475569"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <rect x="4" y="8" width="24" height="18" rx="2" fill="#0ea5e9" stroke="#0284c7" strokeWidth="1.5" />
          <rect x="4" y="14" width="24" height="2" fill="#0284c7" />
          <rect x="14" y="13" width="4" height="4" rx="0.5" fill="#fbbf24" />
        </symbol>
        <symbol id="i-chart" viewBox="0 0 32 32">
          <rect x="4" y="26" width="24" height="2" fill="#475569" />
          <rect x="6" y="18" width="4" height="8" rx="1" fill="#0ea5e9" />
          <rect x="12" y="12" width="4" height="14" rx="1" fill="#22c55e" />
          <rect x="18" y="6" width="4" height="20" rx="1" fill="#fbbf24" />
          <rect x="24" y="14" width="4" height="12" rx="1" fill="#a855f7" />
        </symbol>
        <symbol id="i-mic" viewBox="0 0 32 32">
          <rect x="12" y="3" width="8" height="16" rx="4" fill="#0ea5e9" stroke="#0284c7" strokeWidth="1.5" />
          <path
            d="M7 14 C 7 19 11 22 16 22 C 21 22 25 19 25 14"
            fill="none"
            stroke="#0284c7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line x1="16" y1="22" x2="16" y2="27" stroke="#0284c7" strokeWidth="2" />
          <rect x="11" y="27" width="10" height="2" rx="1" fill="#0284c7" />
        </symbol>
        <symbol id="i-tools" viewBox="0 0 32 32">
          <path
            d="M6 26 L 18 14 L 22 18 L 10 30 Z"
            fill="#94a3b8"
            stroke="#475569"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="22" cy="10" r="6" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
          <circle cx="22" cy="10" r="2" fill="white" />
        </symbol>
        <symbol id="i-book" viewBox="0 0 32 32">
          <path
            d="M4 6 C 4 5 5 4 6 4 L 14 4 C 15 4 16 5 16 6 L 16 26 C 16 25 15 24 14 24 L 6 24 C 5 24 4 25 4 26 Z"
            fill="#0ea5e9"
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M28 6 C 28 5 27 4 26 4 L 18 4 C 17 4 16 5 16 6 L 16 26 C 16 25 17 24 18 24 L 26 24 C 27 24 28 25 28 26 Z"
            fill="#fbbf24"
            stroke="#d97706"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-lock" viewBox="0 0 32 32">
          <path
            d="M10 14 L 10 10 C 10 6 13 3 16 3 C 19 3 22 6 22 10 L 22 14"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <rect x="6" y="14" width="20" height="14" rx="3" fill="#94a3b8" stroke="#64748b" strokeWidth="1.5" />
          <circle cx="16" cy="20" r="2" fill="#475569" />
        </symbol>
        <symbol id="i-play" viewBox="0 0 32 32">
          <polygon points="10,6 26,16 10,26" fill="currentColor" />
        </symbol>
        <symbol id="i-arrow" viewBox="0 0 32 32">
          <path
            d="M6 16 L 24 16 M 18 10 L 24 16 L 18 22"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </symbol>
        <symbol id="i-clock" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M16 8 L 16 16 L 22 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        </symbol>
        <symbol id="i-pages" viewBox="0 0 32 32">
          <rect x="6" y="6" width="18" height="22" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="10" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="22" x2="16" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </symbol>
        <symbol id="i-megaphone" viewBox="0 0 32 32">
          <path
            d="M4 12 L 4 20 L 8 20 L 22 26 L 22 6 L 8 12 Z"
            fill="#fbbf24"
            stroke="#d97706"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M22 10 C 26 11 28 13 28 16 C 28 19 26 21 22 22"
            fill="none"
            stroke="#d97706"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </symbol>
        <symbol id="i-brain" viewBox="0 0 32 32">
          <path
            d="M16 4 C 12 4 9 7 9 11 C 7 12 6 14 6 16 C 6 18 7 20 9 21 C 9 25 12 28 16 28 C 20 28 23 25 23 21 C 25 20 26 18 26 16 C 26 14 25 12 23 11 C 23 7 20 4 16 4 Z"
            fill="#f472b6"
            stroke="#be185d"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M16 8 L 16 26 M 13 12 L 19 12 M 12 16 L 20 16 M 13 20 L 19 20"
            stroke="#be185d"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
        </symbol>
        <symbol id="i-pencil" viewBox="0 0 32 32">
          <path
            d="M22 4 L 28 10 L 12 26 L 4 28 L 6 20 Z"
            fill="#fbbf24"
            stroke="#d97706"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M20 6 L 26 12" stroke="#d97706" strokeWidth="1.5" />
          <path d="M4 28 L 8 24" stroke="#0c1e3e" strokeWidth="1.5" />
        </symbol>
        <symbol id="i-target" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="13" fill="white" stroke="#ef4444" strokeWidth="2" />
          <circle cx="16" cy="16" r="9" fill="#ef4444" />
          <circle cx="16" cy="16" r="5" fill="white" />
          <circle cx="16" cy="16" r="2" fill="#ef4444" />
        </symbol>
      </defs>
    </svg>
  );
}

export function KidIcon({
  id,
  size = 32,
  className,
}: {
  id: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg width={size} height={size} className={className} aria-hidden>
      <use href={`#${id}`} />
    </svg>
  );
}
