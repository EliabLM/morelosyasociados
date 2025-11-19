# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the frontend for Morelos & Asociados, a Mexican law firm website. It's a Next.js 16 application with App Router, TypeScript, Tailwind CSS v4, and Sanity CMS integration.

## Development Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with tw-animate-css
- **UI Components**: Radix UI primitives (shadcn/ui pattern)
- **Animations**: Framer Motion
- **CMS**: Sanity (headless)
- **Forms**: React Hook Form + Zod validation

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage
│   ├── nosotros/           # About page
│   ├── servicios/          # Services page
│   └── contacto/           # Contact page
├── components/
│   ├── ui/                 # Reusable UI primitives (shadcn/ui pattern)
│   ├── layout/             # Header, Footer
│   └── sections/           # Page sections (Hero, Services, CTA, etc.)
├── lib/
│   ├── utils.ts            # cn() utility for className merging
│   └── constants.ts        # Site config, navigation items
├── sanity/
│   └── lib/client.ts       # Sanity client, GROQ queries, fetch functions
└── types/
    └── index.ts            # TypeScript interfaces for all data types
```

### Key Patterns

**Path Alias**: Use `@/*` to import from `src/*`
```typescript
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
```

**Sanity CMS Integration**: Data fetching is centralized in `src/sanity/lib/client.ts`
- Pre-defined GROQ queries in `queries` object
- Typed fetch functions: `getServices()`, `getTeamMembers()`, `getTestimonials()`, etc.
- Image URL builder via `urlFor(source)` function

**Environment Variables Required**:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET` (defaults to 'production')

**UI Component Pattern**: Components in `src/components/ui/` follow shadcn/ui conventions with:
- Radix UI primitives
- Class Variance Authority (CVA) for variants
- `cn()` utility for className composition

**Site Configuration**: All site metadata, navigation, and contact info is in `src/lib/constants.ts`

### Language

This is a Spanish-language website for Mexican users. Content, page routes, and UI text are in Spanish.
