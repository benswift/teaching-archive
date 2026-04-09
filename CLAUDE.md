# teaching-archive

Monorepo containing archived ANU course websites, built with Astro and
astro-theme-anu. Deployed to GitHub Pages at `teaching.benswift.me`.

## Stack

- **Framework**: Astro 6 with Svelte (some sites also use MDX)
- **Theme**: astro-theme-anu (git submodule at `submodules/astro-theme-anu/`)
- **Decks**: astromotion for slide decks in comp1720, comp2300, comp2710-lens
- **Package manager**: pnpm workspace with catalogs for shared versions
- **Linting**: oxlint (root config), Stylelint (root config)
- **Formatting**: oxfmt (root config)
- **CI**: GitHub Actions deploys to GitHub Pages

## Project structure

- `sites/landing/` --- landing page listing all courses
- `sites/comp1720/` --- COMP1720 Art & Interaction Computing
- `sites/comp2300/` --- COMP2300 Computer Organisation & Program Execution
- `sites/comp2710-lens/` --- COMP2710 LENS Laptop Ensemble
- `sites/compiot-bit/` --- Computing IoT BIT China Study Tour
- `sites/extn1019/` --- EXTN1019 Creative Computing
- `scripts/assemble.mjs` --- combines all site builds into one `dist/`
- `submodules/astro-theme-anu/` --- theme (git submodule, do not edit here)

## Commands

- `pnpm build` --- build all sites
- `pnpm build:assemble` --- build all sites and assemble into `dist/`
- `pnpm dev:<name>` --- dev server for a specific site (e.g. `pnpm dev:comp1720`)
- `pnpm lint` --- run oxlint across the repo
- `pnpm lint:css` --- run Stylelint across all sites
- `pnpm format` --- format with oxfmt

## Dependencies

- Shared dependency versions are pinned in `pnpm-workspace.yaml` catalogs.
  Each site uses `"catalog:"` in its package.json.
- `astro-theme-anu` is resolved via pnpm override in root package.json,
  pointing to `submodules/astro-theme-anu/packages/astro-theme-anu`.
  Each site just lists `"astro-theme-anu": "*"`.
- To update the theme: `cd submodules/astro-theme-anu && git pull`

## Notes

- These are archived sites --- content is frozen, not actively updated.
- Each site's `astro.config.mjs` has `base: "/<name>"` for the
  `teaching.benswift.me` deployment.
