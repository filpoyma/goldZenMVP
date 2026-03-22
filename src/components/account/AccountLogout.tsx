import { IconLogout } from '../icons/HeroIcons'

export function AccountLogout() {
  return (
    <section className="pt-8">
      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-full border border-error/30 py-5 font-body text-xs font-bold uppercase tracking-[0.2rem] text-error transition-colors hover:bg-error/5"
      >
        <IconLogout className="h-4 w-4" />
        Log Out
      </button>
      <p className="mt-8 text-center font-body text-[10px] uppercase tracking-widest text-on-surface-variant/40">
        Version 4.2.0-Alpha • The Digital Atelier
      </p>
    </section>
  )
}
