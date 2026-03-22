import vaultEthereal from '../../assets/vault-collection-ethereal.png'
import vaultMinimal from '../../assets/vault-collection-minimal.png'

export function LibraryCollections() {
  return (
    <section>
      <div className="mb-8">
        <span className="mb-2 block font-body text-[10px] uppercase tracking-[0.2rem] text-primary-fixed-dim">
          Themes
        </span>
        <h2 className="font-headline text-3xl italic text-on-surface">Collections</h2>
      </div>
      <div className="flex flex-col gap-8">
        <article className="group relative aspect-[16/9] overflow-hidden rounded-3xl border border-outline-variant/10 bg-surface-container-high">
          <img
            src={vaultEthereal}
            alt=""
            className="h-full w-full object-cover opacity-60 mix-blend-luminosity transition-transform duration-1000 group-hover:scale-105 group-hover:mix-blend-normal"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/90 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <h3 className="font-headline mb-2 text-4xl text-primary">Ethereal Bloom</h3>
            <p className="mb-6 max-w-xs font-body text-sm text-on-surface-variant opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              Organic curves and floral motifs rendered in hyper-fine detail.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/5 bg-white/10 px-4 py-1.5 font-body text-[10px] uppercase tracking-widest backdrop-blur-md">
                12 Items
              </span>
              <span className="rounded-full border border-white/5 bg-white/10 px-4 py-1.5 font-body text-[10px] uppercase tracking-widest backdrop-blur-md">
                Curated
              </span>
            </div>
          </div>
        </article>
        <article className="group relative aspect-[16/9] overflow-hidden rounded-3xl border border-outline-variant/10 bg-surface-container-high">
          <img
            src={vaultMinimal}
            alt=""
            className="h-full w-full object-cover opacity-60 mix-blend-luminosity transition-transform duration-1000 group-hover:scale-105 group-hover:mix-blend-normal"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/90 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <h3 className="font-headline mb-2 text-4xl text-primary">Modern Minimal</h3>
            <p className="mb-6 max-w-xs font-body text-sm text-on-surface-variant opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              Architectural precision meets timeless elegance in every sharp angle.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/5 bg-white/10 px-4 py-1.5 font-body text-[10px] uppercase tracking-widest backdrop-blur-md">
                8 Items
              </span>
              <span className="rounded-full border border-white/5 bg-white/10 px-4 py-1.5 font-body text-[10px] uppercase tracking-widest backdrop-blur-md">
                Essential
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
