import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getServiceBySlug, services } from '@/lib/services-data'
import EnquiryForm from '@/components/EnquiryForm'
import Reveal from '@/components/Reveal'
import ImageBackdrop from '@/components/ImageBackdrop'
import { getServiceImage } from '@/lib/site-images'

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
  const serviceImage = getServiceImage(service.slug)

  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-24 relative overflow-hidden" style={{ background: 'var(--dark)' }}>
        <ImageBackdrop src={serviceImage} position="center right" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,160,96,0.06) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 80% at 70% 50%, rgba(201,160,96,0.05) 0%, transparent 70%)' }} />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="decor-vertical" />
          <div className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--ink-dim)' }}>
            <Link href="/" style={{ color: 'var(--ink-dim)' }}>Home</Link>
            <span>/</span>
            <Link href="/services" style={{ color: 'var(--ink-dim)' }}>Services</Link>
            <span>/</span>
            <span style={{ color: 'var(--gold)' }}>{service.title}</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_340px] gap-20 items-start">
            <div>
              <div className="text-4xl mb-6">{service.icon}</div>
              <div className="tag">Service</div>
              <h1 className="font-display mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4.5vw, 62px)', fontWeight: 500, lineHeight: 1.1 }}>
                {service.title}
              </h1>
              <p className="text-xl font-medium mb-6" style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
                "{service.tagline}"
              </p>
              <p className="text-base leading-relaxed mb-8 max-w-xl" style={{ color: 'var(--ink-muted)' }}>
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-gold">Get Started →</Link>
                <a href="https://wa.me/971502165471" className="btn btn-outline" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </div>
            </div>

            <div className="border p-8 rounded-sm" style={{ background: 'var(--dark-3)', borderColor: 'var(--gold-border)' }}>
              <div className="text-center mb-6 pb-6 border-b" style={{ borderColor: 'var(--border)' }}>
                <div className="font-display text-5xl font-medium" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', lineHeight: 1 }}>{service.heroStat}</div>
                <div className="text-xs mt-2 tracking-wide uppercase" style={{ color: 'var(--ink-muted)' }}>{service.heroStatLabel}</div>
              </div>
              <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--ink)' }}>Quick Enquiry</h3>
              <EnquiryForm preselectedService={service.title} />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section border-y" style={{ background: 'var(--dark-2)', borderColor: 'var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="tag">What's Included</div>
          <h2 className="font-display text-4xl font-medium mb-14" style={{ fontFamily: 'var(--font-display)' }}>Service Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {service.features.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="card p-8"
                  style={{ background: 'var(--dark-3)', borderColor: 'transparent' }}
                >
                  <div className="w-8 h-8 mb-4 border rounded-sm flex items-center justify-center text-sm" style={{ borderColor: 'var(--gold-border)', color: 'var(--gold)' }}>✦</div>
                  <h3 className="font-display text-lg font-medium mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="tag">Benefits</div>
              <h2 className="font-display text-4xl font-medium mb-6" style={{ fontFamily: 'var(--font-display)' }}>Why This Matters<br />for Your Business</h2>
              <div className="gold-divider" />
              <p className="text-base leading-relaxed" style={{ color: 'var(--ink-muted)', maxWidth: 440 }}>
                Every service we offer is designed with one goal: helping your UAE business succeed faster, with less friction and total compliance.
              </p>
              <div className="section-image mt-10" style={{ backgroundImage: `url('${serviceImage}')` }} />
            </Reveal>
            <Reveal delay={100}>
              <ul className="flex flex-col gap-4">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5" style={{ background: 'var(--gold-muted)', color: 'var(--gold)', border: '1px solid var(--gold-border)' }}>✓</span>
                    <span className="text-base" style={{ color: 'var(--ink-muted)' }}>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section border-y" style={{ background: 'var(--dark-2)', borderColor: 'var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tag justify-center">Process</div>
            <h2 className="font-display text-4xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>How We Work</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {service.process.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="p-10 border-l hover-card" style={{ borderColor: i === 0 ? 'transparent' : 'var(--border)' }}>
                  <div className="font-display text-6xl font-medium mb-4 select-none" style={{ fontFamily: 'var(--font-display)', color: 'var(--dark-5)', lineHeight: 1 }}>{step.step}</div>
                  <h3 className="font-display text-lg font-medium mb-2" style={{ fontFamily: 'var(--font-display)' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[340px_1fr] gap-20">
            <div>
              <div className="tag">FAQ</div>
              <h2 className="font-display text-4xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)' }}>Common Questions</h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>Have a question not answered here? Get in touch — we're happy to help.</p>
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
      <section className="section border-t" style={{ background: 'var(--dark-2)', borderColor: 'var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="tag">Related</div>
          <h2 className="font-display text-4xl font-medium mb-10" style={{ fontFamily: 'var(--font-display)' }}>Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5">
            {related.map(r => (
              <Link key={r.slug} href={`/services/${r.slug}`} className="card p-8" style={{ background: 'var(--dark-3)', textDecoration: 'none' }}>
                <div className="service-card-image" style={{ backgroundImage: `url('${getServiceImage(r.slug)}')` }} />
                <div className="text-2xl mb-3">{r.icon}</div>
                <h3 className="font-display text-lg font-medium mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}>{r.title}</h3>
                <p className="text-xs mb-4" style={{ color: 'var(--ink-muted)' }}>{r.tagline}</p>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>Learn More →</span>
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
    <details className="border-t group" style={{ borderColor: 'var(--border)' }}>
      <summary className="flex items-center justify-between py-5 cursor-pointer list-none" style={{ color: 'var(--ink)' }}>
        <span className="font-medium text-base">{q}</span>
        <span className="ml-4 flex-shrink-0 text-lg" style={{ color: 'var(--gold)' }}>+</span>
      </summary>
      <p className="pb-5 text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{a}</p>
    </details>
  )
}
