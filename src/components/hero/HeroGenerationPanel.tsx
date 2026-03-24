import heroSketchThumb from '../../assets/hero-sketch-thumb.png';
import useVoiceTranscription from '../../hooks/useVoiceTranscription';
import IconAddCircle from '../icons/svg/IconAddCircle.svg';
import IconMic from '../icons/svg/IconMic.svg';

const HeroGenerationPanel = () => {
  const {
    promptValue,
    setPromptValue,
    isRecording,
    isTranscribing,
    errorMessage,
    handlePointerDown,
    handlePointerEnd,
  } = useVoiceTranscription();

  return (
    <div className="relative max-w-content">
      <div className="glass-panel rounded-[2rem] border border-outline-variant/20 p-4 shadow-2xl">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="group relative">
              <button
                type="button"
                className={`ai-pulse flex h-12 w-12 items-center justify-center rounded-full border text-primary ${
                  isRecording ? 'border-error bg-error-container/20' : 'border-primary/30'
                } ${isTranscribing ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
                aria-label={isRecording ? 'Recording voice input' : 'Voice input'}
                aria-busy={isTranscribing}
                disabled={isTranscribing}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerEnd}
                onPointerCancel={handlePointerEnd}
                onPointerLeave={handlePointerEnd}>
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
                value={promptValue}
                onChange={event => setPromptValue(event.target.value)}
              />
            </div>
          </div>
          {errorMessage ? (
            <p className="px-2 text-xs text-error" role="alert">
              {errorMessage}
            </p>
          ) : null}
          {isTranscribing ? (
            <p className="px-2 text-xs text-on-surface-variant">Расшифровываем запись...</p>
          ) : null}
          <div className="flex items-center gap-4 border-t border-outline-variant/10 px-2 pt-4">
            <div className="flex min-w-0 flex-1 items-center gap-4">
              <button
                type="button"
                className="flex min-w-0 items-center gap-2 rounded-full text-xs font-bold uppercase tracking-widest text-primary/70 transition-colors hover:text-primary">
                <IconAddCircle className="h-6 w-6 shrink-0" />
                <span className="truncate">Upload Sketch</span>
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
              className="bg-gold-gradient min-w-0 shrink rounded-full px-6 py-3 text-xs font-bold uppercase tracking-widest text-on-primary shadow-lg shadow-primary-container/20 transition-transform active:scale-95 sm:px-8">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGenerationPanel;
