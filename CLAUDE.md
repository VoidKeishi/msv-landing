# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static corporate landing page for **Mining Services Vietnam (MSV)** — a mining services company operating across Southeast Asia. Built with Next.js App Router, TailwindCSS v4, and Framer Motion. Hosted on Vercel.

Domain: `https://www.dma-msv.com`

## Commands

```bash
npm run dev       # Dev server on localhost:3000
npm run build     # Production build
npm run lint      # ESLint
npx tsc --noEmit  # Type check
```

No test framework is configured.

## Architecture

### Routing & Layout

Next.js App Router with 6 pages: `/`, `/about`, `/services`, `/team`, `/projects`, `/contact`. All pages share a root layout (`app/layout.tsx`) that wraps content with `<Navigation />` and `<Footer />`. The main content area has `pt-20` to clear the fixed navbar.

### Data Flow

All site content is in static TypeScript data files — **not** fetched from an API:
- `data/team.ts` — team members with `category: 'board' | 'advisory' | 'technical' | 'executive'`
- `data/services.ts` — four service offerings with features lists
- `data/projects.ts` — project entries with country, commodity, services, images

To change displayed text/info, edit these data files directly. Components read from them at build time.

### Component Organization

- `components/sections/` — page-level sections (Hero, Navigation, Footer, page-specific content components)
- `components/ui/` — reusable primitives (Button, Card, Container, AnimatedComponents)
- All components use **named exports** (no default exports)
- Client components (`'use client'`) only where needed (interactivity, hooks)

### Styling

**TailwindCSS v4** with CSS-first configuration. Brand colors are defined as CSS custom properties in `app/globals.css` using `@theme inline` — there is **no** `tailwind.config.js`. Colors are used as `text-msv-blue`, `bg-msv-dark-2`, etc.

Key brand colors:
| Token | Hex | Role |
|-------|-----|------|
| `msv-blue` | `#3494BA` | Primary brand, CTAs, headings |
| `msv-dark-2` | `#373545` | Body text (use instead of black) |
| `msv-light-2` | `#CEDBE6` | Alternate section backgrounds |
| `msv-cyan` | `#58B6C0` | Hover states, secondary |
| `msv-gold` | `#D8A337` | Sparingly — icons, stats highlights |
| `msv-green` | `#6B9F25` | Links, positive actions |
| `msv-gray-blue` | `#7A8C8E` | Muted text, captions |

Container: uses `.container-custom` class (max-width 80rem) via the `<Container>` component.

### Animations

Framer Motion for scroll-triggered animations. Reusable wrappers in `components/ui/AnimatedComponents.tsx` (`AnimatedSection`, `StaggerContainer`, `StaggerItem`, `CountUp`). Preset variants in `lib/animations.ts`.

### Font

Montserrat loaded via `next/font/google` in the root layout. Weights: 300–700.

### Path Aliases

`@/*` maps to project root (configured in `tsconfig.json`). Example: `@/components/ui/Button`, `@/data/team`, `@/lib/utils`.

### Utilities

- `cn()` in `lib/utils.ts` — merges Tailwind classes (`clsx` + `tailwind-merge`)

## Ignored Directories

- `References/` — brand assets, PowerPoint files, original logos (reference only)
- `Context/` — source markdown documents used during initial development (reference only)
- `src/` — empty scaffold, unused; the active code is in `app/`, `components/`, `data/`, `lib/`

## Key Conventions

- Use `@/` absolute imports, ordered: React/Next → external libs → internal modules → types
- Use MSV brand colors from `globals.css` (`msv-*` tokens) — never pure black for text
- Navigation links are defined in `components/sections/Navigation.tsx` (`navLinks` array)
- Page metadata/SEO goes in each `app/[route]/page.tsx` via `export const metadata`
- Images use `next/image` with assets in `public/` (logos in `public/logos/`, team in `public/team/`, projects in `public/projects/`)
- Prefer Server Components; only add `'use client'` when the component needs hooks/event handlers
