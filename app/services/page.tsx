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
          <div className="decor-vertical" />
          <div className="tag">Services</div>
          <h1 className="font-display mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 500, lineHeight: 1.1 }}>
            Complete UAE Business<br /><em style={{ color: 'var(--gold)' }}>Services</em>
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'var(--ink-muted)', lineHeight: 1.8 }}>
            Whatever your business needs — from the first license to ongoing compliance — Star One has the expertise to get it done right.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="services-header">
            <div>
              <div className="tag">What We Offer</div>
              <h2 className="font-display text-4xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>Complete UAE Business<br/>Services</h2>
            </div>
            <div>
              <p className="text-base leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
                Whatever your business needs — from the first license to ongoing compliance — Star One has the expertise to get it done right.
              </p>
            </div>
          </div>

          {/* Category 01 */}
          <div className="mt-12">
            <div className="tag" style={{ color: 'var(--ink-dim)', marginBottom: 12 }}>Category 01</div>
            <h3 className="font-display text-xl font-medium mb-4">Business Setup Services</h3>
            <p className="text-sm mb-6" style={{ color: 'var(--ink-muted)' }}>Everything you need to legally establish your company in the UAE, from license selection to government approvals.</p>

            <div className="services-grid">
              <Reveal delay={0}>
                <Link href="/services/business-setup" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">🏢</div>
                  <h3>Company Formation</h3>
                  <p>LLC, Sole Establishment, Civil Company — mainland and free zone options across all jurisdictions.</p>
                  <ul>
                    <li>LLC, Sole Establishment, Civil Company</li>
                    <li>Free Zone & Mainland options</li>
                    <li>License issuance & renewal</li>
                    <li>MoA & Articles preparation</li>
                  </ul>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>

              <Reveal delay={50}>
                <Link href="/services/business-setup" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">🏝️</div>
                  <h3>Free Zone Setup</h3>
                  <p>100% ownership in 40+ UAE Free Zones. We identify the best zone for your industry and budget.</p>
                  <ul>
                    <li>Free Zone selection</li>
                    <li>Company registration</li>
                    <li>Office solutions</li>
                    <li>Bank introductions</li>
                  </ul>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>

              <Reveal delay={100}>
                <Link href="/services/business-setup" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">🏛️</div>
                  <h3>Government Approvals</h3>
                  <p>Full government liaison — DED, MOHRE, ICA, and all relevant regulatory bodies handled for you.</p>
                  <ul>
                    <li>DED, MOHRE, ICA submissions</li>
                    <li>Authority approvals</li>
                    <li>Document attestation</li>
                    <li>Regulatory follow-up</li>
                  </ul>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Category 02 */}
          <div className="mt-16">
            <div className="tag" style={{ color: 'var(--ink-dim)', marginBottom: 12 }}>Category 02</div>
            <h3 className="font-display text-xl font-medium mb-4">Compliance Services</h3>
            <p className="text-sm mb-6" style={{ color: 'var(--ink-muted)' }}>Stay ahead of UAE regulatory requirements with our expert compliance and financial services.</p>

            <div className="services-grid">
              <Reveal delay={0}>
                <Link href="/services/accounting-bookkeeping" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">📒</div>
                  <h3>Accounting & Bookkeeping</h3>
                  <p>Professional financial record management, monthly reporting, and bank reconciliation.</p>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>

              <Reveal delay={50}>
                <Link href="/services/compliance" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">🔍</div>
                  <h3>Audit Services</h3>
                  <p>Statutory audits, internal audits, and compliance reviews by licensed UAE auditors.</p>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>

              <Reveal delay={100}>
                <Link href="/services/vat-corporate-tax" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">💹</div>
                  <h3>VAT & Corporate Tax</h3>
                  <p>Registration, filing, and advisory for UAE VAT (5%) and Corporate Tax (9%) compliance.</p>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>

              <Reveal delay={150}>
                <Link href="/services/compliance" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">🛡️</div>
                  <h3>ESR, AML & UBO</h3>
                  <p>Economic Substance Regulations, Anti-Money Laundering compliance, and UBO registration.</p>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>

              <Reveal delay={200}>
                <Link href="/services/compliance" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">📊</div>
                  <h3>KYC Compliance</h3>
                  <p>Know Your Customer due diligence, customer risk assessment, and ongoing monitoring.</p>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Category 03 */}
          <div className="mt-16">
            <div className="tag" style={{ color: 'var(--ink-dim)', marginBottom: 12 }}>Category 03</div>
            <h3 className="font-display text-xl font-medium mb-4">Corporate Services</h3>
            <p className="text-sm mb-6" style={{ color: 'var(--ink-muted)' }}>Essential post-setup corporate services to keep your business running smoothly.</p>

            <div className="services-grid">
              <Reveal delay={0}>
                <Link href="/services/visa-immigration" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">🛂</div>
                  <h3>Employment Visa</h3>
                  <p>End-to-end employee visa processing including labour approvals, entry permits, and Emirates ID.</p>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>

              <Reveal delay={50}>
                <Link href="/services/visa-immigration" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">⭐</div>
                  <h3>Golden Visa</h3>
                  <p>10-year UAE residency for investors, entrepreneurs, and specialised talent.</p>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>

              <Reveal delay={100}>
                <Link href="/services/visa-immigration" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">👨‍👩‍👧‍👦</div>
                  <h3>Family Visa</h3>
                  <p>Sponsor your spouse, children, and dependents for UAE residency with full support.</p>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>

              <Reveal delay={150}>
                <Link href="/services/corporate-services" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">🏦</div>
                  <h3>Bank Account Opening</h3>
                  <p>Corporate bank account setup across leading UAE banks — we prepare and submit all documentation.</p>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>

              <Reveal delay={200}>
                <Link href="/services/corporate-services" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">📜</div>
                  <h3>Legal Translation & Attestation</h3>
                  <p>Certified translation and official attestation of documents for UAE government use.</p>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>

              <Reveal delay={250}>
                <Link href="/services/corporate-services" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">✍️</div>
                  <h3>Notary & Will Services</h3>
                  <p>Official notarisation and DIFC will registration for expats living in the UAE.</p>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Category 04 */}
          <div className="mt-16">
            <div className="tag" style={{ color: 'var(--ink-dim)', marginBottom: 12 }}>Category 04</div>
            <h3 className="font-display text-xl font-medium mb-4">Ancillary Services</h3>
            <p className="text-sm mb-6" style={{ color: 'var(--ink-muted)' }}>Value-added services to help your business grow, protect your brand, and build a strong team.</p>

            <div className="services-grid">
              <Reveal delay={0}>
                <Link href="/services/hr-payroll" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">💼</div>
                  <h3>Payroll Management</h3>
                  <p>Full payroll processing, WPS registration and compliance.</p>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>

              <Reveal delay={50}>
                <Link href="/services/trademark-strategy" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">🔖</div>
                  <h3>Trademark Registration</h3>
                  <p>UAE and international trademark filing to protect your brand identity and intellectual property.</p>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>

              <Reveal delay={100}>
                <Link href="/services/corporate-services" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">📱</div>
                  <h3>Marketing Services</h3>
                  <p>Website design, marketing materials, and social media management to grow your brand.</p>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>

              <Reveal delay={150}>
                <Link href="/services/corporate-services" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">📋</div>
                  <h3>Business Plan Drafting</h3>
                  <p>Professional business plans for bank submissions, investor presentations, and visa applications.</p>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>

              <Reveal delay={200}>
                <Link href="/services/corporate-services" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="svc-icon">🎯</div>
                  <h3>Strategy & Training</h3>
                  <p>Business strategy building, implementation support, and staff training programs.</p>
                  <div className="svc-arrow">Learn More →</div>
                </Link>
              </Reveal>
            </div>
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
