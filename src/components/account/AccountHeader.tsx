import { IconAccount, IconMenu } from '../icons/HeroIcons'

export function AccountHeader() {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-transparent px-6 py-4 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="cursor-pointer text-primary-container"
          aria-label="Open menu"
        >
          <IconMenu className="h-6 w-6" />
        </button>
      </div>
      <p className="font-headline max-w-[14rem] text-center text-sm font-bold uppercase leading-tight tracking-tight text-primary-container sm:max-w-none sm:text-2xl">
        THE DIGITAL ATELIER
      </p>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="text-primary"
          aria-label="Account"
        >
          <IconAccount className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}
