import showcaseHero from '../../assets/showcase-hero.png'
import HeroIcons from '../icons/HeroIcons'

const { IconClose, IconDownload, IconPushPin, IconShare } = HeroIcons

const ProductShowcaseHero = () => (
  <section className="relative mb-12">
    <div className="group relative mb-6 aspect-square w-full overflow-hidden rounded-3xl bg-surface-container-low">
      <img
        src={showcaseHero}
        alt=""
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
      <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
        <div>
          <span className="mb-1 block text-[10px] uppercase tracking-widest text-primary-fixed">
            Recently Forged
          </span>
          <p className="font-headline text-lg font-bold">Ethereal Bloom Band</p>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-4">
      <button
        type="button"
        className="bg-gold-gradient flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold uppercase tracking-widest text-on-primary shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-transform active:scale-95"
      >
        <IconDownload className="h-5 w-5" />
        Download High-Res
      </button>
      <div className="flex items-center justify-center gap-8 py-2">
        <button
          type="button"
          className="flex flex-col items-center gap-1 text-on-surface-variant transition-colors hover:text-primary"
        >
          <IconShare className="h-7 w-7" />
          <span className="text-[9px] uppercase tracking-tighter">Instagram</span>
        </button>
        <button
          type="button"
          className="flex flex-col items-center gap-1 text-on-surface-variant transition-colors hover:text-primary"
        >
          <IconPushPin className="h-7 w-7" />
          <span className="text-[9px] uppercase tracking-tighter">Pinterest</span>
        </button>
        <button
          type="button"
          className="flex flex-col items-center gap-1 text-on-surface-variant transition-colors hover:text-primary"
        >
          <IconClose className="h-7 w-7" />
          <span className="text-[9px] uppercase tracking-tighter">X Social</span>
        </button>
      </div>
    </div>
  </section>
)

export default ProductShowcaseHero
