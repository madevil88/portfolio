interface Props {
  id: string
  label: string
  active: boolean
}

export function NavLink({ id, label, active }: Props) {
  return (
    <a
      href={`#${id}`}
      className={`group flex items-center gap-4 py-3 transition-all duration-200 ${
        active ? 'text-slate-lightest' : 'text-slate hover:text-slate-lightest'
      }`}
    >
      <span
        className={`block h-px transition-all duration-200 ${
          active
            ? 'w-16 bg-slate-lightest'
            : 'w-8 bg-slate group-hover:w-16 group-hover:bg-slate-lightest'
        }`}
      />
      <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
    </a>
  )
}
