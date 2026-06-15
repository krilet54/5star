import Link from 'next/link'
import Logo from '@/components/Logo'
import { SITE_INFO } from '@/lib/site-info'
import { getServiceCanonicalPath } from '@/lib/seo'
import { Linkedin, Instagram } from 'lucide-react'
import FooterPhoneLink from './FooterPhoneLink'

export default function Footer() {
  const footerGroups = [
    {
      title: 'Setup',
      links: [
        { label: 'Business Setup', href: '/business-setup-dubai' },
        { label: 'Free Zone Setup', href: '/free-zone-dubai' },
        { label: 'Offshore Setup', href: '/offshore-company-formation-uae' },
      ],
    },
    {
      title: 'Visa',
      links: [
        { label: 'Golden Visa', href: '/golden-visa-uae' },
        { label: 'Employment Visa', href: '/visa-services-dubai' },
        { label: 'Dependent Visa', href: '/dependent-visa-uae' },
        { label: 'Visit Visa', href: '/visit-visa-dubai' },
      ],
    },
    {
      title: 'Compliance',
      links: [
        { label: 'Corporate Tax', href: '/corporate-tax-uae' },
        { label: 'VAT', href: '/vat-registration-uae' },
        { label: 'Audit', href: '/audit-report-uae' },
        { label: 'ESR', href: '/esr-uae' },
        { label: 'AML', href: '/aml-kyc-compliance-uae' },
        { label: 'KYC', href: '/aml-kyc-compliance-uae' },
        { label: 'UBO', href: '/ubo-registration-uae' },
      ],
    },
    {
      title: 'Banking',
      links: [
        { label: 'Personal Banking', href: '/corporate-banking-dubai' },
        { label: 'Corporate Banking', href: '/corporate-banking-dubai' },
      ],
    },
    {
      title: 'Ancillary',
      links: [
        { label: 'HR & Payroll', href: '/hr-payroll-uae' },
        { label: 'Marketing & Branding', href: '/marketing-branding-uae' },
        { label: 'Trademark', href: '/trademark-registration-uae' },
        { label: 'Will Services', href: '/will-services-uae' },
        { label: 'Document Attestation', href: '/document-attestation-uae' },
      ],
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
      ],
    },
  ]

  return (
    <footer
      className="relative overflow-hidden bg-[#050505] pt-4 pb-0"
      style={{
        borderTop: 'none',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.045) 1px, transparent 1px)',
          backgroundSize: '88px 88px',
          opacity: 0.3,
        }}
      />
      <div
        className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 68%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-[1600px] px-3 sm:px-4 pb-4">
        <div
          className="relative overflow-hidden rounded-[28px] border border-[#C9A84C]/35 bg-[#0A0A0A] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
          style={{
            boxShadow: '0 24px 90px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
            backgroundImage:
              'radial-gradient(circle at 12% 18%, rgba(201,168,76,0.12) 0, transparent 24%), radial-gradient(circle at 84% 16%, rgba(201,168,76,0.08) 0, transparent 20%), linear-gradient(180deg, rgba(255,255,255,0.02), transparent 22%)',
          }}
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-14">
            <div className="relative min-w-0">
              <Logo className="mb-6" />
              <div className="tag mb-4">Star One Business Consultancy</div>
              <p className="max-w-md text-sm leading-7 text-[#CFCFCF]">
                {SITE_INFO.address.streetAddress}. Built for founders who want clarity, speed, and trusted execution.
              </p>
              <p className="mt-4 text-sm font-semibold tracking-[0.12em] uppercase text-[#C9A84C]">
                Build. Launch. Grow.
              </p>

              <div className="mt-8 flex gap-3">
                {[
                  { key: 'li', label: 'LinkedIn', href: SITE_INFO.social?.linkedin ?? '#', icon: <Linkedin size={16} /> },
                  { key: 'ig', label: 'Instagram', href: SITE_INFO.social?.instagram ?? '#', icon: <Instagram size={16} /> },
                  { key: 'wa', label: 'WhatsApp', href: SITE_INFO.whatsappHref, icon: null },
                ].map(s => (
                  <a
                    key={s.key}
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A84C]/35 text-[11px] font-semibold tracking-[0.18em] text-[#E6E6E6] transition-colors hover:border-[#C9A84C] hover:text-[#C9A84C]"
                    target={s.href && s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href && s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {s.icon ?? (s.key === 'wa' ? 'WA' : s.label[0])}
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <div className="text-xs uppercase tracking-[0.22em] text-[#A8A8A8]">Need help now?</div>
                  <FooterPhoneLink href={`tel:${SITE_INFO.phoneHref}`} className="mt-2 block text-lg font-semibold tracking-wide text-[#FAFAFA]">
                    {SITE_INFO.phoneDisplay}
                </FooterPhoneLink>
              </div>
            </div>

            <div className="relative min-w-0">
              <div className="mb-6 flex items-center justify-between gap-4 pb-4">
                <div>
                  <div className="tag mb-3">Explore</div>
                  <h2 className="font-display text-2xl font-medium text-[#FAFAFA] sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                    Services & Company
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
                {footerGroups.map(group => (
                  <div key={group.title} className="min-w-0">
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#C9A84C]">
                      {group.title}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {group.links.map((link, idx) => (
                        <li key={`${group.title}-${link.href}-${idx}`}>
                            <Link
                              href={link.href}
                            className="text-sm leading-6 text-[#BFBFBF] transition-colors hover:text-[#E6D29A]"
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

          <div className="relative mt-10 grid gap-6 py-7 md:grid-cols-3">
            <div className="relative pl-0 md:pl-12">
              <div className="text-xs uppercase tracking-[0.22em] text-[#A8A8A8]">Email</div>
              <a href={`mailto:${SITE_INFO.email}`} className="mt-2 block text-sm font-medium text-[#FAFAFA]">
                {SITE_INFO.email}
              </a>
            </div>

            <div className="relative pl-0 md:px-12">
              <div className="text-xs uppercase tracking-[0.22em] text-[#A8A8A8]">Phone</div>
              <div className="mt-2 flex flex-col gap-1 text-sm font-medium text-[#FAFAFA]">
                <FooterPhoneLink href={`tel:${SITE_INFO.phoneHref}`}>{SITE_INFO.phoneDisplay}</FooterPhoneLink>
              </div>
            </div>

            <div className="relative pl-0 md:pl-12">
              <div className="text-xs uppercase tracking-[0.22em] text-[#A8A8A8]">Location</div>
              <div className="mt-2 text-sm font-medium text-[#FAFAFA]">{SITE_INFO.address.streetAddress}</div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 text-xs text-[#676767] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Star One Business Consultancy. All rights reserved.</p>
            <p>
              Built by{' '}
              <a href="https://micro-site.studio" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] transition-colors hover:text-[#E6D29A]">
                Microsite Studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
