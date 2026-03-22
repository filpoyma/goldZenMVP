import { HeroBackground } from './HeroBackground'
import { HeroBottomNav } from './HeroBottomNav'
import { HeroFooterTagline } from './HeroFooterTagline'
import { HeroGenerationPanel } from './HeroGenerationPanel'
import { HeroHeader } from './HeroHeader'
import { HeroHeadline } from './HeroHeadline'
import { HeroHighlightGrid } from './HeroHighlightGrid'

export function HeroScreen() {
  return (
    <>
      <HeroHeader />
      <HeroBackground />
      <main className="relative flex min-h-screen flex-col items-center px-6 pb-32 pt-24">
        <HeroHeadline />
        <HeroGenerationPanel />
        <HeroHighlightGrid />
        <HeroFooterTagline />
      </main>
      <HeroBottomNav />
    </>
  )
}
