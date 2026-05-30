import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = join(root, "src/lib/ebooks-manifest.json");
const outDir = join(root, "public/training-assets/ebooks");

function sanitize(name) {
  return name.replace(/[<>:"/\\|?*]/g, "_");
}

async function downloadFile(id, outPath) {
  if (existsSync(outPath) && readFileSync(outPath).length > 1024) {
    console.log("Skipping", outPath);
    return;
  }
  mkdirSync(dirname(outPath), { recursive: true });
  const url = `https://drive.google.com/uc?export=download&id=${id}`;
  console.log("Downloading", id);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${id}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 1024) throw new Error(`Too small ${id}`);
  writeFileSync(outPath, buf);
}

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const localManifest = [];

for (const book of manifest) {
  const filename = sanitize(book.title);
  const localPath = `/training-assets/ebooks/${filename}`;
  localManifest.push({ ...book, filename, localPath });
  try {
    await downloadFile(book.id, join(root, "public", localPath.slice(1)));
  } catch (err) {
    console.warn("Failed:", book.title, err.message);
  }
}

writeFileSync(
  join(root, "src/lib/ebooks-local.json"),
  JSON.stringify(localManifest, null, 2),
);
console.log(`E-books manifest updated (${localManifest.length} titles).`);
