import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import FAQsContent from '@/components/FAQsContent'
import GeometricCorners from '@/components/GeometricCorners'
import { buildFaqJsonLd } from '@/lib/seo'
import { faqData } from '@/lib/faq-data'

export const metadata: Metadata = {
  title: 'FAQs — Star One Business Consultancy',
  description: 'Frequently asked questions about starting a business in the UAE — company setup, visas, compliance, banking, and more.',
  alternates: { canonical: '/faqs' },
  twitter: { card: 'summary_large_image', title: 'FAQs — Star One Business Consultancy', description: 'Frequently asked questions about starting a business in the UAE — company setup, visas, compliance, banking, and more.' },
}

const faqJsonLd = buildFaqJsonLd(faqData.flatMap(category => category.faqs))

export default function FAQsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {/* Hero */}
      <section className="relative min-h-96 flex items-center overflow-hidden pt-20" style={{ background: '#FAFAFA' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,160,96,0.06) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <GeometricCorners />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10 py-20">
          <div className="max-w-2xl">
            <Reveal>
              <div className="tag">Help & Support</div>
              <h1 className="text-5xl sm:text-6xl font-display font-bold mb-6" style={{ color: '#0A0A0A' }}>
                Frequently Asked<br /><em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Questions</em>
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-lg" style={{ color: '#555555' }}>
                Everything you need to know about starting a business in the UAE.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQsContent />

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#0A0A0A' }}>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(201, 168, 76, 0.1) 25%, rgba(201, 168, 76, 0.1) 26%, transparent 27%, transparent 74%, rgba(201, 168, 76, 0.1) 75%, rgba(201, 168, 76, 0.1) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(201, 168, 76, 0.1) 25%, rgba(201, 168, 76, 0.1) 26%, transparent 27%, transparent 74%, rgba(201, 168, 76, 0.1) 75%, rgba(201, 168, 76, 0.1) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center relative z-10">
          <Reveal>
            <h2 className="text-3xl font-display font-bold mb-4" style={{ color: '#FAFAFA' }}>
              Have a question not listed here?
            </h2>
          </Reveal>
          <Reveal>
            <div className="decor-section-divider mb-8" />
          </Reveal>
          <Reveal>
            <p className="text-lg mb-8" style={{ color: '#AAAAAA' }}>
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
