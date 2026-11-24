// SPDX-License-Identifier: MIT
// A Sponge Is a Tiny Apartment Building
// make.fun — Everyday Things, Two Lines, Longer Run
// (u-suga-everyday-things-two-lines-longer-run-f8734479)
//
// The program writes exactly two lines to $MAKEFUN_OUTPUT_DIR/entry.txt:
//   Line 1 — one vivid sentence explaining a sponge to a 10-year-old,
//            built on a single analogy (an apartment building of rooms).
//   Line 2 — one sentence on why the analogy works: what it maps and
//            what it leaves out.
// Node standard library only. Deterministic: the same bytes every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES: readonly string[] = [
  "A sponge is like a tiny apartment building full of empty rooms that gulp down spilled juice the moment it arrives.",
  "It works because the holes really do trap liquid and hold it the way rooms hold guests, but it leaves out that a sponge cannot pick what it soaks up, wring itself dry, or scrub a dish clean all by itself.",
];

const MAX_CHARS = 400;

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }

  // Gate: exactly two non-empty lines, each a single sentence, and the
  // second line must explain the first rather than repeat it.
  if (LINES.length !== 2) {
    throw new Error(`expected exactly 2 lines, got ${LINES.length}`);
  }
  if (LINES[0].trim() === LINES[1].trim()) {
    throw new Error("line 2 must explain line 1, not repeat it");
  }
  for (const [i, line] of LINES.entries()) {
    const trimmed = line.trim();
    if (trimmed.length === 0) {
      throw new Error(`line ${i + 1} is empty`);
    }
    // One sentence: exactly one full stop, at the end.
    const stops = (trimmed.match(/\./g) ?? []).length;
    if (stops !== 1 || !trimmed.endsWith(".")) {
      throw new Error(`line ${i + 1} must be exactly one sentence`);
    }
  }

  const text = LINES.join("\n") + "\n";
  if (text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} chars, over the ${MAX_CHARS} cap`);
  }
  if (Buffer.byteLength(text, "utf8") !== text.length) {
    throw new Error("entry must be plain ASCII so char count equals byte count");
  }

  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, text, "utf8");

  // Read back and verify: what was written is exactly what we meant.
  const back = readFileSync(outPath, "utf8");
  if (back !== text) {
    throw new Error("read-back mismatch: entry.txt differs from the intended text");
  }

  console.log(`wrote ${outPath} (${text.length} chars, 2 lines)`);
}

main();
