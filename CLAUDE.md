# CLAUDE.md

Guidance for Claude Code working in this repository.

## What this is

`nimritagames.com` — a static site for a one-person studio that makes small 2D
Android games. Plain HTML plus one stylesheet. **No build step, no package
manager, no framework, no JavaScript.** It was a React + Vite app; that was
removed because nothing on the site used state, effects or event handlers, and
it shipped 198 KB of JavaScript to render static markup.

Do not reintroduce a framework or a build step to add a page or a game.

## Rules

- **`design-system.css` is the single source for anything visual.** Palette,
  spacing scale, type scale and every shared component live there. Never
  declare a colour, spacing value or font size anywhere else. Its header
  documents the constraints, including measured contrast ratios — read it
  before changing a colour, and re-measure if you do.
- **The palette is fixed** and derived from `brand/logo.jpg`. `--brand` is the
  logo's exact coral and is for graphics only; it fails contrast as text.
  `--accent` is the darkened variant that carries text.
- **Shadows never blur.** The design is cel-shaded: light steps, it does not
  bloom.
- **The site claims nothing it cannot show.** No invented metrics, no stock
  photography, no games that do not exist. This is deliberate — the previous
  version failed on exactly that.

## Verifying a change

There are no tests and nothing to compile. Serve the repository root over HTTP
and open it — relative to root, because links are root-absolute (`/privacy/`).
Check the homepage, `/privacy/`, `/support/`, and that `/Infinite_Runners/`
still redirects.

## Deploying

Push to `main`. GitHub Pages serves the repository root. `CNAME` at the root
holds the custom domain — do not move or delete it.
