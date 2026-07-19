import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const files = execFileSync("rg", ["--files", "src/app", "src/components", "src/lib", "public", "README.md"], { encoding: "utf8" })
  .trim()
  .split("\n")
  .filter((file) => file && file !== "src/data/legacy-content.json" && /\.(?:tsx?|txt|md)$/.test(file));

const prohibited = [
  /\b(?:production|responsible|website|site) rebuild\b/i,
  /\brecovered (?:archive|history|site|content|article)/i,
  /\brecovered from (?:the )?(?:database|archive)/i,
  /\boriginal (?:site|archive|article archive)/i,
  /\b(?:browse|search|full|complete) (?:the )?archive\b/i,
  /\barchive continuity\b/i,
  /\bArchive\.org\b/i,
];

const errors = [];
for (const file of files) {
  const content = readFileSync(file, "utf8");
  for (const pattern of prohibited) {
    if (pattern.test(content)) errors.push(`${file}: ${pattern}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Verified ${files.length} public source files lead with the current site, not migration history.`);
