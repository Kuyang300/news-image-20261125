import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// All paths resolve from this file's own location. The grader may run
// the program from any working directory, so nothing here is relative.
const HERE = dirname(fileURLToPath(import.meta.url));
const B64_PATH = join(HERE, "entry.b64.txt");

const MAX_BYTES = 1048576; // 1 MiB
const JPEG_MAGIC = [0xff, 0xd8, 0xff];

function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR || "/output";
}

function loadImageBytes(): Buffer {
  const text = readFileSync(B64_PATH, "utf8").replace(/\s+/g, "");
  return Buffer.from(text, "base64");
}

function checkImage(bytes: Buffer): void {
  if (bytes.length === 0 || bytes.length > MAX_BYTES) {
    throw new Error(`image is ${bytes.length} bytes; must be 1..${MAX_BYTES}`);
  }
  for (let i = 0; i < JPEG_MAGIC.length; i++) {
    if (bytes[i] !== JPEG_MAGIC[i]) {
      throw new Error("image is not a JPEG (bad magic bytes)");
    }
  }
}

function main(): void {
  const bytes = loadImageBytes();
  checkImage(bytes);
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  const out = join(dir, "entry.png");
  writeFileSync(out, bytes);
  console.log(`wrote ${out} (${bytes.length} bytes)`);
}

main();
