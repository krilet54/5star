
"use client"
import Link from 'next/link'
import Logo from '@/components/Logo'
import { services } from '@/lib/services-data'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-[1280px] mx-auto px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--ink-muted)' }}>
              Dubai's trusted business setup and advisory firm — helping entrepreneurs from around the world establish their presence in the UAE.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { label: 'LI', href: '#' },
                { label: 'IG', href: '#' },
                { label: 'WA', href: 'https://wa.me/971502165471' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 flex items-center justify-center text-xs font-bold border rounded-sm transition-all"
                  style={{ borderColor: 'var(--border)', color: 'var(--ink-dim)' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.borderColor = 'var(--gold)'
                    el.style.color = 'var(--gold)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.borderColor = 'var(--border)'
                    el.style.color = 'var(--ink-dim)'
                  }}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--ink-muted)' }}>Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.slice(0, 6).map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm transition-colors hover:text-gold" style={{ color: 'var(--ink-dim)' }}>
                    {s.title.split(' ').slice(0, 3).join(' ')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--ink-muted)' }}>Company</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: '/about', label: 'About Star One' },
                { href: '/services', label: 'All Services' },
                { href: '/insights', label: 'Insights & Guides' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/terms-conditions', label: 'Terms & Conditions' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-colors" style={{ color: 'var(--ink-dim)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-dim)')}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--ink-muted)' }}>Contact</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--ink-dim)' }}>Location</div>
                <span className="text-sm" style={{ color: 'var(--ink-muted)' }}>Dubai, UAE</span>
              </li>
              <li>
                <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--ink-dim)' }}>Phone</div>
                <a href="tel:+971502165471" className="text-sm" style={{ color: 'var(--ink-muted)' }}>+971 50 216 5471</a>
              </li>
              <li>
                <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--ink-dim)' }}>Email</div>
                <a href="mailto:info@starone.ae" className="text-sm" style={{ color: 'var(--ink-muted)' }}>info@starone.ae</a>
              </li>
              <li>
                <a
                  href="https://wa.me/971502165471"
                  className="inline-flex items-center gap-2 text-sm font-medium mt-2"
                  style={{ color: '#25D366' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>💬</span> WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--ink-dim)' }}>
            © {new Date().getFullYear()} Star One Business Consultancy. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { href: '/privacy-policy', label: 'Privacy Policy' },
              { href: '/terms-conditions', label: 'Terms' },
              { href: '/contact', label: 'Contact' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="text-xs transition-colors" style={{ color: 'var(--ink-dim)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-dim)')}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
