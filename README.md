# Rutgers CSO — Next.js site

## Run it

```bash
npm install     # first time only
npm run dev     # → http://localhost:3000
npm run build   # static export into out/ (host anywhere, e.g. GitHub Pages)
```

## Run the alternative concept

The reference-inspired alternative is a standalone page at
`public/cso-alternative.html`. It does not replace or modify the current site.

```bash
npm install     # first time only
npm run dev
```

Then open [http://localhost:3000/cso-alternative.html](http://localhost:3000/cso-alternative.html).
Running `npm run build` also exports it to `out/cso-alternative.html`.

## Edit content

Everything students should touch lives in **`lib/data.js`**: org info, upcoming
events, past events, values, e-board roster (grouped by `group`), sponsor tiers.
Drop images into `public/assets/` and reference them as `/assets/your-file.jpg`.

## Design system

Defined in `app/globals.css` as CSS variables — city-pop palette (periwinkle
paper, hot magenta, sunny yellow, cyan, deep navy ink), hard 2px rules, offset
block shadows, mono specimen labels, halftone collage, HUD/chat hero chrome.
Light theme is `:root`; dark (midnight city-pop) is `:root[data-theme="dark"]`,
toggled from the nav and persisted in `localStorage`.
