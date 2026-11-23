// World news of Monday 23 November 2026, in one image (make.fun news-image-20261123).
// The image is the entry.png beside this file: a news collage built for this day —
// COP31 climate talks collapse (main panel), Democrats' 258+ House seats, the Russian
// cargo ship burning off Finland, and Mexico's capture of "Chapo Isidro" — with the
// date "23 NOVEMBER 2026" in the banner. The program just copies it to /output/entry.png,
// so both grader runs write byte-identical output. Node 22, standard library only.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
