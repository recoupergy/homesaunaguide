import type { LegacyPost } from "@/lib/content";

export const EDITORIAL_POSITIONS = [
  {
    number: "01",
    title: "The bather is the brief",
    body: "We judge a sauna by what a person feels on the bench: even convective warmth, breathable air, controllable löyly, and no cold-feet penalty. A peak thermometer number cannot rescue bad geometry or stale air.",
    href: "/guides/rituals",
    linkLabel: "Understand the target experience",
  },
  {
    number: "02",
    title: "Design from the ceiling down",
    body: "Start with the upper bench about 100–120 cm below the ceiling, then place the foot bench about 45 cm lower and, when the system allows, at or above the stone line. These are planning baselines—not permission to ignore the exact manual, code, or accessibility.",
    href: "/guides/planning",
    linkLabel: "Plan the hot zone",
  },
  {
    number: "03",
    title: "Ventilation serves people first",
    body: "Fresh air is part of the heat experience, not just a drying afterthought. Mechanical and gravity systems need different layouts; many mechanically ventilated electric rooms work best with supply near or above the heater, low exhaust away from it, and a separate high drying path.",
    href: "/guides/building",
    linkLabel: "Plan heat and air together",
  },
  {
    number: "04",
    title: "Drying needs a complete assembly",
    body: "We favor one continuous heat-tolerant vapor-control strategy, no accidental double barriers, a small cavity behind interior cladding, cleanable floors, drainage where practical, and a deliberate post-session drying path. Moisture details are performance details.",
    href: "/guides/building",
    linkLabel: "Build a durable enclosure",
  },
  {
    number: "05",
    title: "Choose heaters by the heat they create",
    body: "Adjusted room load, stone capacity, airflow, radiant comfort, clearances, controls, certification, maintenance, and service matter more than brand mythology. Electric is the low-friction default for most homes; wood is right when tending the fire is part of the experience.",
    href: "/guides/heaters",
    linkLabel: "Choose the whole heater system",
  },
  {
    number: "06",
    title: "Use glass with restraint",
    body: "A door light or modest window can improve connection and safety. Large glass areas add heat load, reduce forgiving wood surface, and can make the room feel harsher. Use safety glazing where required and size the heater for every uninsulated surface.",
    href: "/guides/planning",
    linkLabel: "Account for the real room load",
  },
  {
    number: "07",
    title: "Cedar is valid, not mandatory",
    body: "Cedar can make an excellent sauna. It is not the definition of one. Aspen, alder, spruce, and other suitable softwoods may offer a quieter aroma, while thermally modified wood earns our preference where movement and weathering matter.",
    href: "/guides/building",
    linkLabel: "Choose wood for the job",
  },
  {
    number: "08",
    title: "Safety starts in the floor plan",
    body: "The door should open outward and never trap a bather. Manufacturer clearances, guards where specified, sensor placement, cleanable floors, safe glazing, lighting, and service access belong in the first drawing, not the final punch list.",
    href: "/guides/building",
    linkLabel: "Review the construction standard",
  },
  {
    number: "09",
    title: "Best practice without purity tests",
    body: "We say what works best and why, then show how to compromise deliberately for an existing room, budget, climate, code, or accessibility need. A constrained sauna can still be excellent when its tradeoffs are understood and managed.",
    href: "/guides/planning",
    linkLabel: "Plan a graceful compromise",
  },
  {
    number: "10",
    title: "Löyly is the reference point",
    body: "A traditional sauna heats a room with hot stones and allows water on those stones. Infrared can be useful heat, but it is a different experience. We label it honestly instead of treating every hot enclosure as interchangeable.",
    href: "/guides/heaters",
    linkLabel: "Compare heat types",
  },
  {
    number: "11",
    title: "Cold is optional. Claims need evidence.",
    body: "You do not need an ice bath to finish a good sauna. You also do not need a miracle claim to justify enjoying heat, quiet, conversation, and routine. We separate established precautions from associations, mechanisms, and marketing.",
    href: "/guides/health",
    linkLabel: "Read the health evidence",
  },
] as const;

export const SAUNA_STANDARD = [
  { label: "Heat", value: "Even at bather level" },
  { label: "Air", value: "Fresh during bathing" },
  { label: "Löyly", value: "Controllable from real stones" },
  { label: "Safety", value: "Easy exit, exact clearances" },
  { label: "Drying", value: "Complete after every session" },
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
  criteria: readonly string[];
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
      criteria: ["Room air and hot stones define the traditional experience.", "Water belongs only on a heater whose current manual allows it.", "Convenience can be valuable without making categories interchangeable."],
    };
  }

  if (/barrel|outdoor|pod|igloo/.test(haystack)) {
    return {
      label: "Our current position",
      title: "A barrel can work, but its compromises are real.",
      body: "We favor thermally modified wood, a proper weather roof, two useful bench levels, and a heater sized for the actual climate and glass area. A cabin shape usually gives better bench geometry and warmer feet. Buy a barrel for compactness, speed, or character, not because curved walls repeal heat stratification.",
      href: "/guides/planning",
      linkLabel: "Plan the room geometry",
      criteria: ["Get bathers and feet into the hot zone.", "Protect the enclosure from real weather.", "Solve ventilation and drying for the installed heater."],
    };
  }

  if (/ventilat|air.?change|fresh air|exhaust|intake|co2/.test(haystack)) {
    return {
      label: "Our current position",
      title: "Ventilation is part of the bathing experience.",
      body: "Design for fresh air while people are on the benches and for complete drying afterward. Mechanical and gravity systems are different: many mechanically ventilated electric rooms favor supply near or above the heater and low exhaust opposite or below the benches, while gravity layouts often place supply lower. Keep any high drying vent closed during bathing, protect the temperature sensor from the air stream, and use the exact current manual.",
      href: "/guides/building",
      linkLabel: "Use the current ventilation standard",
      criteria: ["Plan roughly six air changes per hour where the system and manual support it.", "Keep the exhaust low and away from the heater in the common electric layouts.", "Give the room a separate, deliberate drying path."],
    };
  }

  if (/bench|ceiling|height|layout|geometry|feet/.test(haystack)) {
    return {
      label: "Our current position",
      title: "Work from the ceiling down, not the floor up.",
      body: "A strong planning baseline is an upper bench about 100–120 cm below the ceiling and a foot bench about 45 cm below it, with feet at or above the top of the stones when possible. Heater height, clearances, access, and local requirements can change the final dimensions, but a low bench in a tall room reliably wastes the best heat.",
      href: "/guides/planning",
      linkLabel: "Design the hot zone",
      criteria: ["Place heads comfortably below the ceiling.", "Keep feet inside the warm steam zone.", "Coordinate every bench dimension with the actual heater."],
    };
  }

  if (/glass|window|glazing/.test(haystack)) {
    return {
      label: "Our current position",
      title: "Use enough glass to help, not enough to dominate.",
      body: "A door light or modest window can improve connection and safety. Large glass areas add adjusted room volume, reduce forgiving wood surface, and can make the heat feel less even. Use safety glazing where required, preserve privacy, and apply the selected heater maker’s exact correction for glass and other uninsulated surfaces.",
      href: "/guides/planning",
      linkLabel: "Plan the real heat load",
      criteria: ["Prefer modest, intentional glazing.", "Use the required safety glass and door details.", "Add every uninsulated surface to heater sizing."],
    };
  }

  if (/vapor|insulat|panel|cladding|wall|ceiling assembly/.test(haystack)) {
    return {
      label: "Our current position",
      title: "One heat, air, and drying strategy should run through the assembly.",
      body: "Favor one continuous heat-tolerant vapor-control layer, avoid accidental double vapor barriers, and use a small cavity behind the interior cladding so the assembly can dry and perform as intended. Connect that enclosure to the ventilation, floor, drain or cleaning plan, and outdoor weather strategy instead of detailing each in isolation.",
      href: "/guides/building",
      linkLabel: "Build the enclosure in order",
      criteria: ["Keep the vapor-control layer continuous.", "Preserve a drying cavity behind the cladding.", "Plan water and service access before closing walls."],
    };
  }

  if (/cedar|aspen|alder|spruce|lumber|wood species|material/.test(haystack)) {
    return {
      label: "Our current position",
      title: "Choose wood for touch, stability, aroma, and exposure.",
      body: "Cedar is legitimate, durable sauna wood, but it is not the only correct answer. Aspen, alder, spruce, and other suitable low-splinter softwoods can be excellent—especially when a quieter aroma matters. We favor thermally modified material where repeated heat, humidity, or outdoor weather makes dimensional stability worth the cost.",
      href: "/guides/building",
      linkLabel: "Compare sauna materials",
      criteria: ["Use bench stock that stays comfortable and splinter-resistant.", "Match the profile and grade to its actual job.", "Let geometry and moisture details outrank species fashion."],
    };
  }

  if (/door|lock|egress|safety|clearance|guard/.test(haystack)) {
    return {
      label: "Our current position",
      title: "Safe exit and exact clearances are non-negotiable.",
      body: "The sauna door should open outward and should not lock a bather in. Use the exact current heater clearances, guard and sensor instructions; specify safety glazing where required; and keep controls, lighting, walking surfaces, and service access appropriate for heat and moisture.",
      href: "/guides/building",
      linkLabel: "Review the safety checklist",
      criteria: ["Door opens outward without a trapping lock.", "Heater, guard, and sensor follow the exact manual.", "Hot, wet surfaces remain usable and cleanable."],
    };
  }

  if (/floor|drain|clean|hygiene|drying/.test(haystack)) {
    return {
      label: "Our current position",
      title: "A sauna should be easy to clean and certain to dry.",
      body: "Use a water-tolerant, cleanable floor; include a drain where practical or required; keep bench undersides and edges accessible; and plan how the room will dry after every session. A beautiful room that traps water, lint, or organic debris is unfinished design.",
      href: "/guides/building",
      linkLabel: "Plan water and drying",
      criteria: ["Make the floor safe when wet.", "Provide a realistic water-removal plan.", "Keep hidden surfaces open to air and cleaning."],
    };
  }

  if (/heater|stove|wood-burning|electric|kilowatt|kw\b/.test(haystack)) {
    return {
      label: "Our current position",
      title: "Size the room first. Choose the heater second.",
      body: "For most homes we lean electric because easy startup leads to more sessions. Wood is the right choice when tending a fire is part of the experience. Either way, use finished volume, glass and masonry adjustments, current clearances, controls, serviceability, and the exact manual. We prefer a little real-world heating margin over a heater that only works on paper.",
      href: "/guides/heaters",
      linkLabel: "Use the current heater guide",
      criteria: ["Adjust room load for glass, masonry, and other uninsulated surfaces.", "Compare stone airflow and radiant comfort, not only kilowatts.", "Treat controls, sensor, guard, ventilation, and service as one system."],
    };
  }

  if (/build|construction|diy|outdoor|indoor|basement/.test(haystack)) {
    return {
      label: "Our current position",
      title: "Build the heat, air, and drying path as one system.",
      body: "Put the upper bench in the hot zone, keep the ceiling purposeful, give löyly a clean path across bathers, and give the room a reliable way to dry. Outdoors, thermally modified wood and deliberate weather protection are worth prioritizing. The finish species matters less than getting geometry, moisture, and clearances right.",
      href: "/guides/building",
      linkLabel: "Read the construction fundamentals",
      criteria: ["Design benches and heater together.", "Use one continuous moisture strategy.", "Make safety, cleaning, service, and drying easy."],
    };
  }

  if (/health|benefit|heart|weight|covid|coronavirus|detox|recovery|cold|plunge/.test(haystack)) {
    return {
      label: "Our current position",
      title: "Enjoy the practice without turning it into a cure-all.",
      body: "Sauna can support relaxation and a consistent wellness routine. Observational health associations are not treatment claims, sweat is not a magic detox pathway, and extreme cold is optional. Start conservatively, leave when you feel unwell, and take personal medical questions to a clinician who knows your history.",
      href: "/guides/health",
      linkLabel: "Read the evidence and precautions",
      criteria: ["Separate associations from proven effects.", "Avoid heat when ill, impaired, or unable to leave safely.", "Treat cold exposure as optional, not a requirement."],
    };
  }

  return {
    label: "Our current position",
    title: "Plan the bathing experience before the shopping list.",
    body: "Start with the heat and humidity you enjoy, how many people will use the room, and how often you want to use it. Then solve geometry, ventilation, drying, heater sizing, and installation. Finishes and accessories come after the room works.",
    href: "/point-of-view",
    linkLabel: "See what guides our recommendations",
    criteria: ["Solve bather-level heat and breathable air first.", "Choose equipment from adjusted room load and exact manuals.", "Prefer durable, safe, cleanable details over novelty features."],
  };
}
