export const AMAZON_TAG = "homesaunag-20";

function amazonSearch(query: string) {
  const url = new URL("https://www.amazon.com/s");
  url.searchParams.set("k", query);
  url.searchParams.set("tag", AMAZON_TAG);
  return url.toString();
}

export const AFFILIATE_PICKS = [
  {
    name: "Wool sauna hat",
    note: "Useful when your head feels hot before the rest of you; material and fit matter more than branding.",
    href: amazonSearch("wool sauna hat"),
  },
  {
    name: "Sauna bucket and ladle",
    note: "For modest additions of clean water to a compatible stone heater. Use it only where the manual permits water.",
    href: amazonSearch("sauna bucket and ladle"),
  },
  {
    name: "Sauna thermometer and hygrometer",
    note: "A simple room-condition reference, not a substitute for the heater sensor, controls, or your own comfort.",
    href: amazonSearch("sauna thermometer hygrometer"),
  },
  {
    name: "Washable bench towels",
    note: "An unglamorous essential that helps with hygiene and keeps perspiration off unfinished bench wood.",
    href: amazonSearch("sauna bench towel"),
  },
] as const;
