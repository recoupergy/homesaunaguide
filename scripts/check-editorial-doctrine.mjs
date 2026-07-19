import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const files = execFileSync("rg", ["--files", "src", "public"], { encoding: "utf8" })
  .trim()
  .split("\n")
  .filter((file) => file && /\.(?:tsx?|json|txt)$/.test(file));

const combined = files.map((file) => readFileSync(file, "utf8")).join("\n");
const required = [
  ["bather-first framing", /bather/i],
  ["upper-bench baseline", /100–120 cm/],
  ["foot-bench baseline", /45 cm/],
  ["ventilation-system distinction", /mechanical and gravity/i],
  ["low exhaust guidance", /low exhaust/i],
  ["single vapor strategy", /one continuous[^.]*vapor-control/i],
  ["restrained glazing", /glass[^.]{0,90}moderation|modest window/i],
  ["outward egress", /door[^.]{0,80}open outward|outward-opening/i],
  ["evidence restraint", /cold[^.]{0,80}optional/i],
];

const privateSourceNames = [
  [83, 97, 117, 110, 97, 84, 105, 109, 101, 115],
  [83, 97, 117, 110, 97, 32, 84, 105, 109, 101, 115],
  [84, 114, 117, 109, 112, 107, 105, 110],
  [71, 108, 101, 110, 110, 32, 65, 117, 101, 114, 98, 97, 99, 104],
  [71, 108, 101, 110, 110],
  [71, 108, 101, 110],
  [65, 117, 101, 114, 98, 97, 99, 104],
  [76, 111, 99, 97, 108, 77, 105, 108, 101],
  [68, 101, 110, 100, 114, 105, 116, 101, 67, 111, 99, 107, 116, 97, 105, 108],
].map((characters) => String.fromCharCode(...characters).toLowerCase());

const errors = [];
for (const [label, pattern] of required) {
  if (!pattern.test(combined)) errors.push(`Missing doctrine signal: ${label}`);
}

for (const file of files) {
  const content = readFileSync(file, "utf8").toLowerCase();
  for (const sourceName of privateSourceNames) {
    if (new RegExp(`\\b${sourceName}\\b`, "i").test(content)) errors.push(`${file}: private source identity found`);
  }
}

const editorial = readFileSync("src/lib/editorial.ts", "utf8");
if ((editorial.match(/number: "\d{2}"/g) ?? []).length < 10) errors.push("Editorial position set is incomplete");
if (!/criteria: readonly string\[\]/.test(editorial)) errors.push("Legacy editorial criteria are not enforced");

const topics = readFileSync("src/lib/topics.ts", "utf8");
if ((topics.match(/standard: \[/g) ?? []).length !== 5) errors.push("Every current topic must carry the sauna standard");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Verified the sitewide sauna doctrine across ${files.length} public content files without exposing private source identities.`);
