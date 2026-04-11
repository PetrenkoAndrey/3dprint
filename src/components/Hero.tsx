import { images } from '../data/images.ts'

export function Hero() {
  return (
    <section
      className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(251,191,36,0.18),transparent)]" />
      <div className="relative mx-auto max-w-6xl lg:grid lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-stone-700/80 bg-stone-900/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400/95">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_#fbbf24]" />
            FDM · Нікополь
          </p>
          <h1
            id="hero-heading"
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            3D-друк, який{' '}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              тримає форму
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-stone-400">
            Деталі, прототипи й сувеніри з PLA та PETG. Допомога з файлами, чесний розрахунок по
            вазі та часу друку.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://t.me/andrey_petrenko27"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-stone-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-300"
            >
              Telegram
            </a>
            <a
              href="#pryklady"
              className="inline-flex items-center justify-center rounded-full border border-stone-600 bg-stone-900/40 px-6 py-3 text-sm font-medium text-stone-100 transition hover:border-amber-500/40 hover:text-white"
            >
              Приклади робіт
            </a>
            <a
              href="#ciny"
              className="inline-flex items-center justify-center rounded-full border border-transparent px-2 py-3 text-sm font-medium text-stone-400 underline-offset-4 hover:text-amber-300 hover:underline"
            >
              Ціни
            </a>
          </div>
        </div>
        <div className="relative mt-12 lg:col-span-5 lg:mt-0">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-500/20 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-stone-800 shadow-2xl shadow-black/50">
            <img
              src={images.printsSamples}
              alt="Крупний план FDM-друку: сопло друкує синім пластиком літери «3D», видно заповнення"
              className="aspect-[4/5] w-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent px-5 pb-5 pt-16">
              <p className="font-display text-sm font-semibold text-white">Готовий друкувати вашу модель</p>
              <p className="mt-1 text-xs text-stone-400">Надішліть STL / 3MF — відповім з оцінкою</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
