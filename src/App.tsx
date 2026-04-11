import { ContactSection } from './components/ContactSection.tsx'
import { Footer } from './components/Footer.tsx'
import { Gallery } from './components/Gallery.tsx'
import { Header } from './components/Header.tsx'
import { Hero } from './components/Hero.tsx'
import { PageBackdrop } from './components/layout/PageBackdrop.tsx'
import { ModelLibraries } from './components/ModelLibraries.tsx'
import { Pricing } from './components/Pricing.tsx'
import { PrinterSection } from './components/PrinterSection.tsx'
import { JsonLd } from './components/seo/JsonLd.tsx'
import { Services } from './components/Services.tsx'

export function App() {
  return (
    <div className="min-h-screen bg-stone-950" id="top">
      <JsonLd />
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-stone-950 opacity-0 transition focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-200"
      >
        Перейти до вмісту
      </a>
      <PageBackdrop />
      <Header />
      <main id="main-content" className="relative scroll-mt-0 outline-none" tabIndex={-1}>
        <Hero />
        <Gallery />
        <Services />
        <ModelLibraries />
        <Pricing />
        <PrinterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
