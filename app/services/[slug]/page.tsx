import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getServiceBySlug, services } from '@/lib/services-data'
import EnquiryForm from '@/components/EnquiryForm'
import Reveal from '@/components/Reveal'
import { SITE_INFO } from '@/lib/site-info'
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildServiceJsonLd, getServiceCanonicalPath, getServiceSeo } from '@/lib/seo'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  const seo = getServiceSeo(slug, service)
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: getServiceCanonicalPath(slug) },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: 'article',
      url: getServiceCanonicalPath(slug),
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const isGoldenVisa = slug === 'golden-visa'
  const related = services.filter(s => s.slug !== slug).slice(0, 3)
  const featureEmoji = ['🧩', '⚙️', '📌', '🛡️', '🚀', '✅']
  const categoryEmoji = ['👔', '🏠', '🎓']
  const processEmoji = ['📝', '🗂️', '🧠', '🎯']
  const serviceJsonLd = buildServiceJsonLd(service, getServiceCanonicalPath(slug))
  const faqJsonLd = buildFaqJsonLd(service.faq)
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', item: `${SITE_INFO.url}/` },
    { name: 'Services', item: `${SITE_INFO.url}/services` },
    { name: service.title, item: `${SITE_INFO.url}${getServiceCanonicalPath(slug)}` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* HERO */}
      <section className="pt-36 pb-16 relative overflow-hidden service-detail-hero" style={{ background: '#FAFAFA' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs mb-6" style={{ color: '#555555' }}>
            <Link href="/" style={{ color: '#555555' }}>Home</Link>
            <span>/</span>
            <Link href="/services" style={{ color: '#555555' }}>Services</Link>
            <span>/</span>
            <span style={{ color: '#C9A84C' }}>{service.title}</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-14 items-start">
            <div>
              <div className="text-4xl mb-6">{service.icon}</div>
              <div className="tag">Service</div>
              <h1 className="font-display mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4.5vw, 62px)', fontWeight: 500, lineHeight: 1.1, color: '#0A0A0A' }}>
                {service.title}
              </h1>
              <p className="text-xl font-medium mb-6" style={{ color: '#C9A84C', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
                "{service.tagline}"
              </p>
              <p className="text-base leading-relaxed mb-8 max-w-xl service-justify" style={{ color: '#555555' }}>
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="service-pill">⚡ Fast Execution</span>
                <span className="service-pill">🛡️ Compliance-First</span>
                <span className="service-pill">🤝 End-to-End Support</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-gold">{isGoldenVisa ? 'Apply for Golden Visa' : service.cta} →</Link>
                {isGoldenVisa && (
                  <Link href="/contact" className="btn btn-outline">
                    Book a Consultation →
                  </Link>
                )}
                {slug === 'business-setup' && (
                  <Link href="/calculator" className="btn btn-outline">
                    Use Calculator →
                  </Link>
                )}
                <a href={SITE_INFO.whatsappHref} className="btn btn-outline" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </div>
            </div>

            <div className="service-side-panel border p-7 rounded-md" style={{ background: '#F5F5F5', borderColor: '#E0E0E0', color: '#0A0A0A' }}>
              <div className="text-center mb-6 pb-6 border-b" style={{ borderColor: '#E0E0E0' }}>
                <div className="font-display text-5xl font-medium" style={{ fontFamily: 'var(--font-display)', color: '#C9A84C', lineHeight: 1 }}>{service.heroStat}</div>
                <div className="text-xs mt-2 tracking-wide uppercase" style={{ color: '#555555' }}>{service.heroStatLabel}</div>
              </div>
              <h3 className="text-sm font-semibold mb-3" style={{ color: '#0A0A0A' }}>Quick Enquiry</h3>
              <EnquiryForm preselectedService={service.title} />
            </div>
          </div>
        </div>
      </section>

      <section className="section service-detail-section border-t" style={{ background: '#F5F5F5', borderColor: '#E0E0E0' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-md border p-6" style={{ background: '#FAFAFA', borderColor: '#E0E0E0' }}>
              <div className="tag mb-3">Related Services</div>
              <h2 className="font-display text-2xl font-medium mb-3" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
                Helpful links for this service
              </h2>
              <p className="text-sm mb-5" style={{ color: '#555555' }}>
                These service pages are the most relevant next steps for clients researching {service.title.toLowerCase()}.
              </p>
              <div className="flex flex-wrap gap-3">
                {services.filter(s => s.slug !== slug).slice(0, 2).map(item => (
                  <Link key={item.slug} href={getServiceCanonicalPath(item.slug)} className="btn btn-outline">
                    {item.title} →
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-md border p-6" style={{ background: '#FAFAFA', borderColor: '#E0E0E0' }}>
              <div className="tag mb-3">FAQ Highlights</div>
              <h2 className="font-display text-2xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
                Common questions
              </h2>
              <div className="space-y-4">
                {service.faq.slice(0, 3).map((faq, idx) => (
                  <div key={idx}>
                    <div className="text-sm font-semibold mb-1" style={{ color: '#0A0A0A' }}>{faq.q}</div>
                    <div className="text-sm" style={{ color: '#555555' }}>{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section service-detail-section service-pattern-dark border-y" style={{ background: '#0A0A0A', borderColor: '#555555' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="tag">{isGoldenVisa ? 'Golden Visa Pathways' : "What's Included"}</div>
          <h2 className="font-display text-4xl font-medium mb-10" style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}>
            {isGoldenVisa ? 'Golden Visa Categories' : 'Service Features'} <span style={{ color: '#C9A84C' }}>✦</span>
          </h2>

          {isGoldenVisa ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
              {(service.goldenVisaCategories || []).map((category, i) => (
                <Reveal key={category.title} delay={i * 60}>
                  <div
                    className="service-card service-feature-card p-6 border"
                    style={{ background: '#111111', borderColor: '#333333', color: '#FAFAFA' }}
                  >
                    <div className="mb-4" style={{ fontSize: '26px', color: '#C9A84C' }}>
                      {categoryEmoji[i % categoryEmoji.length]}
                    </div>
                    <h3 className="font-display text-base font-medium mb-2" style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}>
                      {category.title}
                    </h3>
                    <p className="text-sm leading-relaxed service-justify" style={{ color: '#AAAAAA' }}>
                      {category.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
              {service.features.map((f, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div
                    className="service-card service-feature-card p-6 border"
                    style={{ background: '#111111', borderColor: '#333333', color: '#FAFAFA' }}
                  >
                    <div className="mb-4" style={{ fontSize: '26px', color: '#C9A84C' }}>
                      {featureEmoji[i % featureEmoji.length]}
                    </div>
                    <h3 className="font-display text-base font-medium mb-2" style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}>
                      {f.title}
                    </h3>
                    <p className="text-sm leading-relaxed service-justify" style={{ color: '#AAAAAA' }}>
                      {f.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section service-detail-section service-benefits-section service-pattern-light" style={{ background: '#FAFAFA' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="tag">Benefits</div>
            <h2 className="font-display text-3xl sm:text-4xl font-medium mb-3" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              {isGoldenVisa ? 'Key Benefits' : 'Why This Matters'}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-6 service-justify" style={{ color: '#555555', maxWidth: 780 }}>
              {isGoldenVisa
                ? 'These benefits give you flexibility, stability, and long-term residency in the UAE.'
                : 'We design every service to help you move faster, stay compliant, and reduce friction.'}
            </p>
          </Reveal>

          <div className="w-full max-w-[1180px] mx-auto">
            <Reveal delay={100}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 items-stretch">
                {service.benefits.map((b, i) => (
                  <li key={i} className="service-benefit-item service-benefit-card h-full">
                    <div className="flex items-start gap-4 h-full">
                      <span className="service-benefit-number flex-shrink-0" style={{ color: '#C9A84C' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="service-benefit-copy text-sm sm:text-[15px] leading-relaxed service-justify" style={{ color: '#333333' }}>{b}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section service-detail-section service-pattern-dark border-y" style={{ background: '#0A0A0A', borderColor: '#555555' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="tag justify-center">{isGoldenVisa ? 'Simple Application Process' : 'Process'}</div>
            <h2 className="font-display text-4xl font-medium" style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}>
              {isGoldenVisa ? 'Simple Application Process' : 'How We Work'}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 items-stretch auto-rows-fr">
            {service.process.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="service-process-card p-7 border rounded transition-all duration-300 h-full flex flex-col min-h-[220px]" style={{ borderColor: '#333333', backgroundColor: '#111111', color: '#FAFAFA' }}>
                  <div className="flex items-start justify-between mb-5 min-h-[40px]">
                    <div className="font-display text-4xl font-medium" style={{ fontFamily: 'var(--font-display)', color: '#C9A84C', lineHeight: 1 }}>{step.step}</div>
                    <div style={{ fontSize: '20px', lineHeight: 1 }}>{processEmoji[i % processEmoji.length]}</div>
                  </div>
                  <h3 className="font-display text-lg font-medium mb-3" style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed service-justify flex-1" style={{ color: '#AAAAAA' }}>{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {isGoldenVisa && (
        <section className="section service-detail-section service-pattern-light border-t" style={{ background: '#FAFAFA', borderColor: '#E0E0E0' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
            <div className="tag justify-center">Call to Action</div>
            <h2 className="font-display text-3xl sm:text-4xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Start Your Golden Visa Journey Today
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto text-center" style={{ color: '#555555' }}>
              Speak with our experts to explore your eligibility and secure long-term residency in the UAE.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-gold">Apply Now →</Link>
              <Link href="/contact" className="btn btn-outline">Speak to an Expert →</Link>
            </div>
          </div>
        </section>
      )}

      {slug === 'business-setup' && (
        <section className="section service-detail-section service-pattern-light border-t" style={{ background: '#FAFAFA', borderColor: '#E0E0E0' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="tag">Comparison</div>
            <h2 className="font-display text-3xl sm:text-4xl font-medium mb-10" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Business Setup Comparison
            </h2>

            <div className="overflow-x-auto mb-6">
              <table className="prose-gold" style={{ minWidth: 900 }}>
                <thead>
                  <tr>
                    <th>Mainland Company</th>
                    <th>Free Zone Company</th>
                    <th>Offshore Company</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <ul>
                        <li><strong>Market Access:</strong> Freedom to operate anywhere in the UAE and internationally</li>
                        <li><strong>Ownership:</strong> 100% foreign ownership available for most activities</li>
                        <li><strong>Office Requirement:</strong> Physical office space usually required</li>
                        <li><strong>Government Contracts:</strong> Eligible to work with UAE government entities</li>
                        <li><strong>Business Scope:</strong> Ideal for companies targeting the local UAE market</li>
                        <li><strong>Visa Eligibility:</strong> Can apply for multiple UAE residency visas depending on office size</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li><strong>Market Access:</strong> Operate within the Free Zone and globally</li>
                        <li><strong>Ownership:</strong> 100% foreign ownership</li>
                        <li><strong>Office Requirement:</strong> Flexible options such as flexi-desk or shared offices</li>
                        <li><strong>Government Contracts:</strong> Generally not permitted</li>
                        <li><strong>Business Scope:</strong> Ideal for international trade, services, and startups</li>
                        <li><strong>Visa Eligibility:</strong> Visa packages available depending on Free Zone company rules</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li><strong>Market Access:</strong> Designed for international business outside the UAE</li>
                        <li><strong>Ownership:</strong> 100% foreign ownership</li>
                        <li><strong>Office Requirement:</strong> No physical office required</li>
                        <li><strong>Government Contracts:</strong> Not permitted</li>
                        <li><strong>Business Scope:</strong> Best for asset holding, international trade, and tax planning</li>
                        <li><strong>Visa Eligibility:</strong> No UAE residency visas</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center">
              <Link href="/calculator" className="btn btn-gold">Compare & Calculate →</Link>
            </div>
          </div>
        </section>
      )}

      {slug === 'business-setup' && (
        <section className="section service-detail-section service-pattern-light border-t" style={{ background: '#FAFAFA', borderColor: '#E0E0E0' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="tag">Next Steps</div>
            <h2 className="font-display text-3xl sm:text-4xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Explore the services most founders need next
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: '#555555', maxWidth: 840 }}>
              Once you choose your setup route, these pages help with residency, tax, banking, and cost planning.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/free-zone-dubai" className="btn btn-outline">Compare Free Zones</Link>
              <Link href="/ifza-business-setup" className="btn btn-outline">IFZA Business Setup</Link>
              <Link href="/dmcc-company-formation" className="btn btn-outline">DMCC Company Formation</Link>
              <Link href="/rakez-business-setup" className="btn btn-outline">RAKEZ Business Setup</Link>
              <Link href="/shams-business-setup" className="btn btn-outline">SHAMS Business Setup</Link>
              <Link href="/meydan-free-zone" className="btn btn-outline">Meydan Free Zone</Link>
              <Link href="/freelance-license-dubai" className="btn btn-outline">Freelance License Dubai</Link>
              <Link href="/ecommerce-company-setup-dubai" className="btn btn-outline">Ecommerce Company Setup</Link>
              <Link href="/business-setup-dubai-for-indians" className="btn btn-outline">Business Setup for Indians</Link>
              <Link href="/offshore-company-formation-uae" className="btn btn-outline">Offshore Company Formation</Link>
              <Link href="/golden-visa-uae" className="btn btn-outline">Apply for a UAE Golden Visa</Link>
              <Link href="/corporate-tax-uae" className="btn btn-outline">Register for Corporate Tax</Link>
              <Link href="/vat-registration-uae" className="btn btn-outline">VAT Registration</Link>
              <Link href="/corporate-banking-dubai" className="btn btn-outline">Open a Corporate Bank Account in Dubai</Link>
              <Link href="/calculator" className="btn btn-gold">Calculate Your Business Setup Cost</Link>
              <Link href="/insights/business-setup-dubai-guide" className="btn btn-outline">Read the Complete Business Setup Guide</Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {!isGoldenVisa && (
        <section className="section service-detail-section service-pattern-light" style={{ background: '#FAFAFA' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-14">
              <div>
                <div className="tag">FAQ</div>
                <h2 className="font-display text-4xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>Common Questions</h2>
                <p className="text-sm leading-relaxed" style={{ color: '#555555' }}>Have a question not answered here? Get in touch — we're happy to help.</p>
                <Link href="/contact" className="btn btn-outline mt-6">Ask Us Anything →</Link>
              </div>
              <div className="flex flex-col gap-0">
                {service.faq.map((item, i) => (
                  <FaqItem key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* RELATED SERVICES */}
      <section className="section service-detail-section service-pattern-light border-t" style={{ background: '#F5F5F5', borderColor: '#E0E0E0' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="tag">Related</div>
          <h2 className="font-display text-4xl font-medium mb-8" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {related.map(r => (
              <Link key={r.slug} href={getServiceCanonicalPath(r.slug)} className="card p-7 service-related-card" style={{ background: '#FAFAFA', borderColor: '#E0E0E0', textDecoration: 'none', color: '#0A0A0A' }}>
                <div className="text-2xl mb-3">{r.icon}</div>
                <h3 className="font-display text-lg font-medium mb-2" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>{r.title}</h3>
                <p className="text-xs mb-4 service-justify" style={{ color: '#555555' }}>{r.tagline}</p>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C9A84C' }}>Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="border-t group" style={{ borderColor: '#E0E0E0' }}>
      <summary className="flex items-center justify-between py-5 cursor-pointer list-none" style={{ color: '#0A0A0A' }}>
        <span className="font-medium text-base">{q}</span>
        <span className="ml-4 flex-shrink-0 text-lg" style={{ color: '#C9A84C' }}>+</span>
      </summary>
      <p className="pb-5 text-sm leading-relaxed service-justify" style={{ color: '#555555' }}>{a}</p>
    </details>
  )
}
