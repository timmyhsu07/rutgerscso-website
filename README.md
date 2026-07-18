# Rutgers CSO — Next.js site


## Run it

```bash
npm install     # first time only
npm run dev     # → http://localhost:3000
npm run build   # static export into out/ (host anywhere, e.g. GitHub Pages)
```

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
