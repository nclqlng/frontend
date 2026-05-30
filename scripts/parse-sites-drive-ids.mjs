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

const ids = [
  ...decoded.matchAll(/drive\.google\.com[^"'\\s]*\/d\/([a-zA-Z0-9_-]+)/g),
].map((m) => m[1]);

console.log([...new Set(ids)].join("\n"));
