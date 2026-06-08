import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '*.supabase.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'starone.ae' }],
        destination: 'https://www.starone.ae/:path*',
        permanent: true,
      },
      {
        source: '/hero-image.png',
        destination: '/hero-image.jpg',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      { source: '/business-setup-dubai', destination: '/services/business-setup' },
      { source: '/golden-visa-uae', destination: '/services/golden-visa' },
      { source: '/visa-services-dubai', destination: '/services/employment-visa' },
      { source: '/dependent-visa-uae', destination: '/services/dependent-visa' },
      { source: '/visit-visa-dubai', destination: '/services/visit-visa' },
      { source: '/corporate-tax-uae', destination: '/services/corporate-tax' },
      { source: '/vat-registration-uae', destination: '/services/vat' },
      { source: '/audit-report-uae', destination: '/services/audit' },
      { source: '/esr-uae', destination: '/services/esr' },
      { source: '/aml-kyc-compliance-uae', destination: '/services/aml' },
      { source: '/ubo-registration-uae', destination: '/services/ubo' },
      { source: '/corporate-banking-dubai', destination: '/services/corporate-banking' },
      { source: '/accounting-bookkeeping-uae', destination: '/services/accounting-bookkeeping' },
      { source: '/hr-payroll-uae', destination: '/services/hr-payroll' },
      { source: '/marketing-branding-uae', destination: '/services/marketing-branding' },
      { source: '/trademark-registration-uae', destination: '/services/trademark-strategy' },
      { source: '/will-services-uae', destination: '/services/will-services' },
      { source: '/document-attestation-uae', destination: '/services/document-attestation' },
      { source: '/mainland-company-dubai', destination: '/business-setup-dubai' },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*.(jpg|jpeg|png|webp|avif|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
