import { useEffect, useRef } from 'react'

export function useSpotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--spotlight-x', `${e.clientX - rect.left}px`)
      el.style.setProperty('--spotlight-y', `${e.clientY - rect.top}px`)
    }

    el.addEventListener('mousemove', handleMouseMove)
    return () => el.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return ref
}
