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

const patterns = [
  /aria-label="Drive, ([^"]+)"[\s\S]{0,500}?thumbnail\?id=([a-zA-Z0-9_-]+)/g,
  /aria-label="Drive, ([^"]+)"[\s\S]{0}200}?data-src="https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/g,
  /data-src="https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/preview"[^>]*aria-label="Drive, ([^"]+)"/g,
];

const files = new Map();

for (const pattern of patterns) {
  let match;
  while ((match = pattern.exec(decoded))) {
    if (match.length === 3) {
      const title = match[1].includes("drive.google") ? match[2] : match[1];
      const id = match[1].includes("drive.google") ? match[1] : match[2];
      if (!title.includes("drive.google")) {
        files.set(id, title);
      }
    }
  }
}

// Also match iframe data-src pattern
const iframeRegex =
  /data-src="https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/preview"[^>]*aria-label="Drive, ([^"]+)"/g;
let m;
while ((m = iframeRegex.exec(decoded))) {
  files.set(m[1], m[2]);
}

const filtered = [...files.entries()]
  .filter(([_, title]) =>
    /SLAM|Module|Generic MF|Courier|Claims|UW|Hyperion|Welcome|Digital|ePolicy|Bills Payment/i.test(
      title,
    ),
  )
  .sort((a, b) => a[1].localeCompare(b[1]));

for (const [id, title] of filtered) {
  console.log(`${id}\t${title}`);
}

console.log(`\nTotal matched: ${filtered.length}`);
