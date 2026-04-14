import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Star One Terms and Conditions of service.',
}

const sections = [
  {
    title: '1. Agreement to Terms',
    paragraphs: [
      'By accessing the Star One website or engaging our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access our website or use our services.',
    ],
  },
  {
    title: '2. Services',
    paragraphs: [
      'Star One Business Consultancy provides business setup, visa, compliance, accounting, HR, and related advisory services in the UAE. The scope, deliverables, and fees for each engagement are defined in a separate service agreement or letter of engagement.',
      'We reserve the right to modify, suspend, or discontinue any service at any time with appropriate notice.',
    ],
  },
  {
    title: '3. Client Obligations',
    paragraphs: [
      'Clients are responsible for providing accurate, complete, and up-to-date information required for service delivery. Star One shall not be liable for delays, rejections, or errors arising from inaccurate or incomplete information provided by the client.',
      'Clients must comply with all UAE laws and regulations applicable to their business activities.',
    ],
  },
  {
    title: '4. Fees and Payment',
    paragraphs: [
      'Service fees are as agreed in the letter of engagement or service agreement. Government fees, third-party charges, and disbursements are additional and communicated in advance.',
      'Payments are due as specified in the engagement agreement. Late payments may attract interest and may result in suspension of services.',
      'Fees paid for services rendered are non-refundable unless otherwise specified in writing.',
    ],
  },
  {
    title: '5. Confidentiality',
    paragraphs: [
      'Star One treats all client information with strict confidentiality. We will not disclose client information to third parties except as required for service delivery, by law, or with the client\'s written consent.',
    ],
  },
  {
    title: '6. Limitation of Liability',
    paragraphs: [
      'Star One provides advisory services and facilitates government processes. We are not responsible for decisions made by government authorities, regulatory bodies, banks, or other third parties.',
      'Our liability for any claim arising from our services is limited to the fees paid for the specific service giving rise to the claim. We are not liable for indirect, consequential, or special damages.',
    ],
  },
  {
    title: '7. Intellectual Property',
    paragraphs: [
      'All content on the Star One website — including text, logos, graphics, and designs — is the property of Star One Business Consultancy and protected by applicable intellectual property laws. Unauthorised use or reproduction is prohibited.',
    ],
  },
  {
    title: '8. Governing Law',
    paragraphs: [
      'These Terms and Conditions are governed by the laws of the United Arab Emirates. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.',
    ],
  },
  {
    title: '9. Changes to Terms',
    paragraphs: [
      'We reserve the right to update these Terms and Conditions at any time. Continued use of our website or services after changes are posted constitutes acceptance of the updated terms.',
    ],
  },
  {
    title: '10. Contact',
    paragraphs: [
      'For any questions about these Terms and Conditions, please contact us at info@starone.ae.',
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-[860px] mx-auto px-8">
        <div className="tag">Legal</div>
        <h1 className="font-display mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 500 }}>
          Terms & Conditions
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
