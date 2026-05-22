import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getServiceBySlug, services } from '@/lib/services-data'
import EnquiryForm from '@/components/EnquiryForm'
import Reveal from '@/components/Reveal'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.description,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const related = services.filter(s => s.slug !== slug).slice(0, 3)
  const featureEmoji = ['🧩', '⚙️', '📌', '🛡️', '🚀', '✅']
  const processEmoji = ['📝', '🗂️', '🧠', '🎯']

  return (
    <>
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
                <Link href="/contact" className="btn btn-gold">Get Started →</Link>
                {slug === 'business-setup' && (
                  <Link href="/calculator" className="btn btn-outline">
                    Use Calculator →
                  </Link>
                )}
                <a href="https://wa.me/971502165471" className="btn btn-outline" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
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

      {/* FEATURES */}
      <section className="section service-detail-section service-pattern-dark border-y" style={{ background: '#0A0A0A', borderColor: '#555555' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="tag">What's Included</div>
          <h2 className="font-display text-4xl font-medium mb-10" style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}>Service Features <span style={{ color: '#C9A84C' }}>✦</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {service.features.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="service-card service-feature-card p-6 border"
                  style={{ background: '#111111', borderColor: '#333333', color: '#FAFAFA' }}
                >
                  <div className="mb-4" style={{ fontSize: '26px', color: '#C9A84C' }}>
                    {featureEmoji[i % featureEmoji.length]}
                  </div>
                  <h3 className="font-display text-base font-medium mb-2" style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed service-justify" style={{ color: '#AAAAAA' }}>{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section service-detail-section service-benefits-section service-pattern-light" style={{ background: '#FAFAFA' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="tag">Benefits</div>
            <h2 className="font-display text-3xl sm:text-4xl font-medium mb-3" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Why This Matters for Your Business
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-6 service-justify" style={{ color: '#555555', maxWidth: 780 }}>
              We design every service to help you move faster, stay compliant, and reduce operational friction.
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
            <div className="tag justify-center">Process</div>
            <h2 className="font-display text-4xl font-medium" style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}>How We Work</h2>
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

      {/* FAQ */}
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

      {/* RELATED SERVICES */}
      <section className="section service-detail-section service-pattern-light border-t" style={{ background: '#F5F5F5', borderColor: '#E0E0E0' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="tag">Related</div>
          <h2 className="font-display text-4xl font-medium mb-8" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {related.map(r => (
              <Link key={r.slug} href={`/services/${r.slug}`} className="card p-7 service-related-card" style={{ background: '#FAFAFA', borderColor: '#E0E0E0', textDecoration: 'none', color: '#0A0A0A' }}>
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
