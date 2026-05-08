interface Props {
  label: string
}

export function SkillTag({ label }: Props) {
  return (
    <span className="rounded-full border border-green/30 bg-green/10 px-3 py-1 text-xs font-medium text-green">
      {label}
    </span>
  )
}
