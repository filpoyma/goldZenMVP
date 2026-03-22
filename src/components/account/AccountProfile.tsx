import accountProfile from '../../assets/account-profile.png'
import { IconWorkspacePremium } from '../icons/HeroIcons'

export function AccountProfile() {
  return (
    <section className="flex flex-col items-center gap-8">
      <div className="group relative">
        <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-primary-container bg-surface-container-low p-1 md:h-40 md:w-40">
          <img
            src={accountProfile}
            alt=""
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="bg-gold-gradient absolute -bottom-2 -right-2 rounded-full p-2 text-on-primary shadow-lg">
          <IconWorkspacePremium className="h-4 w-4" />
        </div>
      </div>
      <div className="flex-1 text-center">
        <div className="mb-2 flex flex-col items-center justify-center gap-2">
          <h2 className="font-headline text-4xl font-bold italic tracking-tight md:text-5xl">
            Andrey Ra
          </h2>
          <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-body text-xs uppercase tracking-[0.2rem] text-primary">
            Elite Collector
          </span>
        </div>
        <p className="mb-6 text-lg font-light text-on-surface-variant">
          Mastering the art of digital alchemy since 2022.
        </p>
      </div>
    </section>
  )
}
