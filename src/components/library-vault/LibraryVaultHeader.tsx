import IconMenu from '../icons/svg/IconMenu.svg';
import IconSparkles from '../icons/svg/IconSparkles.svg';

const LibraryVaultHeader = () => (
  <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-transparent px-6 py-4 backdrop-blur-xl">
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="scale-95 cursor-pointer text-primary-container transition-opacity hover:opacity-80 active:duration-150"
        aria-label="Open menu">
        <IconMenu className="h-6 w-6" />
      </button>
    </div>
    <p className="font-headline text-2xl font-bold uppercase tracking-[0.2em] text-primary-container">
      MY VAULT
    </p>
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="scale-95 cursor-pointer text-primary-container transition-opacity hover:opacity-80 active:duration-150"
        aria-label="AI assistant">
        <IconSparkles className="h-6 w-6" />
      </button>
    </div>
  </header>
);

export default LibraryVaultHeader;
