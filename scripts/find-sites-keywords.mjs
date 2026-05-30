import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const html = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), "training-sites.html"),
  "utf8",
);

const decoded = html
  .replace(/\\u003d/g, "=")
  .replace(/\\u0026/g, "&")
  .replace(/\\u002f/g, "/");

const keywords = [
  "Generic MF",
  "SLAMCI Welcome",
  "Digital Channels",
  "IES 2019 Module",
  "Hyperion",
  "SLAMC",
];

for (const kw of keywords) {
  const idx = decoded.indexOf(kw);
  if (idx === -1) {
    console.log("NOT FOUND:", kw);
    continue;
  }
  const snippet = decoded.slice(Math.max(0, idx - 200), idx + 200);
  console.log("\n===", kw, "===\n", snippet.replace(/\s+/g, " ").slice(0, 400));
}
