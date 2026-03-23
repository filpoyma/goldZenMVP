import heroSketchThumb from '../../assets/hero-sketch-thumb.png';
import IconAddCircle from '../icons/svg/IconAddCircle.svg';
import IconMic from '../icons/svg/IconMic.svg';

const HeroGenerationPanel = () => (
  <div className="relative max-w-content">
    <div className="glass-panel rounded-[2rem] border border-outline-variant/20 p-4 shadow-2xl">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="group relative">
            <button
              type="button"
              className="ai-pulse flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-primary/30 text-primary"
              aria-label="Voice input">
              <IconMic className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1">
            <label className="sr-only" htmlFor="hero-search">
              Jewelry prompt
            </label>
            <input
              id="hero-search"
              name="prompt"
              className="w-full rounded-full border-none bg-surface-container-lowest py-3 pl-6 pr-6 text-on-surface outline-none transition-all placeholder:text-on-surface-variant/40 focus:ring-1 focus:ring-surface-tint/50"
              placeholder="Imagine a rose gold tiara..."
              type="text"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-outline-variant/10 px-2 pt-4">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full text-xs font-bold uppercase tracking-widest text-primary/70 transition-colors hover:text-primary">
              <IconAddCircle className="h-6 w-6 shrink-0" />
              Upload Sketch
            </button>
            <div className="h-10 w-10 overflow-hidden rounded-full border border-outline-variant/20 bg-surface-container">
              <img
                src={heroSketchThumb}
                width={40}
                height={40}
                className="h-full w-full object-cover opacity-50"
                alt=""
              />
            </div>
          </div>
          <button
            type="button"
            className="bg-gold-gradient rounded-full px-8 py-3 text-xs font-bold uppercase tracking-widest text-on-primary shadow-lg shadow-primary-container/20 transition-transform active:scale-95">
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default HeroGenerationPanel;
