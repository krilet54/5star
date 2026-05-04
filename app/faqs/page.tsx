import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import FAQsContent from '@/components/FAQsContent'
import ImageBackdrop from '@/components/ImageBackdrop'
import { pageHeroImages } from '@/lib/site-images'

export const metadata: Metadata = {
  title: 'FAQs — Star One Business Consultancy',
  description: 'Frequently asked questions about starting a business in the UAE — company setup, visas, compliance, banking, and more.',
}

export default function FAQsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-96 flex items-center overflow-hidden pt-20" style={{ background: 'var(--dark)' }}>
        <ImageBackdrop src={pageHeroImages.faqs} position="center right" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,160,96,0.07) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10 py-20">
          <div className="max-w-2xl">
            <Reveal>
              <h1 className="text-5xl sm:text-6xl font-display font-bold mb-6" style={{ color: 'var(--ink)' }}>
                Frequently Asked Questions
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-lg" style={{ color: 'var(--ink-muted)' }}>
                Everything you need to know about starting a business in the UAE.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQsContent />

      {/* CTA */}
      <section className="py-16 theme-maroon">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl font-display font-bold mb-4" style={{ color: 'var(--ink)' }}>
              Have a question not listed here?
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-lg mb-8" style={{ color: 'var(--ink-muted)' }}>
              Contact us directly and our team will be happy to help.
            </p>
          </Reveal>
          <Reveal>
            <Link href="/contact" className="btn btn-gold inline-block">
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
