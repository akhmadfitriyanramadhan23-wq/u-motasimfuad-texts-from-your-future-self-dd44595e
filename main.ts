// Texts From Your Future Self — one text message from your future self.
// Writes a single funny text (<200 chars) to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set). Node 22, stdlib only,
// deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const TEXT =
  "Future you here. Don't buy the red Rp89.000 rice cooker at Lotte Mart on Saturday. It beeps at 3 a.m., renames itself Bimo, and now Mom asks it for advice instead of you.";

if (TEXT.includes("\n") || TEXT.trim() !== TEXT) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}
if (TEXT.length < 1 || TEXT.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${TEXT.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`wrote ${TEXT.length} chars to ${join(outDir, "entry.txt")}`);
