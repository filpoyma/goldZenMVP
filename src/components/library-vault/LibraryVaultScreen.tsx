import LibraryCollections from './LibraryCollections'
import LibraryMaterialPresets from './LibraryMaterialPresets'
import LibraryRecentCreations from './LibraryRecentCreations'
import LibraryVaultHeader from './LibraryVaultHeader'
import LibraryVaultSearch from './LibraryVaultSearch'

const LibraryVaultScreen = () => (
  <div className="min-h-dvh bg-background text-on-background selection:bg-primary/30">
    <LibraryVaultHeader />
    <main className="mx-auto max-w-md px-6 pb-32 pt-24">
      <LibraryVaultSearch />
      <LibraryRecentCreations />
      <LibraryMaterialPresets />
      <LibraryCollections />
    </main>
  </div>
)

export default LibraryVaultScreen
