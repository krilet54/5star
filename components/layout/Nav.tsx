'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/Logo'
import { services } from '@/lib/services-data'
import { X, Menu } from 'lucide-react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const isAdmin = pathname.startsWith('/admin')
  if (isAdmin) return null

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: 76,
          background: scrolled ? 'rgba(8,8,8,0.97)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-8 h-full flex items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="/" label="Home" />

            <NavLink href="/services" label="Services" />

            <NavLink href="/about" label="About" />
            <NavLink href="/insights" label="Insights" />
            <NavLink href="/contact" label="Contact" />
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+971502165471" className="text-xs font-medium tracking-wider" style={{ color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              +971 50 216 5471
            </a>
            <Link href="/contact" className="btn btn-gold" style={{ padding: '10px 22px' }}>
              Free Consultation
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
          <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: 8, marginBottom: 4 }}>
            <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--ink-dim)' }}>Services</div>
            {services.map(s => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center gap-2 py-2"
                style={{ color: 'var(--ink-muted)', fontSize: 14 }}
              >
                <span>{s.icon}</span> {s.title}
              </Link>
            ))}
          </div>
          <MobileLink href="/about" label="About Us" />
          <MobileLink href="/insights" label="Insights" />
          <MobileLink href="/contact" label="Contact" />
          <Link href="/contact" className="btn btn-gold mt-4" style={{ justifyContent: 'center' }}>
            Book Free Consultation →
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
      style={{ letterSpacing: '0.08em' }}
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
