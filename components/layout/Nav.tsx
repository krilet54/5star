'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/Logo'
import { services } from '@/lib/services-data'
import { X, Menu, ChevronDown } from 'lucide-react'

const serviceGroups = [
  { title: 'Business Setup', desc: 'Formation and licensing routes', slugs: ['business-setup'] },
  { title: 'Visa & Residency', desc: 'Golden, employment, family, and visit visas', slugs: ['golden-visa', 'employment-visa', 'dependent-visa', 'visit-visa'] },
  { title: 'Tax & Compliance', desc: 'Tax, VAT, audit, ESR, AML, KYC, and UBO', slugs: ['corporate-tax', 'vat', 'audit', 'esr', 'aml', 'kyc', 'ubo'] },
  { title: 'Banking & Accounts', desc: 'Banking, bookkeeping, and finance operations', slugs: ['personal-banking', 'corporate-banking', 'accounting-bookkeeping'] },
  { title: 'Operations', desc: 'HR, branding, IP, wills, and attestation', slugs: ['hr-payroll', 'marketing-branding', 'trademark-strategy', 'will-services', 'document-attestation'] },
]

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

  if (pathname.startsWith('/admin')) return null

  const groupedServices = serviceGroups.map(group => ({
    ...group,
    items: services.filter(service => group.slugs.includes(service.slug)),
  }))
  const isHome = pathname === '/'
  const useDarkOverlay = !isHome || (isHome && scrolled)
  const useTransparentOverlay = isHome && !scrolled
  const navTextColor = useDarkOverlay || useTransparentOverlay ? '#FAFAFA' : '#0A0A0A'
  const navBackground = useTransparentOverlay ? 'transparent' : useDarkOverlay ? 'rgba(10, 10, 10, 0.88)' : 'rgba(250, 250, 250, 0.96)'
  const navBorder = useTransparentOverlay ? 'none' : useDarkOverlay ? '1px solid rgba(201,168,76,0.2)' : '1px solid rgba(201,168,76,0.18)'

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

          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="/services/business-setup" label="Setup Your Company" color={navTextColor} />

            <div className="relative group">
              <button className="nav-link relative text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-2" style={{ letterSpacing: '0.08em', color: pathname.startsWith('/services') ? '#C9A84C' : navTextColor }}>
                Our Services
                <ChevronDown size={14} />
              </button>
              <div className="absolute left-1/2 top-[calc(100%+10px)] -translate-x-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all z-50 duration-200 w-[min(1120px,calc(100vw-24px))]">
                <div className="mega-menu">
                  <div className="grid grid-cols-[1.05fr_2fr] gap-8">
                    <div className="mega-menu-intro">
                      <div className="tag mb-4">Services</div>
                      <h3 className="font-display text-2xl font-medium mb-3" style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}>Everything your UAE business needs</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#AAAAAA' }}>Structured advisory across formation, residency, compliance, banking, and operations.</p>
                      <Link href="/services" className="btn btn-gold mt-6" style={{ padding: '10px 16px' }}>View All Services</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      {groupedServices.map(group => (
                        <div key={group.title} className="mega-menu-group">
                          <h4 className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: '#C9A84C' }}>{group.title}</h4>
                          <p className="text-xs mb-3" style={{ color: '#777777' }}>{group.desc}</p>
                          <ul className="flex flex-col gap-1.5">
                            {group.items.map(service => {
                              const active = pathname === `/services/${service.slug}`
                              return (
                                <li key={service.slug}>
                                  <Link href={`/services/${service.slug}`} className={`mega-menu-link ${active ? 'active' : ''}`}>
                                    <span>{service.icon}</span>
                                    {service.title}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
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
            <a href="tel:+971502165471" className="text-xs font-medium tracking-wider" style={{ color: navTextColor, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              +971 50 216 5471
            </a>
            <Link href="/contact" className="btn btn-gold" style={{ padding: '10px 22px' }}>
              Get Started
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: navTextColor, background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto pt-20 px-6 pb-8 gap-2"
          style={{ background: '#FAFAFA', top: 76 }}
        >
          <MobileLink href="/" label="Home" />
          <MobileLink href="/services/business-setup" label="Setup Your Company" />

          <div style={{ borderBottom: '1px solid #E0E0E0', paddingBottom: 12, marginBottom: 4 }}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="text-xs font-semibold tracking-widest uppercase mb-2 w-full text-left flex items-center justify-between"
              style={{ color: '#555555' }}
            >
              Our Services
              <ChevronDown size={16} style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </button>
            {servicesOpen && (
              <div className="flex flex-col gap-4 mt-3">
                {groupedServices.map(group => (
                  <div key={group.title}>
                    <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#0A0A0A' }}>{group.title}</div>
                    <div className="text-xs mb-2" style={{ color: '#777777' }}>{group.desc}</div>
                    {group.items.map(service => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className={`flex items-center gap-2 py-2 pl-2 rounded ${pathname === `/services/${service.slug}` ? 'bg-[#F5F5F5]' : ''}`}
                        style={{ color: pathname === `/services/${service.slug}` ? '#0A0A0A' : '#666666', fontSize: 13 }}
                      >
                        <span>{service.icon}</span> {service.title}
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
            Get Started
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
        color: active ? '#C9A84C' : color,
      }}
    >
      {label}
    </Link>
  )
}

function MobileLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname()
  const active = href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <Link
      href={href}
      className="py-3 border-b font-display text-2xl"
      style={{ color: active ? '#0A0A0A' : '#555555', borderColor: '#E0E0E0', fontFamily: 'var(--font-display)', fontWeight: active ? 600 : 400 }}
    >
      {label}
    </Link>
  )
}
