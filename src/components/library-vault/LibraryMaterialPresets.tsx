const swatches = [
  {
    id: 'yellow-gold',
    label: 'Yellow Gold',
    gradient: 'from-[#F2CA50] via-[#D4AF37] to-[#8C711D]',
    shadow: 'shadow-[0_4px_20px_rgba(212,175,55,0.4)]',
  },
  {
    id: 'rose-gold',
    label: 'Rose Gold',
    gradient: 'from-[#E9C2B2] via-[#D19681] to-[#9E6652]',
    shadow: 'shadow-[0_4px_20px_rgba(209,150,129,0.2)]',
  },
  {
    id: 'white-gold',
    label: 'White Gold',
    gradient: 'from-[#F0F0F0] via-[#C8C6C5] to-[#7A7A7A]',
    shadow: 'shadow-[0_4px_20px_rgba(200,198,197,0.2)]',
  },
  {
    id: 'platinum',
    label: 'Platinum',
    gradient: 'from-[#D9D9D9] via-[#8E8E8E] to-[#4A4A4A]',
    shadow: 'shadow-[0_4px_20px_rgba(0,0,0,0.3)]',
  },
] as const

export function LibraryMaterialPresets() {
  return (
    <section className="mb-16">
      <div className="mb-8">
        <span className="mb-2 block font-body text-[10px] uppercase tracking-[0.2rem] text-primary-fixed-dim">
          Finishes
        </span>
        <h2 className="font-headline text-3xl italic text-on-surface">Material Presets</h2>
      </div>
      <div className="flex flex-wrap gap-8">
        {swatches.map(({ id, label, gradient, shadow }) => (
          <button
            key={id}
            type="button"
            className="group flex cursor-pointer flex-col items-center gap-4"
          >
            <div
              className={`h-20 w-20 rounded-full bg-gradient-to-br p-1 ring-2 ring-transparent transition-all group-hover:ring-primary/50 ${gradient} ${shadow}`}
            >
              <div className="h-full w-full rounded-full border border-white/20" />
            </div>
            <span className="font-body text-xs font-bold uppercase tracking-widest text-on-surface-variant transition-colors group-hover:text-primary">
              {label}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
