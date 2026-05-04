'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/Logo'
import { services } from '@/lib/services-data'
import { X, Menu, ChevronDown } from 'lucide-react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  // Check if current page has warm hero that needs dark navbar text
  const isWarmHeroPage = pathname === '/contact'

  const isAdmin = pathname.startsWith('/admin')
  if (isAdmin) return null

  // Group services by category
  const servicesByCategory = {
    'Business Setup': services.filter(s => s.slug === 'business-setup'),
    'Visa & Residency': services.filter(s => ['golden-visa', 'employment-visa', 'dependent-visa', 'visit-visa'].includes(s.slug)),
    'Tax & Compliance': services.filter(s => ['corporate-tax', 'vat', 'audit', 'esr', 'aml', 'kyc', 'ubo'].includes(s.slug)),
    'Banking': services.filter(s => ['personal-banking', 'corporate-banking'].includes(s.slug)),
    'Accounting': services.filter(s => s.slug === 'accounting-bookkeeping'),
    'Ancillary': services.filter(s => ['hr-payroll', 'marketing-branding', 'trademark-strategy', 'will-services', 'document-attestation'].includes(s.slug)),
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: 72,
          background: scrolled ? 'rgba(8,8,8,0.97)' : isWarmHeroPage ? 'rgba(8,8,8,0.9)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : isWarmHeroPage ? '1px solid var(--border)' : 'none',
          backdropFilter: scrolled ? 'blur(12px)' : isWarmHeroPage ? 'blur(8px)' : 'none',
          color: scrolled ? 'inherit' : isWarmHeroPage ? 'var(--ink)' : 'inherit',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="/services/business-setup" label="Setup Your Company" />
            
            {/* Services dropdown */}
            <div className="relative group">
              <button className="nav-link relative text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: '0.08em' }}>
                Our Services
                <ChevronDown size={14} />
              </button>
              <div className="absolute left-0 top-full pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all z-50" style={{ minWidth: 500 }}>
                <div style={{ background: 'var(--dark)', border: '1px solid var(--border)', borderRadius: 8, padding: 24 }}>
                  <div className="grid grid-cols-2 gap-8">
                    {Object.entries(servicesByCategory).map(([category, catServices]) => (
                      <div key={category}>
                        <h4 className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--ink-muted)' }}>
                          {category}
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {catServices.map(s => (
                            <li key={s.slug}>
                              <Link href={`/services/${s.slug}`} className="text-sm transition-colors" style={{ color: 'var(--ink-dim)' }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-dim)')}
                              >
                                {s.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <NavLink href="/insights" label="Blogs" />
            <NavLink href="/about" label="About Us" />
            <NavLink href="/faqs" label="FAQs" />
            <NavLink href="/contact" label="Contact Us" />
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+971502165471" className="text-xs font-medium tracking-wider" style={{ 
              color: 'var(--ink-muted)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.06em',
              transition: 'color 0.3s'
            }}>
              +971 50 216 5471
            </a>
            <Link href="/contact" className="btn btn-gold" style={{ padding: '10px 22px' }}>
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: 'var(--ink)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto pt-20 px-6 pb-8 gap-2"
          style={{ background: 'var(--dark-2)', top: 76 }}
        >
          <MobileLink href="/" label="Home" />
          <MobileLink href="/services/business-setup" label="Setup Your Company" />
          
          <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: 8, marginBottom: 4 }}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="text-xs font-semibold tracking-widest uppercase mb-2 w-full text-left flex items-center justify-between"
              style={{ color: 'var(--ink-dim)' }}
            >
              Our Services
              <ChevronDown size={16} style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </button>
            {servicesOpen && (
              <div className="flex flex-col gap-2 ml-4 mt-2">
                {Object.entries(servicesByCategory).map(([category, catServices]) => (
                  <div key={category}>
                    <div className="text-xs font-semibold mb-1" style={{ color: 'var(--ink-muted)' }}>{category}</div>
                    {catServices.map(s => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-2 py-1 pl-2"
                        style={{ color: 'var(--ink-muted)', fontSize: 13 }}
                      >
                        <span>{s.icon}</span> {s.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <MobileLink href="/insights" label="Blogs" />
          <MobileLink href="/about" label="About Us" />
          <MobileLink href="/faqs" label="FAQs" />
          <MobileLink href="/contact" label="Contact Us" />
          <Link href="/contact" className="btn btn-gold mt-4" style={{ justifyContent: 'center' }}>
            Get Started →
          </Link>
        </div>
      )}
    </>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname()
  const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
  
  return (
    <Link
      href={href}
      className={`nav-link relative text-xs font-semibold tracking-wider uppercase transition-colors ${active ? 'active' : ''}`}
      style={{ 
        letterSpacing: '0.08em'
      }}
    >
      {label}
    </Link>
  )
}

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="py-3 border-b font-display text-2xl"
      style={{ color: 'var(--ink-muted)', borderColor: 'var(--border)', fontFamily: 'var(--font-display)', fontWeight: 400 }}
    >
      {label}
    </Link>
  )
}
