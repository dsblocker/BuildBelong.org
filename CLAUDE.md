# buildbelong.org: BuildBelong Culture Kit

Cooperative learning, SEL and classroom culture for grades 6–12.

## How changes go live
- Repo: github.com/dsblocker/BuildBelong.org, branch `main`.
- Hosting: Netlify project **wwwbuildbelong** (dsblocker's team), linked to this repo. Every push to `main` deploys automatically to https://buildbelong.org (www redirects to it).
- Static site, no build step. Netlify publishes the repo root.
- Do the whole job end to end: edit, commit, push to `main`, then confirm the live page returns 200 and shows the change. Don't hand pushing or uploading back to Dan.

## Fonts
- Cafeteria (subheader, CSS `cafeteria`, 700/800) and Trailmade ("Culture Kit" title, CSS `trailmade`) come from the Adobe Fonts web project **BuildBelong Site**: `<link rel="stylesheet" href="https://use.typekit.net/tbd2qwc.css">`. The kit only works on buildbelong.org, www.buildbelong.org, buildbelong.netlify.app, wwwbuildbelong.netlify.app and localhost. Never download or self-host Adobe font files.
- Passion One (headlines) and Rubik (body) load from Google Fonts.

## Brand
- Logo: `img/buildbelong-logo.webp` (master: Drive > BuildBelong Design System > BuildBelong Logo COLOR.png).
- Colors: navy #0b1f5c, blue #1d5bff, sky #3cc6ff, pink #ff4f9a, purple #7b3dff, sun #ffd84d, lilac wash #f6f0ff.
- Midnight Aurora look (chosen 2026-11-25), on a black background (#000) with aurora glows. Text should pop without looking juvenile. Pages still set `color-scheme: light only` and force their own colors so browser dark mode never repaints them.
- Fonts in use: Trailmade with pink/purple layered shadow ("Culture Kit" title, chosen 2026-11-25), Cafeteria (subheader), Rubik (body), Instrument Serif + Unbounded (section headings).
- Hero: rotating editorial-illustration scenes (img/hero/scene-*.webp, darker neon-lit style), sticky black glass ribbon nav; tabs and kit cards use hand-drawn sketchnote SVG icons (img/icons/*.svg) on cream sticker badges, not emoji.
- Hero tagline (Cafeteria subheader): "Where Students Grow, Learn & Thrive" (chosen 2026-11-25).
- Cartoon art follows the BuildBelong cast bible: teens ages 13–17, warm expressions, not juvenile.
