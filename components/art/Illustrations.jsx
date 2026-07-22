/**
 * Every illustration on the site is inline SVG — no image assets, no network
 * requests, and they stay crisp at any size. Each accepts svg props so callers
 * can pass className or preserveAspectRatio.
 */

export function CampusTile(props) {
  return (
    <svg
      viewBox="0 0 360 520"
      role="img"
      aria-label="Abstract Rutgers campus"
      {...props}
    >
      <rect width="360" height="520" fill="#77d0e8" />
      <rect y="324" width="360" height="196" fill="#d9f4fb" />
      <path
        d="M63 520V165h213v355"
        fill="#ecece7"
        stroke="#090a0b"
        strokeWidth="3"
      />
      <path d="M86 520V198h167v322" fill="#fafaf7" />
      <g stroke="#090a0b" strokeWidth="2" fill="none">
        <path d="M112 222v298M148 222v298M184 222v298M220 222v298" />
        <path d="M86 260h167M86 316h167M86 372h167M86 428h167" />
      </g>
      <rect x="18" y="178" width="95" height="112" fill="#d9272e" />
      <text
        x="64"
        y="242"
        fill="white"
        fontFamily="Arial"
        fontSize="58"
        fontWeight="900"
        textAnchor="middle"
      >
        R
      </text>
      <path d="M0 94 165 0h195v76L171 142Z" fill="#f5f5f1" opacity=".72" />
      <text
        x="334"
        y="500"
        fill="#090a0b"
        fontFamily="Arial"
        fontSize="9"
        fontWeight="700"
        textAnchor="end"
      >
        NEW BRUNSWICK / 40.4862° N
      </text>
    </svg>
  );
}

export function CharacterTile(props) {
  return (
    <svg
      viewBox="0 0 360 220"
      role="img"
      aria-label="Chinese character pattern"
      {...props}
    >
      <rect width="360" height="220" fill="#f5f5f1" />
      <g fill="#090a0b" fontFamily="Arial" fontSize="46" fontWeight="900">
        <text x="10" y="52">
          文化社区
        </text>
        <text x="-32" y="108">
          社区交流
        </text>
        <text x="18" y="164">
          交流文化
        </text>
        <text x="-50" y="220">
          学生组织
        </text>
      </g>
      <rect x="230" width="130" height="220" fill="#d8ff3e" opacity=".78" />
      <path d="M230 0 360 220M270 0 360 152M230 68l90 152" stroke="#090a0b" />
    </svg>
  );
}

export function LanternTile(props) {
  return (
    <svg
      viewBox="0 0 360 480"
      role="img"
      aria-label="Red lantern installation"
      {...props}
    >
      <rect width="360" height="480" fill="#e9e8e2" />
      <g stroke="#090a0b" strokeWidth="2">
        <path d="M0 72h360M0 192h360M0 312h360" />
        <path d="M62 0v480M180 0v480M298 0v480" />
      </g>
      <g fill="#d9272e" stroke="#090a0b" strokeWidth="3">
        <path d="M85 62c-30 14-30 74 0 88 30-14 30-74 0-88Z" />
        <path d="M245 178c-44 20-44 108 0 128 44-20 44-108 0-128Z" />
        <path d="M122 328c-36 16-36 88 0 104 36-16 36-88 0-104Z" />
      </g>
      <g stroke="#090a0b" strokeWidth="2">
        <path d="M85 45v17M85 150v32M245 150v28M245 306v42M122 300v28M122 432v48" />
      </g>
      <text
        x="338"
        y="464"
        fontFamily="Arial"
        fontSize="9"
        fontWeight="700"
        textAnchor="end"
      >
        LIGHT / MEMORY / GATHERING
      </text>
    </svg>
  );
}

export function BobaTile(props) {
  return (
    <svg
      viewBox="0 0 360 220"
      role="img"
      aria-label="Boba social graphic"
      {...props}
    >
      <rect width="360" height="220" fill="#090a0b" />
      <circle cx="90" cy="112" r="78" fill="#f5f5f1" />
      <path
        d="M67 58h68l-9 118H76Z"
        fill="#d0a16e"
        stroke="#090a0b"
        strokeWidth="4"
      />
      <path d="m115 60 32-48" stroke="#d9272e" strokeWidth="10" />
      <g fill="#090a0b">
        <circle cx="89" cy="148" r="8" />
        <circle cx="109" cy="158" r="8" />
        <circle cx="93" cy="170" r="8" />
      </g>
      <text
        x="188"
        y="96"
        fill="white"
        fontFamily="Arial"
        fontSize="34"
        fontWeight="900"
      >
        BOBA
      </text>
      <text
        x="188"
        y="130"
        fill="white"
        fontFamily="Arial"
        fontSize="34"
        fontWeight="900"
      >
        SOCIAL
      </text>
      <text
        x="190"
        y="158"
        fill="#d8ff3e"
        fontFamily="Courier New"
        fontSize="11"
      >
        ALL STUDENTS WELCOME
      </text>
    </svg>
  );
}

export function CampusGathering(props) {
  return (
    <svg
      viewBox="0 0 760 300"
      role="img"
      aria-label="Abstract campus gathering"
      {...props}
    >
      <rect width="760" height="300" fill="#d9d9d2" />
      <path d="M0 236 202 96l164 91L536 38l224 117v145H0Z" fill="#f5f5f1" />
      <path
        d="m0 236 202-140 164 91L536 38l224 117"
        fill="none"
        stroke="#090a0b"
        strokeWidth="2"
      />
      <g fill="#090a0b">
        <circle cx="215" cy="202" r="17" />
        <circle cx="268" cy="220" r="17" />
        <circle cx="328" cy="198" r="17" />
        <circle cx="389" cy="224" r="17" />
        <circle cx="450" cy="201" r="17" />
      </g>
      <g stroke="#090a0b" strokeWidth="5">
        <path d="M215 219v58M268 237v40M328 215v62M389 241v36M450 218v59" />
      </g>
      <rect x="584" y="66" width="100" height="100" fill="#d9272e" />
      <text
        x="634"
        y="137"
        fill="white"
        fontFamily="Arial"
        fontSize="64"
        fontWeight="900"
        textAnchor="middle"
      >
        华
      </text>
    </svg>
  );
}

export function FestivalPoster(props) {
  return (
    <svg
      viewBox="0 0 420 620"
      role="img"
      aria-label="Abstract festival poster"
      {...props}
    >
      <rect width="420" height="620" fill="#090a0b" />
      <rect x="35" y="34" width="350" height="552" fill="#d9272e" />
      <circle cx="210" cy="230" r="124" fill="#f5f5f1" />
      <path d="M98 230h224M210 108v244" stroke="#090a0b" strokeWidth="2" />
      <text
        x="210"
        y="278"
        fill="#090a0b"
        fontFamily="Arial"
        fontSize="130"
        fontWeight="900"
        textAnchor="middle"
      >
        春
      </text>
      <text x="62" y="548" fill="white" fontFamily="Courier New" fontSize="14">
        NEW YEAR / NEW CONNECTIONS
      </text>
    </svg>
  );
}

export function SharedTable(props) {
  return (
    <svg
      viewBox="0 0 460 300"
      role="img"
      aria-label="Shared table illustration"
      {...props}
    >
      <rect width="460" height="300" fill="#71cee6" />
      <ellipse
        cx="230"
        cy="180"
        rx="188"
        ry="78"
        fill="#f5f5f1"
        stroke="#090a0b"
        strokeWidth="3"
      />
      <g fill="#d9272e" stroke="#090a0b" strokeWidth="2">
        <circle cx="156" cy="166" r="45" />
        <circle cx="286" cy="181" r="54" />
      </g>
      <g fill="none" stroke="#090a0b" strokeWidth="7" strokeLinecap="round">
        <path d="M90 76 188 228M120 62l98 152M332 60 246 220M363 78l-86 156" />
      </g>
    </svg>
  );
}

export function MapGraphic(props) {
  return (
    <svg
      viewBox="0 0 460 300"
      role="img"
      aria-label="Rutgers map graphic"
      {...props}
    >
      <rect width="460" height="300" fill="#f5f5f1" />
      <g stroke="#090a0b" fill="none">
        <path d="M0 68c80 50 132-20 214 28s152-35 246 18" />
        <path d="M0 122c88 44 160-18 240 34s130-26 220 10" />
        <path d="M0 190c96-44 144 28 220-14s148 18 240-20" />
        <path d="M0 250c108-54 160 30 256-22s126 20 204-8" />
      </g>
      <circle cx="242" cy="154" r="23" fill="#d9272e" />
      <circle cx="242" cy="154" r="7" fill="#f5f5f1" />
      <text
        x="274"
        y="160"
        fill="#090a0b"
        fontFamily="Arial"
        fontSize="17"
        fontWeight="900"
      >
        YOU ARE HERE
      </text>
      <text
        x="20"
        y="282"
        fill="#090a0b"
        fontFamily="Courier New"
        fontSize="10"
      >
        NEW BRUNSWICK, NEW JERSEY
      </text>
    </svg>
  );
}

export function ConnectionArt(props) {
  return (
    <svg
      viewBox="0 0 500 320"
      role="img"
      aria-label="Abstract community portrait"
      {...props}
    >
      <rect width="500" height="320" fill="#9ba8a8" />
      <circle cx="122" cy="116" r="88" fill="#d8ff3e" />
      <circle cx="330" cy="154" r="128" fill="#68cce8" />
      <circle cx="250" cy="278" r="150" fill="#d9272e" />
      <path
        d="M0 270 500 48M0 220 500 0M68 320 500 128"
        stroke="#090a0b"
        strokeWidth="2"
      />
      <text x="28" y="42" fill="#090a0b" fontFamily="Courier New" fontSize="12">
        CONNECTION STUDY / 01
      </text>
    </svg>
  );
}

/** Keys used by `art` fields in lib/data.js. */
export const ART = {
  campus: CampusGathering,
  characters: CharacterTile,
  lantern: LanternTile,
  boba: BobaTile,
  festival: FestivalPoster,
  table: SharedTable,
  map: MapGraphic,
};
