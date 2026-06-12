# Zesh Agency

A premium, cinematic website for a strategic growth consultancy. Multi-page architecture with dramatic blur transitions, smooth scrolling, and a strict 3-color design system.

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

The `dist/` folder is ready to deploy to any static host.

## Design System

- **3 Colors** — Ink (`#0A0A0A`), Paper (`#F6F5F0`), Signal (`#F4A536`)
- **No gradients, no shadows, no card fills**
- **Dramatic blur** — Every entrance uses blur-to-sharp transitions
- **Slow & deliberate** — All animations 0.7s–2.0s with custom easing
- **Signal Period** — Every headline ends with an accent-colored period
- **Film grain overlay** — Subtle noise texture for cinematic feel

## Tech Stack

- Vite + React 19 + TypeScript (Multi-Page App)
- Tailwind CSS v4
- Framer Motion (animations)
- Lenis (smooth scrolling)
- Three.js / React Three Fiber (3D scenes)
- Syne + Inter (Google Fonts)

## File Structure

- `THEME.md` — Master design system
- `src/lib/siteConfig.ts` — All content data
- `src/lib/data.ts` — Re-exports for backward compatibility
- `src/index.css` — Theme tokens and global styles
- `src/components/` — Reusable UI components
- `src/pages/` — Full page templates
- `src/entries/` — Vite MPA entry points (one per page)
- Root `.html` files — Vite MPA entry HTML files (13 pages)
- `public/images/` — Static assets

## Pages

| Page | URL |
|------|-----|
| Home | `/index.html` |
| About | `/about.html` |
| Solutions | `/solutions.html?slug=seo` |
| Industries | `/industries.html?slug=healthcare` |
| Case Studies | `/case-studies.html?slug=b2b-saas-pipeline` |
| Insights | `/insights.html` |
| Journal | `/journal.html` |
| Lab | `/lab.html` |
| Careers | `/careers.html` |
| Contact | `/contact.html` |
| Studio | `/studio.html` |
| Philosophy | `/philosophy.html` |
| Work | `/work.html?id=1` |

## Key Features

- **Lenis smooth scrolling** — Fluid, cinematic scroll experience
- **Film grain overlay** — Analog texture across the entire site
- **Scroll progress bar** — Thin Signal-colored bar at viewport top
- **Custom cursor** — Heavy spring physics with mix-blend-difference
- **Preloader** — Combinatorial statement generation (~65M unique combinations)
- **Infinite logo marquee** — Seamless scrolling trust bar
- **Mouse-tracking ambient glows** — Parallax blur orbs in hero sections
