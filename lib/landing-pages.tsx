import type { ReactNode } from 'react'
import Link from 'next/link'
import { SITE_INFO } from '@/lib/site-info'

type FaqItem = { q: string; a: string }

type LandingPageConfig = {
  metadataTitle: string
  metadataDescription: string
  canonicalPath: string
  heroEyebrow: string
  heroTitle: ReactNode
  intro: ReactNode
  schemaName: string
  schemaDescription: string
  breadcrumbItems: Array<{ name: string; item: string }>
  faqs: FaqItem[]
  relatedLinks: Array<{ label: string; href: string }>
  content: ReactNode
}

function abs(path: string) {
  return `${SITE_INFO.url}${path}`
}

function ctaLinks() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      <Link href="/calculator" className="btn btn-gold">
        Calculate Your Setup
      </Link>
      <Link href="/contact" className="btn btn-outline">
        Book a Free Consultation
      </Link>
      <a href={SITE_INFO.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
        WhatsApp Us
      </a>
    </div>
  )
}

const freeZoneFaqs: FaqItem[] = [
  { q: 'What is a Dubai free zone company?', a: 'A Dubai free zone company is a business established in a designated free zone that generally offers 100% foreign ownership, streamlined registration, and jurisdiction-specific operating rules. The right zone depends on your activity, office needs, and visa requirements.' },
  { q: 'Do free zone companies pay Corporate Tax in the UAE?', a: 'Free zone companies may qualify for the 0% Corporate Tax rate on qualifying income if they meet the current conditions. Non-qualifying income can still fall under the standard Corporate Tax rules, so the structure should be reviewed carefully.' },
  { q: 'Can a free zone company trade in the mainland?', a: 'In many cases, free zone companies cannot directly trade on the UAE mainland without the correct licensing, distributor, or mainland setup. The exact answer depends on your activity and where you want to sell.' },
  { q: 'Do I need an office in a free zone?', a: 'Many free zones offer flexi-desk, shared office, or virtual-office style options, while others require more substantial premises depending on the licence type and activity.' },
  { q: 'Can a free zone company sponsor visas?', a: 'Yes, many free zones offer investor, employee, and dependent visa packages. Visa eligibility depends on the specific authority, office package, and licence type.' },
]

const ifzaFaqs: FaqItem[] = [
  { q: 'Who is IFZA best for?', a: 'IFZA is often a practical choice for consultants, service providers, ecommerce founders, and small trading businesses that want a flexible free zone structure and straightforward administration.' },
  { q: 'Can I add activities later in IFZA?', a: 'In many cases, yes. Activity changes or additions are possible, but they must match the authority’s permitted list and any document or fee requirements at the time of change.' },
  { q: 'How long does IFZA setup usually take?', a: 'Setup time varies with activity type, document readiness, and approval speed, but many straightforward applications can move quickly once the paperwork is complete.' },
  { q: 'Can an IFZA company open a UAE bank account?', a: 'Yes, but bank onboarding is separate from licence issuance and depends on the company profile, expected transactions, source-of-funds checks, and the bank’s current compliance rules.' },
]

const dmccFaqs: FaqItem[] = [
  { q: 'Is DMCC only for commodities trading?', a: 'No. DMCC is well known for commodities and trading, but it also supports a broad range of service, consultancy, and digital businesses that fit its regulations.' },
  { q: 'Do I need an office for a DMCC company?', a: 'DMCC structures usually require an appropriate office solution that matches the licence and activity. The exact premises requirement depends on the current authority rules.' },
  { q: 'Can DMCC companies get visas?', a: 'Yes, many DMCC companies can apply for visas subject to the office package and licence structure.' },
  { q: 'Does DMCC setup cost stay fixed?', a: 'No. Costs can change based on activity type, office choice, visa quota, and regulatory charges, so it is best to confirm the current package before committing.' },
]

const rakezFaqs: FaqItem[] = [
  { q: 'What kind of business suits RAKEZ?', a: 'RAKEZ is often suitable for trading, industrial, logistics, warehousing, and many service businesses that want a scalable free zone structure in Ras Al Khaimah.' },
  { q: 'Can RAKEZ companies operate in Dubai?', a: 'RAKEZ companies can generally serve clients according to their licence terms, but direct mainland trading inside Dubai still needs to be reviewed carefully.' },
  { q: 'Are warehouse options available in RAKEZ?', a: 'Yes, one of RAKEZ’s strengths is its industrial and warehousing ecosystem, which can suit businesses that need storage or light manufacturing space.' },
  { q: 'Can I move from a starter package later?', a: 'In many cases, yes. As your business grows you can review office, visa, and activity needs and upgrade the structure if the authority allows it.' },
]

const shamsFaqs: FaqItem[] = [
  { q: 'Why do creatives choose SHAMS?', a: 'SHAMS is popular with media, digital, and content-led businesses because it offers a focused ecosystem for creators, agencies, and online founders.' },
  { q: 'Can SHAMS work for ecommerce?', a: 'Yes, SHAMS can be a fit for many online business models, but the exact activity needs to be matched to the approved licence and operational requirements.' },
  { q: 'Does SHAMS support visas?', a: 'Many SHAMS packages include visa options, but the quota and eligibility depend on the selected package and current authority rules.' },
  { q: 'Is SHAMS only for media businesses?', a: 'Media is a core fit, but several related creative, digital, and service activities may also be possible depending on the licence catalogue.' },
]

const meydanFaqs: FaqItem[] = [
  { q: 'Who should consider Meydan Free Zone?', a: 'Meydan Free Zone is often a practical option for consultants, service firms, online businesses, and founders who want a Dubai-based free zone with a modern setup process.' },
  { q: 'Can Meydan work for a small startup?', a: 'Yes. Many founders choose Meydan because it can suit lean startups that want a straightforward route into the UAE market.' },
  { q: 'Can I use Meydan for banking and visas?', a: 'Yes, but visa and banking success still depends on the company profile, activity, and the documents you submit to the bank or authority.' },
  { q: 'Does Meydan support multiple activities?', a: 'Often, yes, subject to the activity list and the authority’s current approval rules.' },
]

const freelanceFaqs: FaqItem[] = [
  { q: 'What is a freelance licence in Dubai?', a: 'A freelance licence is a permit that allows an individual to carry out selected professional activities as a self-employed person under the rules of a specific authority.' },
  { q: 'Is a freelance licence the same as a company?', a: 'No. A freelance licence is typically lighter and more personal than a company structure, so the right choice depends on your activity, branding, banking, and visa needs.' },
  { q: 'Can freelancers get a UAE residency visa?', a: 'Many authorities offer visa options with freelance setups, but the package and eligibility vary by zone and the applicant’s profile.' },
  { q: 'Can I add clients outside the UAE?', a: 'In many cases, yes. Freelance setups are often used by professionals serving local and international clients, subject to the licence terms.' },
]

const ecommerceFaqs: FaqItem[] = [
  { q: 'Should ecommerce founders choose mainland or free zone?', a: 'It depends on where you want to sell, how you want to ship, and whether you need local trading access or a zone-based structure with flexible ownership.' },
  { q: 'Do ecommerce companies need VAT registration?', a: 'If taxable supplies reach the UAE threshold, VAT registration may be mandatory. Registration should be reviewed against your turnover and operating model.' },
  { q: 'Can ecommerce companies open a bank account?', a: 'Yes, but banks assess the business model, website, supplier flow, owners, and compliance documents before approving the account.' },
  { q: 'Can I sell on marketplaces like Amazon or Noon?', a: 'Many ecommerce businesses do, but the right licence and operational setup should match the platform, warehousing, and fulfilment model you plan to use.' },
]

const indianFaqs: FaqItem[] = [
  { q: 'Can Indian entrepreneurs start a company in Dubai without a UAE partner?', a: 'In many cases, yes. Ownership rules depend on the chosen structure, but many mainland and free zone routes now allow 100% foreign ownership for eligible activities.' },
  { q: 'Do Indian founders need to visit Dubai in person?', a: 'Some steps can often be prepared remotely, but certain applications, bank processes, or biometrics may require a visit depending on the route and authority.' },
  { q: 'Is Dubai good for Indian business owners?', a: 'Dubai can be a strong choice because of its connectivity, tax environment, and access to regional and global markets, provided the structure is chosen correctly.' },
  { q: 'Can I sponsor family members after setup?', a: 'If your licence and visa package qualify, you may be able to sponsor family members subject to the usual residency rules and income or accommodation requirements.' },
]

const offshoreFaqs: FaqItem[] = [
  { q: 'What is an offshore company in the UAE?', a: 'An offshore company is typically used for international business, holding assets, or structuring cross-border operations. It is not the same as a mainland trading company.' },
  { q: 'Can an offshore company trade inside the UAE?', a: 'Generally, offshore companies are not used for direct mainland trade. Their use case is usually outside the local UAE retail or mainland trading model.' },
  { q: 'Does offshore formation include UAE residency visas?', a: 'Usually no. Offshore structures are commonly used without local office space or residency visa eligibility, though the exact rules depend on the jurisdiction.' },
  { q: 'Who should choose offshore formation?', a: 'Offshore can suit founders needing an international holding structure, asset ownership, or cross-border business planning rather than direct UAE market trading.' },
]

const freeZoneComparison = (
  <table className="w-full border-collapse text-left text-sm">
    <thead>
      <tr className="border-b border-[#E0E0E0] text-[#0A0A0A]">
        <th className="py-3 pr-4">Route</th>
        <th className="py-3 pr-4">Best for</th>
        <th className="py-3">Typical note</th>
      </tr>
    </thead>
    <tbody>
      {[
        ['IFZA', 'Consultancy, ecommerce, and lean startups', 'Flexible setup and broad activity options'],
        ['DMCC', 'Trading, services, and premium positioning', 'Well known for structured corporate environments'],
        ['RAKEZ', 'Industrial, logistics, and scalable setups', 'Useful if you need warehousing or a larger footprint'],
        ['SHAMS', 'Media, digital, and creator-led businesses', 'Good fit for content and online-first brands'],
        ['Meydan', 'Dubai-based startups and service firms', 'Often chosen for a straightforward setup route'],
      ].map(([route, bestFor, note]) => (
        <tr key={route} className="border-b border-[#E0E0E0] align-top">
          <td className="py-3 pr-4 font-medium text-[#0A0A0A]">{route}</td>
          <td className="py-3 pr-4 text-[#555555]">{bestFor}</td>
          <td className="py-3 text-[#555555]">{note}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export const landingPages: Record<string, LandingPageConfig> = {
  'free-zone-dubai': {
    metadataTitle: 'Free Zone Company Setup Dubai | Compare UAE Free Zones | Star One',
    metadataDescription: 'Free zone company setup Dubai with expert guidance on IFZA, DMCC, RAKEZ, SHAMS, and Meydan. Compare options, visas, banking, and tax planning.',
    canonicalPath: '/free-zone-dubai',
    heroEyebrow: 'Free Zone Company Formation',
    heroTitle: <>Free Zone Company Setup Dubai</>,
    intro: (
      <>
        Free Zone Company Setup Dubai is ideal if you want 100% foreign ownership, a flexible licence structure, and a
        straightforward route into the UAE market. We help you compare free zones, match the right activity, and plan
        the next steps for visas, banking, and compliance.
      </>
    ),
    schemaName: 'Free Zone Company Setup Dubai',
    schemaDescription: 'Free zone company formation support across Dubai and the UAE, including zone comparison, licensing, visas, banking, and compliance planning.',
    breadcrumbItems: [
      { name: 'Home', item: abs('/') },
      { name: 'Free Zone Dubai', item: abs('/free-zone-dubai') },
    ],
    faqs: freeZoneFaqs,
    relatedLinks: [
      { label: 'IFZA Business Setup', href: '/ifza-business-setup' },
      { label: 'DMCC Company Formation', href: '/dmcc-company-formation' },
      { label: 'RAKEZ Business Setup', href: '/rakez-business-setup' },
      { label: 'Business Setup Dubai', href: '/business-setup-dubai' },
      { label: 'Use the Calculator', href: '/calculator' },
    ],
    content: (
      <>
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="tag mb-4">Why Free Zones</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Why founders choose a free zone structure
            </h2>
            <p className="text-sm leading-7 mb-4 text-[#555555]">
              A free zone can work well for founders who value ownership simplicity, fast incorporation, and a clear
              international trading focus. The best choice still depends on your activity, where your customers are,
              and whether you need visas, warehousing, or office space.
            </p>
            <ul className="grid gap-3 text-sm text-[#555555]">
              <li>• 100% foreign ownership for eligible activities</li>
              <li>• Flexible licence and office packages in many zones</li>
              <li>• A useful fit for services, ecommerce, trading, and holding structures</li>
              <li>• A practical route when you do not need direct mainland retail access</li>
            </ul>
            {ctaLinks()}
          </div>

          <div className="rounded-2xl border p-6 bg-white" style={{ borderColor: '#E0E0E0' }}>
            <div className="tag mb-4">Compare Options</div>
            <h3 className="font-display text-2xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Popular free zone choices in the UAE
            </h3>
            {freeZoneComparison}
            <p className="mt-4 text-sm leading-7 text-[#555555]">
              Need help deciding? Start with our <Link href="/calculator" className="text-[#C9A84C] underline">setup calculator</Link> or read the{' '}
              <Link href="/insights/business-setup-dubai-guide" className="text-[#C9A84C] underline">business setup guide</Link>.
            </p>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="tag mb-4">Next Steps</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Match the zone to your business model
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              If your business is service-led, <Link href="/ifza-business-setup" className="text-[#C9A84C] underline">IFZA business setup</Link> and{' '}
              <Link href="/meydan-free-zone" className="text-[#C9A84C] underline">Meydan Free Zone</Link> are worth comparing. For heavier trading and premium corporate positioning,{' '}
              <Link href="/dmcc-company-formation" className="text-[#C9A84C] underline">DMCC company formation</Link> is often considered. If your model includes warehousing or logistics,{' '}
              <Link href="/rakez-business-setup" className="text-[#C9A84C] underline">RAKEZ business setup</Link> can be a strong fit.
            </p>
          </div>
          <div>
            <div className="tag mb-4">Compliance</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Don’t skip tax, banking, and licence planning
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              Before you incorporate, confirm how your structure affects <Link href="/corporate-tax-uae" className="text-[#C9A84C] underline">Corporate Tax</Link>,{' '}
              <Link href="/vat-registration-uae" className="text-[#C9A84C] underline">VAT</Link>, and banking. The right licence can make onboarding easier and reduce avoidable delays.
            </p>
            <p className="text-sm leading-7 mt-4 text-[#555555]">
              If you are still comparing mainland versus free zone, start from <Link href="/business-setup-dubai" className="text-[#C9A84C] underline">Business Setup Dubai</Link> and then narrow the route from there.
            </p>
          </div>
        </section>
      </>
    ),
  },
  'ifza-business-setup': {
    metadataTitle: 'IFZA Business Setup Dubai | Free Zone Formation | Star One',
    metadataDescription: 'IFZA business setup Dubai for consultants, ecommerce founders, and service firms. Compare packages, documents, banking, and compliance support.',
    canonicalPath: '/ifza-business-setup',
    heroEyebrow: 'IFZA Free Zone',
    heroTitle: <>IFZA Business Setup Dubai</>,
    intro: (
      <>
        IFZA Business Setup Dubai is a popular route for founders who want a flexible free zone company, clear licensing
        steps, and a fast start. We help you structure the application, compare packages, and plan your banking and tax
        setup from day one.
      </>
    ),
    schemaName: 'IFZA Business Setup Dubai',
    schemaDescription: 'IFZA free zone company formation support for Dubai-based founders who want flexible licensing, visa options, and practical startup guidance.',
    breadcrumbItems: [
      { name: 'Home', item: abs('/') },
      { name: 'Free Zone Dubai', item: abs('/free-zone-dubai') },
      { name: 'IFZA Business Setup', item: abs('/ifza-business-setup') },
    ],
    faqs: ifzaFaqs,
    relatedLinks: [
      { label: 'Free Zone Dubai', href: '/free-zone-dubai' },
      { label: 'Business Setup Dubai', href: '/business-setup-dubai' },
      { label: 'Corporate Banking Dubai', href: '/corporate-banking-dubai' },
      { label: 'Calculate Setup Cost', href: '/calculator' },
    ],
    content: (
      <>
        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="tag mb-4">Why IFZA</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Why IFZA is a strong starting point
            </h2>
            <p className="text-sm leading-7 mb-4 text-[#555555]">
              IFZA often suits consultants, digital businesses, and lean startups because it can be straightforward to
              launch and scale. If your offer is service-led or ecommerce-driven, it is worth comparing against{' '}
              <Link href="/meydan-free-zone" className="text-[#C9A84C] underline">Meydan Free Zone</Link> and{' '}
              <Link href="/shams-business-setup" className="text-[#C9A84C] underline">SHAMS business setup</Link> before deciding.
            </p>
            <ul className="grid gap-3 text-sm text-[#555555]">
              <li>• Flexible licence structures for many business models</li>
              <li>• Often attractive for founders who want a lean setup</li>
              <li>• Good fit for online and advisory-led businesses</li>
            </ul>
            {ctaLinks()}
          </div>
          <div className="rounded-2xl border p-6 bg-white" style={{ borderColor: '#E0E0E0' }}>
            <div className="tag mb-4">Plan Ahead</div>
            <h3 className="font-display text-2xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              What we check before filing
            </h3>
            <div className="space-y-4 text-sm leading-7 text-[#555555]">
              <p>We confirm the activity list, owner documents, visa expectations, and whether your setup needs a physical office or flexible workspace.</p>
              <p>We also review banking readiness, expected transaction flow, and whether your business should plan for VAT or Corporate Tax from the outset.</p>
              <p>For cost planning, use the <Link href="/calculator" className="text-[#C9A84C] underline">setup calculator</Link> and then compare the result with{' '}
                <Link href="/business-setup-dubai" className="text-[#C9A84C] underline">Business Setup Dubai</Link>.</p>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="tag mb-4">Document Checklist</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Keep the application clean and complete
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              Simple files move faster when the documents are ready. Expect to prepare passport copies, contact details,
              proposed activities, and any supporting information needed for bank and compliance reviews.
            </p>
          </div>
          <div>
            <div className="tag mb-4">Growth</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Where IFZA fits in your growth plan
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              If the company later needs broader trading support, we can compare the next step with{' '}
              <Link href="/dmcc-company-formation" className="text-[#C9A84C] underline">DMCC</Link>,{' '}
              <Link href="/rakez-business-setup" className="text-[#C9A84C] underline">RAKEZ</Link>, or a mainland route from{' '}
              <Link href="/business-setup-dubai" className="text-[#C9A84C] underline">Business Setup Dubai</Link>.
            </p>
          </div>
        </section>
      </>
    ),
  },
  'dmcc-company-formation': {
    metadataTitle: 'DMCC Company Formation Dubai | Premium Free Zone Setup | Star One',
    metadataDescription: 'DMCC company formation Dubai for trading, services, and premium business setups. Compare licensing, office, banking, and compliance steps.',
    canonicalPath: '/dmcc-company-formation',
    heroEyebrow: 'DMCC Free Zone',
    heroTitle: <>DMCC Company Formation Dubai</>,
    intro: (
      <>
        DMCC Company Formation Dubai is a strong choice for founders who want a premium free zone environment, robust
        compliance, and a respected corporate profile. We help you assess whether DMCC is the right fit for your
        activity, office plan, and banking requirements.
      </>
    ),
    schemaName: 'DMCC Company Formation Dubai',
    schemaDescription: 'DMCC company formation and licensing support for Dubai founders who want a premium free zone structure, banking support, and compliance guidance.',
    breadcrumbItems: [
      { name: 'Home', item: abs('/') },
      { name: 'Free Zone Dubai', item: abs('/free-zone-dubai') },
      { name: 'DMCC Company Formation', item: abs('/dmcc-company-formation') },
    ],
    faqs: dmccFaqs,
    relatedLinks: [
      { label: 'Free Zone Dubai', href: '/free-zone-dubai' },
      { label: 'Corporate Tax UAE', href: '/corporate-tax-uae' },
      { label: 'Corporate Banking Dubai', href: '/corporate-banking-dubai' },
      { label: 'Use the Calculator', href: '/calculator' },
    ],
    content: (
      <>
        <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="tag mb-4">Why DMCC</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Why DMCC is often shortlisted
            </h2>
            <p className="text-sm leading-7 text-[#555555] mb-4">
              DMCC is known for its well-structured environment and is often shortlisted by trading, service, and
              high-credibility brands. It can also be a fit for businesses that want a more corporate presentation when
              dealing with partners, banks, and suppliers.
            </p>
            <ul className="grid gap-3 text-sm text-[#555555]">
              <li>• Strong fit for trading and service-based companies</li>
              <li>• Clear corporate framework and compliance expectations</li>
              <li>• Useful for founders who want a premium Dubai location</li>
            </ul>
            {ctaLinks()}
          </div>
          <div className="rounded-2xl border p-6 bg-white" style={{ borderColor: '#E0E0E0' }}>
            <div className="tag mb-4">Planning</div>
            <h3 className="font-display text-2xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              What affects the setup budget
            </h3>
            <p className="text-sm leading-7 text-[#555555]">
              Office selection, visa quota, activity type, and additional authority charges can all affect the final
              investment. We recommend confirming the package first, then comparing it with{' '}
              <Link href="/calculator" className="text-[#C9A84C] underline">our calculator</Link> and the wider{' '}
              <Link href="/business-setup-dubai" className="text-[#C9A84C] underline">business setup</Link> plan.
            </p>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="tag mb-4">Banking</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Plan banking before you file
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              A bank account is not guaranteed by the licence alone. If you need a smooth opening process, review your
              business model, counterparties, and transaction flow before submission.
            </p>
          </div>
          <div>
            <div className="tag mb-4">Compliance</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Keep tax and filing obligations visible
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              If you are not sure how DMCC affects tax or VAT planning, start with{' '}
              <Link href="/corporate-tax-uae" className="text-[#C9A84C] underline">Corporate Tax UAE</Link> and{' '}
              <Link href="/vat-registration-uae" className="text-[#C9A84C] underline">VAT Registration UAE</Link> before you commit.
            </p>
          </div>
        </section>
      </>
    ),
  },
  'rakez-business-setup': {
    metadataTitle: 'RAKEZ Business Setup UAE | Trade, Industrial & Logistics | Star One',
    metadataDescription: 'RAKEZ business setup UAE for trading, industrial, logistics, and ecommerce founders. Compare office options, banking, and licence planning.',
    canonicalPath: '/rakez-business-setup',
    heroEyebrow: 'RAKEZ Free Zone',
    heroTitle: <>RAKEZ Business Setup UAE</>,
    intro: (
      <>
        RAKEZ Business Setup UAE is often considered by founders who need flexibility, scalability, and room for
        trading, warehousing, or light industrial activity. We help you assess the right package and plan the practical
        steps that follow incorporation.
      </>
    ),
    schemaName: 'RAKEZ Business Setup UAE',
    schemaDescription: 'RAKEZ company formation and business setup support for trading, industrial, logistics, and service-led founders in the UAE.',
    breadcrumbItems: [
      { name: 'Home', item: abs('/') },
      { name: 'Free Zone Dubai', item: abs('/free-zone-dubai') },
      { name: 'RAKEZ Business Setup', item: abs('/rakez-business-setup') },
    ],
    faqs: rakezFaqs,
    relatedLinks: [
      { label: 'Free Zone Dubai', href: '/free-zone-dubai' },
      { label: 'Ecommerce Company Setup', href: '/ecommerce-company-setup-dubai' },
      { label: 'Corporate Banking Dubai', href: '/corporate-banking-dubai' },
      { label: 'Use the Calculator', href: '/calculator' },
    ],
    content: (
      <>
        <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="tag mb-4">Why RAKEZ</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Why RAKEZ is attractive for growing businesses
            </h2>
            <p className="text-sm leading-7 text-[#555555] mb-4">
              RAKEZ is often shortlisted by businesses that need more than a basic service licence. If your business
              model includes imports, storage, or operational scale, it may be a practical alternative to a purely
              office-based setup.
            </p>
            <ul className="grid gap-3 text-sm text-[#555555]">
              <li>• Useful for logistics, industrial, and trading businesses</li>
              <li>• Can support larger operational requirements</li>
              <li>• Good to compare against IFZA and DMCC for service-led models</li>
            </ul>
            {ctaLinks()}
          </div>
          <div className="rounded-2xl border p-6 bg-white" style={{ borderColor: '#E0E0E0' }}>
            <div className="tag mb-4">Operational Fit</div>
            <h3 className="font-display text-2xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              When RAKEZ can be the smarter route
            </h3>
            <p className="text-sm leading-7 text-[#555555]">
              If you need warehousing, import/export support, or a setup that can grow with your operations, RAKEZ is
              often worth reviewing before you pick a lighter free zone package.
            </p>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="tag mb-4">Ecommerce</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              A good option for ecommerce planning
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              Ecommerce founders often care about fulfilment, stock handling, and banking. If that describes you, compare
              RAKEZ with <Link href="/ecommerce-company-setup-dubai" className="text-[#C9A84C] underline">ecommerce company setup</Link> and{' '}
              <Link href="/free-zone-dubai" className="text-[#C9A84C] underline">our free zone overview</Link>.
            </p>
          </div>
          <div>
            <div className="tag mb-4">Tax</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Don’t forget tax and filing steps
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              Before forming the company, check your obligations under{' '}
              <Link href="/corporate-tax-uae" className="text-[#C9A84C] underline">Corporate Tax UAE</Link> and{' '}
              <Link href="/vat-registration-uae" className="text-[#C9A84C] underline">VAT Registration UAE</Link>.
            </p>
          </div>
        </section>
      </>
    ),
  },
  'shams-business-setup': {
    metadataTitle: 'SHAMS Business Setup Dubai | Media & Digital Free Zone | Star One',
    metadataDescription: 'SHAMS business setup Dubai for media, digital, and ecommerce founders. Compare packages, licence fit, banking, and visa options.',
    canonicalPath: '/shams-business-setup',
    heroEyebrow: 'SHAMS Free Zone',
    heroTitle: <>SHAMS Business Setup Dubai</>,
    intro: (
      <>
        SHAMS Business Setup Dubai is often considered by media, digital, and creator-led founders who want a focused
        free zone environment. We help you decide whether SHAMS fits your activity, your budget, and your future growth
        plans.
      </>
    ),
    schemaName: 'SHAMS Business Setup Dubai',
    schemaDescription: 'SHAMS business setup and company formation support for media, digital, and ecommerce founders in the UAE.',
    breadcrumbItems: [
      { name: 'Home', item: abs('/') },
      { name: 'Free Zone Dubai', item: abs('/free-zone-dubai') },
      { name: 'SHAMS Business Setup', item: abs('/shams-business-setup') },
    ],
    faqs: shamsFaqs,
    relatedLinks: [
      { label: 'Free Zone Dubai', href: '/free-zone-dubai' },
      { label: 'Freelance License Dubai', href: '/freelance-license-dubai' },
      { label: 'Ecommerce Company Setup', href: '/ecommerce-company-setup-dubai' },
      { label: 'Use the Calculator', href: '/calculator' },
    ],
    content: (
      <>
        <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="tag mb-4">Why SHAMS</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Why creators and digital brands look at SHAMS
            </h2>
            <p className="text-sm leading-7 mb-4 text-[#555555]">
              SHAMS can suit agencies, studios, content businesses, and online brands that want a creative-friendly
              setup. If your work is highly digital, this can be a practical way to formalise the business without
              overbuilding the structure too early.
            </p>
            <ul className="grid gap-3 text-sm text-[#555555]">
              <li>• Useful for media, marketing, and digital-first businesses</li>
              <li>• Can work well with content-led and service-led models</li>
              <li>• Often compared with freelance and ecommerce routes</li>
            </ul>
            {ctaLinks()}
          </div>
          <div className="rounded-2xl border p-6 bg-white" style={{ borderColor: '#E0E0E0' }}>
            <div className="tag mb-4">Decision Point</div>
            <h3 className="font-display text-2xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Freelance licence or company setup?
            </h3>
            <p className="text-sm leading-7 text-[#555555]">
              If you are working solo, compare SHAMS company formation with{' '}
              <Link href="/freelance-license-dubai" className="text-[#C9A84C] underline">a freelance licence in Dubai</Link>. The better route depends on
              liability, branding, banking, and whether you plan to hire or scale later.
            </p>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="tag mb-4">Banking</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Keep banking expectations realistic
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              Even in a creative-friendly zone, bank onboarding still depends on business model clarity and documents.
              If you want a smoother path, start with <Link href="/corporate-banking-dubai" className="text-[#C9A84C] underline">corporate banking</Link> support early.
            </p>
          </div>
          <div>
            <div className="tag mb-4">Tax</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Check tax and VAT before you launch
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              Use our pages on <Link href="/corporate-tax-uae" className="text-[#C9A84C] underline">Corporate Tax UAE</Link> and{' '}
              <Link href="/vat-registration-uae" className="text-[#C9A84C] underline">VAT Registration UAE</Link> to understand what may apply once you start trading.
            </p>
          </div>
        </section>
      </>
    ),
  },
  'meydan-free-zone': {
    metadataTitle: 'Meydan Free Zone Dubai | Company Formation | Star One',
    metadataDescription: 'Meydan free zone Dubai company formation for startups, consultants, and ecommerce founders. Compare setup steps, banking, and compliance.',
    canonicalPath: '/meydan-free-zone',
    heroEyebrow: 'Meydan Free Zone',
    heroTitle: <>Meydan Free Zone Dubai</>,
    intro: (
      <>
        Meydan Free Zone Dubai can be a practical option for founders who want a Dubai-based company with a clear setup
        process and flexible growth path. We help you decide whether Meydan fits your activity, your banking needs, and
        your next stage of expansion.
      </>
    ),
    schemaName: 'Meydan Free Zone Dubai',
    schemaDescription: 'Meydan free zone company formation support for Dubai startups, consultants, and ecommerce businesses.',
    breadcrumbItems: [
      { name: 'Home', item: abs('/') },
      { name: 'Free Zone Dubai', item: abs('/free-zone-dubai') },
      { name: 'Meydan Free Zone', item: abs('/meydan-free-zone') },
    ],
    faqs: meydanFaqs,
    relatedLinks: [
      { label: 'Free Zone Dubai', href: '/free-zone-dubai' },
      { label: 'IFZA Business Setup', href: '/ifza-business-setup' },
      { label: 'Business Setup Dubai', href: '/business-setup-dubai' },
      { label: 'Use the Calculator', href: '/calculator' },
    ],
    content: (
      <>
        <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="tag mb-4">Why Meydan</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Why Meydan can be a practical Dubai route
            </h2>
            <p className="text-sm leading-7 text-[#555555] mb-4">
              Meydan is often reviewed by founders who want a Dubai-branded structure without jumping straight into a
              more complex corporate setup. It can suit consultants, small teams, and online businesses.
            </p>
            <ul className="grid gap-3 text-sm text-[#555555]">
              <li>• Useful for startups and service businesses</li>
              <li>• Good to compare against IFZA and SHAMS</li>
              <li>• Often chosen by founders wanting a simple Dubai presence</li>
            </ul>
            {ctaLinks()}
          </div>
          <div className="rounded-2xl border p-6 bg-white" style={{ borderColor: '#E0E0E0' }}>
            <div className="tag mb-4">Cost Planning</div>
            <h3 className="font-display text-2xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              What changes the final cost
            </h3>
            <p className="text-sm leading-7 text-[#555555]">
              Licence type, activity count, visa quota, and office options can all change the final budget. Use{' '}
              <Link href="/calculator" className="text-[#C9A84C] underline">the calculator</Link> before you compare Meydan with other free zones.
            </p>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="tag mb-4">Banking</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Open the bank conversation early
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              The sooner you define your model, the easier it becomes to prepare for account opening. We can help you
              compare the paperwork before you submit to a bank.
            </p>
          </div>
          <div>
            <div className="tag mb-4">Compliance</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Keep tax obligations visible from day one
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              Review your likely Corporate Tax and VAT position with our{' '}
              <Link href="/corporate-tax-uae" className="text-[#C9A84C] underline">Corporate Tax UAE</Link> and{' '}
              <Link href="/vat-registration-uae" className="text-[#C9A84C] underline">VAT Registration UAE</Link> pages before filing.
            </p>
          </div>
        </section>
      </>
    ),
  },
  'freelance-license-dubai': {
    metadataTitle: 'Freelance License Dubai | UAE Freelancer Permit | Star One',
    metadataDescription: 'Freelance license Dubai support for solo professionals, creators, and consultants. Compare permit options, visas, banking, and tax steps.',
    canonicalPath: '/freelance-license-dubai',
    heroEyebrow: 'Freelance Setup',
    heroTitle: <>Freelance License Dubai</>,
    intro: (
      <>
        Freelance License Dubai is often the simplest route for solo professionals who want to work legally under a
        recognised UAE permit. We help you compare whether a freelance licence or company formation is the better long
        term move for your work style and client base.
      </>
    ),
    schemaName: 'Freelance License Dubai',
    schemaDescription: 'Freelance licence and permit guidance for Dubai-based solo professionals, creators, consultants, and digital specialists.',
    breadcrumbItems: [
      { name: 'Home', item: abs('/') },
      { name: 'Freelance License Dubai', item: abs('/freelance-license-dubai') },
    ],
    faqs: freelanceFaqs,
    relatedLinks: [
      { label: 'SHAMS Business Setup', href: '/shams-business-setup' },
      { label: 'Meydan Free Zone', href: '/meydan-free-zone' },
      { label: 'Golden Visa UAE', href: '/golden-visa-uae' },
      { label: 'Use the Calculator', href: '/calculator' },
    ],
    content: (
      <>
        <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="tag mb-4">Who It Suits</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Who should consider a freelance licence
            </h2>
            <p className="text-sm leading-7 text-[#555555] mb-4">
              Freelance licences are often considered by designers, writers, consultants, developers, photographers,
              marketers, and other solo professionals who serve clients directly. If you plan to hire quickly or build a
              larger structure, a company setup may be more appropriate.
            </p>
            <ul className="grid gap-3 text-sm text-[#555555]">
              <li>• Good for solo professionals and independent contractors</li>
              <li>• Often lighter than a full company formation</li>
              <li>• Useful when you want to start without overcommitting</li>
            </ul>
            {ctaLinks()}
          </div>
          <div className="rounded-2xl border p-6 bg-white" style={{ borderColor: '#E0E0E0' }}>
            <div className="tag mb-4">Decision</div>
            <h3 className="font-display text-2xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Licence or company?
            </h3>
            <p className="text-sm leading-7 text-[#555555]">
              If you need a clearer corporate brand, multiple shareholders, or a broader operating structure, compare the
              freelance option with{' '}
              <Link href="/free-zone-dubai" className="text-[#C9A84C] underline">free zone company formation</Link> and{' '}
              <Link href="/business-setup-dubai" className="text-[#C9A84C] underline">mainland setup</Link>.
            </p>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="tag mb-4">Banking</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Bank readiness still matters
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              A freelance permit does not automatically solve bank onboarding. Keep your portfolio, invoices, and source
              of funds clear before you approach a bank or payment provider.
            </p>
          </div>
          <div>
            <div className="tag mb-4">Residency</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              If you need residency, plan it early
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              If residency is part of your plan, review your options alongside{' '}
              <Link href="/golden-visa-uae" className="text-[#C9A84C] underline">Golden Visa UAE</Link> and the relevant free zone or mainland route.
            </p>
          </div>
        </section>
      </>
    ),
  },
  'ecommerce-company-setup-dubai': {
    metadataTitle: 'Ecommerce Company Setup Dubai | Online Business Formation | Star One',
    metadataDescription: 'Ecommerce company setup Dubai for online stores, marketplaces, and D2C brands. Compare mainland and free zone routes, banking, and VAT planning.',
    canonicalPath: '/ecommerce-company-setup-dubai',
    heroEyebrow: 'Ecommerce Setup',
    heroTitle: <>Ecommerce Company Setup Dubai</>,
    intro: (
      <>
        Ecommerce Company Setup Dubai is designed for founders launching online stores, marketplace brands, and direct
        to consumer businesses. We help you choose between mainland and free zone structures, then plan the licence,
        banking, and tax steps that follow.
      </>
    ),
    schemaName: 'Ecommerce Company Setup Dubai',
    schemaDescription: 'Ecommerce company formation support for online stores, marketplace brands, and direct-to-consumer businesses in Dubai.',
    breadcrumbItems: [
      { name: 'Home', item: abs('/') },
      { name: 'Ecommerce Company Setup Dubai', item: abs('/ecommerce-company-setup-dubai') },
    ],
    faqs: ecommerceFaqs,
    relatedLinks: [
      { label: 'Free Zone Dubai', href: '/free-zone-dubai' },
      { label: 'DMCC Company Formation', href: '/dmcc-company-formation' },
      { label: 'RAKEZ Business Setup', href: '/rakez-business-setup' },
      { label: 'Corporate Banking Dubai', href: '/corporate-banking-dubai' },
    ],
    content: (
      <>
        <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="tag mb-4">Route Choice</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Mainland or free zone for ecommerce?
            </h2>
            <p className="text-sm leading-7 text-[#555555] mb-4">
              The best route depends on your sales model, fulfilment setup, and where you need to trade. If you want a
              simplified starting point, compare <Link href="/free-zone-dubai" className="text-[#C9A84C] underline">free zone options</Link> first;
              if you need broader local trading access, a mainland route may make more sense.
            </p>
            <ul className="grid gap-3 text-sm text-[#555555]">
              <li>• Choose the licence that matches your fulfilment model</li>
              <li>• Confirm whether warehousing, imports, or local sales are needed</li>
              <li>• Plan for bank onboarding before launching the store</li>
            </ul>
            {ctaLinks()}
          </div>
          <div className="rounded-2xl border p-6 bg-white" style={{ borderColor: '#E0E0E0' }}>
            <div className="tag mb-4">Operations</div>
            <h3 className="font-display text-2xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              What ecommerce founders should prepare
            </h3>
            <p className="text-sm leading-7 text-[#555555]">
              Before launch, line up your website, payment flow, supplier details, shipping plan, and product documents so
              your bank and compliance checks are easier to complete.
            </p>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="tag mb-4">Tax</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Don’t ignore VAT or Corporate Tax
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              Ecommerce businesses can trigger VAT registration and Corporate Tax obligations once turnover or taxable
              activity reaches the relevant thresholds, so review those pages early.
            </p>
          </div>
          <div>
            <div className="tag mb-4">Growth</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Pick the structure that can scale
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              If your brand might expand into warehousing or regional trading, compare{' '}
              <Link href="/rakez-business-setup" className="text-[#C9A84C] underline">RAKEZ</Link>,{' '}
              <Link href="/dmcc-company-formation" className="text-[#C9A84C] underline">DMCC</Link>, and{' '}
              <Link href="/business-setup-dubai-for-indians" className="text-[#C9A84C] underline">our Indian founders guide</Link>.
            </p>
          </div>
        </section>
      </>
    ),
  },
  'business-setup-dubai-for-indians': {
    metadataTitle: 'Business Setup Dubai for Indians | UAE Company Formation | Star One',
    metadataDescription: 'Business setup Dubai for Indians with guidance on ownership, visas, banking, tax, and choosing between mainland and free zone routes.',
    canonicalPath: '/business-setup-dubai-for-indians',
    heroEyebrow: 'Founder Guide',
    heroTitle: <>Business Setup Dubai for Indians</>,
    intro: (
      <>
        Business Setup Dubai for Indians is about choosing the right structure for your goals, whether that means a
        mainland company, a free zone entity, or a different route entirely. We help Indian founders compare the
        practical steps around ownership, visas, banking, and compliance.
      </>
    ),
    schemaName: 'Business Setup Dubai for Indians',
    schemaDescription: 'Business setup guidance for Indian entrepreneurs starting a company in Dubai, including ownership, visas, banking, and tax planning.',
    breadcrumbItems: [
      { name: 'Home', item: abs('/') },
      { name: 'Business Setup Dubai for Indians', item: abs('/business-setup-dubai-for-indians') },
    ],
    faqs: indianFaqs,
    relatedLinks: [
      { label: 'Business Setup Dubai', href: '/business-setup-dubai' },
      { label: 'Free Zone Dubai', href: '/free-zone-dubai' },
      { label: 'Corporate Banking Dubai', href: '/corporate-banking-dubai' },
      { label: 'Golden Visa UAE', href: '/golden-visa-uae' },
    ],
    content: (
      <>
        <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="tag mb-4">Planning</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              What Indian founders usually compare first
            </h2>
            <p className="text-sm leading-7 text-[#555555] mb-4">
              Most Indian founders start by comparing market access, licence cost, visa needs, and the bank account path.
              The best choice is usually the one that matches your customers and your operating model, not simply the
              cheapest option.
            </p>
            <ul className="grid gap-3 text-sm text-[#555555]">
              <li>• Mainland for broader local market access</li>
              <li>• Free zone for streamlined incorporation and ownership simplicity</li>
              <li>• A visa plan that matches your family or team goals</li>
            </ul>
            {ctaLinks()}
          </div>
          <div className="rounded-2xl border p-6 bg-white" style={{ borderColor: '#E0E0E0' }}>
            <div className="tag mb-4">Documents</div>
            <h3 className="font-display text-2xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              What to prepare before you begin
            </h3>
            <p className="text-sm leading-7 text-[#555555]">
              Keep passport copies, contact details, business activity notes, and any previous corporate or bank
              documents ready so the process moves cleanly from consultation to licence.
            </p>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="tag mb-4">Residency</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Visa planning can be part of the structure
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              If your family is moving with you, review residency options with{' '}
              <Link href="/golden-visa-uae" className="text-[#C9A84C] underline">Golden Visa UAE</Link> and the standard visa routes before you decide.
            </p>
          </div>
          <div>
            <div className="tag mb-4">Tax & Banking</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Keep tax and banking aligned from the start
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              Before you apply, review{' '}
              <Link href="/corporate-tax-uae" className="text-[#C9A84C] underline">Corporate Tax UAE</Link>,{' '}
              <Link href="/vat-registration-uae" className="text-[#C9A84C] underline">VAT Registration UAE</Link>, and{' '}
              <Link href="/corporate-banking-dubai" className="text-[#C9A84C] underline">corporate banking support</Link>.
            </p>
          </div>
        </section>
      </>
    ),
  },
  'offshore-company-formation-uae': {
    metadataTitle: 'Offshore Company Formation UAE | Holding & International Structure | Star One',
    metadataDescription: 'Offshore company formation UAE for international holding structures and cross-border planning. Compare suitability, documents, and banking.',
    canonicalPath: '/offshore-company-formation-uae',
    heroEyebrow: 'Offshore Structure',
    heroTitle: <>Offshore Company Formation UAE</>,
    intro: (
      <>
        Offshore Company Formation UAE is typically used for holding, international structuring, and cross-border
        planning rather than local mainland trading. We help you review whether an offshore structure is actually the
        right tool for your business goals.
      </>
    ),
    schemaName: 'Offshore Company Formation UAE',
    schemaDescription: 'Offshore company formation and international structuring support in the UAE, including suitability checks, documentation, and banking planning.',
    breadcrumbItems: [
      { name: 'Home', item: abs('/') },
      { name: 'Offshore Company Formation UAE', item: abs('/offshore-company-formation-uae') },
    ],
    faqs: offshoreFaqs,
    relatedLinks: [
      { label: 'Business Setup Dubai', href: '/business-setup-dubai' },
      { label: 'Free Zone Dubai', href: '/free-zone-dubai' },
      { label: 'Corporate Banking Dubai', href: '/corporate-banking-dubai' },
      { label: 'Use the Calculator', href: '/calculator' },
    ],
    content: (
      <>
        <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="tag mb-4">Use Case</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              When offshore can be the right tool
            </h2>
            <p className="text-sm leading-7 text-[#555555] mb-4">
              Offshore structures are generally considered for international holding, ownership planning, and certain
              cross-border arrangements. They are usually not chosen for direct mainland trading or a local retail model.
            </p>
            <ul className="grid gap-3 text-sm text-[#555555]">
              <li>• Useful for holding and international structuring</li>
              <li>• Not a substitute for a mainland trading licence</li>
              <li>• Best reviewed before you start banking or tax planning</li>
            </ul>
            {ctaLinks()}
          </div>
          <div className="rounded-2xl border p-6 bg-white" style={{ borderColor: '#E0E0E0' }}>
            <div className="tag mb-4">Restrictions</div>
            <h3 className="font-display text-2xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              What offshore usually cannot do
            </h3>
            <p className="text-sm leading-7 text-[#555555]">
              Offshore is typically not the route you choose if you need local trading, retail operations, or a residency
              visa package. If those are important, compare with{' '}
              <Link href="/free-zone-dubai" className="text-[#C9A84C] underline">free zone company formation</Link> or{' '}
              <Link href="/business-setup-dubai" className="text-[#C9A84C] underline">mainland setup</Link>.
            </p>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="tag mb-4">Banking</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Banking still needs a clear profile
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              Even for holding structures, banks want a clear explanation of owners, source of funds, and the reason the
              structure exists.
            </p>
          </div>
          <div>
            <div className="tag mb-4">Planning</div>
            <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
              Get the structure reviewed before filing
            </h2>
            <p className="text-sm leading-7 text-[#555555]">
              Offshore is often a specialised choice, so it is worth reviewing the fit with a wider business setup plan
              before you commit to it.
            </p>
          </div>
        </section>
      </>
    ),
  },
}

export function getLandingPageConfig(slug: string) {
  return landingPages[slug]
}

