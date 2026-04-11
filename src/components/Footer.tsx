import { SITE } from '../config/site.ts'

export function Footer() {
  return (
    <footer className="border-t border-stone-800 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {SITE.name}. Ціни на сайті — орієнтовні.
        </p>
        <a href="#kontakty" className="text-stone-400 transition hover:text-amber-400">
          Звʼязатися
        </a>
      </div>
    </footer>
  )
}
