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
