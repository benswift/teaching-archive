---
id: TASK-1
title: Convert .astro pages to .md/.mdx content files
status: Done
assignee: []
created_date: '2026-04-08 06:45'
updated_date: '2026-04-08 07:22'
labels:
  - content
  - refactor
dependencies: []
priority: high
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Many pages in the course sites (e.g. policies, outline, help, index pages) are .astro files with inline HTML that would be better as .md or .mdx content files. This makes content more maintainable and fixes the hardcoded root-relative link problem, since Astro's content layer handles base path rewriting for markdown links. Affects all 5 course sites (comp1720, comp2300, comp2710-lens, compiot-bit, extn1019). The landing page can stay as .astro.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 All static content pages in each course site are converted from .astro to .md or .mdx
- [x] #2 Converted pages render identically to their .astro originals
- [x] #3 Internal links in converted markdown files resolve correctly under the site base path
- [x] #4 pnpm build completes cleanly for all 6 sites
<!-- AC:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Converted the 3 static .astro content pages in comp2710-lens (policies, outline, help) to markdown files in a new `pages` content collection, following the existing extn1019 pattern.

Changes in `sites/comp2710-lens/`:
- Created `src/content/pages/policies.md`, `outline.md`, `help.md` with HTML→markdown conversion
- Added `pages` collection to `src/content.config.ts`
- Created `src/pages/[slug].astro` route handler using ContentLayout
- Removed `src/pages/policies.astro`, `outline.astro`, `help.astro`

The other 4 course sites (comp1720, comp2300, compiot-bit) had no static content pages to convert. extn1019 already implemented this pattern. Build passes with no broken links and no accessibility violations.
<!-- SECTION:FINAL_SUMMARY:END -->
