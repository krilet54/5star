import type { Metadata } from 'next'
import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'
import { services } from '@/lib/services-data'
import AnimatedCounter from '@/components/AnimatedCounter'
import Reveal from '@/components/Reveal'
import ServicesFilter from '@/components/ServicesFilter'
import { formatDate } from '@/lib/utils'
import type { Article } from '@/types'
import { getArticleFallbackImage } from '@/lib/site-images'

export const metadata: Metadata = {
  title: 'Star One — Business Setup & Advisory Dubai, UAE',
  description: 'Build. Launch. Grow. Your business in the UAE — set up simply, properly, and built to last. From company formation to visas, compliance, and banking.',
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
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">
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
                Build. Launch.<br />
                <em style={{ color: 'var(--gold)' }}>Grow.</em>
              </h1>

              <p className="text-lg mb-6 max-w-lg font-medium" style={{ color: 'var(--ink)', lineHeight: 1.8 }}>
                Your business in the UAE — set up simply, properly, and built to last.
              </p>

              <p className="text-base mb-10 max-w-lg" style={{ color: 'var(--ink-muted)', lineHeight: 1.8 }}>
                From company formation and licensing to visas, compliance, and banking — Star One is your one-stop partner for everything you need to start and grow your business in Dubai.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-gold">Get Started →</Link>
                <Link href="/services" className="btn btn-outline">Explore Services</Link>
              </div>

              {/* Stats */}
              <div className="hero-stats flex flex-wrap items-center gap-10 mt-16 pt-10 border-t" style={{ borderColor: 'var(--border)' }}>
                {[
                  { value: 500, suffix: '+', label: 'Companies Formed' },
                  { value: 12, suffix: '+', label: 'Years in Dubai' },
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

      {/* ─── 3-STEP PROCESS ─── */}
      <section className="section border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="tag justify-center">How It Works</div>
            <h2 className="font-display text-5xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>
              Your Journey to a <em style={{ color: 'var(--gold)' }}>Licensed Business</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 process-grid">
            {[
              { n: '01', title: 'Free Strategy Session', desc: 'Book a 30-minute consultation with our Dubai experts. We\'ll understand your vision, recommend the right business structure, and outline your path forward.' },
              { n: '02', title: 'Document Preparation & Submission', desc: 'We handle every detail — business plans, MOA, shareholder docs, government forms, and visa applications. Sit back while we manage the paperwork.' },
              { n: '03', title: 'Company Registration & Banking', desc: 'Your trade license, bank account, visa processing, and ongoing compliance. We stay with you from day one through launch and beyond.' },
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
        </div>
      </section>

      {/* ─── WHY STAR ONE ─── */}
      <section className="section border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            <div className="pr-0 lg:pr-20 pb-12 lg:pb-0">
              <div className="tag">Why Choose Us</div>
              <h2 className="font-display text-5xl font-medium mb-6" style={{ fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
                Every step.<br />Every service.<br />One partner.
              </h2>
              <div className="gold-divider" />
              <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--ink-muted)', maxWidth: 440 }}>
                Most entrepreneurs navigate UAE business setup alone. We change that. From your first consultation to your 100th employee, Star One stays with you.
              </p>
              <div className="flex flex-col gap-8">
                {[
                  { num: '01', title: 'Comprehensive Services', desc: 'Business setup, visas, compliance, banking, accounting, HR, branding — everything under one roof, no coordinator needed.' },
                  { num: '02', title: 'UAE Regulatory Expertise', desc: 'Deep knowledge of mainland, free zone, and offshore structures. Always updated with the latest UAE laws and government requirements.' },
                  { num: '03', title: 'International Founder Focus', desc: 'Specialists serving entrepreneurs from the UK, US, South Africa, and beyond setting up in Dubai. We speak your language, understand your markets.' },
                  { num: '04', title: 'Speed & Reliability', desc: 'Most setups complete in 3–5 business days. You\'ll work with the same trusted advisor throughout, not a call center.' },
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

      {/* ─── SERVICES OVERVIEW ─── */}
      <section className="section border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="services-header">
            <div>
              <div className="tag">Our Services</div>
              <h2 className="font-display text-5xl font-medium" style={{ fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
                Everything to<br />launch & scale
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 mt-8">
            {services.slice(0, 6).map((service, idx) => (
              <Reveal key={service.slug} delay={idx * 50}>
                <Link href={`/services/${service.slug}`} className="card p-8" style={{ textDecoration: 'none' }}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="font-display text-xl font-medium mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-muted)' }}>
                    {service.tagline}
                  </p>
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
                    Learn More →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-outline">View All 20 Services →</Link>
          </div>
        </div>
      </section>

      {/* ─── PACKAGES ─── */}
      <section className="section border-b" style={{ background: 'var(--dark-2)', borderColor: 'var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="tag justify-center">Pricing Plans</div>
            <h2 className="font-display text-5xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>
              Plans for Every <em style={{ color: 'var(--gold)' }}>Stage</em>
            </h2>
            <p className="text-base mt-6" style={{ color: 'var(--ink-muted)', maxWidth: 500, margin: '0 auto' }}>
              Whether you're starting solo or scaling fast, we have a package designed for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Setup',
                price: 'AED 8,000',
                billing: 'one-time',
                desc: 'Perfect for solopreneurs and freelancers',
                features: [
                  'Business consultancy',
                  'Company formation (mainland)',
                  'Trade license',
                  'Bank account opening',
                  'Basic accounting setup',
                  'Email support',
                ],
              },
              {
                name: 'Growth Package',
                price: 'AED 15,500',
                billing: 'one-time',
                desc: 'For growing teams and ambitious startups',
                features: [
                  'All Basic Setup services',
                  'Employment visa (1 sponsored)',
                  'VAT registration & setup',
                  'Monthly bookkeeping',
                  'HR & payroll consulting',
                  'Priority support',
                ],
                highlighted: true,
              },
              {
                name: 'Advanced Compliance',
                price: 'AED 24,000+',
                billing: 'one-time',
                desc: 'For established companies & complex structures',
                features: [
                  'All Growth services',
                  'Multiple employment visas',
                  'Full audit & assurance',
                  'Corporate tax planning',
                  'Compliance audits (AML, ESR, KYC, UBO)',
                  'Dedicated account manager',
                ],
              },
            ].map((pkg, i) => (
              <Reveal key={i} delay={i * 100}>
                <div
                  className="p-8 rounded-lg border transition-all duration-300 hover:shadow-lg"
                  style={{
                    background: pkg.highlighted ? 'var(--dark-3)' : 'var(--dark)',
                    borderColor: pkg.highlighted ? 'var(--gold)' : 'var(--border)',
                    borderWidth: pkg.highlighted ? '2px' : '1px',
                  }}
                >
                  {pkg.highlighted && (
                    <div className="inline-block px-3 py-1 rounded text-xs font-semibold tracking-widest uppercase mb-4" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-display text-2xl font-medium mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {pkg.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: 'var(--ink-muted)' }}>
                    {pkg.desc}
                  </p>
                  <div className="mb-6 pb-6 border-b" style={{ borderColor: 'var(--border)' }}>
                    <div className="font-display text-4xl font-medium" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}>
                      {pkg.price}
                    </div>
                    <div className="text-xs mt-2" style={{ color: 'var(--ink-muted)' }}>
                      {pkg.billing === 'one-time' ? 'One-time setup' : 'Per month + setup'}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex gap-3 items-start text-sm">
                        <span style={{ color: 'var(--gold)' }}>✓</span>
                        <span style={{ color: 'var(--ink-muted)' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/calculator" className={`block py-3 px-4 text-center rounded font-medium transition ${
                    pkg.highlighted ? 'btn btn-gold' : 'btn btn-outline'
                  }`}>
                    Learn More & Calculate
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm mb-4" style={{ color: 'var(--ink-muted)' }}>
              Not sure which plan is right for you?
            </p>
            <Link href="/contact" className="btn btn-gold">Get a Free Consultation →</Link>
          </div>
        </div>
      </section>

      {/* ─── ARTICLES ─── */}
      {(articles && articles.length > 0) && (
        <section className="section border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
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
                        <img src={getArticleFallbackImage(article.category)} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
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
      <section className="py-32 relative overflow-hidden border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201,160,96,0.06) 0%, transparent 70%)' }} />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="tag justify-center">Ready to Launch?</div>
          <h2 className="font-display mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 500, lineHeight: 1.1 }}>
            Let's Build Your UAE<br />Business Today
          </h2>
          <p className="text-lg mb-10 max-w-lg mx-auto" style={{ color: 'var(--ink-muted)' }}>
            Book a free 30-minute consultation with our Dubai business setup experts. No obligation, no sales pitch — just expert guidance to get you started.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn btn-gold">Get Started →</Link>
            <a href="https://wa.me/971502165471" className="btn btn-outline" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  )
}
