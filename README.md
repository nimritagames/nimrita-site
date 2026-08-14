# Nimrita Games Website

A modern, dynamic website built with React, TypeScript, and Vite.

## Features

- **Fully Dynamic**: React-based components with state management
- **Interactive Animations**: Scroll-triggered animations and interactive elements
- **Responsive Design**: Mobile-first responsive layout
- **TypeScript**: Full type safety throughout the application
- **Form Handling**: Email subscription with persistent state
- **Performance Optimized**: Vite build system for fast development and optimized production builds

## Project Structure

```
src/
├── sections/           # The page's content sections, in render order
├── components/         # Site chrome (Navigation, Footer)
├── pages/              # Route-level components
├── hooks/              # Custom React hooks
├── context/            # React context for state management
├── types/              # TypeScript type definitions
├── data/               # Static content and configuration
└── index.css           # Global styles

public/                 # Copied verbatim into dist/ at build time
├── CNAME               # Custom domain (nimritagames.com)
├── flowui/             # Standalone site -> /flowui/
├── infinite-runner/    # Standalone site -> /infinite-runner/
└── Infinite_Runners/   # Redirect stub -> /infinite-runner/
```

### Standalone sites under `public/`

`flowui/` and `infinite-runner/` are self-contained static sites unrelated to
the React app. They live in `public/` so Vite copies them into `dist/`
untouched. They are not linked from the main site — they are reached by direct
URL only.

`Infinite_Runners/` holds only a redirect stub. The guide originally shipped at
that path, so the stub keeps existing links working; do not delete it.

### Section naming

A section's directory name, component name, `id`, and CSS class must all match
(`sections/Projects.tsx` → `id="projects"` → `.projects`), and the navigation
entry in `components/Navigation.tsx` must reference that same `id`.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs
`npm run build` and publishes `dist/` to GitHub Pages. Build output is never
committed — do not commit `dist/` or a prebuilt `assets/` directory, and do not
point `index.html` at a hashed bundle. Its only entry is `/src/main.tsx`.

This requires the repository's **Settings → Pages → Source** to be set to
**GitHub Actions** (not "Deploy from a branch").

## Key Features Implemented

1. **Modern Development Environment**: Vite + React + TypeScript
2. **Component Architecture**: Modular, reusable components
3. **Dynamic Content Management**: Centralized content system with TypeScript types
4. **Interactive Features**: Animated counters, scroll animations, form handling
5. **Single Page Application**: React Router for navigation
6. **State Management**: React Context with persistent localStorage
7. **Build Process**: Optimized production builds with code splitting

## Technologies Used

- **Frontend**: React 19, TypeScript, Vite
- **Routing**: React Router DOM
- **Styling**: CSS with custom properties and responsive design
- **Build Tool**: Vite
- **Type Checking**: TypeScript with strict mode

The website is now fully dynamic and ready for deployment!
