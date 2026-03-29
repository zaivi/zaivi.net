# zaivi.net - Project Architecture

## Overview
High-performance personal portfolio built with Astro + ReactJS, optimized for 10k+ concurrent users with a Modern Generative AI aesthetic.

## Domain
**Production URL:** https://zaivi.net/

## Tech Stack
| Category | Technology |
|----------|------------|
| Framework | Astro 5.x (latest) |
| UI Library | React 18.x |
| Styling | Tailwind CSS 3.x |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter (Google Fonts) |

## Project Tree

```
zaivi.net/
├── astro.config.mjs              # Astro configuration with SSG
├── tailwind.config.mjs           # Tailwind with custom design tokens
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── assets/
│       ├── images/
│       └── fonts/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro      # SEO + glassmorphism + meta
│   ├── components/
│   │   ├── atoms/                # Atomic design - smallest units
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Icon.tsx
│   │   │   └── AnimatedText.tsx
│   │   ├── molecules/            # Combinations of atoms
│   │   │   ├── Card.tsx
│   │   │   ├── LinkRow.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── CategoryHeader.tsx
│   │   ├── organisms/            # Complex components
│   │   │   ├── Navigation.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── BentoGrid.tsx
│   │   │   ├── CategorySection.tsx
│   │   │   └── Footer.tsx
│   │   └── templates/            # Page-level layouts
│   │       └── ShortURLsTemplate.tsx
│   ├── pages/
│   │   ├── index.astro           # Homepage with bento layout
│   │   └── urls/
│   │       └── index.astro       # Short URLs page (from image)
│   ├── styles/
│   │   └── global.css            # Glassmorphism + mesh gradients
│   ├── content/
│   │   └── urls/                 # Data for short URLs
│   │       ├── apps.json
│   │       ├── social.json
│   │       ├── tools.json
│   │       └── other.json
│   └── utils/
│       ├── cn.ts                 # Tailwind merge utility
│       └── seo.ts                # SEO helper functions
└── plans/
    └── PROJECT_ARCHITECTURE.md   # This file
```

## Design System - Gen-AI Aesthetic

### Color Palette (Dark Mode Default)
```css
/* Primary Colors */
--color-bg-primary: #0a0a0f;        /* Deep void black */
--color-bg-secondary: #12121a;      /* Slightly lighter */
--color-surface: rgba(255,255,255,0.03);
--color-surface-hover: rgba(255,255,255,0.06);

/* Accent Colors */
--color-accent-purple: #a855f7;     /* Primary purple */
--color-accent-cyan: #06b6d4;       /* Cyan glow */
--color-accent-pink: #ec4899;       /* Pink accent */
--color-accent-blue: #3b82f6;       /* Blue glow */

/* Text Colors */
--color-text-primary: #f8fafc;
--color-text-secondary: #94a3b8;
--color-text-muted: #64748b;

/* Mesh Gradient Stops */
--gradient-mesh-1: radial-gradient(ellipse at 20% 20%, rgba(168,85,247,0.15) 0%, transparent 50%);
--gradient-mesh-2: radial-gradient(ellipse at 80% 80%, rgba(6,182,212,0.1) 0%, transparent 50%);
--gradient-mesh-3: radial-gradient(ellipse at 50% 50%, rgba(236,72,153,0.08) 0%, transparent 60%);
```

### Glassmorphism Specs
```css
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
}

.glass-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.glass-card:hover {
  background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%);
  border-color: rgba(168, 85, 247, 0.3);
  box-shadow: 0 0 30px rgba(168, 85, 247, 0.15);
}
```

### Animation Specs
```css
/* Glow Border Animation */
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(168,85,247,0.3); }
  50% { box-shadow: 0 0 40px rgba(168,85,247,0.5); }
}

/* Subtle Float */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Mesh Gradient Animation */
@keyframes mesh-rotate {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
  100% { transform: rotate(360deg) scale(1); }
}
```

## Pages Structure (Based on Reference Image)

### 1. Homepage (Bento Grid Layout)
- Hero with typing animation
- Quick stats
- Featured projects grid (4-6 cards)
- Recent links preview

### 2. Short URLs Page (/urls) - FROM IMAGE
Categories from reference:
- **APPS (12)**: /, /about, /agentstate, /ai, /blog, /claw, /cv, /i, /insights, /mcp, /photos, /stamp
- **SOCIAL (7)**: /github, /in, /ni, /tiktok, /tt, /un, /x
- **TOOLS (8)**: /ch, /clickhouse, /clickhouse-monitoring, /mo, /monitor, /numi, /rs, /rust
- **OTHER (5)**: /agents, /api_nini, /api/nini, /claude-plugins, /llm-timeline

## Performance Optimizations (10k+ Users)

1. **Static Site Generation (SSG)**
   - All pages pre-rendered at build time
   - No server-side processing required

2. **Image Optimization**
   - WebP format with fallbacks
   - Lazy loading with blur placeholders
   - Responsive images with srcset

3. **Code Splitting**
   - Astro Islands for React components
   - Dynamic imports for heavy components
   - Only hydrate interactive elements

4. **Caching Strategy**
   - CDN-ready static assets
   - Immutable asset filenames
   - Long-term cache headers

5. **Bundle Size**
   - Tree-shaking enabled
   - Minimal JavaScript on initial load
   - CSS purging for unused styles

## Component Architecture

### Atomic Design Methodology
- **Atoms**: Button, Badge, Icon, Text
- **Molecules**: Card, LinkRow, SearchBar
- **Organisms**: Navigation, HeroSection, BentoGrid
- **Templates**: Page layouts
- **Pages**: Route-specific content

### React Component Pattern
```tsx
// Islands architecture - only hydrate what needs interactivity
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description?: string;
  href: string;
  icon?: React.ReactNode;
  count?: number;
}

export const Card: React.FC<CardProps> = ({ title, description, href, icon, count }) => {
  return (
    <motion.a
      href={href}
      className="glass-card group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Card content */}
    </motion.a>
  );
};
```

## Responsive Breakpoints
- Mobile: 0-640px (1 column bento)
- Tablet: 641-1024px (2 column bento)
- Desktop: 1025-1440px (3 column bento)
- Large: 1441px+ (4 column bento)

## SEO Strategy
- Semantic HTML5 structure
- Open Graph meta tags
- Twitter Card support
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt configuration
