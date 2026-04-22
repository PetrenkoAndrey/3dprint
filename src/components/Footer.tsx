import { TELEGRAM_ANDREY_HREF } from '../config/contact.ts'
import { SITE } from '../config/site.ts'

export function Footer() {
  return (
    <footer className="border-t border-stone-800 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Ціни на сайті — орієнтовні.
          </p>
          <p>
            Сайт розроблено —{' '}
            <a
              href={TELEGRAM_ANDREY_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400/90 transition hover:text-amber-300"
            >
              @andrey_petrenko27
            </a>
          </p>
        </div>
        <a href="#kontakty" className="text-stone-400 transition hover:text-amber-400 sm:self-start">
          Звʼязатися
        </a>
      </div>
    </footer>
  )
}
