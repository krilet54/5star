import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Star One Privacy Policy — how we collect, use, and protect your personal data.',
}

const sections = [
  {
    title: '1. Introduction',
    paragraphs: [
      'Star One Business Consultancy ("Star One", "we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.',
      'Please read this policy carefully. By using our website or services, you consent to the practices described herein.',
    ],
  },
  {
    title: '2. Information We Collect',
    paragraphs: [
      'Personal Information: We may collect personal information such as your name, email address, phone number, country of residence, and business details when you voluntarily provide it through our contact forms, consultation bookings, or service enquiries.',
      'Usage Information: We automatically collect certain information about your device and browsing activity, including IP address, browser type, pages viewed, and referring URLs, to help us improve our website and services.',
      'Communications: If you contact us via phone, email, or WhatsApp, we may retain records of that communication to provide follow-up assistance.',
    ],
  },
  {
    title: '3. How We Use Your Information',
    paragraphs: [
      'To respond to your enquiries and provide the services you request.',
      'To communicate with you about your application, account, or ongoing service engagement.',
      'To send relevant updates, guides, and information about UAE business setup — where you have consented to receive such communications.',
      'To improve our website, services, and client experience.',
      'To comply with UAE legal and regulatory requirements.',
    ],
  },
  {
    title: '4. Sharing of Information',
    paragraphs: [
      'We do not sell your personal information to third parties. We may share your information with trusted service providers who assist in delivering our services (e.g., government authorities for license applications, banks for account opening). Such parties are bound by confidentiality obligations.',
      'We may disclose your information where required by UAE law, court order, or regulatory authority.',
    ],
  },
  {
    title: '5. Data Security',
    paragraphs: [
      'We implement industry-standard security measures to protect your information from unauthorised access, disclosure, or loss. However, no method of data transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: '6. Data Retention',
    paragraphs: [
      'We retain your personal information for as long as necessary to provide our services and comply with our legal obligations. Client records are typically retained for a minimum of 5 years in accordance with UAE commercial law.',
    ],
  },
  {
    title: '7. Your Rights',
    paragraphs: [
      'You have the right to request access to, correction of, or deletion of your personal information. You may also withdraw consent to marketing communications at any time. To exercise these rights, please contact us at info@starone.ae.',
    ],
  },
  {
    title: '8. Cookies',
    paragraphs: [
      'Our website may use cookies to enhance your browsing experience and analyse site traffic. You can manage cookie preferences through your browser settings. Disabling cookies may affect some website functionality.',
    ],
  },
  {
    title: '9. Changes to This Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. We encourage you to review this policy periodically.',
    ],
  },
  {
    title: '10. Contact Us',
    paragraphs: [
      'If you have questions about this Privacy Policy or how we handle your data, please contact us at info@starone.ae or call +971 50 216 5471.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-[860px] mx-auto px-8">
        <div className="tag">Legal</div>
        <h1 className="font-display mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 500 }}>
          Privacy Policy
        </h1>
        <p className="mb-10 text-sm" style={{ color: 'var(--ink-dim)' }}>Last updated: January 2025</p>
        <div className="gold-divider" />
        <div className="prose-gold mt-10">
          {sections.map((s, i) => (
            <div key={i} className="mb-10">
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)', fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem' }}>{s.title}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-base leading-relaxed mb-4" style={{ color: 'var(--ink-muted)' }}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
