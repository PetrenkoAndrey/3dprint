export type SiteSeo = {
  canonicalOrigin: string
  basePath: string
  readonly canonicalUrl: string
  name: string
  lang: string
  title: string
  description: string
  shortOgDescription: string
  shortTwitterDescription: string
  readonly keywords: readonly string[]
  locale: string
  readonly ogLocaleAlternates: readonly string[]
  readonly inLanguages: readonly string[]
  areaServedName: string
  imageAlt: string
  ogImage: string
}
