import type { TPrimaryTab } from '../../types/navigation'
import IconHub from '../icons/svg/IconHub.svg'
import IconPerson from '../icons/svg/IconPerson.svg'
import IconSparkles from '../icons/svg/IconSparkles.svg'
import IconStories from '../icons/svg/IconStories.svg'

type TGoldZenBottomNavProps = {
  activeTab: TPrimaryTab
  onTabChange: (tab: TPrimaryTab) => void
}

const navItems: {
  id: TPrimaryTab
  label: string
  icon: typeof IconSparkles
}[] = [
  { id: 'generate', label: 'Generate', icon: IconSparkles },
  { id: 'library', label: 'Library', icon: IconStories },
  { id: 'social', label: 'Social', icon: IconHub },
  { id: 'account', label: 'Account', icon: IconPerson },
]

const GoldZenBottomNav = ({ activeTab, onTabChange }: TGoldZenBottomNavProps) => (
  <nav
    className="fixed bottom-0 z-50 flex w-full items-center justify-around rounded-t-[2rem] bg-[#201f1f]/60 px-8 pb-8 pt-4 shadow-[0_-8px_32px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
    aria-label="Primary"
  >
    {navItems.map(({ id, label, icon: Icon }) => {
      const isActive = activeTab === id
      return (
        <button
          key={id}
          type="button"
          onClick={() => onTabChange(id)}
          aria-current={isActive ? 'page' : undefined}
          className={
            isActive
              ? 'flex flex-col items-center justify-center rounded-full text-primary drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all scale-110'
              : 'flex flex-col items-center justify-center rounded-full text-primary-container/50 transition-all hover:text-primary'
          }
        >
          <Icon className="mb-1 h-7 w-7" />
          <span className="font-body text-[10px] font-bold uppercase tracking-widest">
            {label}
          </span>
        </button>
      )
    })}
  </nav>
)

export default GoldZenBottomNav
