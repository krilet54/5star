
"use client"
import Link from 'next/link'
import Logo from '@/components/Logo'

export default function Footer() {
  const footerGroups = [
    {
      title: 'Setup',
      links: [
        { label: 'Business Setup', href: '/services/business-setup' },
        { label: 'Free Zone Setup', href: '/services/business-setup' },
        { label: 'Offshore Setup', href: '/services/business-setup' },
      ]
    },
    {
      title: 'Visa',
      links: [
        { label: 'Golden Visa', href: '/services/golden-visa' },
        { label: 'Employment Visa', href: '/services/employment-visa' },
        { label: 'Dependent Visa', href: '/services/dependent-visa' },
        { label: 'Visit Visa', href: '/services/visit-visa' },
      ]
    },
    {
      title: 'Compliance',
      links: [
        { label: 'Corporate Tax', href: '/services/corporate-tax' },
        { label: 'VAT', href: '/services/vat' },
        { label: 'Audit', href: '/services/audit' },
        { label: 'ESR', href: '/services/esr' },
        { label: 'AML', href: '/services/aml' },
        { label: 'KYC', href: '/services/kyc' },
        { label: 'UBO', href: '/services/ubo' },
      ]
    },
    {
      title: 'Banking',
      links: [
        { label: 'Personal Banking', href: '/services/personal-banking' },
        { label: 'Corporate Banking', href: '/services/corporate-banking' },
      ]
    },
    {
      title: 'Ancillary',
      links: [
        { label: 'HR & Payroll', href: '/services/hr-payroll' },
        { label: 'Marketing & Branding', href: '/services/marketing-branding' },
        { label: 'Trademark', href: '/services/trademark-strategy' },
        { label: 'Will Services', href: '/services/will-services' },
        { label: 'Document Attestation', href: '/services/document-attestation' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'FAQs', href: '/faqs' },
        { label: 'Blogs', href: '/insights' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms & Conditions', href: '/terms-conditions' },
      ]
    },
  ]

  return (
    <footer style={{ background: 'var(--dark)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm leading-relaxed max-w-xs mb-2" style={{ color: 'var(--ink-muted)' }}>
              Star One Business Consultancy — Dubai, UAE
            </p>
            <p className="text-sm font-semibold" style={{ color: 'var(--gold)' }}>
              Build. Launch. Grow.
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

          {/* Footer groups - span 3 columns */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
              {footerGroups.map(group => (
                <div key={group.title}>
                  <h4 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--ink-muted)' }}>
                    {group.title}
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {group.links.map(link => (
                      <li key={link.href}>
                        <Link 
                          href={link.href} 
                          className="text-sm transition-colors" 
                          style={{ color: 'var(--ink-dim)' }}
                          onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                          onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-dim)')}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact info section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 py-8" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div>
            <div className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--ink-dim)' }}>Email</div>
            <a href="mailto:info@starone.ae" className="text-sm font-medium" style={{ color: 'var(--ink-muted)' }}>
              info@starone.ae
            </a>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--ink-dim)' }}>Phone</div>
            <div className="flex flex-col gap-1">
              <a href="tel:+971502165471" className="text-sm" style={{ color: 'var(--ink-muted)' }}>+971 50 216 5471</a>
              <a href="tel:+971508501608" className="text-sm" style={{ color: 'var(--ink-muted)' }}>+971 50 850 1608</a>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--ink-dim)' }}>Location</div>
            <span className="text-sm" style={{ color: 'var(--ink-muted)' }}>Dubai, United Arab Emirates</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-xs" style={{ color: 'var(--ink-dim)' }}>
            © {new Date().getFullYear()} Star One Business Consultancy. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--ink-dim)' }}>
            Built by{' '}
            <a href="https://micro-site.studio" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
              Microsite Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
