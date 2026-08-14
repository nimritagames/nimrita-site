# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production (runs TypeScript check then Vite build)
- `npm run preview` - Preview production build locally

### Build Process
The build process includes TypeScript compilation followed by Vite bundling. Always run `npm run build` before deployment to ensure type safety.

## Architecture

### Core Technologies
- **React 19** with TypeScript in strict mode
- **Vite** for build tooling and development server
- **React Router DOM** for client-side routing
- **React Context + useReducer** for state management

### Application Structure

#### State Management
The app uses a centralized state system via `AppContext`:
- **Global state**: Navigation, email subscription, theme, reduced motion preferences
- **Persistence**: Key state (theme, founders list status) persists to localStorage via `useLocalStorage` hook
- **Reducer pattern**: All state updates go through `appReducer` with typed actions

#### Component Architecture
- **Pages**: Top-level route components in `src/pages/`
- **Sections**: The page's content sections in `src/sections/`, rendered in order by `HomePage`
- **Components**: Site chrome (Navigation, Footer) in `src/components/`
- **Hooks**: Custom hooks for reusable logic (`useLocalStorage`, `useScrollAnimation`)
- **Context**: Global state management in `src/context/`

#### Content Management
- **Partially centralized content**: `src/data/content.ts` is typed by `src/types/`, but only its
  `projects` key is consumed (by `sections/Projects.tsx`). Every other section hardcodes its own
  copy, so the remaining keys are dead and their values contradict what the page renders. Treat the
  component as the source of truth until this is reconciled.
- **Type safety**: Content structure enforced by TypeScript interfaces in `src/types/`
- **Dynamic rendering**: Components consume typed content objects rather than hardcoded text

#### Key Patterns
- **Animation system**: Global scroll animation hook manages intersection observers and reduced motion preferences
- **Responsive design**: Mobile-first CSS with custom properties
- **Accessibility**: Proper semantic HTML, ARIA labels, and reduced motion support
- **Performance**: Component-based architecture with React 19 optimizations

### File Organization
```
src/
├── sections/       # Page sections (Hero, Origin, Principles, Projects, Gallery, Contact)
├── components/     # Site chrome (Navigation, Footer)
├── pages/         # Route-level components
├── hooks/         # Custom React hooks
├── context/       # React Context providers
├── types/         # TypeScript type definitions
├── data/          # Static content and configuration
└── index.css      # Global styles with CSS custom properties
```

The codebase prioritizes type safety, performance, and maintainability with a clear separation between content, components, and application logic.