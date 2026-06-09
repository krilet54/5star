export interface FAQCategory {
  title: string
  faqs: Array<{ q: string; a: string }>
}

export const faqData: FAQCategory[] = [
  {
    title: 'Business Setup',
    faqs: [
      {
        q: 'What is the minimum capital required to start a company in Dubai?',
        a: 'It depends on the licence type, jurisdiction, and activity. Many structures do not require a paid-up capital deposit, but some authorities and activities still specify a minimum capital in the licence documents.',
      },
      {
        q: 'Can I start a company in Dubai without visiting in person?',
        a: 'In many cases, yes. A lot of the setup can be handled remotely with scanned documents, e-signatures, and a power of attorney where needed. Some steps, like biometrics or banking, may still require a visit.',
      },
      {
        q: 'Do I need a local Emirati partner or sponsor for a mainland company in 2026?',
        a: 'Not for most commercial activities. The UAE allows 100% foreign ownership for many mainland businesses, though some strategic or regulated activities may still have special requirements.',
      },
      {
        q: 'What is the difference between an LLC and a sole establishment in Dubai?',
        a: 'An LLC is a separate legal entity with limited liability protection. A sole establishment is owned by one person, and the liability treatment can be broader, so the owner usually carries more personal exposure.',
      },
      {
        q: 'Can I change my business activity after setting up?',
        a: 'Usually yes. You can apply to amend or add activities, subject to authority approval, licence updates, and any additional external approvals the new activity may require.',
      },
      {
        q: 'What is Ejari and do I need it for my trade license?',
        a: 'Ejari is the official tenancy registration system in Dubai. Mainland companies commonly need a valid lease and Ejari or an equivalent tenancy document, while many free zones use their own lease arrangements.',
      },
      {
        q: 'Can one person own multiple companies in the UAE?',
        a: 'Yes. A single person can usually own multiple entities, provided each company meets its own licensing, compliance, and banking requirements.',
      },
      {
        q: 'How do I renew my UAE trade license?',
        a: 'Renewal usually involves updating your tenancy or office contract, clearing outstanding fees or fines, and submitting the renewal request to the relevant authority before the licence expires.',
      },
      {
        q: 'How long does business setup take in Dubai?',
        a: 'Simple free zone setups can often be completed in a few business days once documents are ready. Mainland and regulated activities can take longer because approvals vary by authority and activity.',
      },
      {
        q: 'What documents are normally needed to start a company?',
        a: 'The usual starting set is passport copies, passport-size photos, an application form, and in some cases a business plan or additional approvals. Banks and authorities may ask for extra documents later.',
      },
    ],
  },
  {
    title: 'Visa & Residency',
    faqs: [
      {
        q: 'How long does an employment visa take in the UAE?',
        a: 'A straightforward employment visa often takes around 2 to 4 weeks, but the exact timeline depends on medical, Emirates ID, and any authority or company processing delays.',
      },
      {
        q: 'Can I sponsor my parents on a UAE residency visa?',
        a: 'In some cases, yes. Parent sponsorship is possible if you meet the sponsor income, housing, insurance, and relationship requirements set by the relevant authority.',
      },
      {
        q: 'What happens to my visa if I leave the UAE for more than 6 months?',
        a: 'For most residency visas, a long absence can affect validity unless an exception applies. Check the latest immigration rules before travelling for an extended period.',
      },
      {
        q: 'Can I work for multiple employers on one UAE visa?',
        a: 'Not usually on a standard single-employer visa. Multiple-employer or part-time arrangements need the right permits and approvals from the relevant authority.',
      },

      {
        q: 'How do I cancel a UAE residency visa?',
        a: 'Cancellation is normally initiated by the sponsor or company through the relevant immigration authority, followed by final status updates, labour clearance if needed, and any dependent cancellations.',
      },
      {
        q: 'Can I sponsor my family if I hold a residence visa?',
        a: 'Yes, many UAE residents can sponsor a spouse and children if they meet the income, tenancy, and insurance requirements. Parent sponsorship is also possible in some cases.',
      },
      {
        q: 'Can I apply for a visa from outside the UAE?',
        a: 'Often yes. Many visa categories can start with an entry permit or pre-approval from outside the UAE, though the exact process depends on the visa type.',
      },
    ],
  },
  {
    title: 'Tax & Compliance',
    faqs: [
      {
        q: 'Does a free zone company need to register for VAT in UAE?',
        a: 'Yes, if it meets the VAT registration conditions. Free zone status does not automatically exempt a company from VAT registration or filing obligations.',
      },
      {
        q: 'What is the VAT registration threshold in the UAE?',
        a: 'The mandatory VAT threshold is AED 375,000 of taxable supplies and imports over the relevant period. Voluntary registration is available from AED 187,500.',
      },
      {
        q: 'What is ESR (Economic Substance Regulations) and who does it apply to?',
        a: 'ESR rules are designed to ensure certain businesses with relevant activities in the UAE have adequate substance here. The rules and filing duties can change, so each licence should be checked against the latest official guidance.',
      },
      {
        q: 'What is AML compliance and which businesses need it in UAE?',
        a: 'AML compliance refers to anti-money-laundering controls, reporting, and due diligence. In the UAE, financial institutions and designated non-financial businesses and professions such as certain real estate, corporate, and precious metals businesses must comply with AML rules.',
      },
      {
        q: 'What is UBO registration in UAE?',
        a: 'UBO refers to the Ultimate Beneficial Owner. UAE companies must keep beneficial ownership details up to date with the relevant authority and maintain the required registers when ownership changes.',
      },
      {
        q: 'Can I deduct home office expenses from my UAE corporate tax?',
        a: 'Only if the expense is genuinely incurred for the business and meets the corporate tax deductibility rules. Personal or mixed-use costs are generally limited or disallowed.',
      },
      {
        q: 'What is the UAE corporate tax rate?',
        a: 'The standard corporate tax rate is 9% on taxable income above AED 375,000, while income up to that threshold is taxed at 0%. Qualifying free zone income may still qualify for 0% if the conditions are met.',
      },
      {
        q: 'What is a Qualifying Free Zone Person?',
        a: 'A Qualifying Free Zone Person is a free zone entity that meets the conditions needed to benefit from the 0% corporate tax treatment on qualifying income. The entity must satisfy substance and compliance requirements.',
      },
      {
        q: 'Does my free zone company need to file a Corporate Tax return?',
        a: 'In many cases, yes. Even if a company expects 0% treatment on qualifying income, it still needs to assess filing obligations and keep records under the corporate tax rules.',
      },
      {
        q: 'Can a company with zero revenue skip Corporate Tax registration?',
        a: 'Not automatically. Registration obligations depend on the entity type and FTA timetable, not just on whether revenue has started. It is safer to check the deadline and register on time.',
      },
    ],
  },
  {
    title: 'Banking',
    faqs: [
      {
        q: 'How long does it take to open a corporate bank account in Dubai?',
        a: 'A straightforward application can take a few weeks, but the timeline varies widely by bank, business activity, shareholder profile, and document quality.',
      },
      {
        q: 'Which banks are easiest for new companies in the UAE?',
        a: 'There is no universal easiest bank. Acceptance depends on your activity, expected transaction flow, shareholder residency, and the strength of your documents and business plan.',
      },
      {
        q: 'Can a non-resident open a personal bank account in Dubai?',
        a: 'Some banks allow non-resident accounts, but requirements are stricter than for residents. Expect extra due diligence, minimum balances, and document checks.',
      },
      {
        q: 'What documents are needed to open a corporate bank account?',
        a: 'Banks commonly ask for a trade licence, shareholder passports, company documents, business plan, proof of address, and sometimes supplier or client references.',
      },
      {
        q: 'Can a newly formed company open a bank account immediately?',
        a: 'Sometimes yes, but banks usually review the business profile closely. A complete application, clear activity description, and realistic financial expectations improve the chances of approval.',
      },
      {
        q: 'Can I open a bank account before getting my visa?',
        a: 'It may be possible in some cases, but many banks prefer residents or at least a clear status and strong supporting documents. The final decision always sits with the bank.',
      },
    ],
  },
  {
    title: 'General',
    faqs: [
      {
        q: 'How much does business setup cost in the UAE?',
        a: 'Costs vary by licence type, jurisdiction, activity, visas, and office requirements. Many setups can start from a low five-figure AED range, but the final figure should be quoted based on your exact plan.',
      },
      {
        q: 'Does Star One handle everything from start to finish?',
        a: 'Yes. We can manage the process from consultation and licence setup to visas, banking support, and ongoing compliance guidance.',
      },
      {
        q: 'I am based outside the UAE. Can you still help me?',
        a: 'Yes. Many founders start remotely and complete most of the process before travelling. We can guide the document flow and next steps from abroad.',
      },
      {
        q: 'Do you offer post-setup support?',
        a: 'Yes. Support can continue after incorporation with banking assistance, VAT and corporate tax support, accounting, and other compliance services.',
      },
      {
        q: 'Can I get help choosing between mainland and free zone?',
        a: 'Absolutely. The right structure depends on your activity, customers, office needs, visa plan, and budget. We compare the options before you commit.',
      },
      {
        q: 'What is the best structure for an online business in Dubai?',
        a: 'It depends on your model. E-commerce, service businesses, and agencies can work in either mainland or free zone structures, but banking and tax objectives should be reviewed before choosing.',
      },
    ],
  },
]
