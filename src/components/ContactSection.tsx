import { contactLinks } from '../config/contact.ts'
import type { ContactItem } from '../config/contactTypes.ts'

const cardClass =
  'flex flex-col rounded-xl border border-stone-800 bg-stone-900/40 px-4 py-3'

const cardInteractiveClass =
  'transition hover:border-amber-500/35 hover:bg-stone-900/70'

function ContactCard({ c }: { c: ContactItem }) {
  if (c.href) {
    return (
      <a
        href={c.href}
        {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
        className={`${cardClass} ${cardInteractiveClass}`}
      >
        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500">
          {c.label}
        </span>
        <span className="mt-1 font-medium text-amber-200">{c.value}</span>
      </a>
    )
  }
  return (
    <div className={cardClass}>
      <span className="text-xs font-semibold uppercase tracking-wide text-stone-500">
        {c.label}
      </span>
      <span className="mt-1 font-medium text-amber-200">{c.value}</span>
    </div>
  )
}

export function ContactSection() {
  return (
    <section
      id="kontakty"
      className="scroll-mt-20 px-4 pb-20 pt-4 sm:px-6"
      aria-labelledby="kontakty-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500/90">
          Звʼязок
        </p>
        <h2
          id="kontakty-heading"
          className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Контакти
        </h2>
        <p className="mt-3 max-w-2xl text-stone-400">
          Зручніше написати в месенджер — відповім щодо термінів і вартості.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {contactLinks.map((c) => (
            <li key={c.label}>
              <ContactCard c={c} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
