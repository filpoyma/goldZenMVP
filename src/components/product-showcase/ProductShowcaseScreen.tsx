import HeroHeader from '../hero/HeroHeader'
import ProductShowcaseCurator from './ProductShowcaseCurator'
import ProductShowcaseGrid from './ProductShowcaseGrid'
import ProductShowcaseHero from './ProductShowcaseHero'
import ProductShowcaseIntro from './ProductShowcaseIntro'

const ProductShowcaseScreen = () => (
  <div className="min-h-dvh bg-background pb-32 text-on-background selection:bg-primary/30">
    <HeroHeader />
    <main className="mx-auto max-w-md px-6 pt-24">
      <ProductShowcaseIntro />
      <ProductShowcaseHero />
      <ProductShowcaseGrid />
      <ProductShowcaseCurator />
    </main>
  </div>
)

export default ProductShowcaseScreen
