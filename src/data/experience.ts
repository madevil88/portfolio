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
