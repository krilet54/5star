import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'
import AnimatedCounter from '@/components/AnimatedCounter'
import Reveal from '@/components/Reveal'
import ServicesFilter from '@/components/ServicesFilter'
import HoverButton from '@/components/HoverButton'
import ArticleCoverImage from '@/components/ArticleCoverImage'
import { formatDate } from '@/lib/utils'
import { getArticleImage } from '@/lib/article-images'
import { getArticleFallbackImage } from '@/lib/site-images'
import type { Article } from '@/types'
import { getServiceCanonicalPath } from '@/lib/seo'
import { SITE_INFO } from '@/lib/site-info'

export const metadata: Metadata = {
  title: 'Business Setup Dubai | Company Formation UAE | Star One',
  description: "Star One is Dubai's trusted business setup consultancy. We help entrepreneurs set up companies, get visas, handle tax, and stay compliant. Book a free consultation.",
  alternates: { canonical: '/' },
}

export const revalidate = 3600

const coreServiceBlocks = [
  {
    title: 'Business Setup & Company Formation',
    icon: '🏢',
    desc: 'Mainland, Free Zone, and Offshore structures built for the right launch path.',
    details: 'Mainland · Free Zone · Offshore',
    href: getServiceCanonicalPath('business-setup'),
  },
  {
    title: 'Visa & Residency',
    icon: '⭐',
    desc: 'Golden, employment, dependent, and visit visa support under one roof.',
    details: 'Golden Visa · Employment · Dependent · Visit',
    href: '/services#visa-residency',
  },
  {
    title: 'Compliance & Tax',
    icon: '📊',
    desc: 'Corporate tax, VAT, audit, ESR, AML, KYC, and UBO compliance support.',
    details: 'Tax · VAT · Audit · ESR · AML · KYC · UBO',
    href: '/services#compliance-tax',
  },
  {
    title: 'Banking & Finance',
    icon: '🏦',
    desc: 'Corporate and personal banking plus accounting and bookkeeping support.',
    details: 'Banking · Accounting · Bookkeeping',
    href: '/services#banking-finance',
  },
  {
    title: 'HR & Operations',
    icon: '👥',
    desc: 'HR, payroll, and operational support that keeps the business moving.',
    details: 'HR · Payroll · Operations',
    href: '/services#hr-operations',
  },
  {
    title: 'IP & Ancillary',
    icon: '⚖️',
    desc: 'Trademark, branding, attestation, and other supporting business services.',
    details: 'Trademark · Branding · Attestation · Wills',
    href: '/services#ip-ancillary',
  },
]

const partnerLogos = [
  { name: 'Ajman Free Zone', src: '/ajmanfreezone.png', width: 220, height: 96 },
  { name: 'DMCC', src: '/dmcc-seeklogo.png', width: 200, height: 96 },
  { name: 'Dubai Economy', src: '/dubai-economy-new-seeklogo.png', width: 220, height: 96 },
  { name: 'IFZA', src: '/IFZA logo long - Edited_Transparent.png', width: 240, height: 96 },
  { name: 'JAFZA', src: '/jafza-logo.png', width: 220, height: 96 },
  { name: 'RAKEZ', src: '/RAKEZ_Logo_-_English_-_Standard_(Web)_Small.png', width: 240, height: 96 },
  { name: 'Sharjah Publishing City', src: '/spc logo png.webp', width: 220, height: 96 },
]

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
      <section className="home-hero-clean relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-32" style={{ width: '100%' }}>
        {/* Background image placed behind hero content. */}
        <div className="absolute inset-0 pointer-events-none" style={{
          zIndex: 0,
        }} />

        <Image
          src="/hero-bg.png"
          alt="Dubai business setup hero background"
          fill
          priority
          sizes="100vw"
          quality={72}
          className="object-cover object-center"
        />

        {/* Optional subtle dark overlay for text contrast */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(rgba(10,10,10,0.45), rgba(10,10,10,0.35))',
          zIndex: 1,
        }} />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 gap-12 items-center py-12 lg:py-20">
            {/* Left column */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 border" style={{ borderColor: 'rgba(201,168,76,0.6)', color: '#C9A84C' }}>
                <span className="w-2 h-2 rounded-full" style={{ background: '#C9A84C' }} />
                Dubai's Trusted Business Setup Advisors
              </div>

              <h1 className="font-display mb-8 leading-tight" style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(44px, 7vw, 88px)',
                fontWeight: 600,
                lineHeight: 1.05,
                color: '#FAFAFA',
              }}>
                Build. Launch.<br />
                <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Grow.</em>
              </h1>

              <p className="text-base mb-6 max-w-xl font-normal" style={{ color: '#E8E8E8', lineHeight: 1.8 }}>
                Your business in the UAE — set up simply, properly, and built to last.
              </p>

              <p className="text-sm mb-10 max-w-xl" style={{ color: '#AAAAAA', lineHeight: 1.8 }}>
                From company formation and licensing to visas, compliance, and banking — Star One is your one-stop partner for everything you need to start and grow your business in Dubai.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-gold">Get Started →</Link>
                <Link href="/services" className="btn btn-outline" style={{ color: '#FAFAFA', borderColor: '#FAFAFA' }}>Explore Services →</Link>
              </div>
            </div>

          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center" style={{ color: 'rgba(201,168,76,0.5)' }}>
            <div className="text-xs font-semibold tracking-widest uppercase mb-3">Scroll to explore</div>
            <div className="text-xl animate-bounce">↓</div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="overflow-hidden py-5 border-y relative" style={{ background: '#C9A84C', borderColor: '#C9A84C' }}>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(10,10,10,0.1) 10px, rgba(10,10,10,0.1) 20px)',
          pointerEvents: 'none',
        }} />
        <div className="flex gap-16 animate-marquee whitespace-nowrap relative z-10">
          {[...Array(2)].map((_, ri) =>
            ['Business Setup', 'Company Formation', 'Employment Visa', 'Golden Visa', 'Corporate Tax', 'Accounting', 'Trademark Registration', 'Bank Account Opening', 'HR Services', 'Legal Translation'].map((item, i) => (
              <span key={`${ri}-${i}`} className="flex items-center gap-5 text-xs font-semibold tracking-widest uppercase" style={{ color: '#0A0A0A' }}>
                {item} <span style={{ color: '#0A0A0A' }}>✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ─── 3-STEP PROCESS ─── */}
      <section className="section border-b relative section-corner-accent" style={{ background: '#F5F5F5', borderColor: '#E0E0E0' }}>
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none opacity-20" style={{
          background: 'linear-gradient(135deg, #C9A84C 0%, transparent 70%)',
          borderRadius: '0 0 100% 0',
        }} />
        <div className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none opacity-15" style={{
          background: 'linear-gradient(315deg, #C9A84C 0%, transparent 70%)',
          borderRadius: '100% 0 0 0',
        }} />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="tag justify-center">How It Works</div>
            <h2 className="font-display text-5xl font-medium" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Your business set up in 3 easy steps
            </h2>
          </div>
          <div className="process-rectangle">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 process-grid">
            {[
              { n: '1', title: 'Tell Us Your Plan', desc: 'Explain your business concept and goals. We help you choose the right setup for success.' },
              { n: '2', title: 'Leave the Process to Us', desc: 'From approvals to licensing, we take care of the paperwork and coordination.' },
              { n: '3', title: 'Get Ready to Operate', desc: 'Your company is ready to launch, and you can start running your business confidently.' },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className="frame-with-corners p-10 border-l hover-card transition-all duration-300 relative overflow-hidden timeline-step"
                  style={{
                    borderColor: '#E0E0E0',
                    borderLeftColor: i === 0 ? 'transparent' : '#C9A84C',
                    backgroundColor: '#FAFAFA',
                    color: '#0A0A0A',
                    borderLeftWidth: i === 0 ? '1px' : '3px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full" style={{ background: '#C9A84C', opacity: 0.7 }} />
                  <div className="absolute top-9 right-3 w-1 h-1 rounded-full" style={{ background: '#C9A84C', opacity: 0.4 }} />
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{
                    background: 'linear-gradient(90deg, #C9A84C, transparent)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }} />
                  {i < 2 && (
                    <div
                      className="hidden lg:block absolute top-8 bottom-8 -right-px w-px"
                      style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)' }}
                    />
                  )}

                  <div className="relative z-10">
                    <div className="font-display text-7xl font-medium mb-4 select-none" style={{ fontFamily: 'var(--font-display)', color: '#C9A84C', lineHeight: 1 }}>{step.n}</div>
                    <h3 className="font-display text-xl font-medium mb-3" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#555555' }}>{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY STAR ONE ─── */}
      <section className="section border-b relative section-corner-accent" style={{ background: '#FAFAFA', borderColor: '#E0E0E0', zIndex: 30 }}>
        {/* Section decorative top divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5" style={{
          background: 'linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.4), transparent)',
        }} />
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="mb-12 max-w-2xl">
            <div className="tag">Why Star One?</div>
            <h2 className="font-display text-4xl lg:text-5xl font-medium mb-4 relative" style={{ fontFamily: 'var(--font-display)', lineHeight: 1.1, color: '#0A0A0A' }}>
              Why Star One?
            </h2>
          </div>

          {/* Features Grid - 2x2 on desktop, 1x4 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8" style={{ zIndex: 40 }}>
            {[
              { icon: '01', num: '01', title: 'Trusted Expertise', desc: 'Professional guidance backed by industry experience.' },
              { icon: '02', num: '02', title: 'Hassle-Free Setup', desc: 'We manage the process while you focus on your business.' },
              { icon: '03', num: '03', title: 'Fast Approvals', desc: 'Efficient coordination with authorities to save you time.' },
              { icon: '04', num: '04', title: 'Long-Term Support', desc: 'Continuous assistance after your business is launched.' },
            ].map(f => (
              <div key={f.num} className="feature-box-accent p-6 rounded transition-all duration-300 border" style={{ 
                background: 'rgba(201, 168, 76, 0.05)',
                borderColor: 'rgba(201, 168, 76, 0.2)',
              }}>
                {/* Icon and number row */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-display text-3xl font-medium" style={{ fontFamily: 'var(--font-display)', color: '#C9A84C', lineHeight: 1 }}>{f.icon}</span>
                </div>
                
                {/* Content */}
                <h4 className="text-base font-semibold mb-2" style={{ color: '#0A0A0A' }}>{f.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#555555' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES OVERVIEW ─── */}
      <section className="section border-b relative overflow-hidden section-corner-accent-lg" style={{ background: '#0A0A0A', borderColor: '#555555' }}>
        {/* Decorative grid background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(201, 168, 76, 0.1) 25%, rgba(201, 168, 76, 0.1) 26%, transparent 27%, transparent 74%, rgba(201, 168, 76, 0.1) 75%, rgba(201, 168, 76, 0.1) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(201, 168, 76, 0.1) 25%, rgba(201, 168, 76, 0.1) 26%, transparent 27%, transparent 74%, rgba(201, 168, 76, 0.1) 75%, rgba(201, 168, 76, 0.1) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
        }} />

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-10" style={{
          background: 'radial-gradient(circle at bottom-left, #C9A84C 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        
        {/* Decorative top divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5" style={{
          background: 'linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.4), transparent)',
        }} />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="services-header services-header-centered mb-12">
            <div>
              <div className="tag">Our Services</div>
              <h2 className="font-display text-5xl font-medium" style={{ fontFamily: 'var(--font-display)', lineHeight: 1.1, color: '#FAFAFA' }}>
                6 Core Services<br /><em style={{ color: '#C9A84C', fontStyle: 'italic' }}>to launch & scale</em>
              </h2>
              
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {coreServiceBlocks.map((service, idx) => (
              <Reveal key={service.title} delay={idx * 50}>
                <Link href={service.href} className="service-card p-8 relative overflow-hidden transition-all duration-300 hover:border-t-2 h-full flex flex-col" style={{ textDecoration: 'none', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(201, 168, 76, 0.1)', borderTopColor: '#C9A84C', minHeight: 260 }}>
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.3), transparent)' }} />
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full" style={{ background: '#C9A84C', opacity: 0.6 }} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="text-5xl mb-4 transition-all duration-300">{service.icon}</div>
                    <h3 className="font-display text-xl font-medium mb-2" style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}>
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: '#AAAAAA' }}>
                      {service.desc}
                    </p>
                    <div className="text-[11px] uppercase tracking-[0.18em] mb-4" style={{ color: '#C9A84C' }}>
                      {service.details}
                    </div>
                    <div className="h-px mb-4 mt-auto" style={{
                      background: 'linear-gradient(90deg, rgba(201, 168, 76, 0.3), transparent)',
                    }} />
                    <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C9A84C' }}>
                      Learn More →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-12 pt-8 border-t" style={{ borderColor: 'rgba(201, 168, 76, 0.2)' }}>
            <HoverButton href="/services" className="btn btn-outline">View All Services →</HoverButton>
          </div>
        </div>
      </section>

      {/* ─── PACKAGES ─── */}
      <section className="section border-b relative section-corner-accent" style={{ background: '#F5F5F5', borderColor: '#E0E0E0' }}>
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none opacity-10" style={{
          background: 'radial-gradient(circle at center, #C9A84C 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none opacity-8" style={{
          background: 'radial-gradient(circle at center, #C9A84C 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        
        {/* Decorative top divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5" style={{
          background: 'linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.4), transparent)',
        }} />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="tag justify-center">Pricing Plans</div>
            <h2 className="font-display text-5xl font-medium" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Plans for Every <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Stage</em>
            </h2>
            <p className="text-base mt-6" style={{ color: '#555555', maxWidth: 500, margin: '0 auto' }}>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Setup',
                price: 'AED 5,750',
                billing: 'one-time',
                desc: 'Perfect for solopreneurs and freelancers',
                features: [
                  'Trade license',
                  'Combine up to 10 media related activities',
                  '50 shareholders permitted',
                  'Formation Certificate',
                  'Share Certificate',
                  'MOA',
                  'Lease agreement',
                ],
              },
              {
                name: 'Growth Setup',
                price: 'AED 10,800',
                billing: 'one-time',
                desc: 'For growing teams and ambitious startups',
                features: [
                  '1 Residency VISA FREE for Life',
                  '1 shareholder',
                  'E-channel registration',
                  'Certificate of formation',
                  'General trading and E-commerce activities',
                  'Status change',
                ],
                highlighted: true,
              },
              {
                name: 'Advanced Setup',
                price: 'AED 17,000',
                billing: 'one-time',
                desc: 'For established companies & complex structures',
                features: [
                  'Up to 3 activities (Dubai-based)',
                  'Dedicated Desk (Premium Location)',
                  'Free Assistance',
                  'Long-Term Business Support, Advisory, and Setup Planning',
                ],
              },
            ].map((pkg, i) => (
              <Reveal key={i} delay={i * 100}>
                <div
                  className="p-8 rounded-lg border transition-all duration-300 hover:shadow-lg relative overflow-hidden h-full flex flex-col"
                  style={{
                    background: '#FAFAFA',
                    borderColor: pkg.highlighted ? '#C9A84C' : '#E0E0E0',
                    borderWidth: pkg.highlighted ? '2px' : '1px',
                    color: '#0A0A0A',
                    boxShadow: pkg.highlighted ? '0 0 20px rgba(201, 168, 76, 0.15)' : '0 2px 8px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  {/* Top border accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{
                    background: pkg.highlighted ? '#C9A84C' : 'linear-gradient(90deg, transparent, #E0E0E0, transparent)',
                  }} />
                  
                  {/* Corner accent dots */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full" style={{ background: '#C9A84C', opacity: pkg.highlighted ? 1 : 0.4 }} />
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full" style={{ background: '#C9A84C', opacity: pkg.highlighted ? 0.7 : 0.2 }} />

                  <div className="mb-4 min-h-[30px]">
                    {pkg.highlighted ? (
                      <div className="inline-block px-3 py-1 rounded text-xs font-semibold tracking-widest uppercase" style={{ background: '#C9A84C', color: '#0A0A0A' }}>
                        Most Popular
                      </div>
                    ) : (
                      <div className="inline-block px-3 py-1 rounded text-xs font-semibold tracking-widest uppercase opacity-0 select-none" aria-hidden="true">
                        Most Popular
                      </div>
                    )}
                  </div>

                  <div className="min-h-[100px]">
                    <h3 className="font-display text-2xl font-medium mb-2" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
                      {pkg.name}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: '#555555' }}>
                      {pkg.desc}
                    </p>
                  </div>

                  <div className="mb-6 pb-6 border-b relative" style={{ borderColor: pkg.highlighted ? 'rgba(201, 168, 76, 0.3)' : '#E0E0E0' }}>
                    <div className="font-display text-4xl font-medium" style={{ fontFamily: 'var(--font-display)', color: '#C9A84C' }}>
                      {pkg.price}
                    </div>
                    <div className="text-xs mt-2" style={{ color: '#555555' }}>
                      {pkg.billing === 'one-time' ? 'One-time setup' : 'Per month + setup'}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex gap-3 items-start text-sm group">
                        <span style={{ color: '#C9A84C' }} className="font-bold flex-shrink-0">✓</span>
                        <span style={{ color: '#555555' }} className="group-hover:text-black transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/calculator" className={`button-full py-3 px-4 rounded font-medium transition mt-auto ${
                    pkg.highlighted ? 'btn btn-gold' : 'btn btn-outline'
                  }`}>
                    Learn More & Calculate
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-12 pt-8 border-t" style={{ borderColor: 'rgba(201, 168, 76, 0.2)' }}>
            <p className="text-sm mb-4" style={{ color: '#555555' }}>
              Not sure which plan is right for you?
            </p>
            <Link href="/contact" className="btn btn-gold">Get a Free Consultation →</Link>
          </div>
        </div>
      </section>

      {/* ─── ARTICLES ─── */}
      {(articles && articles.length > 0) && (
        <section className="section border-t relative section-corner-accent-subtle" style={{ background: '#FAFAFA', borderColor: '#E0E0E0' }}>
          {/* Subtle decorative divider line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-0.5" style={{
            background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
          }} />
          
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-3" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(201, 168, 76, 0.1) 40px, rgba(201, 168, 76, 0.1) 41px)',
            pointerEvents: 'none',
          }} />

          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="section-title-row mb-12 flex-wrap">
              <div>
                <div className="tag">Insights & Guides</div>
                <h2 className="font-display text-4xl font-medium" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>Business Setup<br /><em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Knowledge Hub</em></h2>
              </div>
              <Link href="/insights" className="btn btn-outline">All Articles →</Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 mt-0.5">
              {articles.map((article: Article) => (
                <Link key={article.id} href={`/insights/${article.slug}`} className="card p-6 relative overflow-hidden transition-all duration-300 hover:shadow-lg group" style={{ textDecoration: 'none', background: '#FAFAFA', borderColor: '#E0E0E0', color: '#0A0A0A', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)' }}>
                  {/* Subtle top border accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{
                    background: 'linear-gradient(90deg, #C9A84C, transparent)',
                  }} />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />

                  <div className="h-48 flex items-center justify-center relative overflow-hidden rounded" style={{ background: '#F5F5F5' }}>
                    <ArticleCoverImage
                      src={getArticleImage(article)}
                      fallbackSrc={getArticleFallbackImage(article.category)}
                      alt={article.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/40 pointer-events-none" />
                    <div className="absolute top-3 left-3 px-2 py-0.5 text-xs font-bold tracking-wider rounded" style={{ background: '#C9A84C', color: '#0A0A0A' }}>
                      {article.category}
                    </div>
                    <span className="relative z-10 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">✦</span>
                  </div>
                  <div className="p-6 pb-0">
                    <div className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: '#C9A84C' }}>
                      {formatDate(article.created_at)} · {article.read_time} min
                    </div>
                    <h3 className="font-display text-lg font-medium mb-2 group-hover:text-yellow-600 transition-colors" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A', lineHeight: 1.3 }}>{article.title}</h3>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: '#555555' }}>{article.excerpt}</p>
                    <div className="h-px mb-4" style={{
                      background: 'linear-gradient(90deg, rgba(201, 168, 76, 0.2), transparent)',
                    }} />
                    <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C9A84C' }}>Read More →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA BANNER ─── */}
      <section className="home-cta-clean py-32 relative overflow-hidden border-t" style={{ background: '#0A0A0A', borderColor: '#555555' }}>
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none opacity-8" style={{
          background: 'radial-gradient(circle at bottom-right, #C9A84C 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none opacity-8" style={{
          background: 'radial-gradient(circle at top-left, #C9A84C 0%, transparent 70%)',
          borderRadius: '50%',
        }} />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="tag justify-center">Ready to Launch?</div>
          <h2 className="font-display mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 500, lineHeight: 1.1, color: '#FAFAFA' }}>
            Let's Build Your UAE<br /><em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Business Today</em>
          </h2>
          <p className="text-lg mb-10 max-w-lg mx-auto" style={{ color: '#AAAAAA' }}>
            Book a free 30-minute consultation with our Dubai business setup experts. No obligation, no sales pitch — just expert guidance to get you started.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn btn-gold transition-all duration-300 hover:shadow-lg hover:shadow-yellow-600/50">Get Started →</Link>
            <HoverButton href={SITE_INFO.whatsappHref} className="btn btn-outline" isExternal target="_blank" rel="noopener noreferrer">WhatsApp Us</HoverButton>
          </div>
          
          {/* Decorative divider below CTA */}
          <div className="mt-12 pt-12 border-t" style={{ borderColor: 'rgba(201, 168, 76, 0.2)' }}>
            <div className="flex items-center justify-center gap-3 text-xs" style={{ color: '#AAAAAA' }}>
              <span style={{ color: '#C9A84C' }}>✦</span>
              <span>Fast. Reliable. Professional.</span>
              <span style={{ color: '#C9A84C' }}>✦</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR PARTNERS ─── */}
      <section className="section border-t border-b relative overflow-hidden" style={{ background: '#F5F5F5', borderColor: '#E0E0E0' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,168,76,0.04) 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }} />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="tag justify-center">Our Partners</div>
            <h2 className="font-display text-4xl lg:text-5xl font-medium" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Trusted by Leading UAE Free Zones
            </h2>
            <p className="mt-4 text-base leading-8" style={{ color: '#555555' }}>
              We work with respected authorities and partners across the UAE to keep your setup process smooth, compliant, and efficient.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
            {partnerLogos.map(partner => (
              <div key={partner.name} className="group flex min-h-24 items-center justify-center px-2 py-3 sm:px-3 sm:py-4">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="h-auto w-full max-w-[150px] object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 14vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
