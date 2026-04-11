const rows = [
  {
    material: 'PLA',
    note: 'стандартні кольори, FDM',
    price: 'від ~6 ₴ / г',
  },
  {
    material: 'PETG',
    note: 'підвищена міцність і вологостійкість',
    price: 'від ~7,5 ₴ / г',
  },
]

export function Pricing() {
  return (
    <section
      id="ciny"
      className="scroll-mt-20 border-y border-stone-800/80 bg-stone-900/30 px-4 py-16 sm:px-6"
      aria-labelledby="ciny-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500/90">Прайс</p>
        <h2
          id="ciny-heading"
          className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Ціни
        </h2>
        <p className="mt-3 max-w-2xl text-stone-400">
          Вартість залежить від ваги моделі, висоти шару, заповнення та часу друку. Орієнтовні
          середні ставки по Україні; точну суму порахую після файлу.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-stone-800 bg-stone-950/40">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Орієнтовна вартість FDM-друку за грам матеріалу: PLA та PETG
            </caption>
            <thead className="bg-stone-900/80 text-xs uppercase tracking-wide text-stone-500">
              <tr>
                <th className="px-4 py-3 font-semibold sm:px-6">Матеріал</th>
                <th className="hidden px-4 py-3 font-semibold sm:table-cell sm:px-6">Опис</th>
                <th className="px-4 py-3 font-semibold sm:px-6">Орієнтир</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/80">
              {rows.map((row) => (
                <tr key={row.material}>
                  <td className="px-4 py-4 font-display font-semibold text-white sm:px-6">
                    {row.material}
                  </td>
                  <td className="hidden max-w-md text-stone-400 sm:table-cell sm:px-6">
                    {row.note}
                  </td>
                  <td className="px-4 py-4 font-medium text-amber-300 sm:px-6">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-stone-500">
          Мінімальне замовлення: від ~150–200 ₴.
        </p>
      </div>
    </section>
  )
}
