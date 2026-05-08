import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function SectionHeading({ children }: Props) {
  return (
    <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-lightest md:hidden">
      {children}
    </h2>
  )
}
