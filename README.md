# nimritagames.com

A one-person studio site. Static HTML and one stylesheet — no build step, no
dependencies, no JavaScript. Open `index.html` in a browser and that is the
site.

## Layout

```
index.html           the homepage
design-system.css    the ONLY stylesheet — palette, scales, every component
privacy/             privacy policy   (required by Google Play)
support/             support page     (required by Google Play)
brand/logo.jpg       logo — also the favicon and social image
CNAME                custom domain

flowui/              standalone site -> /flowui/
infinite-runner/     standalone site -> /infinite-runner/
Infinite_Runners/    redirect stub to /infinite-runner/ — keeps old links alive
```

`flowui/` and `infinite-runner/` are self-contained sites unrelated to the
homepage. They are reached by direct URL and are not linked from it.

## Editing

**Adding a game** — the only routine change. Open `index.html`, find the
`#games` section, and follow the comment there: delete the empty-state panel
and add one `.game` article per game, newest first. Nothing else changes.

**Anything visual** — change it in `design-system.css` and nowhere else. Its
header sets the rules: one fixed palette, spacing and type on their scales,
shadows with no blur, and contrast ratios that have been measured. Read it
before changing a colour.

## Deploying

Push to `main`. GitHub Pages serves the repository root directly, so whatever
is committed is what is live. There is nothing to build.
