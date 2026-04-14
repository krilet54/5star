import type { Metadata } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const body = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
})

export const metadata: Metadata = {
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
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
