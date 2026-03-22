import vaultFeatured from '../../assets/vault-featured-ring.png'
import vaultLunar from '../../assets/vault-lunar-band.png'
import vaultAurelian from '../../assets/vault-aurelian-drop.png'
import HeroIcons from '../icons/HeroIcons'

const { Icon3dRotation } = HeroIcons

const LibraryRecentCreations = () => (
  <section className="mb-16">
    <div className="mb-8 flex items-end justify-between">
      <div>
        <span className="mb-2 block font-body text-[10px] uppercase tracking-[0.2rem] text-primary-fixed-dim">
          Curation
        </span>
        <h2 className="font-headline text-3xl italic text-on-surface">Recent Creations</h2>
      </div>
      <button
        type="button"
        className="border-b border-primary/30 pb-1 font-body text-sm font-normal uppercase tracking-widest text-primary"
      >
        View All
      </button>
    </div>
    <div className="flex flex-col gap-6">
      <article className="group overflow-hidden rounded-3xl border border-outline-variant/10 bg-surface-container">
        <div className="relative aspect-[16/10]">
          <img
            src={vaultFeatured}
            alt=""
            className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <h3 className="font-headline mb-1 text-2xl text-on-surface">Celestial Arch #8821</h3>
            <p className="font-body text-xs uppercase tracking-wider text-outline">
              Created Oct 24, 2023
            </p>
          </div>
          <div className="absolute right-6 top-6 flex gap-2">
            <span className="rounded-full border border-white/5 bg-surface-container-lowest/80 p-2 backdrop-blur-md">
              <Icon3dRotation className="h-3.5 w-3.5 text-primary" />
            </span>
          </div>
        </div>
      </article>
      <article className="flex items-center gap-4 rounded-3xl border border-outline-variant/10 bg-surface-container-low p-4">
        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-surface-container-lowest">
          <img
            src={vaultLunar}
            alt=""
            className="h-full w-full object-cover opacity-70"
          />
        </div>
        <div>
          <h4 className="font-headline text-lg text-on-surface">Lunar Band #442</h4>
          <p className="mb-2 font-body text-[10px] uppercase tracking-widest text-outline">
            Created Oct 20, 2023
          </p>
          <span className="rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-bold uppercase tracking-tighter text-primary-fixed-dim">
            V.2 Draft
          </span>
        </div>
      </article>
      <article className="flex items-center gap-4 rounded-3xl border border-outline-variant/10 bg-surface-container-low p-4">
        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-surface-container-lowest">
          <img
            src={vaultAurelian}
            alt=""
            className="h-full w-full object-cover opacity-70"
          />
        </div>
        <div>
          <h4 className="font-headline text-lg text-on-surface">Aurelian Drop #12</h4>
          <p className="mb-2 font-body text-[10px] uppercase tracking-widest text-outline">
            Created Oct 15, 2023
          </p>
          <span className="rounded-full bg-surface-container-highest px-3 py-1 font-body text-xs font-bold uppercase tracking-tighter text-on-secondary-container">
            Rendered
          </span>
        </div>
      </article>
    </div>
  </section>
)

export default LibraryRecentCreations
