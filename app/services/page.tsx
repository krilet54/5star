import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/lib/services-data'
import { getServiceCanonicalPath } from '@/lib/seo'
import Reveal from '@/components/Reveal'
import GeometricCorners from '@/components/GeometricCorners'

export const metadata: Metadata = {
  title: 'All Services | UAE Business Setup & Advisory | Star One',
  description: 'All UAE business setup services in one place, from company formation to visas, tax, banking, and compliance from AED 5,750. Book today.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'All Services | UAE Business Setup & Advisory | Star One',
    description: 'All UAE business setup services in one place, from company formation to visas, tax, banking, and compliance from AED 5,750. Book today.',
    url: '/services',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'All Services | UAE Business Setup & Advisory | Star One', description: 'All UAE business setup services in one place, from company formation to visas, tax, banking, and compliance from AED 5,750. Book today.' },
}

const categoryIds: Record<string, string> = {
  'Business Setup': 'business-setup',
  'Visa & Residency': 'visa-residency',
  'Tax Compliance': 'tax-compliance',
  'Legal Compliance': 'legal-compliance',
  'Banking': 'banking',
  'Accounting': 'accounting',
  'HR & Operations': 'hr-operations',
  'IP & Ancillary': 'ip-ancillary',
}

// Group services by category
const servicesByCategory = {
  'Business Setup': services.filter(s => s.slug === 'business-setup'),
  'Visa & Residency': services.filter(s => s.slug.includes('visa')),
  'Tax Compliance': services.filter(s => ['corporate-tax', 'vat', 'audit'].includes(s.slug)),
  'Legal Compliance': services.filter(s => ['esr', 'aml', 'kyc', 'ubo'].includes(s.slug)),
  'Banking': services.filter(s => ['personal-banking', 'corporate-banking'].includes(s.slug)),
  'Accounting': services.filter(s => ['accounting-bookkeeping'].includes(s.slug)),
  'HR & Operations': services.filter(s => ['hr-payroll'].includes(s.slug)),
  'IP & Ancillary': services.filter(s => ['marketing-branding', 'trademark-strategy', 'will-services', 'document-attestation'].includes(s.slug)),
}

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="pt-40 pb-20 relative overflow-hidden section-corner-accent" style={{ background: '#FAFAFA' }}>
        <GeometricCorners />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="decor-vertical" />
          <div className="tag tag-dark">Services</div>
          <h1 className="font-display mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 500, lineHeight: 1.1, color: '#0A0A0A' }}>
            All Services<br /><em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Under One Roof</em>
          </h1>
          <p className="text-lg max-w-xl" style={{ color: '#555555', lineHeight: 1.8 }}>
            Our service categories keep the structure clear, while the sub-services below show the full breadth of what we offer.
          </p>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section className="pb-24 relative" style={{ background: '#0A0A0A', color: '#FAFAFA' }}>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(201, 168, 76, 0.1) 25%, rgba(201, 168, 76, 0.1) 26%, transparent 27%, transparent 74%, rgba(201, 168, 76, 0.1) 75%, rgba(201, 168, 76, 0.1) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(201, 168, 76, 0.1) 25%, rgba(201, 168, 76, 0.1) 26%, transparent 27%, transparent 74%, rgba(201, 168, 76, 0.1) 75%, rgba(201, 168, 76, 0.1) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />
        
        {/* Decorative top divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5" style={{
          background: 'linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.3), transparent)',
        }} />
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          {Object.entries(servicesByCategory).map(([ category, categoryServices ], catIdx) => (
            categoryServices.length > 0 && (
              <div key={category} id={categoryIds[category] || 'services'} className={catIdx > 0 ? 'mt-24 pt-12' : 'pt-8'}>
                {/* Category header with decorations */}
                <div className="mb-8 pb-8 border-b relative" style={{ borderColor: '#333333' }}>
                  {/* Top divider line before category */}
                  {catIdx > 0 && (
                    <div className="absolute -top-6 left-0 right-0 h-0.5" style={{
                      background: 'linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.2), transparent)',
                    }} />
                  )}
                  
                  <div className="tag mb-2 flex items-center gap-2">
                    <span>Category {String(catIdx + 1).padStart(2, '0')}</span>
                    <span style={{ color: '#C9A84C' }}>✦</span>
                  </div>
                  <h2 className="font-display text-3xl font-medium" style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}>
                    {category}
                  </h2>
                  {/* Decorative underline */}
                  <div className="absolute bottom-0 left-0 w-16 h-0.5" style={{
                    background: 'linear-gradient(90deg, #C9A84C, transparent)',
                  }} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 mb-4">
                  {categoryServices.map((service, idx) => (
                    <Reveal key={service.slug} delay={idx * 50}>
                      <Link
                          href={getServiceCanonicalPath(service.slug)}
                        className="card p-8 h-full hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                        style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: '#111111', borderColor: '#C9A84C', color: '#FAFAFA' }}
                      >
                        {/* Top border accent */}
                        <div className="absolute top-0 left-0 right-0 h-px" style={{
                          background: 'linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.5), transparent)',
                        }} />
                        
                        {/* Corner accent dots */}
                        <div className="absolute top-4 right-4 w-2 h-2 rounded-full" style={{ background: '#C9A84C', opacity: 0.7 }} />
                        <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full" style={{ background: '#C9A84C', opacity: 0.3 }} />
                        
                        <div className="text-4xl mb-4 transition-all duration-300 group-hover:text-yellow-500">{service.icon}</div>
                        <h3 className="font-display text-lg font-medium mb-2 group-hover:text-yellow-400 transition-colors" style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}>
                          {service.title}
                        </h3>
                        <p className="text-sm mb-4 flex-1" style={{ color: '#888888' }}>
                          {service.tagline}
                        </p>
                        {/* Divider line before footer */}
                        <div className="h-px mb-4" style={{
                          background: 'linear-gradient(90deg, rgba(201, 168, 76, 0.2), transparent)',
                        }} />
                        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase" style={{ color: '#C9A84C' }}>
                          Learn More
                          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>

                {category === 'Business Setup' && (
                  <div className="mt-6 text-xs uppercase tracking-[0.18em]" style={{ color: '#888888' }}>
                    Includes mainland, free zone, and offshore setup only.
                  </div>
                )}
              </div>
            )
          ))}

          {/* All Services List */}
          <div className="mt-24 pt-12 border-t relative" style={{ borderColor: '#333333' }}>
            {/* Decorative top divider */}
            <div className="absolute -top-6 left-0 right-0 h-0.5" style={{
              background: 'linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.2), transparent)',
            }} />
            
            <div className="mb-12">
              <div className="tag mb-2 flex items-center gap-2">
                <span>Complete List</span>
                <span style={{ color: '#C9A84C' }}>✦</span>
              </div>
              <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}>
                All Services
              </h2>
              {/* Decorative underline */}
              <div className="w-16 h-0.5" style={{
                background: 'linear-gradient(90deg, #C9A84C, transparent)',
              }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {services.map((service, idx) => (
                <Link
                  key={service.slug}
                  href={getServiceCanonicalPath(service.slug)}
                  className="flex items-center gap-3 px-6 py-4 rounded border transition-all duration-300 group hover:border-gold hover:bg-yellow-900/10"
                  style={{ borderColor: '#333333', textDecoration: 'none', color: '#FAFAFA' }}
                >
                  <span className="text-2xl flex-shrink-0 transition-all duration-300 group-hover:text-yellow-400">{service.icon}</span>
                  <div>
                    <div className="font-medium text-sm group-hover:text-yellow-300 transition-colors" style={{ color: '#FAFAFA' }}>
                      {service.title}
                    </div>
                  </div>
                  <span className="ml-auto text-yellow-600 transition-all duration-300 group-hover:translate-x-1" style={{ color: '#C9A84C' }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t relative" style={{ background: '#F5F5F5', borderColor: '#E0E0E0', color: '#0A0A0A' }}>
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-3" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(201, 168, 76, 0.1) 40px, rgba(201, 168, 76, 0.1) 41px)',
          pointerEvents: 'none',
        }} />
        
        {/* Corner accent elements */}
        <div className="absolute top-0 left-0 w-48 h-48 pointer-events-none opacity-8" style={{
          background: 'radial-gradient(circle at bottom-right, #C9A84C 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none opacity-8" style={{
          background: 'radial-gradient(circle at top-left, #C9A84C 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="tag tag-dark justify-center mb-4">Next Steps</div>
          <h2 className="font-display text-4xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
            Not Sure Where to <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Start?</em>
          </h2>
          <p className="text-base mb-8 max-w-md mx-auto" style={{ color: '#555555' }}>
            Use our cost calculator to estimate your business setup costs, or book a free consultation with our team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/calculator" className="btn btn-gold transition-all duration-300 hover:shadow-lg">Try Cost Calculator →</Link>
            <Link href="/contact" className="btn btn-outline transition-all duration-300 hover:border-yellow-600">Book Consultation →</Link>
          </div>
          
          {/* Decorative footer divider */}
          <div className="mt-12 pt-8 border-t" style={{ borderColor: 'rgba(201, 168, 76, 0.2)' }}>
            <div className="flex items-center justify-center gap-3 text-xs" style={{ color: '#888888' }}>
              <span style={{ color: '#C9A84C' }}>✦</span>
              <span>Questions? Reach out to our team anytime</span>
              <span style={{ color: '#C9A84C' }}>✦</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
