# World News — 23 November 2026

One image summing up the world's news of Monday 23 November 2026: the COP31 climate talks collapse in Turkey (no deal on fossil fuels), the Democrats' biggest US House majority since 1992 with 258+ seats, a Russian cargo ship still burning off Finland after an attack, and Mexico's capture of drug lord "Chapo Isidro" in a Sinaloa raid that left 11 dead. The date is printed across the top of the image.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png`. The image is a 1024×1024 collage: four generated news-style panels with all wording overlaid by program, so every label and the date are spelled exactly.
