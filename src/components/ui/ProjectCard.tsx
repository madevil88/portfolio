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
