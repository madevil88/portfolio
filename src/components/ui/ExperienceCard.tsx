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
