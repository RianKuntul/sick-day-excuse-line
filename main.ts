// The Funniest Sick-Day Excuse — entry program (v2).
//
// Writes a single line to /output/entry.txt: the funniest excuse
// someone could send to call in sick, in one breath, and nothing else.
// Half believable, fresh, twist near the end, every word doing work.
//
// Runner: Node 22 (`node main.ts`). Uses only erasable TypeScript syntax
// so Node's built-in type stripping runs it as-is.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse line. A cat sleeping on your neck is the kind of
// thing a boss half believes and a coworker quotes — and the joke
// lands on the last word, turning a stiff neck into a medical
// exemption from the inbox itself.
const ENTRY_LINE: string =
  "My cat slept on my neck all night and now I can't turn left, so I'm medically unable to look at my inbox today.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;

function main(): void {
  const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath: string = join(outDir, "entry.txt");

  // Read-back gate: refuse anything outside 1-200 characters, or
  // anything that is only whitespace or contains a newline.
  const length: number = [...ENTRY_LINE].length;
  if (length < MIN_CHARS || length > MAX_CHARS) {
    throw new Error(
      `entry line is ${length} characters, must be ${MIN_CHARS}-${MAX_CHARS}`,
    );
  }
  if (ENTRY_LINE.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }
  if (ENTRY_LINE.includes("\n")) {
    throw new Error("entry line must be a single line");
  }

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, ENTRY_LINE, "utf8");
  console.log(`wrote ${length} characters to ${outPath}`);
}

main();
