# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the frontend for Morelos & Asociados S.A.S., a Colombian logistics company specializing in cargo handling (manipulación de carga) based in Cartagena, Bolívar. It's a Next.js 16 application with App Router, TypeScript, Tailwind CSS v4, and Sanity CMS integration.

**Company Info:**
- NIT: 901438331-2
- Location: Cartagena, Bolívar, Colombia
- Industry: Logistics / Cargo Handling

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

This is a Spanish-language website for Colombian users. Content, page routes, and UI text are in Spanish (es_CO locale).

## Mandatory Documentation Lookup (Context7 MCP)

**CRITICAL REQUIREMENT**: Before making ANY code changes, you MUST use the Context7 MCP tools to retrieve up-to-date documentation for the relevant libraries and frameworks.

### Required Workflow:

1. **Before any code modification**, use `mcp__context7__resolve-library-id` to find the library ID
2. **Then use `mcp__context7__get-library-docs`** to fetch current documentation
3. Only after reviewing the documentation, proceed with implementation

### When to Use Context7:

- **Next.js changes**: Fetch docs for routing, metadata, API routes, server components
- **Tailwind CSS changes**: Fetch docs for v4 syntax, utilities, responsive design
- **Framer Motion**: Fetch docs for animations, variants, gestures
- **React Hook Form + Zod**: Fetch docs for form validation patterns
- **Sanity CMS**: Fetch docs for GROQ queries, client configuration
- **Radix UI**: Fetch docs for accessibility patterns, component APIs
- **Any new library**: Always fetch documentation first

### Example Workflow:

```
1. User requests: "Add a new animated modal component"
2. Agent MUST:
   - mcp__context7__resolve-library-id("Framer Motion")
   - mcp__context7__get-library-docs with topic "modal animation variants"
   - mcp__context7__resolve-library-id("Radix UI Dialog")
   - mcp__context7__get-library-docs with topic "dialog accessibility"
3. Only then implement the component with current best practices
```

This ensures all implementations follow the latest documentation and best practices, avoiding deprecated patterns or outdated syntax.
