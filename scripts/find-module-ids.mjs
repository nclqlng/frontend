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
  "Module 2 - June 3 2019 Hyperion",
  "Module 3 - Hyperion July 1 2019",
  "Module 5 - Hyperion NBO",
  "2021 SLAMC Welcome Kit",
  "SLAMC Digital Channel",
  "1V4TfcdFLEAqowgRhYkAshLRu_4itR-QK",
];

for (const kw of keywords) {
  const idx = decoded.indexOf(kw);
  if (idx === -1) {
    console.log("NOT FOUND:", kw);
    continue;
  }
  const snippet = decoded.slice(Math.max(0, idx - 250), idx + 350);
  const idMatch = snippet.match(/id=([a-zA-Z0-9_-]+)/);
  const dataSrcMatch = snippet.match(/file\/d\/([a-zA-Z0-9_-]+)/);
  console.log(kw, "->", idMatch?.[1] ?? dataSrcMatch?.[1] ?? "no id");
}
