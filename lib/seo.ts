import type { ServiceData } from '@/types'
import { SITE_INFO } from '@/lib/site-info'

type ServiceSeo = {
  title: string
  description: string
  keywords: string[]
  canonicalPath: string
}

const ctaSuffix = ' Book a free consultation today.'

function desc(base: string) {
  return `${base}${ctaSuffix}`
}

const serviceSeoBySlug: Record<string, ServiceSeo> = {
  'business-setup': {
    title: 'Business Setup Dubai | Star One Dubai',
    description: desc('Business setup Dubai with mainland, free zone, and offshore company formation, licensing, visas, and compliance support.'),
    keywords: ['Business Setup Dubai', 'UAE company formation', 'mainland setup', 'free zone setup'],
    canonicalPath: '/business-setup-dubai',
  },
  'golden-visa': {
    title: 'Golden Visa UAE | Star One Dubai',
    description: desc('Golden Visa UAE support for investors, executives, and students. We assess eligibility, prepare documents, and manage approval.'),
    keywords: ['Golden Visa UAE', 'Dubai Golden Visa', 'UAE residency visa'],
    canonicalPath: '/golden-visa-uae',
  },
  'employment-visa': {
    title: 'Visa Services Dubai | Star One Dubai',
    description: desc('Visa Services Dubai for companies and professionals, including entry permits, medicals, Emirates ID, and visa stamping.'),
    keywords: ['Employment Visa UAE', 'Dubai work visa', 'UAE residency visa'],
    canonicalPath: '/visa-services-dubai',
  },
  'dependent-visa': {
    title: 'Dependent Visa UAE | Star One Dubai',
    description: desc('Dependent Visa UAE services for spouses, children, and eligible parents with documents, medicals, and residency processing.'),
    keywords: ['Dependent Visa UAE', 'family visa UAE', 'Dubai dependent visa'],
    canonicalPath: '/dependent-visa-uae',
  },
  'visit-visa': {
    title: 'Visit Visa Dubai | Star One Dubai',
    description: desc('Visit Visa Dubai assistance for tourism, business, and family visits with fast processing, extensions, and document guidance.'),
    keywords: ['Visit Visa UAE', 'Dubai visit visa', 'UAE tourist visa'],
    canonicalPath: '/visit-visa-dubai',
  },
  'corporate-tax': {
    title: 'Corporate Tax UAE | Star One Dubai',
    description: desc('Corporate Tax UAE registration, planning, and filing support to keep your business compliant with FTA requirements and deadlines.'),
    keywords: ['Corporate Tax UAE', 'Dubai corporate tax', 'UAE tax registration'],
    canonicalPath: '/corporate-tax-uae',
  },
  vat: {
    title: 'VAT Registration UAE | Star One Dubai',
    description: desc('VAT Registration UAE for quarterly filing, input tax recovery, and compliance support across the UAE with clear FTA guidance.'),
    keywords: ['VAT UAE', 'Dubai VAT registration', 'UAE VAT filing'],
    canonicalPath: '/vat-registration-uae',
  },
  audit: {
    title: 'Audit Report UAE | Star One Dubai',
    description: desc('Audit Report UAE support with financial review, compliance checks, and coordination for mainland and free zone companies.'),
    keywords: ['Audit Report UAE', 'Dubai audit report', 'UAE company audit'],
    canonicalPath: '/audit-report-uae',
  },
  esr: {
    title: 'ESR UAE | Star One Dubai',
    description: desc('ESR UAE compliance support to help your company meet Economic Substance Regulations with accurate documentation and reporting.'),
    keywords: ['ESR UAE', 'Dubai ESR filing', 'economic substance regulations'],
    canonicalPath: '/esr-uae',
  },
  aml: {
    title: 'AML KYC Compliance UAE | Star One Dubai',
    description: desc('AML KYC Compliance UAE advisory and support to strengthen your anti-money laundering controls, policies, and reporting.'),
    keywords: ['AML UAE', 'Dubai AML compliance', 'anti-money laundering'],
    canonicalPath: '/aml-kyc-compliance-uae',
  },
  kyc: {
    title: 'KYC UAE | Star One Dubai',
    description: desc('KYC UAE support to improve customer due diligence, onboarding controls, and compliance readiness for regulated businesses.'),
    keywords: ['KYC UAE', 'Dubai KYC compliance', 'customer due diligence'],
    canonicalPath: '/aml-kyc-compliance-uae',
  },
  ubo: {
    title: 'UBO UAE | Star One Dubai',
    description: desc('UBO UAE guidance for beneficial ownership reporting, registers, and compliance documentation across your company structure.'),
    keywords: ['UBO UAE', 'Dubai UBO filing', 'beneficial ownership'],
    canonicalPath: '/ubo-registration-uae',
  },
  'personal-banking': {
    title: 'Personal Banking UAE | Star One Dubai',
    description: desc('Corporate Banking Dubai support to help residents and newcomers open bank accounts with clear document preparation and guidance.'),
    keywords: ['Personal Banking UAE', 'Dubai bank account', 'UAE banking'],
    canonicalPath: '/corporate-banking-dubai',
  },
  'corporate-banking': {
    title: 'Corporate Banking Dubai | Star One Dubai',
    description: desc('Corporate Banking Dubai assistance for new and established companies, from applications, documentation, and bank coordination.'),
    keywords: ['Corporate Banking UAE', 'Dubai corporate bank account', 'UAE banking'],
    canonicalPath: '/corporate-banking-dubai',
  },
  'accounting-bookkeeping': {
    title: 'Accounting UAE | Star One Dubai',
    description: desc('Accounting services Dubai and bookkeeping UAE support to keep records clean, accurate, and ready for tax, audit, and compliance.'),
    keywords: ['Accounting UAE', 'Bookkeeping UAE', 'Dubai accounting services'],
    canonicalPath: '/accounting-bookkeeping-uae',
  },
  'hr-payroll': {
    title: 'HR Payroll UAE | Star One Dubai',
    description: desc('HR services Dubai and payroll UAE support for compliant staffing processes, payroll administration, and documentation support.'),
    keywords: ['HR UAE', 'Payroll UAE', 'Dubai HR services'],
    canonicalPath: '/hr-payroll-uae',
  },
  'marketing-branding': {
    title: 'Marketing UAE | Star One Dubai',
    description: desc('Marketing and branding UAE support for launches, positioning, and visual identity that helps your business stand out in Dubai.'),
    keywords: ['Marketing UAE', 'Branding UAE', 'Dubai brand strategy'],
    canonicalPath: '/marketing-branding-uae',
  },
  'trademark-strategy': {
    title: 'Trademark Registration UAE | Star One Dubai',
    description: desc('Trademark registration UAE guidance for brand protection, search checks, filing support, and positioning your business name.'),
    keywords: ['Trademark UAE', 'Dubai trademark filing', 'brand protection'],
    canonicalPath: '/trademark-registration-uae',
  },
  'will-services': {
    title: 'Will Services UAE | Star One Dubai',
    description: desc('Will services UAE support for straightforward estate planning, document preparation, and guidance for residents in Dubai.'),
    keywords: ['Will Services UAE', 'Dubai will registration', 'estate planning UAE'],
    canonicalPath: '/will-services-uae',
  },
  'document-attestation': {
    title: 'Document Attestation UAE | Star One Dubai',
    description: desc('Document attestation UAE services for certificates, powers of attorney, and legal paperwork used in the UAE and abroad.'),
    keywords: ['Document Attestation UAE', 'Dubai attestation', 'certificate attestation'],
    canonicalPath: '/document-attestation-uae',
  },
}

const articleServiceLinksByCategory: Record<string, Array<{ label: string; href: string }>> = {
  'Business Setup': [
    { label: 'Business Setup Dubai', href: '/business-setup-dubai' },
    { label: 'Corporate Tax UAE', href: '/corporate-tax-uae' },
  ],
  Visa: [
    { label: 'Golden Visa UAE', href: '/golden-visa-uae' },
    { label: 'Employment Visa UAE', href: '/visa-services-dubai' },
  ],
  Tax: [
    { label: 'Corporate Tax UAE', href: '/corporate-tax-uae' },
    { label: 'VAT UAE', href: '/vat-registration-uae' },
  ],
  Compliance: [
    { label: 'Audit Report UAE', href: '/audit-report-uae' },
    { label: 'ESR UAE', href: '/esr-uae' },
  ],
  Banking: [
    { label: 'Corporate Banking UAE', href: '/corporate-banking-dubai' },
    { label: 'Personal Banking UAE', href: '/corporate-banking-dubai' },
  ],
  Accounting: [
    { label: 'Accounting & Bookkeeping UAE', href: '/accounting-bookkeeping-uae' },
    { label: 'Corporate Tax UAE', href: '/corporate-tax-uae' },
  ],
  HR: [
    { label: 'HR & Payroll UAE', href: '/hr-payroll-uae' },
    { label: 'Employment Visa UAE', href: '/visa-services-dubai' },
  ],
  Corporate: [
    { label: 'Corporate Banking UAE', href: '/corporate-banking-dubai' },
    { label: 'UBO UAE', href: '/ubo-registration-uae' },
  ],
  General: [
    { label: 'Business Setup Dubai', href: '/business-setup-dubai' },
    { label: 'Golden Visa UAE', href: '/golden-visa-uae' },
  ],
}

export function getServiceSeo(slug: string, service?: ServiceData) {
  const seo = serviceSeoBySlug[slug]
  if (seo) return seo

  const fallbackTitle = `${service?.title ?? 'Service'} | ${SITE_INFO.name}`
  const fallbackDescription = service?.description ?? `${service?.title ?? 'Our service'} support in Dubai and across the UAE.`

  return {
    title: fallbackTitle,
    description: fallbackDescription,
    keywords: [service?.title ?? 'UAE services'],
    canonicalPath: `/services/${slug}`,
  }
}

export function getServiceCanonicalPath(slug: string) {
  return serviceSeoBySlug[slug]?.canonicalPath ?? `/services/${slug}`
}

export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_INFO.url}/#business`,
    name: SITE_INFO.name,
    url: SITE_INFO.url,
    telephone: SITE_INFO.phoneDisplay,
    email: SITE_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_INFO.address.streetAddress,
      addressLocality: SITE_INFO.address.addressLocality,
      addressRegion: SITE_INFO.address.addressRegion,
      postalCode: SITE_INFO.address.postalCode,
      addressCountry: SITE_INFO.address.addressCountry,
    },
    areaServed: SITE_INFO.areaServed,
    priceRange: 'AED 5,450+',
    sameAs: [
      SITE_INFO.social?.instagram,
      SITE_INFO.social?.linkedin,
    ].filter(Boolean),
  }
}

export function buildServiceJsonLd(service: ServiceData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    provider: {
      '@type': 'Organization',
      name: SITE_INFO.name,
      url: SITE_INFO.url,
      telephone: SITE_INFO.phoneDisplay,
    },
    areaServed: SITE_INFO.areaServed,
    description: service.description,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AED',
      price: '5450',
      availability: 'https://schema.org/InStock',
    },
  }
}

export function buildFaqJsonLd(faqs: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

export function getArticleServiceLinks(category?: string | null) {
  if (!category) return articleServiceLinksByCategory.General
  return articleServiceLinksByCategory[category] ?? articleServiceLinksByCategory.General
}
