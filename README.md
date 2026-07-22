# Rutgers CSO — Next.js site

The editorial/grid-paper design is now the site itself. It used to live as a
standalone concept page at `public/cso-alternative.html`; that file is gone and
its design has been split into components and routes.

## Run it

```bash
npm install     # first time only
npm run dev     # → http://localhost:3000
npm run build   # static export into out/ (host anywhere, e.g. GitHub Pages)
```

There is no server runtime — `next.config.mjs` sets `output: "export"`, so the
build is a folder of static files.

## Pages

| Route          | What it is                                           |
| -------------- | ---------------------------------------------------- |
| `/`            | Hero, who we are, signature programs, E-Board, index |
| `/events`      | What is coming up, plus the three yearly programs    |
| `/events/past` | Archive of everything already run, grouped by year   |
| `/about`       | Full story, values, and the E-Board roster           |
| `/contact`     | Contact details and a form that opens your email app |

`Past Events` is reachable from the submenu under **Events** in the nav, from
the footer, and from the callout at the bottom of `/events`.

## Edit content

Everything students should touch lives in **`lib/data.js`**: org info, values,
yearly programs, upcoming events, past events, E-Board roles, and contact
channels. The copy in there is sample content written to the right shape —
replace the strings and keep the keys.

Past events pick their artwork with an `art` key (`festival`, `table`, `boba`,
`lantern`, `campus`, `characters`, `map`) — see the `ART` registry in
`components/art/Illustrations.jsx`.

## Structure

- `app/` — routes. `layout.jsx` holds the skip link, scroll progress, nav, and
  footer that wrap every page.
- `components/` — the building blocks. `Reveal.jsx` is the scroll-in wrapper;
  anything passed through it fades up once when it first enters the viewport.
- `components/art/Illustrations.jsx` — every illustration on the site, as inline
  SVG. No image assets, no network requests.

## Design system

- `app/site.css` — the ported stylesheet: paper/ink palette with red, sky blue,
  and acid green accents, hairline rules, grid-paper backgrounds, uppercase
  ultra-bold display type, and Courier specimen labels. It is layered: a base
  pass followed by a refinement pass that overrides it, so **later rules win**.
- `app/site-extensions.css` — everything added on top for the componentized
  site: the Events submenu, page mastheads, the events list, and the archive.
  Loaded after `site.css` and built from the same custom properties.

The refinement pass had flattened the concept to plain white and switched the
decorative backgrounds off. The bottom of `site-extensions.css` restores them,
and that section is load-bearing for the current look:

- `--paper`, `--ink`, and `--grid` go back to the concept values, so pages sit
  on warm paper carrying the graph-paper grid.
- `.night` sections are ink again, with the radial arc pattern re-enabled via
  `.night::before`. Everything scoped under `.night` re-asserts the light text,
  borders, and form styling that the refinement pass had darkened for white.
- The hero deck is anchored below the rotating mosaic using custom properties
  that mirror the mosaic and index geometry, with a second set of values below
  980px where both move.

There is no theme toggle and no webfont — the design is single-theme and uses
system font stacks on purpose.
