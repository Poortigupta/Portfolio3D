# Portfolio3D — React + Vite + 3D Portfolio

Modern, responsive developer portfolio built with React, TypeScript, Vite, Tailwind, shadcn/ui, Framer Motion, and React Three Fiber. It features a 3D hero scene, particles background, smooth section navigation, dark/light theme toggle, and data-driven sections for easy customization.

## Overview
- Interactive 3D hero using `@react-three/fiber` + `three`
- Smooth animations and micro-interactions via `framer-motion`
- Persistent theme (light/dark) using a custom context
- Data-driven content: projects, skills, timeline (education & experience)
- Mobile-friendly navbar with active-section highlighting and smooth scroll
- Tailwind + shadcn/ui + Radix primitives for accessible UI components
- Vite-powered dev server and optimized production builds

## Tech Stack
- React 18, TypeScript, Vite 5
- Tailwind CSS, shadcn/ui, Radix UI
- Framer Motion, React Three Fiber, Drei, three.js
- React Router, TanStack Query
- tsparticles / react-tsparticles

## Getting Started
Prerequisites:
- Node.js 18 or newer (`node -v` to verify)
- A package manager: npm (recommended), pnpm, yarn, or bun

Install dependencies and start the dev server (Windows PowerShell):

```powershell
npm install
npm run dev
```

Vite is configured to run on `http://localhost:8080` and listen on your LAN (see `vite.config.ts`).

### Available Scripts
- `npm run dev`: Start the Vite dev server
- `npm run build`: Production build to `dist/`
- `npm run build:dev`: Development-mode build
- `npm run preview`: Preview the production build locally
- `npm run lint`: Lint the project

If you prefer Bun:

```powershell
bun install
bun run dev
```

## Project Structure
```
. 
├─ index.html
├─ package.json
├─ vite.config.ts
├─ tailwind.config.ts
├─ public/
│  ├─ favicon.png
│  ├─ project-*.jpg
│  └─ robots.txt
└─ src/
   ├─ main.tsx
   ├─ App.tsx
   ├─ contexts/ThemeContext.tsx
   ├─ components/
   │  ├─ Scene3D.tsx
   │  ├─ ParticlesBackground.tsx
   │  ├─ Navbar.tsx
   │  └─ ui/ ... (shadcn/ui components)
   ├─ sections/
   │  ├─ Hero.tsx
   │  ├─ About.tsx
   │  ├─ Skills.tsx
   │  ├─ Projects.tsx
   │  ├─ Education.tsx
   │  └─ Experience.tsx
   ├─ pages/Portfolio.tsx
   └─ data/
      ├─ projectsData.ts
      ├─ skillsData.ts
      └─ timelineData.ts
```

## Customization
- Content data: Update files in `src/data/` to change cards, lists, and timelines.
  - `projectsData.ts`: Project cards and metadata
  - `skillsData.ts`: Skills and categories
  - `timelineData.ts`: Education/experience items
- Images & media: Place assets in `public/` (e.g., `public/project-1.jpg`). Refer to them by `/project-1.jpg` or similar.
- Resume link: In `src/sections/Hero.tsx`, set `link.href` to an actual PDF path (e.g., add `public/resume.pdf`).
- Theme: `src/contexts/ThemeContext.tsx` stores the theme in `localStorage` (`portfolio-theme`). The toggle lives in `src/components/Navbar.tsx`.
- 3D scene: Edit `src/components/Scene3D.tsx` to tweak geometry, colors, lighting, and rotation.
- Particles: Adjust the configuration in `src/components/ParticlesBackground.tsx`.
- Styling: Tailwind is already wired. Add utility classes or extend the design tokens in `tailwind.config.ts`.
- Routing: Uses `BrowserRouter` (see `App.tsx`). If deploying to a subpath (e.g., GitHub Pages), set `base` in `vite.config.ts` or switch to `HashRouter` to avoid 404s on refresh.

## Build and Deploy
Create a production build and preview it locally:

```powershell
npm run build
npm run preview
```

The output is in `dist/`. You can deploy it to any static host:
- Netlify / Vercel: Push the repo, connect, and set build command `npm run build` and output `dist`.
- GitHub Pages:
  - Option A (base path): Set `base: "/<repo-name>/"` in `vite.config.ts` and deploy `dist` to `gh-pages`.
  - Option B (hash routing): Switch to `HashRouter` in `App.tsx` to avoid base path changes.

## Notes
- Dev server binds to port `8080` (update in `vite.config.ts` if needed).
- ESLint config is included; run `npm run lint` to check code quality.
- No license file is provided; add one if you plan to open-source.

## Acknowledgements
- shadcn/ui and Radix UI for accessible primitives
- React Three Fiber + Drei for the WebGL layer
- Framer Motion for animation tooling