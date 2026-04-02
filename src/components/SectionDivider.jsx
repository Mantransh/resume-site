/**
 * SectionDivider — subtle decorative separator between sections
 */
export default function SectionDivider() {
  return (
    <div className="section-container" aria-hidden="true">
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-surface-500/60 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-surface-500/60 to-transparent" />
      </div>
    </div>
  )
}
