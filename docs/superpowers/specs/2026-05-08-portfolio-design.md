# Portfolio Website Design — Sergey Chernenko

**Date:** 2026-05-08  
**Stack:** Next.js 14 (App Router) + Tailwind CSS + TypeScript  
---

## Goal

A personal developer portfolio deployed on Vercel at a `.vercel.app` URL, visually identical to brittanychiang.com but with Sergey Chernenko's content.

---

## Visual Style

- Background: `#0a192f` (dark navy)
- Accent: `#64ffda` (mint green)
- Text primary: `#ccd6f6`
- Text secondary: `#8892b0`
- Font: Inter (Google Fonts)
- Spotlight cursor effect: radial gradient following mouse position
- Responsive: desktop two-column layout → mobile single-column

---

## Layout

### Left Panel (fixed on desktop, top on mobile)

```
Sergey Chernenko
Frontend Developer · Middle

[nav: About / Experience / Projects]

[GitHub icon] [LinkedIn icon]
```

- Nav links highlight the active section on scroll (IntersectionObserver)
- Icons link to: GitHub (https://github.com/madevil88), LinkedIn (https://www.linkedin.com/in/schernenko88/)

### Right Panel (scrollable)

Three sections rendered as React components:

1. **About**
2. **Experience**
3. **Projects**

---

## Sections

### About

Content from resume professional summary:

> Frontend Developer with 4+ years of commercial experience at LoopMe, an international AdTech company. Specialized in building interactive HTML5 ad creatives, component-driven interfaces, and integrating new technologies into the development workflow. Proficient in React / Next.js / TypeScript stack. Currently expanding into Fullstack development — actively learning Go and NestJS, and building a microservices pet project with Redis, Docker, and VPS deployment.

Skills rendered as tags (mint-green bordered pills):

- Frontend: React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Sass/SCSS, Tailwind CSS, Redux, Zustand, REST API
- Graphics: Pixi.js, Matter.js, Canvas API
- Backend: Node.js, PostgreSQL, Prisma ORM, Docker
- Tooling: Webpack, Jest, Playwright, Git, Figma

### Experience

Two cards with hover effect (card lifts, background lightens slightly):

**Card 1**
- Period: Feb 2022 — Apr 2026
- Role: Software Engineer
- Company: LoopMe
- Bullets:
  - Developed interactive HTML5 ad creatives using React.js, TypeScript, Pixi.js, and Matter.js
  - Integrated new technologies into the workflow (n8n, Claude Code, Prisma ORM, Auth.js)
  - Worked within a monorepo architecture managed by Rush, bundled via Webpack
  - Wrote unit and e2e tests using Jest and Playwright
  - Built backend logic using Node.js, PostgreSQL, and Prisma ORM
  - Deployed and managed projects via Vercel and Docker

**Card 2**
- Period: Nov 2019 — Jan 2022
- Role: Business Analyst
- Company: Vladyslav (Auto Parts Distribution)
- Bullets:
  - Forecasted revenue streams and cash flow for multiple product lines
  - Analysed investment efficiency and optimised warehouse inventory
  - Automated supplier order calculations using Excel-based scripts

### Projects

Three cards with hover effect. Each card shows: title, description, tech tags, links (GitHub + Live demo).

**Card 1 — Match-3 Game**
- Description: Browser-based puzzle game with tile matching mechanics, animations, scoring, and a countdown timer.
- Tech: TypeScript, Pixi.js, GSAP, Webpack
- Live: https://match-3-game-alpha.vercel.app/
- GitHub: https://github.com/madevil88/Match-3_game

**Card 2 — Ukrainian Cuisine**
- Description: A website dedicated to traditional Ukrainian cuisine — recipes, dish descriptions, and cultural context.
- Tech: Next.js, TypeScript, React.js, PostgreSQL, Prisma ORM, Auth.js, Tailwind CSS, HeroUI
- Live: https://ukrainian-cuisine-21njy71dm-madevil88-2469s-projects.vercel.app/
- GitHub: https://github.com/madevil88/Ukrainian_cuisine

**Card 3 — Pool Game**
- Description: Browser-based billiards simulation with realistic physics and interactive gameplay.
- Tech: TypeScript, Matter.js, Canvas API, Webpack
- Live: https://pool-game-gu1imetci-madevil88-2469s-projects.vercel.app/
- GitHub: https://github.com/madevil88/pool-game

---

## Component Structure

```
src/
  app/
    layout.tsx        — root layout, fonts, metadata
    page.tsx          — main page (Left + Right panels)
  components/
    LeftPanel.tsx     — name, title, nav, socials
    RightPanel.tsx    — wraps all sections
    sections/
      About.tsx
      Experience.tsx
      Projects.tsx
    ui/
      SectionHeading.tsx
      ExperienceCard.tsx
      ProjectCard.tsx
      SkillTag.tsx
      NavLink.tsx
  hooks/
    useActiveSection.ts   — IntersectionObserver for nav highlighting
    useSpotlight.ts       — mouse-following radial gradient
```

---

## Deployment

- New GitHub repository: `portfolio`
- Connected to Vercel → auto-deploy on push to `main`
- URL: `sergey-chernenko.vercel.app` (or similar)

---

## Out of Scope

- Contact form
- Blog section
- Dark/light mode toggle
- Animations beyond spotlight and card hover
