'use client'

import { LeftPanel } from '@/components/LeftPanel'
import { RightPanel } from '@/components/RightPanel'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useSpotlight } from '@/hooks/useSpotlight'

const SECTION_IDS = ['about', 'experience', 'projects']

export default function Home() {
  const activeSection = useActiveSection(SECTION_IDS)
  const spotlightRef = useSpotlight()

  return (
    <div
      ref={spotlightRef}
      className="relative mx-auto min-h-screen max-w-screen-xl font-sans"
      style={{
        background:
          'radial-gradient(600px at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(29, 78, 216, 0.15), transparent 80%)',
      }}
    >
      <div className="md:flex md:gap-4 md:px-12 lg:px-24">
        <LeftPanel activeSection={activeSection} />
        <RightPanel />
      </div>
    </div>
  )
}
