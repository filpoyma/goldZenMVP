import gridChronos from '../../assets/showcase-grid-chronos.png'
import gridLunar from '../../assets/showcase-grid-lunar.png'
import gridOrion from '../../assets/showcase-grid-orion.png'
import gridSolaris from '../../assets/showcase-grid-solaris.png'
import IconHeartFilled from '../icons/svg/IconHeartFilled.svg'
import IconHeartOutline from '../icons/svg/IconHeartOutline.svg'
import IconIosShare from '../icons/svg/IconIosShare.svg'

type TGridItem = {
  id: string
  imageSrc: string
  username: string
  title: string
  favoriteFilled: boolean
}

const items: TGridItem[] = [
  {
    id: '1',
    imageSrc: gridSolaris,
    username: '@aurum_designer',
    title: 'Solaris Cuff',
    favoriteFilled: true,
  },
  {
    id: '2',
    imageSrc: gridLunar,
    username: '@vogue_jewels',
    title: 'Lunar Tear',
    favoriteFilled: false,
  },
  {
    id: '3',
    imageSrc: gridOrion,
    username: '@golden_ratio',
    title: 'Orion Studs',
    favoriteFilled: false,
  },
  {
    id: '4',
    imageSrc: gridChronos,
    username: '@minimalist_ai',
    title: 'Chronos Gold',
    favoriteFilled: true,
  },
]

const GridCard = ({
  imageSrc,
  username,
  title,
  favoriteFilled,
}: Omit<TGridItem, 'id'>) => (
  <div className="flex flex-col gap-3">
    <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-container">
      <img
        src={imageSrc}
        alt=""
        className="h-full w-full object-cover grayscale-[30%] transition-all duration-500 group-hover:grayscale-0"
      />
      <div className="absolute right-2 top-2">
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-surface/40 text-white backdrop-blur-md transition-transform active:scale-75"
          aria-label="Favorite"
        >
          {favoriteFilled ? (
            <IconHeartFilled className="h-3.5 w-3.5" />
          ) : (
            <IconHeartOutline className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
    </div>
    <div className="px-1">
      <p className="mb-1 text-[10px] font-medium text-on-surface-variant">{username}</p>
      <div className="flex items-center justify-between">
        <span className="truncate font-headline text-xs font-bold">{title}</span>
        <button
          type="button"
          className="text-on-surface-variant transition-colors hover:text-primary"
          aria-label="Share"
        >
          <IconIosShare className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  </div>
)

const ProductShowcaseGrid = () => (
  <section className="mb-8">
    <div className="mb-6 flex items-end justify-between">
      <h3 className="font-headline text-xl font-bold">Recent Creations</h3>
      <button
        type="button"
        className="cursor-pointer rounded-full bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-widest text-primary hover:underline"
      >
        View All
      </button>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {items.map(({ id, ...rest }) => (
        <GridCard key={id} {...rest} />
      ))}
    </div>
  </section>
)

export default ProductShowcaseGrid
