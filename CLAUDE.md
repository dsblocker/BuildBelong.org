# buildbelong.org: BuildBelong Culture Kit

Cooperative learning, SEL and classroom culture for grades 6–12.

## How changes go live
- Repo: github.com/dsblocker/BuildBelong.org, branch `main`.
- Hosting: Netlify project **wwwbuildbelong** (dsblocker's team), linked to this repo. Every push to `main` deploys automatically to https://buildbelong.org (www redirects to it).
- Static site, no build step. Netlify publishes the repo root.
- Do the whole job end to end: edit, commit, push to `main`, then confirm the live page returns 200 and shows the change. Don't hand pushing or uploading back to Dan.

## Fonts
- Cafeteria comes from the Adobe Fonts web project **BuildBelong Culture Kit** (kit `qbs0rjr`, `<link rel="stylesheet" href="https://use.typekit.net/qbs0rjr.css">`, CSS name `cafeteria`, weights 700 and 800). The kit only works on buildbelong.org, www.buildbelong.org, buildbelong.netlify.app and localhost. Never download or self-host Adobe font files.
- Passion One (headlines) and Rubik (body) load from Google Fonts.

## Brand
- Logo: `img/buildbelong-logo.webp` (master: Drive > BuildBelong Design System > BuildBelong Logo COLOR.png).
- Colors: navy #0b1f5c, blue #1d5bff, sky #3cc6ff, pink #ff4f9a, purple #7b3dff, sun #ffd84d, lilac wash #f6f0ff.
- Midnight Aurora look (chosen 2026-11-25): night navy #070b24 with aurora glows. Pages still set `color-scheme: light only` and force their own colors so browser dark mode never repaints them.
- Fonts in use: Instrument Serif + Unbounded (title placeholder), Cafeteria (subheader), Rubik (body).
- Cartoon art follows the BuildBelong cast bible: teens ages 13–17, warm expressions, not juvenile.
