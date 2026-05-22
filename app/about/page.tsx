import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedCounter from '@/components/AnimatedCounter'
import Reveal from '@/components/Reveal'
import GeometricCorners from '@/components/GeometricCorners'

export const metadata: Metadata = {
  title: 'About Star One — Dubai Business Setup Experts',
  description: 'Learn about Star One, Dubai\'s trusted business setup and advisory firm helping entrepreneurs from the UK, US, South Africa and beyond establish their presence in the UAE.',
}

type TeamMember = {
  name: string
  role: string
  bio: string
  initials: string
  contact?: string
}

const team: TeamMember[] = [
  {
    name: 'Maria',
    role: 'Founder & Principal Consultant',
    bio: 'With over a decade of experience in UAE business formation, Maria has helped hundreds of entrepreneurs from the UK, US, and South Africa establish thriving businesses in Dubai.',
    initials: 'MA',
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
      <section className="pt-40 pb-24 relative overflow-hidden" style={{ background: '#0A0A0A', color: '#FAFAFA' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,160,96,0.06) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 30% 50%, rgba(201,160,96,0.05) 0%, transparent 70%)' }} />
        <GeometricCorners />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="decor-vertical" />
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="tag">About Us</div>
              <h1 className="font-display mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 500, lineHeight: 1.1, color: '#FAFAFA' }}>
                Dubai's Most<br /><em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Trusted Advisors</em>
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#888888' }}>
                Star One is a business setup and advisory firm based in Dubai, UAE. We specialise in helping entrepreneurs and business owners from around the world establish their companies legally and efficiently in the UAE.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#888888' }}>
                From company formation and trade licensing to visa processing, compliance, accounting, and HR — we are the single partner that covers every need, from your first question to your first hundred employees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section border-y relative section-corner-accent-lg" style={{ background: '#0A0A0A', color: '#FAFAFA', borderColor: '#333333' }}>
        {/* Decorative top divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5" style={{
          background: 'linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.3), transparent)',
        }} />
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-3" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(201, 168, 76, 0.05) 40px, rgba(201, 168, 76, 0.05) 41px)',
          pointerEvents: 'none',
        }} />
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="tag flex items-center gap-2">
              <span>Our Story</span>
              <span style={{ color: '#C9A84C' }}>✦</span>
            </div>
            <h2 className="font-display text-4xl font-medium mb-6" style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}>
              Built for <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>International</em><br />Entrepreneurs
            </h2>
            <div className="gold-divider" />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            <Reveal delay={100}>
              <div className="story-box-accent flex flex-col gap-5 text-base leading-relaxed p-6 rounded transition-all duration-300" style={{ color: '#888888', background: 'rgba(201, 168, 76, 0.05)', borderLeft: '3px solid rgba(201, 168, 76, 0.3)' }}>
                <p>
                  Star One was born from a simple observation: international entrepreneurs wanting to set up in Dubai were constantly let down — by fragmented advice, hidden fees, slow processes, and advisors who disappeared after the license was issued.
                </p>
                <p>
                  We built Star One to be different. We believe the best business relationships are long-term ones. So from day one, we've focused on being the firm that stays with you — through your first license, your first hire, your first audit, and your first expansion.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="story-box-accent flex flex-col gap-5 text-base leading-relaxed p-6 rounded transition-all duration-300" style={{ color: '#888888', background: 'rgba(201, 168, 76, 0.05)', borderLeft: '3px solid rgba(201, 168, 76, 0.3)' }}>
                <p>
                  Our clients come primarily from the UK, United States, and South Africa — entrepreneurs, investors, and professionals who see the UAE as the platform for their global ambitions. We understand their world, their expectations, and their timeline.
                </p>
                <p>
                  Today, Star One serves businesses across every sector — from solo consultants to multi-entity corporate structures — providing the full spectrum of services needed to thrive in the UAE.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div>
                <div className="offer-box-accent border p-8 rounded-sm relative overflow-hidden transition-all duration-300 hover:shadow-lg" style={{ background: '#111111', borderColor: '#333333' }}>
                  {/* Top border accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{
                    background: 'linear-gradient(90deg, #C9A84C, transparent)',
                  }} />
                  
                  <h3 className="font-display text-lg font-medium mb-5" style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}>What We Offer</h3>
                  <ul className="flex flex-col gap-3">
                    {[
                      'Business Setup (Mainland & Free Zone)',
                      'Employment & Golden Visa Processing',
                      'Accounting & Bookkeeping',
                      'VAT & Corporate Tax Filing',
                      'Compliance (UBO, ESR, AML, KYC)',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm" style={{ color: '#888888' }}>
                        <span style={{ color: '#C9A84C', flexShrink: 0 }}>✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section relative section-corner-accent" style={{ background: '#FAFAFA', color: '#0A0A0A' }}>
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none opacity-8" style={{
          background: 'radial-gradient(circle at center, #C9A84C 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div className="absolute bottom-0 right-0 w-56 h-56 pointer-events-none opacity-8" style={{
          background: 'radial-gradient(circle at center, #C9A84C 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        
        {/* Decorative top divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5" style={{
          background: 'linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.4), transparent)',
        }} />
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <div className="tag justify-center flex items-center gap-2 mb-2">
              <span>Our Values</span>
              <span style={{ color: '#C9A84C' }}>✦</span>
            </div>
            <h2 className="font-display text-4xl font-medium" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              How We <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Work</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="card p-6 relative overflow-hidden transition-all duration-300 hover:shadow-lg group border" style={{ background: '#FAFAFA', borderColor: '#E0E0E0', color: '#0A0A0A' }}>
                  {/* Icon - gold color, no background */}
                  <div className="mb-4" style={{ fontSize: '32px', color: '#C9A84C' }}>
                    {v.icon}
                  </div>
                  
                  <h3 className="font-display text-lg font-medium mb-2 group-hover:text-yellow-600 transition-colors" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#555555' }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section border-y relative section-corner-accent-subtle" style={{ background: '#0A0A0A', color: '#FAFAFA', borderColor: '#333333' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="tag">Leadership</div>
          <h2 className="font-display text-4xl font-medium mb-14" style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}>Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 max-w-3xl">
            {team.map((member, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card p-10" style={{ background: '#111111', borderColor: '#333333' }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-6"
                    style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid #C9A84C', color: '#C9A84C', fontFamily: 'var(--font-display)' }}>
                    {member.initials}
                  </div>
                  <h3 className="font-display text-xl font-medium" style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}>{member.name}</h3>
                  <div className="text-xs font-semibold tracking-wider uppercase mt-1 mb-1" style={{ color: '#C9A84C' }}>{member.role}</div>
                  {member.contact && (
                    <a href={`tel:${member.contact}`} className="text-xs mb-3 block" style={{ color: '#555555' }}>{member.contact}</a>
                  )}
                  <p className="text-sm leading-relaxed mt-4" style={{ color: '#888888' }}>{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TARGET MARKETS */}
      <section className="section" style={{ background: '#FAFAFA', color: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="tag">Who We Serve</div>
            <h2 className="font-display text-4xl font-medium mb-6" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Specialists for<br />International Founders
            </h2>
            <div className="gold-divider" />
            <p className="text-base leading-relaxed mb-10" style={{ color: '#555555', maxWidth: 800 }}>
              We serve entrepreneurs, investors, and business owners from around the world — with particular expertise in supporting clients from the UK, United States, and South Africa navigating the UAE business landscape.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { flag: '🇬🇧', country: 'United Kingdom', desc: 'UK entrepreneurs benefit from the UAE\'s zero personal tax, global connectivity, and proximity to European markets.' },
              { flag: '🇺🇸', country: 'United States', desc: 'US founders use Dubai as their MENA and South Asian headquarters, taking advantage of free trade agreements.' },
              { flag: '🇿🇦', country: 'South Africa', desc: 'South African professionals and businesses find the UAE an ideal, stable base for African continent operations.' },
              { flag: '🌍', country: 'Rest of World', desc: 'Entrepreneurs from India, Pakistan, Europe, and beyond — if you want to operate from Dubai, we can help.' },
            ].map((m, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex gap-4 items-start p-6 border rounded-sm h-full" style={{ background: '#FAFAFA', borderColor: '#E0E0E0' }}>
                  <span className="text-3xl flex-shrink-0">{m.flag}</span>
                  <div>
                    <div className="font-medium text-base mb-2" style={{ color: '#0A0A0A' }}>{m.country}</div>
                    <div className="text-sm leading-relaxed" style={{ color: '#555555' }}>{m.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn btn-gold">Book Your Free Consultation →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t" style={{ background: '#F5F5F5', borderColor: '#E0E0E0', color: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>Ready to Work Together?</h2>
          <p className="text-base mb-8 max-w-md mx-auto" style={{ color: '#555555' }}>
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
