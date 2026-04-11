const items = [
  {
    title: 'Друк за вашою моделлю',
    text: 'Файли STL, 3MF, OBJ. Підкажу оптимальну орієнтацію, заповнення та підтримки.',
  },
  {
    title: 'PLA та PETG',
    text: 'PLA — для декору та прототипів. PETG — міцніший, стійкіший до температури та вологи.',
  },
  {
    title: 'Партії та повтори',
    text: 'Однакові деталі серіями зі стабільною якістю; знижка за обсяг за домовленістю.',
  },
]

export function Services() {
  return (
    <section id="poslugy" className="scroll-mt-20 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500/90">
          Послуги
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Що робимо
        </h2>
        <p className="mt-3 max-w-2xl text-stone-400">
          Сучасний FDM-принтер і ручний контроль якості на кожному замовленні.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-stone-800 bg-stone-900/35 p-6 shadow-lg shadow-black/30"
            >
              <h3 className="font-display text-lg font-semibold text-amber-300">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
