import IconMic from '../icons/svg/IconMic.svg';
import IconSearch from '../icons/svg/IconSearch.svg';

const LibraryVaultSearch = () => (
  <section className="mb-12">
    <div className="group relative">
      <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
        <IconSearch className="h-5 w-5 text-outline" />
      </div>
      <label className="sr-only" htmlFor="vault-search">
        Search your collection or ask the AI
      </label>
      <input
        id="vault-search"
        name="vault-search"
        className="w-full rounded-full border-none bg-surface-container-lowest py-5 pl-12 pr-14 font-body font-light text-on-surface shadow-[0_0_15px_rgba(233,195,73,0.05)] outline outline-1 outline-outline-variant/20 transition-all placeholder:text-outline focus:shadow-[0_0_20px_rgba(233,195,73,0.15)] focus:ring-1 focus:ring-surface-tint"
        placeholder="Search your collection or ask the AI..."
        type="text"
        autoComplete="off"
      />
      <div className="absolute inset-y-0 right-4 flex items-center">
        <button
          type="button"
          className="cursor-pointer text-primary-fixed-dim"
          aria-label="Voice input">
          <IconMic className="h-5 w-5" />
        </button>
      </div>
    </div>
  </section>
);

export default LibraryVaultSearch;
