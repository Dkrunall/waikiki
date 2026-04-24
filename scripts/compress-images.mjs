import sharp from "sharp";
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { extname, basename } from "path";

const BASE = "C:/Users/PGH/Desktop/waikiki/public";
const DIRS = ["new", "food", "drinks", "night-life"];
const ROOT = ["lounge.jpg", "pdr.jpg", "thebar.jpg", "picanate.jpg"];
const EXTS = new Set([".jpg", ".jpeg", ".png"]);
const MAX_WIDTH = 1600;
const QUALITY = 78;

async function compress(abs) {
  const ext = extname(abs).toLowerCase();
  if (!EXTS.has(ext)) return;
  try {
    const inputBuf = readFileSync(abs);
    const before = inputBuf.length;
    const meta = await sharp(inputBuf).metadata();
    if ((meta.width ?? 0) <= MAX_WIDTH && before < 400 * 1024) {
      console.log(`  skip  ${basename(abs)}`);
      return;
    }
    const resized = sharp(inputBuf).resize({ width: MAX_WIDTH, withoutEnlargement: true });
    const out = ext === ".png"
      ? await resized.png({ compressionLevel: 9 }).toBuffer()
      : await resized.jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer();
    writeFileSync(abs, out);
    const pct = Math.round((1 - out.length / before) * 100);
    console.log(`  ✓  ${basename(abs).padEnd(34)} ${Math.round(before/1024)}KB → ${Math.round(out.length/1024)}KB  (-${pct}%)`);
  } catch (e) {
    console.error(`  ✗  ${basename(abs)}: ${e.message}`);
  }
}

console.log("Compressing images...\n");
for (const dir of DIRS) {
  const files = readdirSync(`${BASE}/${dir}`).catch?.() ?? readdirSync(`${BASE}/${dir}`);
  for (const f of files) await compress(`${BASE}/${dir}/${f}`);
}
for (const f of ROOT) await compress(`${BASE}/${f}`);
console.log("\nDone.");
