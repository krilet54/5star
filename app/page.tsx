import type { Metadata } from 'next'
import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'
import { services } from '@/lib/services-data'
import AnimatedCounter from '@/components/AnimatedCounter'
import Reveal from '@/components/Reveal'
import ServicesFilter from '@/components/ServicesFilter'
import { formatDate } from '@/lib/utils'
import type { Article } from '@/types'

export const metadata: Metadata = {
  title: 'Star One — Business Setup & Advisory Dubai, UAE',
  description: 'Star One helps entrepreneurs set up companies in the UAE legally. Company formation, visas, compliance, accounting, golden visa — all under one roof.',
}

export const revalidate = 3600

export default async function HomePage() {
  const supabase = await createClient()
  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .eq('published', true)
    .order('featured', { ascending: false })
    .order('created_at', { ascending: false })
    .limit(3)

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{ background: 'var(--dark)' }}>
        {/* Hero background image (served from /public) */}
        <div className="absolute inset-0 hero-image" style={{
          backgroundImage: "url('/hero-image.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.32) saturate(0.7)',
        }} />
        {/* Background pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,160,96,0.07) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 60% at 65% 50%, rgba(201,160,96,0.06) 0%, transparent 70%)',
        }} />
        <div className="max-w-[1280px] mx-auto px-8 w-full relative z-10">
          <div className="decor-vertical" />
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-center py-20">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-10 border"
                style={{ borderColor: 'var(--gold-border)', color: 'var(--gold)' }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--gold)' }} />
                Dubai's Trusted Business Setup Advisors
              </div>

              <h1 className="font-display mb-6 leading-tight" style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(44px, 6vw, 84px)',
                fontWeight: 500,
                lineHeight: 1.08,
              }}>
                Your Business<br />
                in the UAE,<br />
                <em style={{ color: 'var(--gold)' }}>Done Right.</em>
              </h1>

              <p className="text-lg mb-10 max-w-lg" style={{ color: 'var(--ink-muted)', lineHeight: 1.8 }}>
                From company formation to visas, compliance, and beyond — Star One is your single partner for everything it takes to launch and grow in Dubai.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-gold">Start Your Journey →</Link>
                <Link href="/services" className="btn btn-outline">Explore Services</Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-10 mt-16 pt-10 border-t" style={{ borderColor: 'var(--border)' }}>
                {[
                  { value: 500, suffix: '+', label: 'Businesses Setup' },
                  { value: 12, suffix: '+', label: 'Years Experience' },
                  { value: 30, suffix: '+', label: 'Countries Served' },
                ].map((s, i) => (
                  <div key={i} className={i > 0 ? 'pl-10 border-l' : ''} style={{ borderColor: 'var(--border)' }}>
                    <div className="font-display text-4xl font-medium" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', lineHeight: 1 }}>
                      <AnimatedCounter target={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-xs mt-2 tracking-wide uppercase" style={{ color: 'var(--ink-muted)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero cards */}
            <div className="hidden lg:flex flex-col gap-4">
              {[
                { label: 'Business Setup', value: '3–5 Days', sub: 'Average company formation time' },
                { label: 'Free Consultation', value: '30 Minutes', sub: 'No-obligation strategy call' },
                { label: 'Global Reach', value: 'UK · US · ZA', sub: 'International founder specialists' },
              ].map((c, i) => (
                <div
                  key={i}
                  className="border-l-[3px] px-6 py-5 rounded-sm"
                  style={{ background: 'var(--dark-3)', borderColor: 'var(--border)', borderLeftColor: 'var(--gold)', borderTopWidth: '1px solid var(--border)', borderBottom: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}
                >
                  <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>✦ {c.label}</div>
                  <div className="font-display text-2xl" style={{ fontFamily: 'var(--font-display)' }}>{c.value}</div>
                  <div className="text-xs mt-1" style={{ color: 'var(--ink-muted)' }}>{c.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="overflow-hidden py-5 border-y" style={{ background: 'var(--dark-2)', borderColor: 'var(--border)' }}>
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, ri) =>
            ['Business Setup', 'Company Formation', 'Employment Visa', 'Golden Visa', 'Corporate Tax', 'Accounting', 'Trademark Registration', 'Bank Account Opening', 'HR Services', 'Legal Translation'].map((item, i) => (
              <span key={`${ri}-${i}`} className="flex items-center gap-5 text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--ink-dim)' }}>
                {item} <span style={{ color: 'var(--gold)' }}>✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ─── SERVICES OVERVIEW ─── */}
      <section className="section">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="services-header">
            <div>
              <div className="tag">What We Do</div>
              <h2 className="font-display text-5xl font-medium" style={{ fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
                Full-Spectrum<br />Business Services
              </h2>
            </div>
          </div>

          <div className="service-tabs">
            <button className="service-tab active">All Services</button>
            <button className="service-tab">Business Setup</button>
            <button className="service-tab">Compliance</button>
            <button className="service-tab">Corporate</button>
            <button className="service-tab">Ancillary</button>
          </div>

          <ServicesFilter />

          <div className="services-grid">
            <Reveal delay={0}>
              <div className="service-card" data-cat="setup">
                <div className="svc-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--gold)' }}>
                    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
                  </svg>
                </div>
                <h3>Business Consultancy</h3>
                <p>Expert guidance to find the right business structure, jurisdiction, and activity code for your venture.</p>
                <ul>
                  <li>Mainland & Free Zone setup</li>
                  <li>Activity code selection</li>
                  <li>Government approvals</li>
                  <li>Investor visa processing</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={50}>
              <div className="service-card" data-cat="setup">
                <div className="svc-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--gold)' }}>
                    <path d="M9 12h6M9 16h6M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3>Company Formation</h3>
                <p>End-to-end company registration and licensing — we handle every government touchpoint so you don't have to.</p>
                <ul>
                  <li>LLC, Sole Proprietorship, Branch</li>
                  <li>Free Zone company setup</li>
                  <li>License issuance & renewal</li>
                  <li>MoA & Articles preparation</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="service-card" data-cat="compliance">
                <div className="svc-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--gold)' }}>
                    <path d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3M9 7V6a2 2 0 012-2h2a2 2 0 012 2v1M9 7h6M15 11v4M12 14l-3-3 3-3" />
                  </svg>
                </div>
                <h3>Accounting & Bookkeeping</h3>
                <p>Professional financial management keeping your books clean, compliant, and ready for audit at any time.</p>
                <ul>
                  <li>Monthly bookkeeping</li>
                  <li>Financial statements</li>
                  <li>Payroll processing (WPS)</li>
                  <li>Audit & assurance</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="service-card" data-cat="compliance">
                <div className="svc-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--gold)' }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>VAT & Corporate Tax</h3>
                <p>Navigate UAE's evolving tax landscape with confidence. Accurate registration, filing, and planning support.</p>
                <ul>
                  <li>VAT registration & returns</li>
                  <li>Corporate Tax filing</li>
                  <li>ESR & AML compliance</li>
                  <li>UBO & KYC documentation</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="service-card" data-cat="corporate">
                <div className="svc-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--gold)' }}>
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <h3>Visa & Immigration</h3>
                <p>Comprehensive visa solutions for founders, employees, and families — handled from start to Emirates ID.</p>
                <ul>
                  <li>Employment visa processing</li>
                  <li>Golden Visa applications</li>
                  <li>Family & dependent visas</li>
                  <li>Emirates ID & National ID</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="service-card" data-cat="corporate">
                <div className="svc-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--gold)' }}>
                    <path d="M3 3h18v4H3zM3 10h18v4H3zM3 17h18v4H3z" />
                  </svg>
                </div>
                <h3>Corporate Services</h3>
                <p>Banking, legal, and documentation services that power your business operations from day one.</p>
                <ul>
                  <li>Bank account opening</li>
                  <li>Business plan drafting</li>
                  <li>Legal translation & attestation</li>
                  <li>Notary & Will services</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="service-card" data-cat="ancillary">
                <div className="svc-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--gold)' }}>
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3>HR & Payroll</h3>
                <p>Full-suite human resources support so you can focus on growing your team, not managing paperwork.</p>
                <ul>
                  <li>Payroll management (WPS)</li>
                  <li>Recruitment support</li>
                  <li>Trainings & onboarding</li>
                  <li>HR policy setup</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={350}>
              <div className="service-card" data-cat="ancillary">
                <div className="svc-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--gold)' }}>
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.07 4.93L4.93 19.07M4.93 4.93l14.14 14.14" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <h3>Marketing & Branding</h3>
                <p>From logo design and website development to social media — we help you show up with authority in the UAE market.</p>
                <ul>
                  <li>Website design & dev</li>
                  <li>Social media management</li>
                  <li>Marketing materials</li>
                  <li>Brand strategy</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="service-card" data-cat="ancillary">
                <div className="svc-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--gold)' }}>
                    <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3>Trademark & Strategy</h3>
                <p>Protect your brand and build for scale with trademark registration and strategic business planning.</p>
                <ul>
                  <li>Trademark registration (UAE)</li>
                  <li>IP protection advisory</li>
                  <li>Strategy building</li>
                  <li>Business plan & pitchdecks</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── WHY STAR ONE ─── */}
      <section className="section border-y" style={{ background: 'var(--dark-2)', borderColor: 'var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            <div className="pr-0 lg:pr-20 pb-12 lg:pb-0">
              <div className="tag">Why Star One</div>
              <h2 className="font-display text-5xl font-medium mb-6" style={{ fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
                One Partner.<br />Every Step.
              </h2>
              <div className="gold-divider" />
              <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--ink-muted)', maxWidth: 440 }}>
                Most entrepreneurs navigate UAE business setup alone — buried in paperwork, confused by regulations. Star One exists to change that.
              </p>
              <div className="flex flex-col gap-8">
                {[
                  { num: '01', title: 'End-to-End Support', desc: 'From your first question to your thousandth employee — we stay with you through every stage of growth.' },
                  { num: '02', title: 'UAE Regulatory Expertise', desc: 'Deep knowledge of mainland, free zone, and offshore structures — always up to date with UAE law.' },
                  { num: '03', title: 'International Founder Focus', desc: 'Specialists serving UK, US, and South African entrepreneurs setting up in Dubai.' },
                ].map(f => (
                  <div key={f.num} className="flex gap-5 items-start">
                    <span className="font-display text-5xl font-medium flex-shrink-0 w-14" style={{ fontFamily: 'var(--font-display)', color: 'var(--dark-5)', lineHeight: 1 }}>{f.num}</span>
                    <div>
                      <h4 className="text-sm font-semibold mb-1" style={{ color: 'var(--ink)' }}>{f.title}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t lg:border-t-0 lg:border-l pt-12 lg:pt-0 lg:pl-20 metrics-grid" style={{ borderColor: 'var(--border)' }}>
              {[
                { value: 500, suffix: '+', label: 'Companies Formed' },
                { value: 98, suffix: '%', label: 'Client Satisfaction' },
                { value: 30, suffix: '+', label: 'Countries Served' },
                { value: 12, suffix: '+', label: 'Years in Dubai' },
              ].map((s, i) => (
                <div key={i} className="metric p-8 text-center">
                  <div className="font-display text-5xl font-medium" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', lineHeight: 1 }}>
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs mt-2 tracking-wide" style={{ color: 'var(--ink-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="section">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <div className="tag justify-center">How It Works</div>
            <h2 className="font-display text-5xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>
              From Idea to <em style={{ color: 'var(--gold)' }}>Licensed Business</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 process-grid">
            {[
              { n: '01', title: 'Free Consultation', desc: "Book a 30-minute strategy session. We'll understand your goals, recommend the right structure, and map out the journey." },
              { n: '02', title: 'Documentation', desc: 'We collect and prepare all required documents — business plan, MoA, passport copies, and government forms.' },
              { n: '03', title: 'License & Approval', desc: 'We submit everything, liaise with authorities, and secure your trade license — typically within 3–5 business days.' },
              { n: '04', title: 'Launch & Beyond', desc: 'Visa processing, bank account opening, accounting, and ongoing compliance — with you from day one to year ten.' },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className="p-10 border-l hover-card transition-all duration-300"
                  style={{ borderColor: 'var(--border)', borderLeftColor: i === 0 ? 'transparent' : 'var(--border)' }}
                >
                  <div className="font-display text-7xl font-medium mb-4 select-none" style={{ fontFamily: 'var(--font-display)', color: 'var(--dark-5)', lineHeight: 1 }}>{step.n}</div>
                  <h3 className="font-display text-xl font-medium mb-3" style={{ fontFamily: 'var(--font-display)' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/contact" className="btn btn-gold">Start with a Free Consultation →</Link>
          </div>
        </div>
      </section>

      {/* ─── ARTICLES ─── */}
      {(articles && articles.length > 0) && (
        <section className="section border-t" style={{ background: 'var(--dark-2)', borderColor: 'var(--border)' }}>
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <div className="tag">Insights & Guides</div>
                <h2 className="font-display text-4xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>Business Setup<br />Knowledge Hub</h2>
              </div>
              <Link href="/insights" className="btn btn-outline">All Articles →</Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 mt-0.5">
              {articles.map((article: Article) => (
                <Link key={article.id} href={`/insights/${article.slug}`} className="card p-6" style={{ textDecoration: 'none' }}>
                  <div className="h-48 flex items-center justify-center relative overflow-hidden" style={{ background: 'var(--dark-4)' }}>
                    {article.cover_image ? (
                      <>
                        <img src={article.cover_image} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.18), rgba(0,0,0,0.33))' }} />
                      </>
                    ) : (
                      <>
                        <img src={`https://source.unsplash.com/800x600/?${encodeURIComponent(article.category || article.title.split(' ').slice(0,3).join(' '))}`} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--dark-4), var(--dark-5))' }} />
                      </>
                    )}
                    <div className="absolute top-3 left-3 px-2 py-0.5 text-xs font-bold tracking-wider" style={{ background: 'var(--gold)', color: '#000' }}>
                      {article.category}
                    </div>
                    <span className="relative z-10 text-4xl opacity-10">✦</span>
                  </div>
                  <div className="p-6">
                    <div className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--ink-dim)' }}>
                      {formatDate(article.created_at)} · {article.read_time} min
                    </div>
                    <h3 className="font-display text-lg font-medium mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)', lineHeight: 1.3 }}>{article.title}</h3>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--ink-muted)' }}>{article.excerpt}</p>
                    <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>Read More →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA BANNER ─── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201,160,96,0.06) 0%, transparent 70%)' }} />
        <div className="max-w-[1280px] mx-auto px-8 text-center relative z-10">
          <div className="tag justify-center">Ready to Begin?</div>
          <h2 className="font-display mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 500, lineHeight: 1.1 }}>
            Let's Build Your UAE<br />Business Together
          </h2>
          <p className="text-lg mb-10 max-w-lg mx-auto" style={{ color: 'var(--ink-muted)' }}>
            Book a free 30-minute consultation with our Dubai business setup experts. No obligation, no jargon — just clear guidance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn btn-gold">Book Free Consultation →</Link>
            <a href="https://wa.me/971502165471" className="btn btn-outline" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  )
}
