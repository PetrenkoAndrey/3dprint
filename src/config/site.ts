/**
 * Публічна адреса сайту (GitHub Pages). Для іншого домену змініть тут і в public/sitemap.xml + robots.txt.
 */
export const SITE = {
  canonicalOrigin: 'https://petrenkoandrey.github.io',
  basePath: '/3dprint',
  get canonicalUrl() {
    return `${this.canonicalOrigin}${this.basePath}/`
  },
  /** Коротка назва бренду */
  name: '3D-друк Нікополь',
  /** Title ~50–60 символів для пошуку */
  title: '3D-друк Нікополь | PLA, PETG — FDM на замовлення',
  /** Опис ~140–160 символів */
  description:
    'FDM 3D-друк PLA та PETG у Нікополі: деталі, прототипи, сувеніри. Creality Ender-3 V3 KE, доставка по Україні. Надішліть STL — розрахуємо ціну.',
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
  ],
  locale: 'uk_UA',
  lang: 'uk',
  /** Open Graph / Twitter превʼю (абсолютний URL) */
  ogImage: 'https://petrenkoandrey.github.io/3dprint/images/prints-samples.png',
} as const
