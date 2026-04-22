import type { SiteSeo } from './siteTypes.ts'

/**
 * Публічна адреса сайту (GitHub Pages). Для іншого домену змініть тут і в index.html + scripts/generate-sitemap.mjs.
 * Синхронно з <meta> у `index.html`: title, description, keywords, og:*, twitter:*.
 * Один URL: у meta однією мовною «пачкою» додаємо RU+UK ключі, щоб запити українською і російською вели на цю ж сторінку.
 */
export const SITE: SiteSeo = {
  canonicalOrigin: 'https://petrenkoandrey.github.io',
  basePath: '/3dprint',
  get canonicalUrl() {
    return `${this.canonicalOrigin}${this.basePath}/`
  },
  name: '3D-друк Нікополь',
  lang: 'uk',
  title: '3D-друк Нікополь | PLA, PETG — FDM на замовлення',
  description:
    'FDM 3D-друк PLA та PETG у Нікополі: деталі, прототипи, сувеніри. 3D-печать PLA, PETG в Никополе: детали, прототипы, сувениры. Creality Ender-3 V3 KE. Надішліть STL / пришлите STL — ціна. Доставка по Україні.',
  shortOgDescription:
    'FDM 3D-друк PLA, PETG, Нікополь; 3D-печать PLA, PETG, Никополь. Детали, прототипы, сувениры / деталі, сувеніри. STL — розрахунок. Доставка по Україні.',
  shortTwitterDescription:
    'PLA, PETG, FDM, Нікополь / Никополь. Відправте або пришлите STL. Доставка по Україні.',
  keywords: [
    '3D друк',
    '3D друк Нікополь',
    'FDM друк',
    'PLA',
    'PETG',
    'друк на 3D принтері',
    'прототипування',
    'Creality Ender',
    'замовити 3D друк Україна',
    '3D печать',
    '3D печать Никополь',
    'FDM печать',
    'печать на 3D принтере',
    'прототипирование',
    'заказать 3D печать Украина',
  ],
  locale: 'uk_UA',
  ogLocaleAlternates: ['ru_UA'] as const,
  inLanguages: ['uk', 'ru'] as const,
  areaServedName: 'Україна',
  imageAlt: 'Процес FDM 3D-друку (PLA, PETG)',
  ogImage: 'https://petrenkoandrey.github.io/3dprint/images/prints-samples.png',
}
