import { copyFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

copyFileSync(
  join(root, "node_modules/pdfjs-dist/build/pdf.worker.min.mjs"),
  join(root, "public/pdf.worker.min.mjs"),
);

console.log("Copied pdf.worker.min.mjs to public/");
