POSTAGE STAMP IMAGES
====================

Each stamp on the site is its own object you can give a custom picture.

To put your own image in a stamp:

  1. Drop a PNG or JPG into this folder, e.g.  skyline.png
  2. Open  lib/data.js  and find the `stamps` block near the bottom.
  3. Set that stamp's `image` to the path, e.g.

        home: { image: "/assets/stamps/skyline.png", denom: "50", caption: "中国 · RU·CSO", accent: "#c14038" },

Notes:
  - Leave  image: ""  to show the built-in drawn city scene instead.
  - The picture is cropped to fill the stamp window, so any shape/size works
    (a roughly landscape image looks best; the rail stamp is tall/portrait).
  - `denom`   = the little number in the bottom-left corner.
  - `caption` = the small text along the bottom.
  - `accent`  = tints the drawn scene's sun (ignored when you use an image).

Stamp keys:  home, events, about, contact  (landscape corner stamps)
             rail                            (tall red stamp in the home hero)
