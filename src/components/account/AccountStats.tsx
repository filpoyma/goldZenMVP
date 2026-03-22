const AccountStats = () => (
  <section className="grid grid-cols-1 gap-4">
    <div className="ai-glow-card flex flex-col justify-between rounded-xl bg-surface-container-low p-8">
      <span className="mb-4 font-body text-[10px] uppercase tracking-widest text-on-surface-variant">
        Total Creations
      </span>
      <div>
        <span className="font-headline text-5xl font-bold text-primary">42</span>
        <p className="mt-2 text-sm text-on-surface-variant">Bespoke Pieces</p>
      </div>
    </div>
    <div className="bg-gold-gradient relative flex flex-col justify-between overflow-hidden rounded-xl p-8 text-on-primary">
      <div className="relative z-10">
        <span className="mb-4 block font-body text-[10px] uppercase tracking-widest opacity-80">
          Available Credits
        </span>
        <div className="flex items-baseline gap-3">
          <span className="font-headline text-5xl font-bold">1,240</span>
          <span className="font-body text-sm font-bold uppercase">Aurum Credits</span>
        </div>
      </div>
      <div className="relative z-10 mt-6">
        <button
          type="button"
          className="rounded-full bg-on-primary px-8 py-3 font-body text-xs font-bold uppercase tracking-widest text-primary transition-transform hover:scale-105">
          Top Up Credits
        </button>
      </div>
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />
    </div>
  </section>
);

export default AccountStats;
