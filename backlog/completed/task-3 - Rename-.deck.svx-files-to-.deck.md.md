---
id: TASK-3
title: Rename .deck.svx files to .deck.md
status: Done
assignee: []
created_date: "2026-04-08 06:46"
updated_date: "2026-04-08 22:59"
labels:
  - refactor
  - astromotion
dependencies: []
priority: medium
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->

Recent astromotion updates have standardised on .deck.md as the file extension instead of .deck.svx. Affects comp1720, comp2300, and comp2710-lens (all sites with slide decks). Straightforward file rename, but also requires updating the Svelte preprocess config in astro.config.mjs for each site and the .oxfmtrc.json ignore pattern at the root.

<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria

<!-- AC:BEGIN -->

- [x] #1 All .deck.svx files in comp1720, comp2300, and comp2710-lens are renamed to .deck.md
- [x] #2 astro.config.mjs in each affected site updated to remove .svx from Svelte extensions/preprocess config
- [x] #3 Root .oxfmtrc.json ignore pattern updated from **/\*.deck.svx to **/\*.deck.md
- [x] #4 pnpm build completes cleanly for all 6 sites
- [x] #5 Slide decks render correctly after rename
<!-- AC:END -->
