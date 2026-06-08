import type { ReactNode } from 'react'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { SITE_INFO } from '@/lib/site-info'
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildServiceJsonLd } from '@/lib/seo'
import type { ServiceData } from '@/types'

type BreadcrumbItem = { name: string; item: string }
type FaqItem = { q: string; a: string }

type CTA = {
  label: string
  href: string
  primary?: boolean
  external?: boolean
}

type Props = {
  breadcrumbItems: BreadcrumbItem[]
  canonicalPath: string
  description: string
  heroEyebrow: string
  heroTitle: ReactNode
  intro: ReactNode
  schemaName: string
  schemaDescription: string
  faqs: FaqItem[]
  ctas: CTA[]
  relatedLinks?: Array<{ label: string; href: string }>
  children: ReactNode
}

export default function ServiceLandingPage({
  breadcrumbItems,
  canonicalPath,
  description,
  heroEyebrow,
  heroTitle,
  intro,
  schemaName,
  schemaDescription,
  faqs,
  ctas,
  relatedLinks,
  children,
}: Props) {
  const serviceJsonLd = buildServiceJsonLd({ title: schemaName, description: schemaDescription } as ServiceData, canonicalPath)
  const faqJsonLd = buildFaqJsonLd(faqs)
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbItems)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="pt-36 pb-20 relative overflow-hidden" style={{ background: '#FAFAFA' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,160,96,0.06) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs mb-6" style={{ color: '#555555' }}>
            {breadcrumbItems.map((crumb, idx) => (
              <span key={crumb.item} className="flex items-center gap-2">
                {idx > 0 && <span>/</span>}
                <Link href={crumb.item} style={{ color: idx === breadcrumbItems.length - 1 ? '#C9A84C' : '#555555' }}>
                  {crumb.name}
                </Link>
              </span>
            ))}
          </div>

          <div className="max-w-3xl">
            <div className="tag mb-4">{heroEyebrow}</div>
            <h1 className="font-display mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 500, lineHeight: 1.08, color: '#0A0A0A' }}>
              {heroTitle}
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: '#555555', lineHeight: 1.8 }}>
              {intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {ctas.map(cta => (
                cta.external ? (
                  <a key={cta.href} href={cta.href} target="_blank" rel="noopener noreferrer" className={cta.primary ? 'btn btn-gold' : 'btn btn-outline'}>
                    {cta.label}
                  </a>
                ) : (
                  <Link key={cta.href} href={cta.href} className={cta.primary ? 'btn btn-gold' : 'btn btn-outline'}>
                    {cta.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20" style={{ background: '#F5F5F5' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl border p-8 sm:p-10" style={{ background: '#FAFAFA', borderColor: '#E0E0E0' }}>
              {children}
            </div>
          </Reveal>
        </div>
      </section>

      {relatedLinks && relatedLinks.length > 0 && (
        <section className="py-16 border-t" style={{ background: '#FAFAFA', borderColor: '#E0E0E0' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="tag mb-4">Related</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Helpful next steps
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map(link => (
                <Link key={link.href} href={link.href} className="btn btn-outline">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="tag mb-4">FAQ</div>
          <h2 className="font-display text-3xl font-medium mb-8" style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}>
            Common questions
          </h2>
          <div className="grid gap-4">
            {faqs.map(faq => (
              <details key={faq.q} className="rounded border border-[#333333] bg-[#111111]">
                <summary className="cursor-pointer list-none px-6 py-5 text-left font-medium" style={{ color: '#FAFAFA' }}>
                  {faq.q}
                </summary>
                <div className="px-6 pb-6 text-sm leading-7" style={{ color: '#AAAAAA' }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-gold">
              Book a Free Consultation
            </Link>
            <a href={SITE_INFO.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
