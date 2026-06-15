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
    title: 'Business Setup Dubai | Mainland, Free Zone & Offshore | Star One',
    description: desc('Business setup Dubai for mainland, free zone, and offshore company formation from AED 5,750 with visas and banking support.'),
    keywords: ['Business Setup Dubai', 'UAE company formation', 'mainland setup', 'free zone setup'],
    canonicalPath: '/business-setup-dubai',
  },
  'golden-visa': {
    title: 'Golden Visa UAE | 5 & 10-Year Residency | Star One',
    description: desc('Golden Visa UAE support for investors, executives, and students. Check eligibility, prepare documents, and secure residency.'),
    keywords: ['Golden Visa UAE', 'Dubai Golden Visa', 'UAE residency visa'],
    canonicalPath: '/golden-visa-uae',
  },
  'employment-visa': {
    title: 'Employment Visa UAE | Work & Live in Dubai | Star One',
    description: desc('Employment visa UAE services for entry permits, medicals, Emirates ID, and residency stamping for companies and professionals.'),
    keywords: ['Employment Visa UAE', 'Dubai work visa', 'UAE residency visa'],
    canonicalPath: '/visa-services-dubai',
  },
  'dependent-visa': {
    title: 'Dependent Visa UAE | Sponsor Your Family | Star One',
    description: desc('Dependent Visa UAE services for spouses, children, and eligible parents with document support and residency processing.'),
    keywords: ['Dependent Visa UAE', 'family visa UAE', 'Dubai dependent visa'],
    canonicalPath: '/dependent-visa-uae',
  },
  'visit-visa': {
    title: 'Visit Visa Dubai | Tourist Visa UAE 2026 | Star One',
    description: desc('Visit Visa Dubai assistance for tourism, business, and family trips with extensions, document checks, and fast processing.'),
    keywords: ['Visit Visa UAE', 'Dubai visit visa', 'UAE tourist visa'],
    canonicalPath: '/visit-visa-dubai',
  },
  'corporate-tax': {
    title: 'UAE Corporate Tax 2026: 9% Rate & Filing | Star One',
    description: desc('UAE corporate tax at 9% above AED 375,000. Get FTA registration, filing deadlines, and free zone exemption guidance.'),
    keywords: ['Corporate Tax UAE', 'Dubai corporate tax', 'UAE tax registration', 'FTA filing', 'corporate tax rate UAE'],
    canonicalPath: '/corporate-tax-uae',
  },
  vat: {
    title: 'VAT Registration UAE | FTA VAT Compliance | Star One',
    description: desc('VAT Registration UAE support from AED 950 for mandatory and voluntary registration, filing, and ongoing FTA compliance.'),
    keywords: ['VAT UAE', 'Dubai VAT registration', 'UAE VAT filing'],
    canonicalPath: '/vat-registration-uae',
  },
  audit: {
    title: 'Audit Report UAE | Statutory Audit Services Dubai | Star One',
    description: desc('Audit Report UAE support from AED 3,500 for mainland and free zone companies, with review, compliance checks, and filing support.'),
    keywords: ['Audit Report UAE', 'Dubai audit report', 'UAE company audit'],
    canonicalPath: '/audit-report-uae',
  },
  esr: {
    title: 'ESR UAE | Economic Substance Regulations | Star One',
    description: desc('ESR UAE compliance support for relevant businesses needing substance checks, reporting, and accurate filing under current rules.'),
    keywords: ['ESR UAE', 'Dubai ESR filing', 'economic substance regulations'],
    canonicalPath: '/esr-uae',
  },
  aml: {
    title: 'AML & KYC Compliance UAE 2026 | Star One',
    description: desc('UAE AML compliance: policies, KYC verification, goAML reporting, and DNFBP obligations. Reduce regulatory risk.'),
    keywords: ['AML UAE', 'Dubai AML compliance', 'anti-money laundering', 'KYC UAE', 'DNFBP compliance'],
    canonicalPath: '/aml-kyc-compliance-uae',
  },
  kyc: {
    title: 'KYC UAE | Customer Due Diligence | Star One',
    description: desc('KYC UAE support for customer due diligence, onboarding checks, and ongoing monitoring for regulated and high-risk businesses.'),
    keywords: ['KYC UAE', 'Dubai KYC compliance', 'customer due diligence'],
    canonicalPath: '/aml-kyc-compliance-uae',
  },
  ubo: {
    title: 'UBO Registration UAE | Beneficial Owner Filing | Star One',
    description: desc('UBO UAE guidance for beneficial ownership registers, updates, and documentation across your company structure.'),
    keywords: ['UBO UAE', 'Dubai UBO filing', 'beneficial ownership'],
    canonicalPath: '/ubo-registration-uae',
  },
  'personal-banking': {
    title: 'Personal Banking UAE | Non-Resident Accounts | Star One',
    description: desc('Personal banking UAE support for residents and eligible non-residents opening accounts with the right documents and guidance.'),
    keywords: ['Personal Banking UAE', 'Dubai bank account', 'UAE banking'],
    canonicalPath: '/corporate-banking-dubai',
  },
  'corporate-banking': {
    title: 'Corporate Bank Account Dubai 2026 | Star One',
    description: desc('Open a corporate bank account in Dubai. See which banks accept new companies, required documents, and how to avoid rejection.'),
    keywords: ['Corporate Banking UAE', 'Dubai corporate bank account', 'UAE banking', 'business bank account Dubai'],
    canonicalPath: '/corporate-banking-dubai',
  },
  'accounting-bookkeeping': {
    title: 'Accounting & Bookkeeping UAE | CFO Services Dubai | Star One',
    description: desc('Accounting & Bookkeeping UAE support from AED 750 per month to keep records accurate, ready for tax filings and audits.'),
    keywords: ['Accounting UAE', 'Bookkeeping UAE', 'Dubai accounting services'],
    canonicalPath: '/accounting-bookkeeping-uae',
  },
  'hr-payroll': {
    title: 'HR & Payroll Services UAE | Dubai Payroll Management | Star One',
    description: desc('HR & Payroll Services UAE from AED 500 per employee for WPS support, payroll administration, and workforce management.'),
    keywords: ['HR UAE', 'Payroll UAE', 'Dubai HR services'],
    canonicalPath: '/hr-payroll-uae',
  },
  'marketing-branding': {
    title: 'Marketing UAE | Brand Strategy & Growth | Star One',
    description: desc('Marketing UAE support for brand positioning, launches, and growth strategies that help your business stand out.'),
    keywords: ['Marketing UAE', 'Branding UAE', 'Dubai brand strategy'],
    canonicalPath: '/marketing-branding-uae',
  },
  'trademark-strategy': {
    title: 'Trademark Registration UAE | IP Protection Dubai | Star One',
    description: desc('Trademark registration UAE guidance for searches, filings, and brand protection across your core commercial assets.'),
    keywords: ['Trademark UAE', 'Dubai trademark filing', 'brand protection'],
    canonicalPath: '/trademark-registration-uae',
  },
  'will-services': {
    title: 'Will Services UAE | Legal Wills for Expats Dubai | Star One',
    description: desc('Will Services UAE support from AED 2,750 for estate planning, document preparation, and practical guidance for Dubai residents.'),
    keywords: ['Will Services UAE', 'Dubai will registration', 'estate planning UAE'],
    canonicalPath: '/will-services-uae',
  },
  'document-attestation': {
    title: 'Document Attestation UAE | MOE & MOFA Attestation | Star One',
    description: desc('Document Attestation UAE support from AED 250 for certificates, powers of attorney, and legal paperwork used in the UAE and abroad.'),
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
    priceRange: 'AED 5,750 - AED 17,000',
    sameAs: [
      SITE_INFO.social?.instagram,
      SITE_INFO.social?.linkedin,
    ].filter(Boolean),
  }
}

export function buildServiceJsonLd(service: ServiceData, path?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    url: `${SITE_INFO.url}${path ?? ''}`,
    provider: {
      '@type': 'Organization',
      '@id': `${SITE_INFO.url}/#business`,
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

export function buildBreadcrumbJsonLd(items: Array<{ name: string; item: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
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
