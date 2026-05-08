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
