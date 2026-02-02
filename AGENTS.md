# AGENTS.md - MSV Landing Page

> Guidelines for AI agents working on this Next.js landing page project.

## Project Overview

Static landing page for Mining Services Vietnam (MSV) company profile.
- **Framework**: Next.js (App Router)
- **Styling**: TailwindCSS
- **Hosting**: Vercel
- **Font**: Montserrat (Google Fonts)

## Quick Reference

### Build Commands
```bash
npm run dev          # Start development server (port 3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
```

### Testing Commands
```bash
npm test                                             # Run all tests
npm test -- --watch                                  # Watch mode
npm test -- path/to/file.test.tsx                    # Single test file
npm test -- path/to/file.test.tsx -t "test name"    # Specific test
```

### Type Checking
```bash
npx tsc --noEmit              # Type check without emitting
npx tsc --noEmit --watch      # Type check in watch mode
```

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Montserrat font
│   ├── page.tsx           # Home page
│   └── [route]/page.tsx   # about, team, services, projects, contact
├── components/
│   ├── ui/                # Base UI components (Button, Card, etc.)
│   └── sections/          # Page section components
├── lib/                   # Utility functions and helpers
├── data/                  # Static data/content
├── public/                # Static assets
├── Context/               # Source content documents (markdown)
├── References/            # Brand assets (logos, photos)
└── THEME.md               # Brand guidelines
```

## Code Style Guidelines

### TypeScript
- Use TypeScript for all files (`.tsx`, `.ts`)
- Prefer `interface` over `type` for object shapes
- Use strict mode; avoid `any` type
- Export types alongside their related components

### Imports
```typescript
// Order: React/Next → external libs → internal modules → types
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';
```

- Use absolute imports with `@/` prefix
- Use named exports for components (not default exports)

### Components
- One component per file
- Use function declarations for components
- Accept `className` prop for styling customization
- Colocate component-specific types in the same file

```typescript
interface CardProps {
  title: string;
  className?: string;
}

export function Card({ title, className }: CardProps) {
  return (
    <div className={cn('rounded-lg bg-white p-6', className)}>
      <h3 className="font-semibold text-msv-dark-2">{title}</h3>
    </div>
  );
}
```

### Naming Conventions
- **Components**: PascalCase (`TeamSection.tsx`)
- **Utilities/hooks**: camelCase (`useScrollPosition.ts`)
- **Constants**: SCREAMING_SNAKE_CASE (`MAX_ITEMS`)

### TailwindCSS & Brand Colors
Use MSV brand colors from `tailwind.config.js` (defined in THEME.md):

| Color | Hex | Usage |
|-------|-----|-------|
| `msv-blue` | `#3494BA` | Primary brand, CTAs |
| `msv-dark-2` | `#373545` | Body text (not pure black) |
| `msv-light-2` | `#CEDBE6` | Subtle backgrounds |
| `msv-cyan` | `#58B6C0` | Secondary highlights |
| `msv-mint` | `#75BDA7` | Success states |
| `msv-green` | `#6B9F25` | Links, positive actions |
| `msv-gold` | `#D8A337` | Warnings, attention |

- Use `cn()` utility for conditional classes (`clsx` + `tailwind-merge`)
- Mobile-first responsive: `sm:`, `md:`, `lg:`, `xl:`
- Prefer Tailwind utilities over custom CSS

### Accessibility
- All images must have `alt` text
- Use semantic HTML (`<nav>`, `<main>`, `<section>`)
- Maintain WCAG 2.1 AA color contrast
- Support keyboard navigation with focus states

## Content Sources

**Content** in `/Context` folder:
- `CompanyOverview.md` - Company description
- `LeadershipAndKeyPersonnel.md` - Team bios
- `CoreCompetencies.md` - Service capabilities
- `ServiceDeliveryModel.md` - Engagement models
- `SelectProjects-CurrentProjects.md` - Projects
- `ContactPage.md` - Contact information

**Assets** in `/References`:
- `/Logos/` - MSV logo variants
- `/KeyPersonnel/` - Team headshots

## Common Patterns

### Server vs Client Components
Prefer Server Components by default. Only use `'use client'` when needed:
- Event handlers (onClick, onChange)
- React hooks (useState, useEffect)
- Browser APIs

### Next.js Image
```typescript
import Image from 'next/image';
<Image src="/team/person.jpg" alt="Name - Title" width={300} height={400} />
```

### Page Metadata (SEO)
```typescript
export const metadata = {
  title: 'Page Title | MSV',
  description: 'Page description for SEO',
};
```

## Do's and Don'ts

**Do:**
- Follow existing code patterns
- Use MSV brand colors from THEME.md
- Keep components small and focused
- Test responsive design at all breakpoints

**Don't:**
- Use inline styles
- Import entire icon libraries
- Use `any` type in TypeScript
- Hardcode content (use data files)
