import { EDITORIAL_SOURCES } from "@/lib/site";

export const TOPICS = {
  planning: {
    eyebrow: "Start here",
    title: "How to plan a home sauna in 2026",
    description: "A durable sauna plan starts with use, room volume, ventilation, and the heater manual—not finishes or accessories.",
    answer: "Decide how many people will bathe, where the moisture will go, and which heat experience you want. Then calculate the finished room volume, choose a listed heater for that volume, follow its exact clearances, and design supply, exhaust, drainage, and drying before framing.",
    keywords: ["plan", "home", "design", "room", "indoor", "outdoor", "basement", "ventilation"],
    steps: [
      ["Define the session", "Write down capacity, indoor or outdoor location, desired temperature, frequency, and whether you want to throw water for löyly."],
      ["Solve the building envelope", "Plan insulation, a continuous vapor-control layer, water-tolerant finishes, drainage where required, and a reliable drying path."],
      ["Size from finished volume", "Include glass and other uninsulated surfaces using the heater maker’s method. Select the heater only after the finished room volume is known."],
      ["Coordinate the systems", "Place benches, heater, guard, door, controls, sensor, supply air, low exhaust, lighting, and service access as one coordinated plan."],
      ["Verify before purchase", "Check the current manual, listing, local code, permit requirements, and the installer’s scope before ordering equipment."],
    ],
    faqs: [
      ["What should I choose first when planning a sauna?", "Choose the location, capacity, and heat experience first. Those decisions set room volume, moisture strategy, ventilation, electrical or chimney needs, and cost."],
      ["Can I choose the heater before designing the room?", "Avoid it. Heater selection depends on finished room volume and uninsulated surfaces, while required clearances can change the entire layout."],
      ["Does every home sauna need a floor drain?", "Requirements vary by location, heater, cleaning plan, and local code. Decide how water and wash-down moisture will be managed before construction."],
    ],
    sourceIndexes: [0, 1, 2],
  },
  building: {
    eyebrow: "Build well",
    title: "Home sauna construction fundamentals",
    description: "The practical sequence for a safe, dry, serviceable sauna shell and interior.",
    answer: "A reliable sauna is a coordinated high-heat, high-moisture room. Build the structure, insulation, vapor-control layer, ventilation, drainage, wiring, and heater clearances from a single plan; preserve air gaps and service access; and use the heater manual and local code as the final authority.",
    keywords: ["build", "diy", "bench", "vapor", "insulation", "basement", "construction", "ceiling"],
    steps: [
      ["Freeze the layout", "Dimension the finished room, door swing, bench heights, heater guard, clearances, and circulation before rough-in."],
      ["Rough in safely", "Coordinate drainage, ventilation ducts, dedicated electrical work or chimney path, lighting, controls, and sensor location."],
      ["Complete the envelope", "Install insulation and the specified vapor-control system continuously, then maintain the required furring or drying space."],
      ["Use sauna-suitable interiors", "Choose stable, low-splinter bench stock and fasteners that will not burn skin or corrode in the room."],
      ["Commission the room", "Verify clearances, sensor position, airflow, heater controls, guard, fasteners, door operation, and drying before first use."],
    ],
    faqs: [
      ["Can a sauna share ordinary bathroom construction details?", "Some assemblies overlap, but sauna temperatures, vapor drive, heater clearances, sensor placement, and drying needs demand a sauna-specific plan."],
      ["Should sauna benches be airtight against the wall?", "No. Benches should allow air circulation, cleaning, drying, and inspection. Exact spacing and support details depend on the design."],
      ["Can I install the sauna heater myself?", "Follow local law and the manufacturer’s manual. Hard-wired electric heaters typically require a qualified electrician, while wood heaters add chimney and fire-clearance requirements."],
    ],
    sourceIndexes: [0, 1, 3],
  },
  heaters: {
    eyebrow: "Choose the heart",
    title: "Sauna heater selection without the guesswork",
    description: "Compare electric, wood, and infrared heat by experience, room volume, installation, controls, and service—not marketing claims.",
    answer: "Choose a heater by the experience you want and the finished room it must safely heat. Compare listed room-volume range, stone capacity, clearances, controls, electrical or chimney requirements, replacement parts, and local service. The current model manual outranks every rule of thumb.",
    keywords: ["heater", "stove", "electric", "wood", "infrared", "harvia", "huum", "saunacore"],
    steps: [
      ["Traditional electric", "Convenient, controllable, and usually the simplest way to create a water-on-stones sauna indoors. Plan the dedicated circuit, control, and sensor exactly."],
      ["Wood burning", "Atmospheric and independent of a large electric load, but it needs combustion air, chimney design, ember management, clearances, and more maintenance."],
      ["Infrared", "Lower air temperature and fast startup, but a different experience from a stone heater. Verify electrical listing, emitter layout, and surface-temperature controls."],
      ["Stone and geometry", "Stone mass and exposed surface affect heat-up, radiant intensity, and steam character. More is not automatically better for every use pattern."],
      ["Serviceability", "Confirm current certification, parts availability, warranty terms, local technical support, and who will commission the installation."],
    ],
    faqs: [
      ["How many kilowatts should my sauna heater be?", "Use the selected manufacturer’s sizing method for finished room volume and uninsulated surfaces. Generic ratios cannot account for every construction, climate, or model."],
      ["Is a bigger sauna heater better?", "Not automatically. Oversizing can worsen control and radiant comfort, while undersizing can cause long heat-up and hard cycling. Stay within the maker’s published room range."],
      ["Do I need a licensed electrician?", "For hard-wired equipment, follow local law and the manual; professional installation is the normal and safest route."],
    ],
    sourceIndexes: [0, 1, 3],
  },
  health: {
    eyebrow: "Use wisely",
    title: "Sauna health evidence and safer sessions",
    description: "What current evidence supports, what remains uncertain, and how to make conservative sauna decisions.",
    answer: "Sauna can be a relaxing wellness practice, and observational research links regular use with some cardiovascular benefits, but it does not replace exercise, medication, vaccines, or medical care. Start with short sessions, hydrate, avoid alcohol, leave if unwell or dizzy, and ask a clinician about pregnancy, low blood pressure, unstable heart disease, or other concerns.",
    keywords: ["health", "benefit", "heart", "weight", "heat shock", "long", "session", "cold plunge"],
    steps: [
      ["Treat claims by evidence level", "Separate controlled findings from observational associations, mechanisms, personal anecdotes, and marketing language."],
      ["Start conservatively", "Use a shorter session first, notice symptoms, hydrate, and cool down gradually. Heat tolerance varies widely."],
      ["Know the stop signs", "Leave for dizziness, faintness, chest discomfort, severe headache, confusion, nausea, or any feeling that something is wrong."],
      ["Avoid risky combinations", "Do not use a sauna when ill. Avoid alcohol and substances or medications that impair awareness, sweating, hydration, or blood-pressure control."],
      ["Escalate personal questions", "A clinician who knows your history is the right source for pregnancy, cardiovascular disease, blood-pressure problems, and medication interactions."],
    ],
    faqs: [
      ["How long should a sauna session be?", "There is no universal target. Harvard Health advises conservative sessions and leaving immediately for dizziness or discomfort; first-time users should begin shorter."],
      ["Does sauna detox the body?", "Sweating regulates temperature. Claims that sauna removes clinically meaningful amounts of unspecified toxins are often overstated; the liver and kidneys do most detoxification work."],
      ["Can sauna prevent or treat an infection?", "No. Sauna is not a substitute for vaccination, testing, prescribed treatment, or public-health guidance, and you should not use one when ill."],
    ],
    sourceIndexes: [4, 5],
  },
  rituals: {
    eyebrow: "Enjoy the heat",
    title: "Better sauna sessions: löyly, rhythm, and recovery",
    description: "A simple, flexible practice built around comfort, clean air, water, rest, and attention to your body.",
    answer: "A good sauna session is not an endurance event. Enter hydrated, let the room and your breathing settle, add water to appropriate stones in small amounts, step out before discomfort, cool gradually, and repeat only if you feel well. Comfort and consistency matter more than a timer or temperature record.",
    keywords: ["ritual", "löyly", "session", "cold", "plunge", "hat", "aromatherapy", "accessories"],
    steps: [
      ["Prepare", "Drink water, shower if appropriate, remove metal jewelry that may heat up, and bring a clean bench towel."],
      ["Settle in", "Start on a lower bench if needed. Let breathing and skin temperature adapt before adding water or moving higher."],
      ["Create löyly", "Use clean water only where the heater manual allows it. Add modest ladles and let each wave pass."],
      ["Cool gradually", "Leave before discomfort, sit or shower, and allow breathing and balance to normalize. Extreme cold is optional, not required."],
      ["Finish and dry", "Rehydrate, rinse, air the room, and leave benches and floor able to dry completely."],
    ],
    faqs: [
      ["Do I need a cold plunge after sauna?", "No. A gradual cooldown is enough. Cold immersion is optional and may not be appropriate for everyone, especially with cardiovascular concerns."],
      ["Can I pour water on any sauna heater?", "Only if the current manufacturer instructions allow it. Never assume an infrared cabin or an unfamiliar electric heater is designed for water."],
      ["What makes good löyly?", "Appropriate stone temperature and mass, small additions of water, clean air, and a room whose benches sit in the warm steam zone all contribute."],
    ],
    sourceIndexes: [0, 2, 5],
  },
} as const;

export type TopicKey = keyof typeof TOPICS;

export function topicSources(topic: TopicKey) {
  return TOPICS[topic].sourceIndexes.map((index) => EDITORIAL_SOURCES[index]);
}
