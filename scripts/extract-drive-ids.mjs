import { readFileSync } from "fs";

const t = readFileSync(
  process.argv[2] ??
    "C:/Users/qlngn/.cursor/projects/c-Users-qlngn-frontend/agent-tools/4ae98889-3c5d-48c0-ad2a-8fe58f017401.txt",
  "utf8",
);

const decoded = t.replace(/\\u003d/g, "=").replace(/\\u0026/g, "&");
const ids = [
  ...decoded.matchAll(/\/file\/d\/([a-zA-Z0-9_-]+)/g),
  ...decoded.matchAll(/id=([a-zA-Z0-9_-]{20,})/g),
].map((m) => m[1]);

console.log([...new Set(ids)].join("\n"));
