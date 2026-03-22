import { IconMenu, IconSparkles } from '../icons/HeroIcons'

export function LibraryVaultHeader() {
  return (
    <header className="fixed top-0 z-50 flex h-20 w-full items-center justify-between bg-[#131313] px-6">
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="cursor-pointer text-primary-container"
          aria-label="Open menu"
        >
          <IconMenu className="h-6 w-6" />
        </button>
      </div>
      <h1 className="font-headline text-xl font-bold uppercase italic tracking-widest text-primary-container">
        MY VAULT
      </h1>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="cursor-pointer text-primary-container"
          aria-label="AI assistant"
        >
          <IconSparkles className="h-6 w-6" />
        </button>
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-b from-surface-container-low to-transparent"
        aria-hidden
      />
    </header>
  )
}
