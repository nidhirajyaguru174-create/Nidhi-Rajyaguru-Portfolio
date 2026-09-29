# Nidhi Rajyaguru — Personal Portfolio

A modern, responsive personal portfolio website for Nidhi Chandrakant Rajyaguru, a Computer Engineering student. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Overview

This portfolio showcases skills, projects, education, and contact information in a clean, minimal design with a warm ivory and deep plum color palette.

## Key Sections

- **Home** — Hero introduction with call-to-action buttons
- **About** — Personal bio and highlight cards
- **Skills** — Categorized technology and tool proficiencies
- **Projects** — Featured project showcase with tech stack tags
- **Education** — Academic background and timeline
- **Achievements & Certifications** — Certifications and accomplishments
- **Contact** — Contact information and message form
- **Footer** — Social links and copyright

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Fonts:** Geist Sans & Geist Mono (via next/font)
- **Package Manager:** npm

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
app/
  layout.tsx          — Root layout with metadata and fonts
  page.tsx            — Main page composing all sections
  globals.css         — Tailwind CSS with custom theme colors
components/
  Navbar.tsx          — Sticky navigation with mobile menu
  Hero.tsx            — Hero section with CTAs and social links
  About.tsx           — About section with bio and highlights
  Skills.tsx          — Skills grid with categorized tags
  Projects.tsx        — Project cards in responsive grid
  Education.tsx       — Education timeline
  Achievements.tsx    — Achievements & certifications section
  Contact.tsx         — Contact info and UI-only form
  Footer.tsx          — Footer with social links
  Section.tsx         — Reusable section wrapper component
  SocialIcons.tsx     — Custom GitHub and LinkedIn SVG icons
lib/
  data.ts             — All portfolio content (single source of truth)
public/
  favicon.ico         — Site favicon
```

## Customization

All personal information, projects, skills, and education details are managed in a single file:

```
lib/data.ts
```

Edit this file to update content across the entire site without modifying individual components.

## Future Improvements

- Connect contact form to a backend service (e.g., EmailJS, Formspree)
- Add individual project detail pages
- Add a blog section
- Implement dark mode toggle
- Add scroll-triggered animations
- Add a downloadable resume link
- Implement SEO optimization with dynamic meta tags
