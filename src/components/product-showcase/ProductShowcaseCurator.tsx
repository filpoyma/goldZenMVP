import IconAutoFixHigh from '../icons/svg/IconAutoFixHigh.svg';

const ProductShowcaseCurator = () => (
  <section className="glass-card relative mb-20 mt-12 overflow-hidden rounded-[3rem] border border-outline-variant/10 p-8 text-center">
    <div className="absolute -right-10 -top-10 h-32 w-32 bg-primary/10 blur-[60px]" aria-hidden />
    <div className="relative z-10">
      <IconAutoFixHigh className="mx-auto mb-4 h-10 w-10 text-primary" />
      <h4 className="font-headline mb-2 text-xl font-bold">Curated for You</h4>
      <p className="mb-6 text-xs leading-relaxed text-on-surface-variant">
        Our AI has analyzed your taste in high-carat gold and minimalist curves. Based on
        &quot;Ethereal Bloom&quot;, we recommend exploring the Baroque Collection.
      </p>
      <button
        type="button"
        className="rounded-full border border-primary px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary/10 active:scale-95">
        Explore Recommendations
      </button>
    </div>
  </section>
);

export default ProductShowcaseCurator;
