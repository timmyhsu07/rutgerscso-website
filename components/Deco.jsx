/* Small print-shop decorations: a barcode and a four-point sparkle.
   Bar widths are hardcoded (not random) so server and client render match. */

const BARS = [3, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1];

export function Barcode({ label }) {
  let x = 0;
  const rects = BARS.map((w, i) => {
    const r = <rect key={i} x={x} y={0} width={w} height={16} fill="currentColor" />;
    x += w + 1.5;
    return r;
  });
  return (
    <span className="barcode" aria-hidden="true">
      <svg viewBox={`0 0 ${x} ${label ? 24 : 16}`} preserveAspectRatio="xMidYMid meet">
        {rects}
        {label && (
          <text
            x={x / 2}
            y={22.5}
            textAnchor="middle"
            fontSize="5.5"
            letterSpacing="1.5"
            fill="currentColor"
            fontFamily="'Space Mono', monospace"
          >
            {label}
          </text>
        )}
      </svg>
    </span>
  );
}

export function Star(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0c1 7 5 11 12 12-7 1-11 5-12 12-1-7-5-11-12-12C7 11 11 7 12 0Z" />
    </svg>
  );
}

/* Built-in flat Chinese-city artwork, shown when a stamp has no `image`.
   `accent` tints the sun so each stamp can differ. */
function CityScene({ accent }) {
  return (
    <>
      <circle cx="126" cy="30" r="11" fill={accent} />
      <path d="M12 80 34 54l14 16 12-20 22 30Z" fill="#92b4e6" />
      <g fill="#2e2a22">
        <rect x="49" y="20" width="3" height="7" />
        <path d="M39 34h23l-6-7H45Z" />
        <rect x="45" y="34" width="11" height="8" />
        <path d="M35 49h31l-7-7H42Z" />
        <rect x="42" y="49" width="17" height="9" />
        <path d="M30 66h41l-8-8H38Z" />
        <rect x="39" y="66" width="23" height="16" />
      </g>
      <g fill="#2e2a22">
        <rect x="84" y="50" width="8" height="32" />
        <rect x="96" y="60" width="10" height="22" />
        <rect x="110" y="54" width="7" height="28" />
        <rect x="121" y="63" width="12" height="19" />
        <rect x="137" y="58" width="7" height="24" />
      </g>
      <rect x="13" y="86" width="134" height="4" fill="#92b4e6" />
      <rect x="20" y="92" width="120" height="3" fill="#92b4e6" />
    </>
  );
}

/* Landscape postage stamp. Each stamp is its own object: pass `image` (a PNG
   under /public, e.g. "/assets/stamps/skyline.png") to fill the picture
   window, plus a `denom`, `caption`, and `accent`. With no `image` it draws
   the built-in city scene. The picture is cropped to the window, so any PNG
   aspect ratio works. Perforation notches punch in the scoped paper colour. */
export function CityStamp({ image, denom = "50", caption = "中国 · RU·CSO", accent = "#c14038", alt = "", className, style }) {
  const holes = [];
  for (let x = 0; x <= 160; x += 12) {
    holes.push([x, 0], [x, 124]);
  }
  for (let y = 12; y < 124; y += 12) {
    holes.push([0, y], [160, y]);
  }
  return (
    <span
      className={className}
      style={style}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
    >
      <svg viewBox="0 0 160 124">
        <rect width="160" height="124" fill="#f2ead6" />
        {holes.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="var(--paper)" />
        ))}
        {/* picture window */}
        {image ? (
          <image href={image} x="13" y="13" width="134" height="82" preserveAspectRatio="xMidYMid slice" />
        ) : (
          <CityScene accent={accent} />
        )}
        {/* frame + bottom label strip */}
        <line x1="13" y1="97" x2="147" y2="97" stroke="#2e2a22" strokeWidth="1.2" />
        <rect x="9" y="9" width="142" height="106" fill="none" stroke="#2e2a22" strokeWidth="2.5" />
        <text x="16" y="111" fontSize="12" fontWeight="700" fill="#2e2a22"
          fontFamily="'Space Mono', ui-monospace, monospace">{denom}</text>
        <text x="147" y="111" textAnchor="end" fontSize="7.5" letterSpacing="2" fill="#2e2a22"
          fontFamily="'Space Mono', ui-monospace, monospace">{caption}</text>
      </svg>
    </span>
  );
}

/* Chunky flat directional arrow, like a console UI glyph. */
export function Arrow(props) {
  return (
    <svg viewBox="0 0 124 74" aria-hidden="true" {...props}>
      <path d="M4 37 42 6v16h78v30H42v16Z" strokeLinejoin="miter" />
    </svg>
  );
}

/* Portrait branding stamp for the hero rail: red ink + lantern by default,
   or pass `image` (a PNG under /public) to fill the picture window instead. */
export function Stamp({ image, alt = "" }) {
  const holes = [];
  for (let x = 0; x <= 120; x += 12) {
    holes.push([x, 0], [x, 150]);
  }
  for (let y = 12; y < 150; y += 12) {
    holes.push([0, y], [120, y]);
  }
  return (
    <svg className="postage" viewBox="0 0 120 150" role={alt ? "img" : undefined}
      aria-label={alt || undefined} aria-hidden={alt ? undefined : true}>
      <rect width="120" height="150" fill="var(--red)" />
      {holes.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="var(--paper)" />
      ))}
      {image ? (
        <image href={image} x="10" y="10" width="100" height="112" preserveAspectRatio="xMidYMid slice" />
      ) : (
        <>
          <g fill="var(--on-red)">
            <rect x="50" y="34" width="20" height="7" />
            <ellipse cx="60" cy="70" rx="26" ry="29" />
            <rect x="50" y="99" width="20" height="7" />
            <rect x="57" y="106" width="6" height="10" />
          </g>
          <g stroke="var(--red)" strokeWidth="2" fill="none">
            <path d="M46 44c-4 8-4 44 0 52M74 44c4 8 4 44 0 52M60 41v58" />
          </g>
        </>
      )}
      <rect x="9" y="9" width="102" height="132" fill="none" stroke="var(--on-red)" strokeWidth="2" />
      <text x="60" y="134" textAnchor="middle" fontSize="11" letterSpacing="2.5" fill="var(--on-red)"
        fontFamily="'Space Mono', ui-monospace, monospace" fontWeight="700">RU · CSO</text>
    </svg>
  );
}
