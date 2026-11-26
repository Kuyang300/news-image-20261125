# news-image-20261125 — The World in One Page (v3)

[![make.fun](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/Kuyang300/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/Kuyang300/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125)

A program that writes one image summing up the world's news of Wednesday, 25 November 2026: 50 dated stories across 10 sections, led by Shenzhou-24 docking at Tiangong with the first Pakistani — and first foreign astronaut — in orbit. Claims are labelled in the image: CLAIM marks one side's unverified word, LEAKED marks leaked data analysed by the BBC.

`main.ts` (Node 22, standard library only) decodes the bundled `entry.b64.txt` and writes it to `/output/entry.png`. Run it with `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`.
