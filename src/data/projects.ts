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
