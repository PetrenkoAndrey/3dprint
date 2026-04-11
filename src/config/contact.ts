import type { ContactItem } from './contactTypes.ts'

export const business = {
  name: '3D-друк Нікополь',
  streetAddress: 'вул. Трубників, 75',
  addressLocality: 'Нікополь',
  addressRegion: 'Дніпропетровська область',
  addressCountry: 'UA',
  /** Для schema.org */
  geoRegion: 'UA-12',
  phonesE164: ['+380636523465', '+380682345890'] as const,
  email: 'dd270386pai@gmail.com',
} as const

export const contactLinks: ContactItem[] = [
  {
    label: 'Адреса',
    value: `м. ${business.addressLocality}, ${business.streetAddress}`,
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
    value: business.email,
    href: `mailto:${business.email}`,
    external: false,
  },
]
