import { EDITORIAL_SOURCES } from "@/lib/site";

export const TOPICS = {
  planning: {
    eyebrow: "Start here",
    title: "How to plan a home sauna in 2026",
    description: "Design from the bather outward: hot-zone geometry, breathable air, real room load, safe egress, durable moisture control, and controllable löyly.",
    answer: "Start with the session you want: traditional water-on-stones löyly, wood-fire ritual, or infrared heat. For a traditional sauna, work from the ceiling down. As a planning baseline, place the upper bench about 100–120 cm below the ceiling, the foot bench about 45 cm lower, and the feet at or above the top of the stones when practical. Then solve ventilation type, adjusted room volume, drying, safety, clearances, controls, and service access around the exact heater system.",
    position: "We design around people and löyly, not around a kit photo. Even bather-level heat, fresh air, two useful bench levels, restrained glazing, and a clear path for steam are worth more than a long accessory list. A constrained room can still work, but its compromises should be explicit.",
    keywords: ["plan", "home", "design", "room", "indoor", "outdoor", "basement", "ventilation"],
    steps: [
      ["Define the session", "Write down capacity, indoor or outdoor location, desired heat character, frequency, and whether water-on-stones löyly is part of the experience."],
      ["Design the hot zone", "Work down from the ceiling. Start with the upper bench about 100–120 cm below it and the foot bench about 45 cm lower, then coordinate stone height, steps, access, and the exact heater clearances."],
      ["Choose the ventilation type", "Mechanical and gravity systems use different supply-air locations. Plan fresh air during bathing, low exhaust away from the heater in the common electric layouts, sensor protection, and a separate drying path."],
      ["Solve the envelope and water", "Plan one continuous heat-tolerant vapor-control layer, a drying cavity behind cladding, water-tolerant finishes, drainage where practical or required, and an outward-opening non-locking door."],
      ["Size from adjusted volume", "Include glass, masonry, logs, and other uninsulated surfaces using the selected heater maker’s method. Select equipment only after the actual room load is known."],
      ["Verify before purchase", "Check the current manual, listing, local code, permit requirements, and the installer’s scope before ordering equipment."],
    ],
    standard: [
      ["Top bench", "About 100–120 cm below the ceiling as a planning baseline."],
      ["Foot bench", "About 45 cm lower and preferably at or above the stones."],
      ["Glass", "Useful in moderation and counted in adjusted room load."],
      ["Door", "Outward-opening, easy to operate, and non-locking."],
    ],
    faqs: [
      ["What should I choose first when planning a sauna?", "Choose the location, capacity, and heat experience first. Those decisions set room volume, moisture strategy, ventilation, electrical or chimney needs, and cost."],
      ["Can I choose the heater before designing the room?", "Avoid it. Heater selection depends on finished room volume and uninsulated surfaces, while required clearances can change the entire layout."],
      ["Does every home sauna need a floor drain?", "Requirements vary by location, heater, cleaning plan, and local code. Decide how water and wash-down moisture will be managed before construction."],
      ["Is a 7-foot sauna ceiling always ideal?", "No. Seven feet can work in a constrained design, but ceiling height should result from the upper-bench relationship, foot-bench and stone height, heater clearances, access, and local requirements—not from a universal kit dimension."],
      ["Why should feet be near or above the heater stones?", "That relationship helps place the whole bather in the more even warm and steamy zone above the colder lower layer. It is a design target, not a substitute for the exact heater manual or safe access."],
    ],
    sourceIndexes: [0, 1, 2, 3, 4],
  },
  building: {
    eyebrow: "Build well",
    title: "Home sauna construction fundamentals",
    description: "Build a high-heat room that feels right, survives moisture, dries completely, and remains serviceable.",
    answer: "A reliable sauna is a coordinated heat, air, water, safety, and structure system. Freeze the bench, stone-line, heater, door, and ventilation geometry first. Then build one continuous heat-tolerant vapor-control strategy, preserve a small drying cavity behind the cladding, and coordinate the cleanable floor, drain or water-removal plan, wiring, sensor, clearances, and service access from one drawing.",
    position: "We favor thermally modified wood where stability earns its cost, but material ideology is a distraction. Cedar is legitimate; aspen, alder, spruce, and other suitable softwoods can be equally convincing. No species rescues low benches, stale air, a confused vapor assembly, trapped water, or unsafe egress.",
    keywords: ["build", "diy", "bench", "vapor", "insulation", "basement", "construction", "ceiling"],
    steps: [
      ["Freeze the performance layout", "Dimension the finished room from the ceiling down, including both bench levels, stone line, door swing, heater guard, clearances, airflow path, steps, and circulation."],
      ["Rough in safety and air", "Coordinate the mechanical or gravity ventilation layout, low exhaust where specified, separate drying path, drain or water removal, electrical work or chimney, lighting, controls, and sensor location."],
      ["Build one enclosure strategy", "Install insulation and one continuous specified vapor-control system, avoid accidental double barriers, and preserve the required furring or drying cavity behind interior cladding."],
      ["Choose materials for the job", "Use stable, low-splinter bench stock and concealed fasteners. Cedar is acceptable; lower-aroma aspen, alder, and spruce are strong alternatives. Outdoors, prioritize profile, weather exposure, roof, and dimensional stability."],
      ["Commission the whole room", "Verify clearances, sensor position, door egress, airflow, heater controls, guard, fasteners, wet-floor safety, cleaning access, and complete drying before first use."],
    ],
    standard: [
      ["Vapor control", "One continuous heat-tolerant layer, not an accidental sandwich."],
      ["Cladding cavity", "A small air space that supports drying and robust detailing."],
      ["Floor", "Water-tolerant, cleanable, slip-conscious, and drained where practical."],
      ["Service", "Benches, heater, controls, vents, and hidden surfaces remain accessible."],
    ],
    faqs: [
      ["Can a sauna share ordinary bathroom construction details?", "Some assemblies overlap, but sauna temperatures, vapor drive, heater clearances, sensor placement, and drying needs demand a sauna-specific plan."],
      ["Should sauna benches be airtight against the wall?", "No. Benches should allow air circulation, cleaning, drying, and inspection. Exact spacing and support details depend on the design."],
      ["Can I install the sauna heater myself?", "Follow local law and the manufacturer’s manual. Hard-wired electric heaters typically require a qualified electrician, while wood heaters add chimney and fire-clearance requirements."],
      ["Does a sauna need an air gap behind interior paneling?", "A small cavity behind the cladding is our robust default because it supports drying and allows foil-faced assemblies to perform as intended. Coordinate the exact wall build-up with local code and the chosen system."],
      ["Is cedar the best sauna wood?", "Cedar is a valid, durable option, not a universal winner. Aspen, alder, spruce, and other suitable softwoods may offer lower aroma, a different touch, or better value. Grade, profile, fastening, and moisture detailing matter as much as species."],
    ],
    sourceIndexes: [0, 2, 3, 4, 10],
  },
  heaters: {
    eyebrow: "Choose the heart",
    title: "Sauna heater selection without the guesswork",
    description: "Choose a heater by heat character, real room load, clearances, controls, service, and how often you will actually use it.",
    answer: "For most homes, start with a listed 240V electric stone heater because easy startup lowers the friction of every session. Choose wood when tending a fire is part of the ritual. Treat infrared as its own category. Compare adjusted room range, stone capacity and airflow, stone height, radiant comfort, clearances, controls, sensor and door-safety requirements, electrical or chimney scope, replacement parts, and service access. The current model manual outranks every rule of thumb.",
    position: "Our shortlist is about fit, not trophies. We prefer heaters that move air effectively through a useful stone mass and avoid harsh radiant exposure at the benches. A compact wall heater can be the smartest answer; a large stone basket can offer softer löyly; an air-mixing system can rescue difficult stratification. None should be selected before the room and benches are designed.",
    keywords: ["heater", "stove", "electric", "wood", "infrared", "harvia", "huum", "saunacore"],
    steps: [
      ["Choose the heat experience", "Traditional electric is the low-friction default. Wood adds fire, sound, fuel, and tending. Infrared starts quickly but does not create the same room heat or löyly."],
      ["Calculate the adjusted load", "Use finished volume and the maker’s exact adjustment for glass, masonry, logs, and other uninsulated surfaces. If the room lands at a boundary, investigate the next size instead of assuming the smaller model will be fine."],
      ["Check the whole package", "Heater, stones, controller, contactor or power unit, sensor, door switch, guard, electrical feed, and ventilation must work as one listed installation."],
      ["Judge the heat character", "More exposed stone and good airflow can produce softer, longer löyly but often ask for more warm-up time and careful packing. Check stone height and radiant exposure at the benches instead of comparing kilowatts alone."],
      ["Buy for serviceability", "Confirm current certification, replacement elements, control support, warranty path, weather protection, and who will commission the installation."],
    ],
    standard: [
      ["Room load", "Finished volume plus every manufacturer-specified uninsulated-surface adjustment."],
      ["Heat character", "Stone airflow, radiant comfort, warm-up, and controllable löyly."],
      ["System fit", "Controls, sensor, guard, door safety, ventilation, and electrical or chimney scope."],
      ["Ownership", "Certification, replacement parts, warranty, weather protection, and service."],
    ],
    faqs: [
      ["How many kilowatts should my sauna heater be?", "Use the selected manufacturer’s sizing method for finished room volume and uninsulated surfaces. Generic ratios cannot account for every construction, climate, or model."],
      ["Is a bigger sauna heater better?", "Not automatically. Oversizing can worsen control and radiant comfort, while undersizing can cause long heat-up and hard cycling. Stay within the maker’s published room range."],
      ["Do I need a licensed electrician?", "For hard-wired equipment, follow local law and the manual; professional installation is the normal and safest route."],
      ["Does more stone automatically mean a better heater?", "No. Useful stone capacity must be paired with airflow, correct packing, adequate power, safe clearances, and a layout that keeps radiant heat comfortable. More stone can also mean a longer warm-up."],
      ["Can a heater fix low benches?", "Usually not by itself. An air-mixing system may reduce stratification, but good ceiling, bench, foot, and stone relationships remain the more dependable starting point."],
    ],
    sourceIndexes: [0, 1, 3, 4, 8, 9],
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
    standard: [
      ["Evidence", "Separate controlled findings, associations, mechanisms, and anecdotes."],
      ["Use", "Start conservatively and stop before discomfort becomes a challenge."],
      ["Medical limits", "Personal diagnoses, pregnancy, and medication questions belong with a clinician."],
      ["Cold", "Optional, never proof that the sauna session was effective."],
    ],
    faqs: [
      ["How long should a sauna session be?", "There is no universal target. Harvard Health advises conservative sessions and leaving immediately for dizziness or discomfort; first-time users should begin shorter."],
      ["Does sauna detox the body?", "Sweating regulates temperature. Claims that sauna removes clinically meaningful amounts of unspecified toxins are often overstated; the liver and kidneys do most detoxification work."],
      ["Can sauna prevent or treat an infection?", "No. Sauna is not a substitute for vaccination, testing, prescribed treatment, or public-health guidance, and you should not use one when ill."],
    ],
    sourceIndexes: [6, 7],
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
    standard: [
      ["Air", "Fresh enough that breathing feels easy and the room never feels stale."],
      ["Löyly", "Small, controllable additions of clean water to compatible stones."],
      ["Rhythm", "Leave before discomfort, cool as needed, repeat only if you feel well."],
      ["Finish", "Rehydrate, clean up, and leave the room able to dry completely."],
    ],
    faqs: [
      ["Do I need a cold plunge after sauna?", "No. A gradual cooldown is enough. Cold immersion is optional and may not be appropriate for everyone, especially with cardiovascular concerns."],
      ["Can I pour water on any sauna heater?", "Only if the current manufacturer instructions allow it. Never assume an infrared cabin or an unfamiliar electric heater is designed for water."],
      ["What makes good löyly?", "Appropriate stone temperature and mass, small additions of water, clean air, and a room whose benches sit in the warm steam zone all contribute."],
    ],
    sourceIndexes: [0, 2, 4, 7],
  },
} as const;

export type TopicKey = keyof typeof TOPICS;

export function topicSources(topic: TopicKey) {
  return TOPICS[topic].sourceIndexes.map((index) => EDITORIAL_SOURCES[index]);
}
