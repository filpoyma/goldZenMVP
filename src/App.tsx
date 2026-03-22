import { lazy, Suspense, useState } from 'react'
import { GoldZenBottomNav } from './components/layout/GoldZenBottomNav'
import type { TPrimaryTab } from './types/navigation'

const HeroScreen = lazy(() =>
  import('./components/hero/HeroScreen').then((m) => ({ default: m.HeroScreen })),
)
const LibraryVaultScreen = lazy(() =>
  import('./components/library-vault/LibraryVaultScreen').then((m) => ({
    default: m.LibraryVaultScreen,
  })),
)
const ProductShowcaseScreen = lazy(() =>
  import('./components/product-showcase/ProductShowcaseScreen').then((m) => ({
    default: m.ProductShowcaseScreen,
  })),
)
const AccountScreen = lazy(() =>
  import('./components/account/AccountScreen').then((m) => ({ default: m.AccountScreen })),
)

function AppTabFallback() {
  return (
    <div
      className="flex min-h-dvh flex-col items-center justify-center bg-background pb-28"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-primary-container border-t-transparent"
        aria-hidden
      />
    </div>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState<TPrimaryTab>('generate')

  return (
    <div className="min-h-dvh bg-background text-on-background selection:bg-primary/30">
      <Suspense fallback={<AppTabFallback />}>
        {activeTab === 'generate' && <HeroScreen />}
        {activeTab === 'library' && <LibraryVaultScreen />}
        {activeTab === 'social' && <ProductShowcaseScreen />}
        {activeTab === 'account' && <AccountScreen />}
      </Suspense>

      <GoldZenBottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default App
