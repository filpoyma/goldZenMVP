import heroBackground from '../../assets/hero-background.png'

const HeroBackground = () => (
  <div
    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-surface"
    aria-hidden
  >
    <div
      className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen"
      style={{ backgroundImage: `url(${heroBackground})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-transparent to-surface" />
  </div>
)

export default HeroBackground
