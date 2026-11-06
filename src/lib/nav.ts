// Single source of truth for the site header navigation.
// Used by SiteHeader; the same set of links appears on every page.
export type NavItem =
  | { label: string; href: string }
  | { label: string; items: ReadonlyArray<{ label: string; href: string }> };

export const headerNavItems: ReadonlyArray<NavItem> = [
  {
    label: "Grooming",
    items: [
      { label: "Mobile Grooming", href: "/mobile-grooming/" },
      { label: "In-House Grooming", href: "/in-house-grooming/" },
    ],
  },
  { label: "Daycare", href: "/dog-daycare/" },
  { label: "Boarding", href: "/dog-boarding/" },
  { label: "Training", href: "/dog-training/" },
  { label: "Enrichment", href: "/enrichment/" },
  { label: "Events", href: "/events/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Blog", href: "/blog/" },
];

/** Compact desktop navigation; mobile keeps its existing service shortcuts. */
export const desktopNavItems: ReadonlyArray<NavItem> = [
  { label: "Mobile Grooming", href: "/mobile-grooming/" },
  {
    label: "Pet Resort",
    items: [
      { label: "In-House Grooming", href: "/in-house-grooming/" },
      { label: "Daycare", href: "/dog-daycare/" },
      { label: "Boarding", href: "/dog-boarding/" },
      { label: "Training", href: "/dog-training/" },
      { label: "Enrichment", href: "/enrichment/" },
    ],
  },
  {
    label: "Explore",
    items: [
      { label: "About Us", href: "/#about" },
      { label: "Events", href: "/events/" },
      { label: "Gallery", href: "/gallery/" },
      { label: "Blog", href: "/blog/" },
    ],
  },
  { label: "Contact", href: "/contact/" },
];
