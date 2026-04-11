const libraries = [
  {
    name: 'Thingiverse',
    description: 'Величезна база безкоштовних моделей від спільноти MakerBot.',
    href: 'https://www.thingiverse.com/',
  },
  {
    name: 'Printables',
    description: 'Каталог від Prusa: моделі з рейтингами, гайди та готові профілі.',
    href: 'https://www.printables.com/',
  },
  {
    name: 'Cults',
    description: 'Преміум і безкоштовні дизайни, багато декору та сувенірів.',
    href: 'https://cults3d.com/',
  },
]

export function ModelLibraries() {
  return (
    <section id="modeli" className="scroll-mt-20 border-y border-stone-800/80 bg-stone-900/20 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500/90">
          STL та 3MF
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Де шукати моделі
        </h2>
        <p className="mt-3 max-w-3xl text-stone-400">
          Не обов&apos;язково моделювати з нуля: завантажте готову модель у форматі{' '}
          <span className="text-stone-200">STL</span>, <span className="text-stone-200">3MF</span>{' '}
          або <span className="text-stone-200">OBJ</span> з популярних каталогів 3D-друку, надішліть
          файл — розрахую вартість і термін.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {libraries.map((lib) => (
            <li key={lib.href}>
              <a
                href={lib.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-full flex-col rounded-2xl border border-stone-800 bg-stone-950/50 p-5 transition hover:border-amber-500/35 hover:bg-stone-900/80"
              >
                <span className="font-display text-lg font-semibold text-amber-300">{lib.name}</span>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-400">{lib.description}</p>
                <span className="mt-4 text-sm font-medium text-amber-400/90">
                  Відкрити сайт →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
