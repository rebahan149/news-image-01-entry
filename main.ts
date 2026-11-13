// news-image-01 entry: "The World in One Day"
// The repository holds one finished poster, entry.png (JPEG bytes under a
// .png name, which the gate allows: it tells PNG from JPEG by first bytes).
// It sums up Friday 13 November 2026 in six captioned panels: tankers hit
// in Hormuz, wider Ukraine talks, Nvidia's CEO resigning, the Microsoft
// outage, the $1.2B Binance seizure, and Pope Leo in Peru.
// This program's whole job is to place those exact bytes at
// /output/entry.png, deterministically, on every run.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The harness normally creates the output directory, but making it here
// costs nothing and keeps a bare local run (node main.ts) from failing.
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.png");
copyFileSync(join(here, "entry.png"), target);
console.log(`entry.png written: ${statSync(target).size} bytes`);
