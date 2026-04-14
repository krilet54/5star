import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedCounter from '@/components/AnimatedCounter'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'About Star One — Dubai Business Setup Experts',
  description: 'Learn about Star One, Dubai\'s trusted business setup and advisory firm helping entrepreneurs from the UK, US, South Africa and beyond establish their presence in the UAE.',
}

const team = [
  {
    name: 'Fiona',
    role: 'Founder & Principal Consultant',
    bio: 'With over a decade of experience in UAE business formation, Fiona has helped hundreds of entrepreneurs from the UK, US, and South Africa establish thriving businesses in Dubai.',
    initials: 'FI',
  },
]

const values = [
  { icon: '🎯', title: 'Precision', desc: 'Every document, every filing, every application — handled with meticulous attention to detail.' },
  { icon: '🤝', title: 'Partnership', desc: "We're not just a service provider. We're your long-term business partner in the UAE." },
  { icon: '🔒', title: 'Integrity', desc: 'Transparent pricing, honest advice, and full confidentiality for every client.' },
  { icon: '⚡', title: 'Speed', desc: 'We move fast because we know your time has value. Setup in days, not months.' },
  { icon: '🌍', title: 'Global Thinking', desc: 'We understand international business because our clients come from everywhere.' },
  { icon: '📈', title: 'Growth-Focused', desc: 'Our services are designed to help you grow, not just to check compliance boxes.' },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-24 relative overflow-hidden" style={{ background: 'var(--dark)' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,160,96,0.06) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 30% 50%, rgba(201,160,96,0.05) 0%, transparent 70%)' }} />
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="tag">About Us</div>
              <h1 className="font-display mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 500, lineHeight: 1.1 }}>
                Dubai's Most Trusted<br /><em style={{ color: 'var(--gold)' }}>Business Advisors</em>
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--ink-muted)' }}>
                Star One is a business setup and advisory firm based in Dubai, UAE. We specialise in helping entrepreneurs and business owners from around the world establish their companies legally and efficiently in the UAE.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
                From company formation and trade licensing to visa processing, compliance, accounting, and HR — we are the single partner that covers every need, from your first question to your first hundred employees.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-0">
              {[
                { value: 500, suffix: '+', label: 'Businesses Setup' },
                { value: 12, suffix: '+', label: 'Years in Dubai' },
                { value: 30, suffix: '+', label: 'Countries Served' },
                { value: 98, suffix: '%', label: 'Client Satisfaction' },
              ].map((s, i) => (
                <div key={i} className="p-10 text-center border-r border-b" style={{ borderColor: 'var(--border)' }}>
                  <div className="font-display text-5xl font-medium" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', lineHeight: 1 }}>
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs mt-3 tracking-wide" style={{ color: 'var(--ink-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section border-y" style={{ background: 'var(--dark-2)', borderColor: 'var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid lg:grid-cols-[1fr_480px] gap-20 items-start">
            <Reveal>
              <div className="tag">Our Story</div>
              <h2 className="font-display text-4xl font-medium mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Built for International<br />Entrepreneurs
              </h2>
              <div className="gold-divider" />
              <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
                <p>
                  Star One was born from a simple observation: international entrepreneurs wanting to set up in Dubai were constantly let down — by fragmented advice, hidden fees, slow processes, and advisors who disappeared after the license was issued.
                </p>
                <p>
                  We built Star One to be different. We believe the best business relationships are long-term ones. So from day one, we've focused on being the firm that stays with you — through your first license, your first hire, your first audit, and your first expansion.
                </p>
                <p>
                  Our clients come primarily from the UK, United States, and South Africa — entrepreneurs, investors, and professionals who see the UAE as the platform for their global ambitions. We understand their world, their expectations, and their timeline.
                </p>
                <p>
                  Today, Star One serves businesses across every sector — from solo consultants to multi-entity corporate structures — providing the full spectrum of services needed to thrive in the UAE.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="border p-10 rounded-sm" style={{ background: 'var(--dark-3)', borderColor: 'var(--border)' }}>
                <h3 className="font-display text-2xl font-medium mb-6" style={{ fontFamily: 'var(--font-display)' }}>What We Offer</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'Business Setup (Mainland & Free Zone)',
                    'Employment & Golden Visa Processing',
                    'Accounting & Bookkeeping',
                    'VAT & Corporate Tax Filing',
                    'Compliance (UBO, ESR, AML, KYC)',
                    'Corporate Services & Bank Account Opening',
                    'HR & Payroll Management (WPS)',
                    'Trademark Registration',
                    'Business Strategy & Planning',
                    'Legal Translation & Document Attestation',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ color: 'var(--ink-muted)' }}>
                      <span style={{ color: 'var(--gold)', flexShrink: 0 }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
                  <Link href="/services" className="btn btn-gold w-full justify-center">View All Services →</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-14">
            <div className="tag justify-center">Our Values</div>
            <h2 className="font-display text-4xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>
              How We Work
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="card p-10" style={{ background: 'var(--dark-2)' }}>
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="font-display text-xl font-medium mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section border-y" style={{ background: 'var(--dark-2)', borderColor: 'var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="tag">Leadership</div>
          <h2 className="font-display text-4xl font-medium mb-14" style={{ fontFamily: 'var(--font-display)' }}>Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 max-w-3xl">
            {team.map((member, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card p-10" style={{ background: 'var(--dark-3)' }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-6"
                    style={{ background: 'var(--gold-muted)', border: '1px solid var(--gold-border)', color: 'var(--gold)', fontFamily: 'var(--font-display)' }}>
                    {member.initials}
                  </div>
                  <h3 className="font-display text-xl font-medium" style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}>{member.name}</h3>
                  <div className="text-xs font-semibold tracking-wider uppercase mt-1 mb-1" style={{ color: 'var(--gold)' }}>{member.role}</div>
                  {member.contact && (
                    <a href={`tel:${member.contact}`} className="text-xs mb-3 block" style={{ color: 'var(--ink-dim)' }}>{member.contact}</a>
                  )}
                  <p className="text-sm leading-relaxed mt-4" style={{ color: 'var(--ink-muted)' }}>{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TARGET MARKETS */}
      <section className="section">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="tag">Who We Serve</div>
              <h2 className="font-display text-4xl font-medium mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Specialists for<br />International Founders
              </h2>
              <div className="gold-divider" />
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--ink-muted)' }}>
                We serve entrepreneurs, investors, and business owners from around the world — with particular expertise in supporting clients from the UK, United States, and South Africa navigating the UAE business landscape.
              </p>
              <Link href="/contact" className="btn btn-gold">Book Your Free Consultation →</Link>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex flex-col gap-4">
                {[
                  { flag: '🇬🇧', country: 'United Kingdom', desc: 'UK entrepreneurs benefit from the UAE\'s zero personal tax, global connectivity, and proximity to European markets.' },
                  { flag: '🇺🇸', country: 'United States', desc: 'US founders use Dubai as their MENA and South Asian headquarters, taking advantage of free trade agreements.' },
                  { flag: '🇿🇦', country: 'South Africa', desc: 'South African professionals and businesses find the UAE an ideal, stable base for African continent operations.' },
                  { flag: '🌍', country: 'Rest of World', desc: 'Entrepreneurs from India, Pakistan, Europe, and beyond — if you want to operate from Dubai, we can help.' },
                ].map((m, i) => (
                  <div key={i} className="flex gap-4 items-start p-5 border rounded-sm" style={{ background: 'var(--dark-2)', borderColor: 'var(--border)' }}>
                    <span className="text-2xl flex-shrink-0">{m.flag}</span>
                    <div>
                      <div className="font-medium text-sm mb-1" style={{ color: 'var(--ink)' }}>{m.country}</div>
                      <div className="text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{m.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t" style={{ background: 'var(--dark-2)', borderColor: 'var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h2 className="font-display text-4xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)' }}>Ready to Work Together?</h2>
          <p className="text-base mb-8 max-w-md mx-auto" style={{ color: 'var(--ink-muted)' }}>
            Book a free consultation with our team and let's map out your UAE business journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn btn-gold">Book Free Consultation →</Link>
            <Link href="/services" className="btn btn-outline">Explore Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
