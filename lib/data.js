/**
 * Content for the Rutgers CSO site.
 *
 * Everything the pages render comes from here. The copy below is sample
 * content written to the right shape — replace the strings, keep the keys.
 */

export const org = {
  name: "Chinese Student Organization",
  nameCn: "中国学生会",
  nameCnFull: "罗格斯大学中国学生会",
  short: "Rutgers CSO",
  school: "Rutgers University",
  email: "rutgerscso@gmail.com",
  location: "Rutgers University · New Brunswick, NJ",
  instagram: "https://instagram.com/rutgerscso",
  instagramHandle: "@rutgerscso",
};

export const values = [
  { no: "01", glyph: "文", label: "Celebrate culture" },
  { no: "02", glyph: "社", label: "Build community" },
  { no: "03", glyph: "交", label: "Bridge cultures" },
];

/** The three things CSO runs every year. Shown on the home page and /events. */
export const programs = [
  {
    no: "01 / 年",
    title: "Lunar New Year Gala",
    copy: "Our signature celebration of food, performance, tradition, and a new year shared with the Rutgers community.",
    href: org.instagram,
    linkLabel: "Event updates",
    external: true,
  },
  {
    no: "02 / 聚",
    title: "Boba & Socials",
    copy: "Easy ways to meet people between classes. Come alone, bring a friend, stay for one drink or the whole night.",
    href: org.instagram,
    linkLabel: "See Instagram",
    external: true,
  },
  {
    no: "03 / 文",
    title: "Culture Workshops",
    copy: "Hands-on sessions built around language, art, food, games, and the traditions our members want to share.",
    href: "/contact",
    linkLabel: "Suggest a program",
  },
];

export const upcomingEvents = [
  {
    no: "01",
    cn: "年",
    title: "Lunar New Year Gala",
    when: "Late February",
    time: "6:00 – 10:00 PM",
    location: "College Avenue Student Center",
    tag: "Signature",
    description:
      "A full night of performances, a catered dinner, and the biggest gathering we host all year. Tickets and the performer lineup go out on Instagram first.",
    rsvp: org.instagram,
  },
  {
    no: "02",
    cn: "聚",
    title: "Boba Social",
    when: "Every other Thursday",
    time: "7:30 PM",
    location: "Livingston Student Center",
    tag: "Weeknight",
    description:
      "Our low-commitment hang. Drop in, grab a drink, meet a few people, leave whenever you want. No sign-up, no dues, no experience required.",
    rsvp: org.instagram,
  },
  {
    no: "03",
    cn: "写",
    title: "Calligraphy Workshop",
    when: "Mid-October",
    time: "6:00 – 8:00 PM",
    location: "Douglass Student Center",
    tag: "Workshop",
    description:
      "Brushes, ink, and paper provided. An intro to strokes and characters taught by members, open to complete beginners.",
    rsvp: org.instagram,
  },
  {
    no: "04",
    cn: "秋",
    title: "Mid-Autumn Moon Festival",
    when: "Late September",
    time: "7:00 PM",
    location: "Voorhees Mall",
    tag: "Signature",
    description:
      "Mooncakes, lanterns, and an evening on the lawn. Bring a blanket and somebody who has never been to a CSO event.",
    rsvp: org.instagram,
  },
];

/**
 * Past events, newest first. `art` selects an illustration from
 * components/art/Illustrations.jsx — see the ART registry there for keys.
 */
export const pastEvents = [
  {
    year: "2026",
    when: "February 2026",
    title: "Lunar New Year Gala",
    tag: "Signature",
    art: "festival",
    copy: "Our largest gala yet — a sold-out room, student performances, and a lion dance that ran straight through dinner.",
  },
  {
    year: "2026",
    when: "January 2026",
    title: "Night Market",
    tag: "Collaboration",
    art: "table",
    copy: "Street-food stalls run with other cultural orgs on campus, built around the food people actually grew up eating.",
  },
  {
    year: "2026",
    when: "Fall 2026 series",
    title: "Boba Social Series",
    tag: "Weeknight",
    art: "boba",
    copy: "Eight weeknight socials across the semester. The easiest door into CSO, and the one most members walked through first.",
  },
  {
    year: "2025",
    when: "September 2025",
    title: "Mid-Autumn Moon Festival",
    tag: "Signature",
    art: "lantern",
    copy: "Lanterns on Voorhees Mall, mooncakes shared with anyone who wandered past, and a long evening that nobody rushed.",
  },
  {
    year: "2025",
    when: "November 2025",
    title: "Dumpling Night",
    tag: "Workshop",
    art: "table",
    copy: "Folding, pleating, arguing about the correct amount of filling. Recipes came from members and their families.",
  },
  {
    year: "2025",
    when: "September 2025",
    title: "Welcome Week Kickoff",
    tag: "Open house",
    art: "campus",
    copy: "Our first-day-of-semester table and open meeting, where a lot of this year’s board first said hello.",
  },
  {
    year: "2024",
    when: "February 2024",
    title: "Lunar New Year Gala",
    tag: "Signature",
    art: "festival",
    copy: "The gala that set the current format: student performances first, dinner second, dancing until the room closed.",
  },
  {
    year: "2024",
    when: "October 2024",
    title: "Calligraphy & Language Night",
    tag: "Workshop",
    art: "characters",
    copy: "An intro to brush strokes and characters, taught by members for a room of mostly first-timers.",
  },
  {
    year: "2024",
    when: "April 2024",
    title: "Campus Culture Fair",
    tag: "Collaboration",
    art: "map",
    copy: "A shared table with cultural orgs across New Brunswick, and a good reminder of how many communities live here.",
  },
];

export const boardRoles = [
  {
    no: "01",
    group: "Executive",
    glyph: "会",
    role: "President",
    roleCn: "会长",
  },
  {
    no: "02",
    group: "Executive",
    glyph: "副",
    role: "Vice President",
    roleCn: "副会长",
  },
  {
    no: "03",
    group: "Executive",
    glyph: "财",
    role: "Treasurer",
    roleCn: "财务",
  },
  {
    no: "04",
    group: "Executive",
    glyph: "秘",
    role: "Secretary",
    roleCn: "秘书",
  },
  {
    no: "05",
    group: "Directors",
    glyph: "活",
    role: "Events Director",
    roleCn: "活动",
  },
  {
    no: "06",
    group: "Directors",
    glyph: "宣",
    role: "Marketing Director",
    roleCn: "宣传",
  },
  {
    no: "07",
    group: "Directors",
    glyph: "公",
    role: "Public Relations",
    roleCn: "公关",
  },
];

export const contactChannels = [
  { label: "Email", value: org.email, href: `mailto:${org.email}` },
  {
    label: "Instagram",
    value: `${org.instagramHandle} ↗`,
    href: org.instagram,
    external: true,
  },
  { label: "Place", value: org.location },
];
