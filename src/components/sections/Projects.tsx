import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { clientProjects, personalProjects } from '@/data/projects'

export function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 md:scroll-mt-24">
      <SectionHeading>Projects</SectionHeading>
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-light">
        Client work
      </p>
      <div className="space-y-4">
        {clientProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <p className="mb-2 mt-8 text-xs font-bold uppercase tracking-widest text-slate-light">
        Personal projects
      </p>
      <div className="space-y-4">
        {personalProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
