import {
  IconHub,
  IconPerson,
  IconSparkles,
  IconStories,
} from '../icons/HeroIcons'

const navItems = [
  {
    id: 'discover',
    label: 'Discover',
    icon: IconSparkles,
    active: true,
  },
  {
    id: 'browse',
    label: 'Browse',
    icon: IconStories,
    active: false,
  },
  {
    id: 'connect',
    label: 'Connect',
    icon: IconHub,
    active: false,
  },
  {
    id: 'account',
    label: 'Account',
    icon: IconPerson,
    active: false,
  },
] as const

export function HeroBottomNav() {
  return (
    <nav
      className="fixed bottom-0 z-50 flex w-full items-center justify-around rounded-t-[2rem] bg-[#201f1f]/60 px-8 pb-8 pt-4 shadow-[0_-8px_32px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
      aria-label="Primary"
    >
      {navItems.map(({ id, label, icon: Icon, active }) => (
        <a
          key={id}
          href="#"
          className={
            active
              ? 'flex flex-col items-center justify-center rounded-full text-primary drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all scale-110'
              : 'flex flex-col items-center justify-center rounded-full text-primary-container/50 transition-all hover:text-primary'
          }
        >
          <Icon className="mb-1 h-7 w-7" />
          <span className="font-body text-[10px] font-bold uppercase tracking-widest">
            {label}
          </span>
        </a>
      ))}
    </nav>
  )
}
