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
