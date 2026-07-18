/*
   HOW TO ADD / EDIT CONTENT (edit this one file):
     • Each item is a { ... } block separated by commas inside [ ... ].
     • Copy an existing block, paste it, and change the text.
     • For images: drop a file into /public/assets and set the path,
       e.g.  image: "/assets/lunar-new-year.jpg"
       Leave it as "/assets/placeholder.svg" to show the placeholder art.
*/

export const org = {
  name: "Chinese Student Organization",
  nameCn: "中国学生会",
  school: "Rutgers University",
  email: "rutgerscso@gmail.com",
  location: "Rutgers University – New Brunswick, NJ",
  meetingInfo: "xyz idk when events or meetings are lmao",
  instagram: "https://instagram.com/rutgerscso",
  instagramHandle: "@rutgerscso",
};

export const currentEvents = [
  {
    title: "placeholder name 1",
    badge: "placeholder badge 1",
    date: "placeholder date 1",
    time: "placeholder time 1",
    location: "placeholder place 1",
    description: "placeholder description 1",
    image: "/assets/placeholder.svg",
    instagram: "https://instagram.com/rutgerscso",
    rsvp: "https://instagram.com/rutgerscso",
  },
  {
    title: "placeholder name 2",
    badge: "placeholder badge 2",
    date: "placeholder date 2",
    time: "placeholder time 2",
    location: "placeholder place 2",
    description: "placeholder description 2",
    image: "/assets/placeholder.svg",
    instagram: "https://instagram.com/rutgerscso",
    rsvp: "https://instagram.com/rutgerscso",
  },
  {
    title: "placeholder name 3",
    badge: "placeholder badge 3",
    date: "placeholder date 3",
    time: "placeholder time 3",
    location: "placeholder place 3",
    description: "placeholder description 3",
    image: "/assets/placeholder.svg",
    instagram: "https://instagram.com/rutgerscso",
    rsvp: "https://instagram.com/rutgerscso",
  },
];

export const pastEvents = [
  { title: "past event 1", date: "past date 1", description: "past description 1", image: "/assets/placeholder.svg" },
  { title: "past event 2", date: "past date 2", description: "past description 2", image: "/assets/placeholder.svg" },
  { title: "past event 3", date: "past date 3", description: "past description 3", image: "/assets/placeholder.svg" },
  { title: "past event 4", date: "past date 4", description: "past description 4", image: "/assets/placeholder.svg" },
];

export const values = [
  { cn: "文化", title: "Celebrate Culture", text: "We share Chinese traditions, festivals, and food with the whole Rutgers community." },
  { cn: "社区", title: "Build Community", text: "We connect students across backgrounds and class years." },
  { cn: "交流", title: "Bridge Cultures", text: "We create spaces for cultural exchange, learning, and lifelong friendships." },
];

/* `group` controls the section a member appears under; groups render in the
   order they first appear. Add members freely — the page scales. */
export const eboard = [
  { name: "First Last", role: "President", roleCn: "会长", major: "Major · Class of 20XX", group: "Executive Board", image: "/assets/avatar.svg" },
  { name: "First Last", role: "Vice President", roleCn: "副会长", major: "Major · Class of 20XX", group: "Executive Board", image: "/assets/avatar.svg" },
  { name: "First Last", role: "Treasurer", roleCn: "财务", major: "Major · Class of 20XX", group: "Executive Board", image: "/assets/avatar.svg" },
  { name: "First Last", role: "Secretary", roleCn: "秘书", major: "Major · Class of 20XX", group: "Executive Board", image: "/assets/avatar.svg" },
  { name: "First Last", role: "Events Director", roleCn: "活动", major: "Major · Class of 20XX", group: "Directors", image: "/assets/avatar.svg" },
  { name: "First Last", role: "Marketing Director", roleCn: "宣传", major: "Major · Class of 20XX", group: "Directors", image: "/assets/avatar.svg" },
  { name: "First Last", role: "Public Relations", roleCn: "公关", major: "Major · Class of 20XX", group: "Directors", image: "/assets/avatar.svg" },
];

export const sponsorTiers = [
  { tier: "Gold Sponsors", sponsors: [] },
  { tier: "Community Partners", sponsors: [] },
];

/* POSTAGE STAMPS — each stamp on the site is its own object you can change.
   To use your own picture:
     1. Drop a PNG (or JPG) into  public/assets/stamps/
     2. Set `image` below to its path, e.g. image: "/assets/stamps/skyline.png"
   Leave image: "" to show the built-in drawn city scene. The picture is
   cropped to fill the stamp window, so any shape works. `denom` is the little
   number, `caption` is the bottom line, `accent` tints the drawn scene's sun.
   `rail` is the tall red stamp in the home hero's left column. */
export const stamps = {
  home:    { image: "", denom: "50", caption: "中国 · RU·CSO", accent: "#c14038" },
  events:  { image: "", denom: "08", caption: "活动 · EVENTS",  accent: "#c14038" },
  about:   { image: "", denom: "12", caption: "关于 · ABOUT",   accent: "#3f6cb8" },
  contact: { image: "", denom: "05", caption: "联系 · CONTACT", accent: "#d9a53a" },
  rail:    { image: "" },
};
