import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')

/** Канонічний базовий URL сайту (без завершального слеша в змінній — у XML додаємо `/`). */
const SITE = 'https://petrenkoandrey.github.io/3dprint'

const lastmod = new Date().toISOString().slice(0, 10)

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>${SITE}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${SITE}/images/prints-samples.png</image:loc>
      <image:title>3D-друк Нікополь — приклад FDM</image:title>
      <image:caption>FDM 3D-друк PLA та PETG, Нікополь</image:caption>
    </image:image>
    <image:image>
      <image:loc>${SITE}/images/printer-ender3-v3-ke.jpg</image:loc>
      <image:title>Creality Ender-3 V3 KE</image:title>
      <image:caption>3D-принтер для замовного друку</image:caption>
    </image:image>
  </url>
</urlset>
`

const robots = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`

writeFileSync(join(distDir, 'sitemap.xml'), xml, 'utf8')
writeFileSync(join(distDir, 'robots.txt'), robots.trimEnd() + '\n', 'utf8')
console.log('sitemap.xml, robots.txt → dist/ (lastmod:', lastmod + ')')
