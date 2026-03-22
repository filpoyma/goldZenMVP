import { IconDiamond, IconSparkles } from '../icons/HeroIcons'

export function HeroHighlightGrid() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4">
      <article className="glass-panel group relative overflow-hidden rounded-[2rem] border border-outline-variant/10 p-6">
        <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/5 blur-2xl transition-colors group-hover:bg-primary/10" />
        <IconSparkles className="mb-3 h-8 w-8 text-primary" />
        <h3 className="font-headline mb-1 text-lg text-primary">Verified sellers</h3>
        <p className="text-xs font-light text-on-surface-variant">
          Browse boutiques and ateliers you can trust.
        </p>
      </article>
      <article className="glass-panel group relative overflow-hidden rounded-[2rem] border border-outline-variant/10 p-6">
        <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-surface-tint/5 blur-2xl transition-colors group-hover:bg-surface-tint/10" />
        <IconDiamond className="mb-3 h-8 w-8 text-primary" />
        <h3 className="font-headline mb-1 text-lg text-primary">Secure checkout</h3>
        <p className="text-xs font-light text-on-surface-variant">
          Clear terms and buyer protections you can rely on.
        </p>
      </article>
    </div>
  )
}
