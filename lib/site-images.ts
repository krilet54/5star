export const pageHeroImages = {
  about: '/images/heroes/about.jpg',
  calculator: '/images/heroes/calculator.jpg',
  contact: '/images/heroes/contact.jpg',
  faqs: '/images/heroes/insights.jpg',
  insights: '/images/heroes/insights.jpg',
  services: '/images/heroes/services.jpg',
} as const

const serviceImages = {
  businessSetup: '/images/services/business-setup.jpg',
  visaResidency: '/images/services/visa-residency.jpg',
  complianceTax: '/images/services/compliance-tax.jpg',
  businessOperations: '/images/services/business-operations.jpg',
} as const

const serviceImageBySlug: Record<string, string> = {
  'business-setup': serviceImages.businessSetup,
  'golden-visa': serviceImages.visaResidency,
  'employment-visa': serviceImages.visaResidency,
  'dependent-visa': serviceImages.visaResidency,
  'visit-visa': serviceImages.visaResidency,
  'corporate-tax': serviceImages.complianceTax,
  vat: serviceImages.complianceTax,
  audit: serviceImages.complianceTax,
  esr: serviceImages.complianceTax,
  aml: serviceImages.complianceTax,
  kyc: serviceImages.complianceTax,
  ubo: serviceImages.complianceTax,
  'personal-banking': serviceImages.businessOperations,
  'corporate-banking': serviceImages.businessOperations,
  'accounting-bookkeeping': serviceImages.complianceTax,
  'hr-payroll': serviceImages.businessOperations,
  'marketing-branding': serviceImages.businessOperations,
  'trademark-strategy': serviceImages.businessOperations,
  'will-services': serviceImages.businessOperations,
  'document-attestation': serviceImages.businessOperations,
}

export function getServiceImage(slug: string) {
  return serviceImageBySlug[slug] ?? serviceImages.businessSetup
}

export function getArticleFallbackImage(category?: string | null) {
  const value = category?.toLowerCase() ?? ''
  if (value.includes('visa') || value.includes('residency')) return serviceImages.visaResidency
  if (value.includes('tax') || value.includes('vat') || value.includes('compliance') || value.includes('audit')) return serviceImages.complianceTax
  if (value.includes('bank') || value.includes('account') || value.includes('hr') || value.includes('brand') || value.includes('trademark')) return serviceImages.businessOperations
  return serviceImages.businessSetup
}
