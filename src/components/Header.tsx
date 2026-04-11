const nav = [
  { href: '#poslugy', label: 'Послуги' },
  { href: '#pryklady', label: 'Приклади' },
  { href: '#modeli', label: 'Моделі' },
  { href: '#ciny', label: 'Ціни' },
  { href: '#obladnannya', label: 'Обладнання' },
  { href: '#kontakty', label: 'Контакти' },
]

export function Header() {
  const homeHref = `${import.meta.env.BASE_URL}`

  return (
    <header className="sticky top-0 z-50 border-b border-stone-800/80 bg-stone-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a
          href={homeHref}
          className="font-display text-lg font-bold tracking-tight text-white"
          aria-label="3D-друк Нікополь — на головну"
        >
          3D-друк<span className="text-amber-400">.</span>
          <span className="font-semibold text-stone-300">Нікополь</span>
        </a>
        <nav
          className="hidden flex-wrap items-center justify-end gap-x-5 gap-y-1 text-sm text-stone-400 lg:flex"
          aria-label="Розділи сайту"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-amber-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakty"
          className="shrink-0 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-stone-950 transition hover:bg-amber-300"
        >
          Звʼязатися
        </a>
      </div>
    </header>
  )
}
