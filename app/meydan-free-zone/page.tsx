import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/landing/ServiceLandingPage'
import { SITE_INFO } from '@/lib/site-info'
import { getLandingPageConfig } from '@/lib/landing-pages'

const config = getLandingPageConfig('meydan-free-zone')

export const metadata: Metadata = {
  title: config.metadataTitle,
  description: config.metadataDescription,
  alternates: { canonical: config.canonicalPath },
  openGraph: {
    title: config.metadataTitle,
    description: config.metadataDescription,
    url: `${SITE_INFO.url}${config.canonicalPath}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: config.metadataTitle,
    description: config.metadataDescription,
  },
}

export default function Page() {
  return (
    <ServiceLandingPage
      breadcrumbItems={config.breadcrumbItems}
      canonicalPath={config.canonicalPath}
      description={config.metadataDescription}
      heroEyebrow={config.heroEyebrow}
      heroTitle={config.heroTitle}
      intro={config.intro}
      schemaName={config.schemaName}
      schemaDescription={config.schemaDescription}
      faqs={config.faqs}
      ctas={[
        { label: 'Calculate Your Setup', href: '/calculator', primary: true },
        { label: 'Book a Free Consultation', href: '/contact' },
        { label: 'WhatsApp Us', href: SITE_INFO.whatsappHref, external: true },
      ]}
      relatedLinks={config.relatedLinks}
    >
      {config.content}
    </ServiceLandingPage>
  )
}

