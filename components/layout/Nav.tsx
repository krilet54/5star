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

  const isAdmin = pathname.startsWith('/admin')
  if (isAdmin) return null

  const isHome = pathname === '/'
  const useDarkOverlay = !isHome || (isHome && scrolled)
  const useTransparentOverlay = isHome && !scrolled
  const navTextColor = useDarkOverlay || useTransparentOverlay ? '#FAFAFA' : '#0A0A0A'
  const navBackground = useTransparentOverlay ? 'transparent' : useDarkOverlay ? 'rgba(10, 10, 10, 0.86)' : 'rgba(250, 250, 250, 0.96)'
  const navBorder = useTransparentOverlay ? 'none' : useDarkOverlay ? '1px solid rgba(201,168,76,0.24)' : '1px solid rgba(201,168,76,0.22)'

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
          background: navBackground,
          backdropFilter: useTransparentOverlay ? 'none' : 'blur(14px)',
          borderBottom: navBorder,
          color: navTextColor,
          boxShadow: useTransparentOverlay ? 'none' : '0 10px 30px rgba(10,10,10,0.06)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="/services/business-setup" label="Setup Your Company" color={navTextColor} />
            
            {/* Services dropdown */}
            <div className="relative group">
              <button className="nav-link relative text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: '0.08em', color: navTextColor }}>
                Our Services
                <ChevronDown size={14} />
              </button>
              <div className="absolute left-1/2 top-[calc(100%+6px)] -translate-x-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all z-50 duration-200 w-[min(1100px,calc(100vw-24px))]">
                <div style={{ 
                  background: '#0A0A0A',
                  border: '1px solid rgba(201,168,76,0.3)',
                  borderRadius: 8,
                  padding: 28,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(10px)',
                }}>
                  {/* Gold top accent line */}
                  <div className="absolute top-0 left-8 h-1 w-16" style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
                  
                  <div className="grid grid-cols-3 gap-10">
                    {Object.entries(servicesByCategory).map(([category, catServices]) => (
                      <div key={category}>
                        <h4 className="text-xs font-semibold tracking-widest uppercase mb-5 pb-3 border-b" style={{ color: '#C9A84C', borderColor: 'rgba(201,168,76,0.2)' }}>
                          {category}
                        </h4>
                        <ul className="flex flex-col gap-3">
                          {catServices.map(s => (
                            <li key={s.slug}
                              onMouseEnter={e => {
                                const link = e.currentTarget.querySelector('a')
                                if (link) {
                                  link.style.color = '#C9A84C'
                                  link.style.paddingLeft = '8px'
                                }
                              }}
                              onMouseLeave={e => {
                                const link = e.currentTarget.querySelector('a')
                                if (link) {
                                  link.style.color = '#AAAAAA'
                                  link.style.paddingLeft = '0px'
                                }
                              }}
                            >
                              <Link href={`/services/${s.slug}`} className="text-sm transition-all duration-200 flex items-center gap-2" style={{ color: '#AAAAAA' }}>
                                <span style={{ opacity: 0.5 }}>→</span>
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

            <NavLink href="/insights" label="Blogs" color={navTextColor} />
            <NavLink href="/about" label="About Us" color={navTextColor} />
            <NavLink href="/faqs" label="FAQs" color={navTextColor} />
            <NavLink href="/contact" label="Contact Us" color={navTextColor} />
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+971502165471" className="text-xs font-medium tracking-wider" style={{ 
              color: navTextColor, 
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
            style={{ color: navTextColor, background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto pt-20 px-6 pb-8 gap-2"
          style={{ background: '#FAFAFA', top: 76 }}
        >
          <MobileLink href="/" label="Home" />
          <MobileLink href="/services/business-setup" label="Setup Your Company" />
          
          <div style={{ borderBottom: '1px solid #E0E0E0', paddingBottom: 8, marginBottom: 4 }}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="text-xs font-semibold tracking-widest uppercase mb-2 w-full text-left flex items-center justify-between"
              style={{ color: '#555555' }}
            >
              Our Services
              <ChevronDown size={16} style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </button>
            {servicesOpen && (
              <div className="flex flex-col gap-2 ml-4 mt-2">
                {Object.entries(servicesByCategory).map(([category, catServices]) => (
                  <div key={category}>
                    <div className="text-xs font-semibold mb-1" style={{ color: '#555555' }}>{category}</div>
                    {catServices.map(s => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-2 py-1 pl-2"
                        style={{ color: '#888888', fontSize: 13 }}
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

function NavLink({ href, label, color }: { href: string; label: string; color: string }) {
  const pathname = usePathname()
  const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
  
  return (
    <Link
      href={href}
      className={`nav-link relative text-xs font-semibold tracking-wider uppercase transition-colors ${active ? 'active' : ''}`}
      style={{ 
        letterSpacing: '0.08em',
        color: active ? '#C9A84C' : color
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
      style={{ color: '#555555', borderColor: '#E0E0E0', fontFamily: 'var(--font-display)', fontWeight: 400 }}
    >
      {label}
    </Link>
  )
}
