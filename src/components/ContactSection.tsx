type ContactItem = {
  label: string
  value: string
  href?: string
  external?: boolean
}

const contacts: ContactItem[] = [
  {
    label: 'Адреса',
    value: 'м. Нікополь, вул. Трубників, 75',
  },
  {
    label: 'Instagram',
    value: '@andrey_petrenko27',
    href: 'https://www.instagram.com/andrey_petrenko27/',
    external: true,
  },
  {
    label: 'Telegram',
    value: '@andrey_petrenko27',
    href: 'https://t.me/andrey_petrenko27',
    external: true,
  },
  {
    label: 'Viber',
    value: '+380 63 652 3465',
    href: 'viber://chat?number=380636523465',
    external: true,
  },
  {
    label: 'WhatsApp',
    value: '+380 63 652 3465',
    href: 'https://wa.me/380636523465',
    external: true,
  },
  {
    label: 'Телефон',
    value: '+380 63 652 3465',
    href: 'tel:+380636523465',
    external: false,
  },
  {
    label: 'Телефон (додатково)',
    value: '+380 68 234 5890',
    href: 'tel:+380682345890',
    external: false,
  },
  {
    label: 'Email',
    value: 'dd270386pai@gmail.com',
    href: 'mailto:dd270386pai@gmail.com',
    external: false,
  },
]

const cardClass =
  'flex flex-col rounded-xl border border-stone-800 bg-stone-900/40 px-4 py-3'

const cardInteractiveClass =
  'transition hover:border-amber-500/35 hover:bg-stone-900/70'

export function ContactSection() {
  return (
    <section id="kontakty" className="scroll-mt-20 px-4 pb-20 pt-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500/90">
          Звʼязок
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Контакти
        </h2>
        <p className="mt-3 max-w-2xl text-stone-400">
          Зручніше написати в месенджер — відповім щодо термінів і вартості.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {contacts.map((c) => (
            <li key={c.label}>
              {c.href ? (
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
              ) : (
                <div className={cardClass}>
                  <span className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                    {c.label}
                  </span>
                  <span className="mt-1 font-medium text-amber-200">{c.value}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
