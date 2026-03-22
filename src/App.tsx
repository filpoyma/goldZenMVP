import { useState } from 'react'
import { HeroScreen } from './components/hero/HeroScreen'
import { GoldZenBottomNav } from './components/layout/GoldZenBottomNav'
import { PrimaryTabPlaceholder } from './components/layout/PrimaryTabPlaceholder'
import { LibraryVaultScreen } from './components/library-vault/LibraryVaultScreen'
import { ProductShowcaseScreen } from './components/product-showcase/ProductShowcaseScreen'
import type { TPrimaryTab } from './types/navigation'

function App() {
  const [activeTab, setActiveTab] = useState<TPrimaryTab>('generate')

  return (
    <div className="min-h-dvh bg-background text-on-background selection:bg-primary/30">
      {activeTab === 'generate' && <HeroScreen />}
      {activeTab === 'library' && <LibraryVaultScreen />}
      {activeTab === 'social' && <ProductShowcaseScreen />}
      {activeTab === 'account' && <PrimaryTabPlaceholder title="Account" />}

      <GoldZenBottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default App
