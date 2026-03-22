import IconDiamond from '../icons/svg/IconDiamond.svg'
import IconSparkles from '../icons/svg/IconSparkles.svg'

const HeroHighlightGrid = () => (
  <div className="mt-12 grid grid-cols-2 gap-4">
    <article className="glass-panel group relative overflow-hidden rounded-[2rem] border border-outline-variant/10 p-6">
      <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/5 blur-2xl transition-colors group-hover:bg-primary/10" />
      <IconSparkles className="mb-3 h-8 w-8 text-primary" />
      <h3 className="font-headline mb-1 text-lg text-primary">Ethereal Bands</h3>
      <p className="text-xs font-light text-on-surface-variant">
        Inspired by cosmic orbits and fluid motion.
      </p>
    </article>
    <article className="glass-panel group relative overflow-hidden rounded-[2rem] border border-outline-variant/10 p-6">
      <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-surface-tint/5 blur-2xl transition-colors group-hover:bg-surface-tint/10" />
      <IconDiamond className="mb-3 h-8 w-8 text-primary" />
      <h3 className="font-headline mb-1 text-lg text-primary">Raw Precision</h3>
      <p className="text-xs font-light text-on-surface-variant">
        Uncut gems set in architectural gold frames.
      </p>
    </article>
  </div>
)

export default HeroHighlightGrid
