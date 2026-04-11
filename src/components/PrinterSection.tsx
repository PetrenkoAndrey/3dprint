import { images } from '../data/images.ts'

export function PrinterSection() {
  return (
    <section id="obladnannya" className="scroll-mt-20 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500/90">
          Парк обладнання
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Обладнання
        </h2>
        <p className="mt-3 max-w-2xl text-stone-400">
          Друкую на FDM-принтері сімейства Creality Ender з сучасною електронікою та стабільною
          кінематикою — зручно для якісних шарів і передбачуваного результату.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="flex overflow-hidden rounded-2xl border border-stone-800 bg-stone-950/40 shadow-xl shadow-black/40">
            <div className="flex w-full items-center justify-center px-4 py-6 sm:px-6 sm:py-8">
              <img
                src={images.printerEnder3V3Ke}
                alt="Creality Ender-3 V3 KE — 3D-принтер"
                className="max-h-[min(52vh,420px)] w-full object-contain object-center sm:max-h-[min(58vh,480px)] lg:max-h-[min(72vh,560px)]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-800 bg-gradient-to-br from-amber-500/10 via-stone-900/40 to-stone-950/80 p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-white">Creality Ender-3 V3 KE</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-400">
                Швидкий і точний друк для прототипів і готових виробів. Робоча зона в дусі лінійки
                Ender-3 — типово до{' '}
                <span className="font-medium text-stone-200">220 × 220 мм</span> по столу та до{' '}
                <span className="font-medium text-stone-200">240 мм</span> по висоті (за даними
                виробника).
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/25 bg-stone-900/50 p-6">
              <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-amber-400/95">
                Максимальні розміри деталі
              </h4>
              <p className="mt-3 font-display text-2xl font-bold tracking-tight text-white">
                до 220 × 220 × 240 мм
              </p>
              <p className="mt-1 text-xs text-stone-500">
                Вісі X × Y × Z за паспортом Creality Ender-3 V3 KE.
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-stone-400">
                <li>
                  Якщо модель більша — можна ділити на частини або друкувати по черзі з подальшим
                  з&apos;єднанням (узгоджуємо окремо).
                </li>
                <li>
                  Складна геометрія, високі підтримки або великий виніс сопла можуть зменшити
                  корисний об&apos;єм — надішліть файл, підкажу, чи все вміститься.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
