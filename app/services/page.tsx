import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/lib/services-data'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Our Services — Business Setup, Visa, Compliance & More',
  description: 'Explore all Star One services: business setup, company formation, employment visa, golden visa, VAT, corporate tax, accounting, HR, and more.',
}

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="pt-40 pb-20 relative overflow-hidden" style={{ background: 'var(--dark)' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,160,96,0.06) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="tag">Services</div>
          <h1 className="font-display mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 500, lineHeight: 1.1 }}>
            Everything You Need to<br /><em style={{ color: 'var(--gold)' }}>Succeed in the UAE</em>
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'var(--ink-muted)', lineHeight: 1.8 }}>
            From the moment you decide to launch until the day your business is thriving — Star One provides every service your UAE company needs.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="services-header">
            <div>
              <div className="tag">What We Do</div>
              <h2 className="font-display text-4xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>Full-Spectrum Business Services</h2>
            </div>
            <div>
              <p className="text-base leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
                From your first question to your first hire and beyond — we provide everything an entrepreneur needs to thrive in the UAE market.
              </p>
            </div>
          </div>

          <div className="services-grid">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <Link href={`/services/${service.slug}`} className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">{service.icon}</div>
                  <h3>{service.title.split(' — ')[0] || service.title}</h3>
                  <p>{service.tagline || service.description}</p>
                  <ul>
                    {service.features.slice(0, 4).map((f, idx) => (
                      <li key={idx}>{f.title}</li>
                    ))}
                  </ul>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t" style={{ background: 'var(--dark-2)', borderColor: 'var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h2 className="font-display text-4xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)' }}>Not Sure Which Service You Need?</h2>
          <p className="text-base mb-8 max-w-md mx-auto" style={{ color: 'var(--ink-muted)' }}>
            Book a free consultation and our advisors will assess your situation and recommend the right services for your business.
          </p>
          <Link href="/contact" className="btn btn-gold">Book Free Consultation →</Link>
        </div>
      </section>
    </>
  )
}
