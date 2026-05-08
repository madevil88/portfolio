# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a personal developer portfolio for Sergey Chernenko, visually identical to brittanychiang.com, deployed on Vercel.

**Architecture:** Next.js 14 App Router with TypeScript. A single Client Component (`page.tsx`) uses two hooks (`useSpotlight`, `useActiveSection`) and renders a fixed left panel and a scrollable right panel. All content lives in typed data files under `src/data/`. All UI components are Server Components receiving data as props.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS 3, Inter (Google Fonts)

---

## File Map

**Create:**
- `src/app/layout.tsx` — root layout with metadata and Inter font
- `src/app/page.tsx` — main page (Client Component, hooks, two-panel layout)
- `src/app/globals.css` — base styles, scrollbar, Tailwind imports
- `src/data/experience.ts` — typed work experience data
- `src/data/projects.ts` — typed projects data with links
- `src/data/skills.ts` — grouped skill tag data
- `src/hooks/useSpotlight.ts` — mouse-following radial gradient via CSS variables
- `src/hooks/useActiveSection.ts` — IntersectionObserver-based active nav section
- `src/components/ui/SectionHeading.tsx` — mobile-only section title
- `src/components/ui/SkillTag.tsx` — green pill tag
- `src/components/ui/NavLink.tsx` — nav item with animated line indicator
- `src/components/ui/ExperienceCard.tsx` — experience item card with hover effect
- `src/components/ui/ProjectCard.tsx` — project card with links and hover effect
- `src/components/sections/About.tsx` — about section (summary + skill groups)
- `src/components/sections/Experience.tsx` — experience section
- `src/components/sections/Projects.tsx` — projects section
- `src/components/LeftPanel.tsx` — fixed left panel (name, nav, social icons)
- `src/components/RightPanel.tsx` — scrollable right panel wrapper

**Modify:**
- `tailwind.config.ts` — add custom color palette
- `src/app/globals.css` — replace default styles with scrollbar + base

---

## Task 1: Scaffold Next.js 14 project

**Files:**
- Creates: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`

- [ ] **Step 1: Run create-next-app**

```bash
cd /Users/serhiichernenko/Documents/work/portfolio
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git
```

When prompted "Ok to proceed?" type `y`. Accept all other defaults.

- [ ] **Step 2: Verify dev server starts**

```bash
npm run dev
```

Open http://localhost:3000 — default Next.js welcome page should appear. Stop server (Ctrl+C).

- [ ] **Step 3: Replace tailwind.config.ts**

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        'navy-light': '#112240',
        'navy-lightest': '#233554',
        slate: '#8892b0',
        'slate-light': '#a8b2d8',
        'slate-lightest': '#ccd6f6',
        green: '#64ffda',
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 4: Replace src/app/globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0a192f;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0a192f;
}

::-webkit-scrollbar-thumb {
  background: #233554;
  border-radius: 4px;
}
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js 14 project with Tailwind and custom palette"
```

---

## Task 2: Data layer

**Files:**
- Create: `src/data/experience.ts`
- Create: `src/data/projects.ts`
- Create: `src/data/skills.ts`

- [ ] **Step 1: Create src/data/experience.ts**

```ts
export interface ExperienceItem {
  period: string
  role: string
  company: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    period: 'Feb 2022 — Apr 2026',
    role: 'Software Engineer',
    company: 'LoopMe',
    bullets: [
      'Developed interactive HTML5 ad creatives using React.js, TypeScript, Pixi.js, and Matter.js',
      'Integrated new technologies into the workflow (n8n, Claude Code, Prisma ORM, Auth.js)',
      'Worked within a monorepo architecture managed by Rush, bundled via Webpack',
      'Wrote unit and e2e tests using Jest and Playwright',
      'Built backend logic using Node.js, PostgreSQL, and Prisma ORM',
      'Deployed and managed projects via Vercel and Docker',
    ],
  },
  {
    period: 'Nov 2019 — Jan 2022',
    role: 'Business Analyst',
    company: 'Vladyslav (Auto Parts Distribution)',
    bullets: [
      'Forecasted revenue streams and cash flow for multiple product lines',
      'Analysed investment efficiency and optimised warehouse inventory',
      'Automated supplier order calculations using Excel-based scripts',
    ],
  },
]
```

- [ ] **Step 2: Create src/data/projects.ts**

```ts
export interface Project {
  title: string
  description: string
  tech: string[]
  live: string
  github: string
}

export const projects: Project[] = [
  {
    title: 'Match-3 Game',
    description:
      'Browser-based puzzle game with tile matching mechanics, animations, scoring, and a countdown timer.',
    tech: ['TypeScript', 'Pixi.js', 'GSAP', 'Webpack'],
    live: 'https://match-3-game-alpha.vercel.app/',
    github: 'https://github.com/madevil88/Match-3_game',
  },
  {
    title: 'Ukrainian Cuisine',
    description:
      'A website dedicated to traditional Ukrainian cuisine — recipes, dish descriptions, and cultural context.',
    tech: ['Next.js', 'TypeScript', 'React.js', 'PostgreSQL', 'Prisma ORM', 'Auth.js', 'Tailwind CSS', 'HeroUI'],
    live: 'https://ukrainian-cuisine-21njy71dm-madevil88-2469s-projects.vercel.app/',
    github: 'https://github.com/madevil88/Ukrainian_cuisine',
  },
  {
    title: 'Pool Game',
    description:
      'Browser-based billiards simulation with realistic physics and interactive gameplay.',
    tech: ['TypeScript', 'Matter.js', 'Canvas API', 'Webpack'],
    live: 'https://pool-game-gu1imetci-madevil88-2469s-projects.vercel.app/',
    github: 'https://github.com/madevil88/pool-game',
  },
]
```

- [ ] **Step 3: Create src/data/skills.ts**

```ts
export interface SkillGroup {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    skills: [
      'React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)',
      'HTML5', 'CSS3', 'Sass/SCSS', 'Tailwind CSS', 'Redux', 'Zustand', 'REST API',
    ],
  },
  {
    label: 'Graphics & Animation',
    skills: ['Pixi.js', 'Matter.js', 'Canvas API'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'PostgreSQL', 'Prisma ORM', 'Docker'],
  },
  {
    label: 'Tooling',
    skills: ['Webpack', 'Jest', 'Playwright', 'Git', 'Figma'],
  },
]
```

- [ ] **Step 4: Commit**

```bash
git add src/data/
git commit -m "feat: add content data files (experience, projects, skills)"
```

---

## Task 3: Hooks

**Files:**
- Create: `src/hooks/useSpotlight.ts`
- Create: `src/hooks/useActiveSection.ts`

- [ ] **Step 1: Create src/hooks/useSpotlight.ts**

Sets `--spotlight-x` and `--spotlight-y` CSS variables on the container element as the mouse moves. The `page.tsx` wrapper div reads these variables in its `background` style.

```ts
import { useEffect, useRef } from 'react'

export function useSpotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--spotlight-x', `${e.clientX - rect.left}px`)
      el.style.setProperty('--spotlight-y', `${e.clientY - rect.top}px`)
    }

    el.addEventListener('mousemove', handleMouseMove)
    return () => el.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return ref
}
```

- [ ] **Step 2: Create src/hooks/useActiveSection.ts**

Observes each section element. When a section enters the viewport (with a -40%/-55% rootMargin to trigger near the middle of the screen), updates the active section id.

```ts
import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [sectionIds])

  return active
}
```

- [ ] **Step 3: Commit**

```bash
git add src/hooks/
git commit -m "feat: add useSpotlight and useActiveSection hooks"
```

---

## Task 4: UI atoms

**Files:**
- Create: `src/components/ui/SectionHeading.tsx`
- Create: `src/components/ui/SkillTag.tsx`
- Create: `src/components/ui/NavLink.tsx`

- [ ] **Step 1: Create src/components/ui/SectionHeading.tsx**

Visible only on mobile (`md:hidden`). On desktop the left panel nav serves as section labels.

```tsx
interface Props {
  children: React.ReactNode
}

export function SectionHeading({ children }: Props) {
  return (
    <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-lightest md:hidden">
      {children}
    </h2>
  )
}
```

- [ ] **Step 2: Create src/components/ui/SkillTag.tsx**

```tsx
interface Props {
  label: string
}

export function SkillTag({ label }: Props) {
  return (
    <span className="rounded-full border border-green/30 bg-green/10 px-3 py-1 text-xs font-medium text-green">
      {label}
    </span>
  )
}
```

- [ ] **Step 3: Create src/components/ui/NavLink.tsx**

The line indicator (`<span>`) grows from `w-8` to `w-16` on hover or when active.

```tsx
interface Props {
  id: string
  label: string
  active: boolean
}

export function NavLink({ id, label, active }: Props) {
  return (
    <a
      href={`#${id}`}
      className={`group flex items-center gap-4 py-3 transition-all duration-200 ${
        active ? 'text-slate-lightest' : 'text-slate hover:text-slate-lightest'
      }`}
    >
      <span
        className={`block h-px transition-all duration-200 ${
          active
            ? 'w-16 bg-slate-lightest'
            : 'w-8 bg-slate group-hover:w-16 group-hover:bg-slate-lightest'
        }`}
      />
      <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
    </a>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/SectionHeading.tsx src/components/ui/SkillTag.tsx src/components/ui/NavLink.tsx
git commit -m "feat: add UI atom components (SectionHeading, SkillTag, NavLink)"
```

---

## Task 5: Card components

**Files:**
- Create: `src/components/ui/ExperienceCard.tsx`
- Create: `src/components/ui/ProjectCard.tsx`

- [ ] **Step 1: Create src/components/ui/ExperienceCard.tsx**

```tsx
import type { ExperienceItem } from '@/data/experience'

interface Props {
  item: ExperienceItem
}

export function ExperienceCard({ item }: Props) {
  return (
    <div className="group grid cursor-default rounded-lg p-4 transition-all duration-200 hover:bg-navy-light hover:shadow-[0_0_0_1px_rgba(100,255,218,0.1)] sm:grid-cols-[120px_1fr] sm:gap-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate sm:mb-0 sm:mt-1">
        {item.period}
      </p>
      <div>
        <h3 className="font-medium leading-snug text-slate-lightest">
          {item.role}{' '}
          <span className="text-green">· {item.company}</span>
        </h3>
        <ul className="mt-3 space-y-2">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2 text-sm text-slate">
              <span className="mt-0.5 shrink-0 text-green">▹</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Create src/components/ui/ProjectCard.tsx**

```tsx
import type { Project } from '@/data/projects'
import { SkillTag } from './SkillTag'

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.216.69.825.572C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

interface Props {
  project: Project
}

export function ProjectCard({ project }: Props) {
  return (
    <div className="group rounded-lg p-4 transition-all duration-200 hover:bg-navy-light hover:shadow-[0_0_0_1px_rgba(100,255,218,0.1)]">
      <div className="mb-2 flex items-start justify-between gap-4">
        <h3 className="font-medium text-slate-lightest transition-colors group-hover:text-green">
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            {project.title}
            <span className="ml-1 inline-block translate-y-px text-xs">↗</span>
          </a>
        </h3>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-slate transition-colors hover:text-slate-lightest"
          aria-label={`${project.title} GitHub repository`}
        >
          <GitHubIcon />
        </a>
      </div>
      <p className="mb-3 text-sm text-slate">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <SkillTag key={tag} label={tag} />
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/ExperienceCard.tsx src/components/ui/ProjectCard.tsx
git commit -m "feat: add ExperienceCard and ProjectCard components"
```

---

## Task 6: Section components

**Files:**
- Create: `src/components/sections/About.tsx`
- Create: `src/components/sections/Experience.tsx`
- Create: `src/components/sections/Projects.tsx`

- [ ] **Step 1: Create src/components/sections/About.tsx**

```tsx
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SkillTag } from '@/components/ui/SkillTag'
import { skillGroups } from '@/data/skills'

export function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 md:scroll-mt-24">
      <SectionHeading>About</SectionHeading>
      <div className="space-y-4 text-slate">
        <p>
          Frontend Developer with 4+ years of commercial experience at{' '}
          <span className="font-medium text-slate-lightest">LoopMe</span>, an international
          AdTech company. Specialized in building interactive HTML5 ad creatives,
          component-driven interfaces, and integrating new technologies into the development
          workflow. Proficient in{' '}
          <span className="text-green">React / Next.js / TypeScript</span> stack.
        </p>
        <p>
          Currently expanding into Fullstack development — actively learning Go and NestJS,
          and building a microservices pet project with Redis, Docker, and VPS deployment.
        </p>
      </div>
      <div className="mt-8 space-y-4">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-light">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillTag key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create src/components/sections/Experience.tsx**

```tsx
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ExperienceCard } from '@/components/ui/ExperienceCard'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 md:scroll-mt-24">
      <SectionHeading>Experience</SectionHeading>
      <div className="space-y-2">
        {experience.map((item) => (
          <ExperienceCard key={item.company} item={item} />
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create src/components/sections/Projects.tsx**

```tsx
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 md:scroll-mt-24">
      <SectionHeading>Projects</SectionHeading>
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/
git commit -m "feat: add About, Experience, and Projects section components"
```

---

## Task 7: Panel components

**Files:**
- Create: `src/components/LeftPanel.tsx`
- Create: `src/components/RightPanel.tsx`

- [ ] **Step 1: Create src/components/LeftPanel.tsx**

```tsx
import { NavLink } from '@/components/ui/NavLink'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
]

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.216.69.825.572C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

interface Props {
  activeSection: string
}

export function LeftPanel({ activeSection }: Props) {
  return (
    <header className="flex flex-col justify-between px-6 py-12 md:sticky md:top-0 md:h-screen md:w-1/2 md:px-0 lg:max-w-md">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-lightest lg:text-5xl">
          Sergey Chernenko
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-lightest">
          Frontend Developer
        </h2>
        <p className="mt-1 text-sm text-slate">Middle</p>
        <p className="mt-4 max-w-xs text-sm text-slate">
          I build interactive, accessible, and performant web experiences.
        </p>
        <nav className="mt-12 hidden md:block" aria-label="In-page links">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              id={item.id}
              label={item.label}
              active={activeSection === item.id}
            />
          ))}
        </nav>
      </div>
      <ul className="mt-8 flex gap-5" aria-label="Social links">
        <li>
          <a
            href="https://github.com/madevil88"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate transition-colors hover:text-slate-lightest"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/schernenko88/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate transition-colors hover:text-slate-lightest"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </li>
      </ul>
    </header>
  )
}
```

- [ ] **Step 2: Create src/components/RightPanel.tsx**

```tsx
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'

export function RightPanel() {
  return (
    <main className="px-6 pb-24 pt-24 md:w-1/2 md:px-0 md:pt-12">
      <About />
      <Experience />
      <Projects />
    </main>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/LeftPanel.tsx src/components/RightPanel.tsx
git commit -m "feat: add LeftPanel and RightPanel components"
```

---

## Task 8: Main page and layout

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace src/app/layout.tsx**

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sergey Chernenko — Frontend Developer',
  description:
    'Frontend Developer with 4+ years of experience. Specialized in React, Next.js, TypeScript, Pixi.js.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-navy`}>{children}</body>
    </html>
  )
}
```

- [ ] **Step 2: Replace src/app/page.tsx**

```tsx
'use client'

import { LeftPanel } from '@/components/LeftPanel'
import { RightPanel } from '@/components/RightPanel'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useSpotlight } from '@/hooks/useSpotlight'

const SECTION_IDS = ['about', 'experience', 'projects']

export default function Home() {
  const activeSection = useActiveSection(SECTION_IDS)
  const spotlightRef = useSpotlight()

  return (
    <div
      ref={spotlightRef}
      className="relative mx-auto min-h-screen max-w-screen-xl font-sans"
      style={{
        background:
          'radial-gradient(600px at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(29, 78, 216, 0.15), transparent 80%)',
      }}
    >
      <div className="md:flex md:gap-4 md:px-12 lg:px-24">
        <LeftPanel activeSection={activeSection} />
        <RightPanel />
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Run dev server and verify the complete site**

```bash
npm run dev
```

Open http://localhost:3000 and verify:
- Dark navy background with spotlight gradient following mouse
- Left panel: name "Sergey Chernenko", title, nav links with animated line, GitHub + LinkedIn icons
- Right panel scrolls through: About (summary text + 4 skill groups), Experience (2 cards), Projects (3 cards)
- Nav links highlight as you scroll through sections
- Resize browser to < 768px: single column, section headings visible, no nav in left panel

Stop server (Ctrl+C).

- [ ] **Step 4: Run build to verify no TypeScript errors**

```bash
npm run build
```

Expected output ends with `✓ Compiled successfully`. Fix any TypeScript errors before continuing.

- [ ] **Step 5: Commit**

```bash
git add src/app/layout.tsx src/app/page.tsx
git commit -m "feat: wire up main page with spotlight and active section hooks"
```

---

## Task 9: Deploy to Vercel

- [ ] **Step 1: Create GitHub repository and push**

Go to https://github.com/new and create a **public** repository named `portfolio` under the `madevil88` account. Do **not** initialize with README, .gitignore, or license.

```bash
cd /Users/serhiichernenko/Documents/work/portfolio
git remote add origin https://github.com/madevil88/portfolio.git
git push -u origin main
```

- [ ] **Step 2: Import to Vercel**

1. Go to https://vercel.com/new
2. Click **Import** next to the `portfolio` repository
3. Framework preset: **Next.js** (auto-detected)
4. Leave all settings as defaults — no env vars needed
5. Click **Deploy**

Wait ~1–2 minutes for the build to complete.

- [ ] **Step 3: Verify live deployment**

Open the Vercel URL (shown after deploy, e.g. `portfolio-madevil88.vercel.app`). Verify:
- Site loads with correct dark navy theme
- All three sections visible and correctly populated
- Spotlight effect works
- Project links open correct Vercel demos
- GitHub and LinkedIn icons link correctly
