import type { ReactNode } from 'react'
import IconBell from '../icons/svg/IconBell.svg'
import IconChevronRight from '../icons/svg/IconChevronRight.svg'
import IconContactSupport from '../icons/svg/IconContactSupport.svg'
import IconManageAccounts from '../icons/svg/IconManageAccounts.svg'
import IconShield from '../icons/svg/IconShield.svg'

type TSettingsRow = {
  id: string
  label: string
  icon: ReactNode
}

const rows: TSettingsRow[] = [
  {
    id: 'account',
    label: 'Account Settings',
    icon: <IconManageAccounts className="h-6 w-6" />,
  },
  {
    id: 'notifications',
    label: 'Notification Preferences',
    icon: <IconBell className="h-6 w-6" />,
  },
  {
    id: 'privacy',
    label: 'Privacy & Security',
    icon: <IconShield className="h-6 w-6" />,
  },
  {
    id: 'help',
    label: 'Help & Support',
    icon: <IconContactSupport className="h-6 w-6" />,
  },
]

const AccountSettings = () => (
  <section className="space-y-4">
    <h3 className="font-headline mb-6 px-2 text-xl italic">Preferences &amp; Security</h3>
    <div className="overflow-hidden rounded-xl bg-surface-container">
      {rows.map((row, index) => (
        <div key={row.id}>
          <button
            type="button"
            className="group flex w-full items-center justify-between px-6 py-5 transition-colors hover:bg-surface-container-high"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-highest text-primary">
                {row.icon}
              </div>
              <span className="text-lg font-medium">{row.label}</span>
            </div>
            <IconChevronRight className="h-5 w-5 text-on-surface-variant transition-transform group-hover:translate-x-1" />
          </button>
          {index < rows.length - 1 ? (
            <div className="mx-6 h-px bg-outline-variant/10" />
          ) : null}
        </div>
      ))}
    </div>
  </section>
)

export default AccountSettings
