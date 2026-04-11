/** Шляхи до файлів у `public/` з урахуванням `base` (GitHub Pages `/3dprint/`). */
export function assetUrl(pathFromPublic: string): string {
  const base = import.meta.env.BASE_URL
  const p = pathFromPublic.startsWith('/') ? pathFromPublic.slice(1) : pathFromPublic
  return `${base}${p}`
}
