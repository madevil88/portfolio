import { NavLink } from '@/components/ui/NavLink'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
]

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.216.69.825.572C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

interface Props {
  activeSection: string
}

export function LeftPanel({ activeSection }: Props) {
  return (
    <header className="flex flex-col justify-between px-6 py-12 md:sticky md:top-0 md:h-screen md:w-1/2 md:px-0 lg:max-w-md">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-lightest lg:text-5xl">
          Sergey Chernenko
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-lightest">
          Frontend Developer
        </h2>
        <p className="mt-1 text-sm text-slate">Middle</p>
        <p className="mt-4 max-w-xs text-sm text-slate">
          I build interactive, accessible, and performant web experiences.
        </p>
        <nav className="mt-12 hidden md:block" aria-label="In-page links">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              id={item.id}
              label={item.label}
              active={activeSection === item.id}
            />
          ))}
        </nav>
      </div>
      <ul className="mt-8 flex gap-5" aria-label="Social links">
        <li>
          <a
            href="https://github.com/madevil88"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate transition-colors hover:text-slate-lightest"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/schernenko88/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate transition-colors hover:text-slate-lightest"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </li>
      </ul>
    </header>
  )
}
