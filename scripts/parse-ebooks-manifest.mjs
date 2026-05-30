import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function parseEmbeddedFolder(html) {
  const entries = [];
  const regex =
    /href="https:\/\/drive\.google\.com\/file\/d\/([^"]+\/view[^"]*)"[^>]*>[\s\S]*?flip-entry-title">([^<]+)/g;
  let match;
  while ((match = regex.exec(html))) {
    const id = match[1].split("/")[0];
    entries.push({ id, title: match[2].trim() });
  }
  return entries;
}

function parseEbooks(html) {
  const entries = [];
  const regex =
    /id="entry-([^"]+)"[\s\S]*?flip-entry-title">([^<]+)/g;
  let match;
  while ((match = regex.exec(html))) {
    entries.push({ id: match[1], title: match[2].trim() });
  }
  return entries;
}

const ebooksHtml = readFileSync(join(root, "scripts/ebooks-folder.html"), "utf8");
const ebooks = parseEbooks(ebooksHtml);
writeFileSync(
  join(root, "src/lib/ebooks-manifest.json"),
  JSON.stringify(ebooks, null, 2),
);
console.log(`Parsed ${ebooks.length} e-books`);
