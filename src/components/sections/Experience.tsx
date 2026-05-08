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
