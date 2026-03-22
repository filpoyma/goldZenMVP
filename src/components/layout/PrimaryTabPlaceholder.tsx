type TPrimaryTabPlaceholderProps = {
  title: string
}

export function PrimaryTabPlaceholder({ title }: TPrimaryTabPlaceholderProps) {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6 pb-32 pt-24 text-center">
      <p className="font-headline text-xl text-on-surface">{title}</p>
      <p className="mt-2 font-body text-sm text-on-surface-variant">Coming soon</p>
    </main>
  )
}
