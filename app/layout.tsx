import type { Metadata } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import LeadCapturePopup from '@/components/LeadCapturePopup'
import { buildLocalBusinessJsonLd } from '@/lib/seo'
import { SITE_INFO } from '@/lib/site-info'

const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
})

const body = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: { default: 'Star One — Business Setup & Advisory Dubai, UAE', template: '%s | Star One' },
  description: 'Star One helps entrepreneurs and business owners set up companies in the UAE legally. From company formation to visas, compliance, accounting, and golden visa services.',
  keywords: ['UAE business setup', 'Dubai company formation', 'golden visa UAE', 'business setup Dubai', 'UAE visa services'],
  authors: [{ name: 'Star One Business Consultancy' }],
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://starone.ae',
    siteName: 'Star One',
    title: 'Star One — Business Setup & Advisory Dubai, UAE',
    description: 'Your trusted partner for UAE business setup, visas, compliance, and corporate services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Star One — Business Setup & Advisory Dubai, UAE',
    description: 'Your trusted partner for UAE business setup, visas, compliance, and corporate services.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/starone-icon-mark.svg',
    apple: '/starone-icon-mark.svg',
    shortcut: '/starone-icon-mark.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessJsonLd = buildLocalBusinessJsonLd()

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-66MENQ5QG1" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-66MENQ5QG1');
        `}</Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
        <Nav />
        <main>{children}</main>
        <Footer />
        <LeadCapturePopup />
      </body>
    </html>
  )
}
