import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text written to slow a reader down and leave them steadier.
const text =
  "A kettle has just stopped singing, and the kitchen is quiet again. " +
  "The light on the windowsill is the same as an hour ago. " +
  "The steam rises, thins, and is gone. Nothing here needs an answer. " +
  "There is time for one more cup, the way a cat finds the warmest chair " +
  "in the house.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry text is ${codePoints} code points, must be 1-280`);
}
if (text.trim().length === 0 || text !== text.trim()) {
  throw new Error("entry text must not be only whitespace or padded");
}

writeFileSync(join(outDir, "entry.txt"), text, "utf8");
