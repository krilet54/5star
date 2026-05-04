import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/lib/services-data'
import Reveal from '@/components/Reveal'
import ImageBackdrop from '@/components/ImageBackdrop'
import { getServiceImage, pageHeroImages } from '@/lib/site-images'

export const metadata: Metadata = {
  title: 'Our 20 Services — Business Setup to Compliance & Beyond',
  description: 'Complete UAE business services: company formation, visas, compliance, banking, accounting, HR, trademark, and more. All under one roof.',
}

// Group services by category
const servicesByCategory = {
  'Business Setup': services.filter(s => ['business-setup', 'golden-visa', 'employment-visa', 'dependent-visa', 'visit-visa'].includes(s.slug) || s.slug.includes('setup')),
  'Visa & Residency': services.filter(s => s.slug.includes('visa')),
  'Compliance & Tax': services.filter(s => ['corporate-tax', 'vat', 'audit', 'esr', 'aml', 'kyc', 'ubo'].includes(s.slug)),
  'Banking & Finance': services.filter(s => ['personal-banking', 'corporate-banking', 'accounting-bookkeeping'].includes(s.slug)),
  'HR & Operations': services.filter(s => ['hr-payroll'].includes(s.slug)),
  'IP & Ancillary': services.filter(s => ['marketing-branding', 'trademark-strategy', 'will-services', 'document-attestation'].includes(s.slug)),
}

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="pt-40 pb-20 relative overflow-hidden" style={{ background: 'var(--dark)' }}>
        <ImageBackdrop src={pageHeroImages.services} position="center right" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,160,96,0.06) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="decor-vertical" />
          <div className="tag">Services</div>
          <h1 className="font-display mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 500, lineHeight: 1.1 }}>
            20 Complete Services<br /><em style={{ color: 'var(--gold)' }}>One Partner</em>
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'var(--ink-muted)', lineHeight: 1.8 }}>
            From company formation and licensing to visas, compliance, banking, and growth — everything you need to start and scale your business in the UAE.
          </p>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {Object.entries(servicesByCategory).map(([ category, categoryServices ], catIdx) => (
            categoryServices.length > 0 && (
              <div key={category} className={catIdx > 0 ? 'mt-20' : ''}>
                <div className="mb-8 pb-8 border-b" style={{ borderColor: 'var(--border)' }}>
                  <div className="tag mb-2">Category {String(catIdx + 1).padStart(2, '0')}</div>
                  <h2 className="font-display text-3xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>
                    {category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
                  {categoryServices.map((service, idx) => (
                    <Reveal key={service.slug} delay={idx * 50}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="card p-8 h-full hover:shadow-lg transition-all duration-300"
                        style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
                      >
                        <div className="service-card-image" style={{ backgroundImage: `url('${getServiceImage(service.slug)}')` }} />
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="font-display text-lg font-medium mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}>
                          {service.title}
                        </h3>
                        <p className="text-sm mb-4 flex-1" style={{ color: 'var(--ink-muted)' }}>
                          {service.tagline}
                        </p>
                        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
                          Learn More
                          <span>→</span>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          ))}

          {/* All Services List */}
          <div className="mt-20 pt-20 border-t" style={{ borderColor: 'var(--border)' }}>
            <div className="mb-12">
              <div className="tag mb-2">Complete List</div>
              <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                All 20 Services
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-3 px-6 py-4 rounded border transition-all hover:border-gold"
                  style={{ borderColor: 'var(--border)', textDecoration: 'none' }}
                >
                  <span className="text-2xl flex-shrink-0">{service.icon}</span>
                  <div>
                    <div className="font-medium text-sm" style={{ color: 'var(--ink)' }}>
                      {service.title}
                    </div>
                  </div>
                  <span className="ml-auto" style={{ color: 'var(--gold)' }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t" style={{ background: 'var(--dark-2)', borderColor: 'var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)' }}>Not Sure Where to Start?</h2>
          <p className="text-base mb-8 max-w-md mx-auto" style={{ color: 'var(--ink-muted)' }}>
            Use our cost calculator to estimate your business setup costs, or book a free consultation with our team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/calculator" className="btn btn-gold">Try Cost Calculator →</Link>
            <Link href="/contact" className="btn btn-outline">Book Consultation →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
