import type { LegacyPost } from "@/lib/content";

export const EDITORIAL_POSITIONS = [
  {
    number: "01",
    title: "Löyly is the reference point",
    body: "A traditional sauna heats a room with hot stones and allows water on those stones. Infrared can be useful heat, but it is a different experience. We label it honestly instead of treating every hot box as interchangeable.",
    href: "/guides/rituals",
    linkLabel: "Understand the bathing experience",
  },
  {
    number: "02",
    title: "Geometry beats gadget count",
    body: "Good benches put bathers in the hot, steamy part of the room. Ceiling height, bench height, heater position, ventilation, and the path of löyly matter more than speakers, colored lights, or an app.",
    href: "/guides/planning",
    linkLabel: "Plan the room in the right order",
  },
  {
    number: "03",
    title: "Durability belongs in the brief",
    body: "Outdoor saunas need a real weather strategy. We favor thermally modified wood, deliberate roofing, drainage, and assemblies that can dry. A low purchase price is not a bargain if the room moves, leaks, or grays before you expected it to.",
    href: "/guides/building",
    linkLabel: "Build for heat and weather",
  },
  {
    number: "04",
    title: "Electric is right for most homes",
    body: "Wood fire has a wonderful ritual, but electric heat removes daily friction. A sauna that starts reliably and fits your routine is usually the sauna you use. Choose wood when tending the fire is part of the point.",
    href: "/guides/heaters",
    linkLabel: "Choose the right heater type",
  },
  {
    number: "05",
    title: "Fit matters more than rankings",
    body: "We do not crown one heater or kit for every room. Volume, glass, clearances, stone mass, controls, service access, climate, and the temperature you enjoy all change the answer. Every recommendation should include its tradeoffs.",
    href: "/guides/heaters",
    linkLabel: "See our heater shortlist",
  },
  {
    number: "06",
    title: "Cold is optional. Claims need evidence.",
    body: "You do not need an ice bath to finish a good sauna. You also do not need a miracle claim to justify enjoying heat, quiet, conversation, and routine. We separate established precautions from associations, mechanisms, and marketing.",
    href: "/guides/health",
    linkLabel: "Read the health evidence",
  },
] as const;

export const HEATER_SHORTLIST = [
  {
    name: "Harvia KIP",
    fit: "Straightforward traditional heat",
    take: "A compact wall-mounted workhorse with built-in-control options. Start here when simplicity, quick heat, and a smaller equipment budget matter more than a large stone basket.",
    tradeoff: "Less stone mass produces a sharper, faster heat character. Confirm the exact North American model, room range, controls, and clearances.",
    url: "https://www.harvia.com/en-US/sauna-heaters/electric-sauna-heater/kip-wall-mounted-heaters/",
  },
  {
    name: "HUUM HIVE or HIVE Mini",
    fit: "Stone mass and softer löyly",
    take: "A strong option when the room has enough floor area and you want a generous exposed stone surface. We favor HIVE over a wall-mounted basket when the layout comfortably supports it.",
    tradeoff: "It needs more room, a separate control system, correct stone packing, and careful sizing. High stone mass also changes warm-up behavior.",
    url: "https://huumsauna.com/product-category/electric-sauna-heaters/",
  },
  {
    name: "HUUM DROP",
    fit: "Tight layouts and design-led rooms",
    take: "A useful wall-mounted choice when a floor-standing basket will not fit. It combines a compact footprint with substantial exposed stone and app-capable controls.",
    tradeoff: "Treat the safety rail, heat diverter, controller, stone packing, and current clearances as parts of the system, not optional afterthoughts.",
    url: "https://huumsauna.com/product/drop-electric-sauna-heater/",
  },
  {
    name: "Saunum Experience",
    fit: "Rooms with stubborn heat stratification",
    take: "Consider the air-mixing system when even head-to-foot comfort matters more than chasing the highest thermometer number, especially with low benches or high thermal mass.",
    tradeoff: "It is a more complex climate system. Plan clearances, controls, service access, acoustics, and the intended heat profile before committing.",
    url: "https://saunum.com/en/product-category/sauna-heaters/",
  },
] as const;

export const MATERIAL_SHORTLIST = [
  {
    name: "Thermo-aspen",
    take: "Our default clean, modern interior wood. It is stable, comfortable to touch, and works well for walls and benches when the profile is correct.",
  },
  {
    name: "Thermo-alder",
    take: "A warmer, tighter-grained option that is especially convincing on benches and detail work.",
  },
  {
    name: "Thermo-spruce",
    take: "The value choice for a darker, more rustic room and a practical exterior material when the grade and profile suit the assembly.",
  },
] as const;

type EditorialContext = {
  label: string;
  title: string;
  body: string;
  href: string;
  linkLabel: string;
};

export function getLegacyEditorialContext(post: LegacyPost): EditorialContext {
  const haystack = `${post.title} ${post.path} ${post.categories.map((category) => category.name).join(" ")}`.toLowerCase();

  if (/infrared|blanket/.test(haystack)) {
    return {
      label: "Our current position",
      title: "Infrared is heat, but it is not löyly.",
      body: "Infrared cabins can be convenient and enjoyable. We treat them as a separate category from a traditional stone-heated sauna, which heats the room and accepts water on hot stones. Compare the experience you want before comparing product features.",
      href: "/guides/heaters",
      linkLabel: "Compare heat types",
    };
  }

  if (/barrel|outdoor|pod|igloo/.test(haystack)) {
    return {
      label: "Our current position",
      title: "A barrel can work, but its compromises are real.",
      body: "We favor thermally modified wood, a proper weather roof, two useful bench levels, and a heater sized for the actual climate and glass area. A cabin shape usually gives better bench geometry and warmer feet. Buy a barrel for compactness, speed, or character, not because curved walls repeal heat stratification.",
      href: "/guides/planning",
      linkLabel: "Plan the room geometry",
    };
  }

  if (/heater|stove|wood-burning|electric|kilowatt|kw\b/.test(haystack)) {
    return {
      label: "Our current position",
      title: "Size the room first. Choose the heater second.",
      body: "For most homes we lean electric because easy startup leads to more sessions. Wood is the right choice when tending a fire is part of the experience. Either way, use finished volume, glass and masonry adjustments, current clearances, controls, serviceability, and the exact manual. We prefer a little real-world heating margin over a heater that only works on paper.",
      href: "/guides/heaters",
      linkLabel: "Use the current heater guide",
    };
  }

  if (/build|bench|ceiling|vapor|insulat|ventilat|wood|floor|wall|door/.test(haystack)) {
    return {
      label: "Our current position",
      title: "Build the heat, air, and drying path as one system.",
      body: "Put the upper bench in the hot zone, keep the ceiling purposeful, give löyly a clean path across bathers, and give the room a reliable way to dry. Outdoors, thermally modified wood and deliberate weather protection are worth prioritizing. The finish species matters less than getting geometry, moisture, and clearances right.",
      href: "/guides/building",
      linkLabel: "Read the construction fundamentals",
    };
  }

  if (/health|benefit|heart|weight|covid|coronavirus|detox|recovery|cold|plunge/.test(haystack)) {
    return {
      label: "Our current position",
      title: "Enjoy the practice without turning it into a cure-all.",
      body: "Sauna can support relaxation and a consistent wellness routine. Observational health associations are not treatment claims, sweat is not a magic detox pathway, and extreme cold is optional. Start conservatively, leave when you feel unwell, and take personal medical questions to a clinician who knows your history.",
      href: "/guides/health",
      linkLabel: "Read the evidence and precautions",
    };
  }

  return {
    label: "Our current position",
    title: "Plan the bathing experience before the shopping list.",
    body: "Start with the heat and humidity you enjoy, how many people will use the room, and how often you want to use it. Then solve geometry, ventilation, drying, heater sizing, and installation. Finishes and accessories come after the room works.",
    href: "/point-of-view",
    linkLabel: "See what guides our recommendations",
  };
}
