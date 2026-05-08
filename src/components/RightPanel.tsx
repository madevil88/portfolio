import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'

export function RightPanel() {
  return (
    <main className="px-6 pb-24 pt-24 md:w-1/2 md:px-0 md:pt-12">
      <About />
      <Experience />
      <Projects />
    </main>
  )
}
