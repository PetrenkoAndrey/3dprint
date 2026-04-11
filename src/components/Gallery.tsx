import { galleryItems } from '../data/galleryItems.ts'

export function Gallery() {
  return (
    <section id="pryklady" className="scroll-mt-20 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500/90">
            Портфоліо
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Приклади друку
          </h2>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <li key={item.src}>
              <figure className="group relative overflow-hidden rounded-2xl border border-stone-800 bg-stone-900/60 shadow-lg shadow-black/40">
                <div className="aspect-square">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/95 via-stone-950/60 to-transparent px-3 pb-3 pt-8 sm:px-4 sm:pb-4 sm:pt-10">
                  <span className="text-xs font-medium text-stone-100 sm:text-sm">{item.caption}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
