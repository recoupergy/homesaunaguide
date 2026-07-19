import { EDITORIAL_SOURCES } from "@/lib/site";

export const TOPICS = {
  planning: {
    eyebrow: "Start here",
    title: "How to plan a home sauna in 2026",
    description: "Plan a real bathing experience first. Then solve bench geometry, room volume, air, water, and the exact heater system.",
    answer: "Start with the session you want: traditional water-on-stones löyly, wood-fire ritual, or infrared heat. For a traditional sauna, put bathers in the hot zone, calculate finished room volume, account for glass and other heat loss using the heater maker’s method, and coordinate ventilation, drying, clearances, controls, and service access before choosing finishes.",
    position: "We design around people and löyly, not around a kit photo. A high upper bench, purposeful ceiling, two useful seating levels, and a clear path for heat and steam are worth more than a long accessory list.",
    keywords: ["plan", "home", "design", "room", "indoor", "outdoor", "basement", "ventilation"],
    steps: [
      ["Define the session", "Write down capacity, indoor or outdoor location, desired heat character, frequency, and whether water-on-stones löyly is part of the experience."],
      ["Solve the building envelope", "Plan insulation, a continuous vapor-control layer, water-tolerant finishes, drainage where required, and a reliable drying path."],
      ["Size from finished volume", "Include glass and other uninsulated surfaces using the heater maker’s method. Select the heater only after the finished room volume is known."],
      ["Design the hot zone", "Work down from the ceiling. Place the upper bench where bathers can sit in the heat, then coordinate the lower bench, heater, guard, door, controls, sensor, supply air, exhaust, and service access."],
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
    description: "Build a high-heat room that feels right, survives moisture, dries completely, and remains serviceable.",
    answer: "A reliable sauna is a coordinated heat, air, water, and structure system. Freeze the bench and heater geometry first. Then build the insulation, continuous vapor-control layer, drainage or cleaning plan, ventilation, wiring, and required clearances from one drawing. Preserve drying gaps and service access, and let the exact heater manual and local code make the final call.",
    position: "We favor thermally modified wood for exposed outdoor rooms and many modern interiors because stability matters through repeated heat, humidity, and weather cycles. Thermo-aspen is our clean default, thermo-alder brings warmer grain, and thermo-spruce is the practical value choice. None of them rescues a bad envelope.",
    keywords: ["build", "diy", "bench", "vapor", "insulation", "basement", "construction", "ceiling"],
    steps: [
      ["Freeze the layout", "Dimension the finished room, door swing, bench heights, heater guard, clearances, and circulation before rough-in."],
      ["Rough in safely", "Coordinate drainage, ventilation ducts, dedicated electrical work or chimney path, lighting, controls, and sensor location."],
      ["Complete the envelope", "Install insulation and the specified vapor-control system continuously, then maintain the required furring or drying space."],
      ["Choose wood for the job", "Use stable, low-splinter bench stock and concealed fasteners that will not burn skin or corrode. Outdoors, weigh dimensional stability and weather exposure before choosing wood on appearance alone."],
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
    description: "Choose a heater by heat character, real room load, clearances, controls, service, and how often you will actually use it.",
    answer: "For most homes, start with a listed 240V electric stone heater because easy startup lowers the friction of every session. Choose wood when tending a fire is part of the ritual. Treat infrared as its own lower-air-temperature category. In every case, compare the maker’s adjusted room range, stone mass, clearances, controls, electrical or chimney work, replacement parts, and service access. The current model manual outranks every rule of thumb.",
    position: "Our shortlist is about fit, not trophies. Harvia KIP is the simple workhorse. HUUM HIVE earns a look when room and stone mass matter. HUUM DROP solves tighter layouts. Saunum is compelling when floor-to-ceiling temperature balance is the main problem. Each choice has a tradeoff, and none should be selected before the room is measured.",
    keywords: ["heater", "stove", "electric", "wood", "infrared", "harvia", "huum", "saunacore"],
    steps: [
      ["Choose the heat experience", "Traditional electric is the low-friction default. Wood adds fire, sound, fuel, and tending. Infrared starts quickly but does not create the same room heat or löyly."],
      ["Calculate the real load", "Use finished volume and the maker’s adjustment for glass, masonry, logs, and other uninsulated surfaces. If the room lands at a boundary, investigate the next size instead of assuming the smaller model will be fine."],
      ["Check the whole package", "Heater, stones, controller, contactor or power unit, sensor, door switch, guard, electrical feed, and ventilation must work as one listed installation."],
      ["Match stone mass to your routine", "More exposed stone can produce softer, longer löyly but often asks for more warm-up time and careful packing. A smaller wall heater can be faster and simpler."],
      ["Buy for serviceability", "Confirm current certification, replacement elements, control support, warranty path, weather protection, and who will commission the installation."],
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
    description: "Enjoy sauna without miracle claims: what evidence supports, what remains uncertain, and when to be conservative.",
    answer: "Sauna can be a relaxing, repeatable wellness practice. Observational research links regular use with some cardiovascular outcomes, but that does not prove sauna caused the benefit and it does not replace exercise, medication, vaccines, or medical care. Start with shorter sessions, hydrate, avoid alcohol, leave if unwell or dizzy, and ask a clinician about pregnancy, blood-pressure problems, unstable heart disease, or medication concerns.",
    position: "The strongest reason to own a sauna is that you enjoy using it. We will not turn an association into a prescription, call sweat a miracle detox, or use medical anxiety to sell a heater.",
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
    description: "A repeatable sauna practice built around clean air, löyly, comfort, cooling, conversation, and a room that dries.",
    answer: "A good sauna session is not an endurance event. Enter hydrated, let the room and your breathing settle, add modest water to compatible hot stones, step out before discomfort, cool in a way that feels good, and repeat only if you feel well. A cold plunge is optional. Comfort, company, and consistency matter more than a timer or temperature record.",
    position: "We favor simple sessions and real löyly over optimization theater. Water, a ladle, a bench towel, and time are enough. Buy accessories because they solve a problem, not because a social-media routine says the ritual is incomplete without them.",
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
