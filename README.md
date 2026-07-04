<p align="center">
  <img src="/public/images/logo.png" alt="Voya Travel" width="72" />
</p>

<h1 align="center">Voya Travel</h1>
<p align="center">
  <em>Curated destinations, handpicked hotels, and extraordinary tours — crafted for the modern explorer.</em>
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-15.5.20-000000?style=flat-square&logo=next.js" alt="Next.js 15.5.20" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react" alt="React 19" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript" alt="TypeScript 5" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss" alt="Tailwind CSS 4" /></a>
  <br/>
  <img src="https://img.shields.io/badge/status-active-success?style=flat-square" alt="Status: Active" />
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License: MIT" />
</p>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Author](#author)

---

## About

Voya Travel is a premium travel discovery landing page built for modern explorers who value curation over endless scrolling. Instead of overwhelming users with thousands of listings, Voya presents a handpicked selection of destinations, hotels, tours, and travel stories — all wrapped in a warm, editorial design system.

The project serves as both a brand showcase and a functional booking entry point, featuring interactive filtering, responsive layouts, scroll-driven animations, and a cohesive visual identity built from custom design tokens.

**Why Voya exists:** Most travel platforms prioritize inventory volume over user experience. Voya flips that — fewer choices, more intention, better design.

**Who it's for:** Boutique travel agencies, hospitality brands, and personal travel portfolio sites that want a premium, conversion-focused web presence.

---

## Features

- **Video hero** — Full-viewport background video with gradient overlay, animated content entry, and scroll prompt
- **Region filtering** — Filter destination cards by continent (Europe, Asia, Americas, Oceania) with animated grid transitions
- **Hotel showcase** — 4-column card grid with wishlist toggle, ratings, location info, and pricing
- **Tour listings** — Horizontal tour cards with type tags, star ratings, duration, and quick-book CTA
- **Review carousel** — Animated review cards with pagination dots and slide-in transitions
- **News section** — Two-column layout featuring a featured article hero and stacked sidebar cards
- **Newsletter signup** — Inline email capture with success state and privacy notice
- **Responsive navigation** — Fixed top navbar with scroll-aware background, active section tracking, and mobile slide-in drawer
- **Scroll animations** — AOS (Animate on Scroll) with staggered card entries and fade/slide effects
- **Custom design system** — CSS custom properties for colors, typography, spacing, radii, shadows, and transitions
- **Dark accents** — Warm beige palette with deep teal primary, brick-red accent, and brass highlights
- **Accessibility** — Semantic HTML, ARIA labels, focus management, and WCAG-compliant contrast ratios

---

## Tech Stack

<p>
  <img src="https://img.shields.io/badge/Next.js-15.5.20-000000?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/AOS-3.0-FF6B6B?style=for-the-badge" />
  <img src="https://img.shields.io/badge/next/font-Fraunces+Space_Grotesk-8B5CF6?style=for-the-badge" />
  <img src="https://img.shields.io/badge/react_icons-5.5-E91E63?style=for-the-badge" />
</p>

| Tool | Purpose |
|---|---|
| **Next.js 15** (App Router) | React framework with Turbopack dev server |
| **React 19** | UI component library |
| **TypeScript 5** | Type safety and developer experience |
| **Tailwind CSS 4** | Utility-first CSS with `@import "tailwindcss"` |
| **AOS 3.0** | Scroll-triggered fade/slide animations |
| **Fraunces** (Google Fonts) | Serif display typeface for headings |
| **Space Grotesk** (Google Fonts) | Sans-serif body typeface |
| **react-icons** (Tabler Icons) | Icon library for UI elements |

---

## Screenshots
<img width="1920" height="964" alt="Voya-Travel-—-Discover-the-World-Your-Way" src="https://github.com/user-attachments/assets/e9dbb8dd-d5a1-4a44-8077-bf82bf28e1d5" />

---

## Getting Started

### Prerequisites

- **Node.js** >= 18.17 (LTS recommended)
- **npm** >= 9 or **pnpm** / **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/voya-travel.git
cd voya-travel

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`.

### Environment Variables

No environment variables are required for local development. The project is fully self-contained. If you add a backend or API integration in the future, create a `.env.local` file in the project root:

```env
# Optional — API endpoints, analytics, etc.
# NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## Usage

```bash
# Development
npm run dev          # Starts Turbopack dev server on :3000

# Production build
npm run build        # Creates optimized production build
npm run start        # Serves production build on :3000

# Linting
npm run lint         # Runs ESLint with Next.js config
```

### Customisation

- **Brand name & tagline** — Edit `constant/constant.ts`
- **Content data** — Edit `data/data.ts` (destinations, hotels, tours, reviews, news)
- **Colors & tokens** — Edit CSS variables in `app/globals.css` under `:root`
- **Fonts** — Update font imports in `app/layout.tsx`
- **Navigation links** — Edit `navLinks` array in `constant/constant.ts`

---

## Project Structure

```
voya-travel/
├── app/
│   ├── globals.css        # Design tokens, utility classes, Tailwind import
│   ├── layout.tsx         # Root layout: fonts, nav, footer, scroll-to-top
│   └── page.tsx           # Entry page → renders Home component
│
├── components/
│   ├── Helper/
│   │   └── ScrolToTop.tsx # Scroll-to-top floating button
│   └── Home/
│       ├── Home.tsx       # Section orchestrator (AOS init + 8 sections)
│       ├── Navbar/        # Nav.tsx + MobileNav.tsx + ResponsiveNav.tsx
│       ├── Hero/          # Video hero, search form, stats, scroll button
│       ├── WhyChoose/     # Brand pitch, trust badge, benefit cards
│       ├── Destination/   # Region filter pills, card grid
│       ├── Hotel/         # Hotel card grid, wishlist
│       ├── Tours/         # Tour cards, book buttons
│       ├── Reviews/       # Review carousel, pagination
│       ├── News/          # Featured article + sidebar list
│       ├── Newsletter/    # Email form, success state
│       └── Footer/        # Brand info, link groups, social, legal
│
├── constant/
│   └── constant.ts        # Nav links, brand name, tagline
│
├── data/
│   └── data.ts            # All static content (destinations, hotels, etc.)
│
├── public/
│   └── images/            # Static assets (images, video)
│
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── next.config.ts
```

---

## Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

The project is fully compatible with Vercel's zero-config deployment. The `next build` command produces a static-ready output that works with Vercel's edge network.

### Manual / Static Export

```bash
npm run build
# Output in .next/ — deploy with any Node hosting (Railway, Fly.io, etc.)
```

---

## Author

**Voya Travel** — [@voyatravel](https://github.com/your-username)

Project Link: [https://github.com/your-username/voya-travel](https://github.com/your-username/voya-travel)

---

<p align="center">
  <sub>Built with Next.js, Tailwind CSS, and a deep appreciation for good typography.</sub>
  <br/>
  <sub>&copy; 2026 Voya Travel. All rights reserved.</sub>
</p>
