# AGENTS

## Project Overview
- Static website for Oficina de Gestion Ambiental (UAM).
- Main reference context: [README.txt](README.txt).
- No package manager, build pipeline, or automated tests are configured in this repository.

## Structure At A Glance
- [index.html](index.html): top-level landing page (large, mostly static markup).
- [static/](static): additional content pages, one HTML file per section.
- [css/](css): shared and page-specific styles.
- [js/](js): shared and page-specific scripts.
- [images/](images), [gifs/](gifs), [documents/](documents): static assets.

## Agent Working Rules For This Repo
- Prefer minimal, surgical edits. Files are large and mostly hand-authored.
- Keep existing style and naming patterns unless a task explicitly requests refactoring.
- When changing a specific section page, update its HTML plus its paired CSS/JS files if needed.
- Do not introduce frameworks, bundlers, or dependency managers unless explicitly requested.

## Important Conventions
- Most pages include common shared assets first (navbar/menu/general/footer), then page-specific CSS/JS.
- JS is mostly plain DOM scripting with direct getElementById/querySelector usage.
- There is no module system; scripts are loaded by script tags in page order.

## Known Pitfalls
- Path casing is inconsistent in HTML imports (for example CSS/JS/STATIC and mixed file-name case), while actual folders are lowercase ([css/](css), [js/](js), [static/](static)).
- These mismatches may work on Windows but can fail on case-sensitive deploy targets. When touching imports, verify exact path case against existing files.
- Some content appears duplicated between [index.html](index.html) and [static/index.html](static/index.html). Confirm which page the user wants changed before broad edits.

## Validation Steps
- Local preview from repository root:
  - python -m http.server 5500
- Then verify in browser:
  - Core navigation links open expected pages.
  - Console has no new 404s for CSS/JS/images.
  - Page-specific interactions still work (dropdowns, carousels, mobile menu).

## Typical Edit Workflow
1. Identify target page in [static/](static) (or [index.html](index.html) if homepage).
2. Locate linked assets for that page in [css/](css) and [js/](js).
3. Apply minimal change.
4. Re-check import paths and case.
5. Run local preview and test the affected page behavior.
