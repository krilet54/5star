'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'

const COUNTRY_CODES = [
  { code: '+93', label: 'Afghanistan' },
  { code: '+355', label: 'Albania' },
  { code: '+213', label: 'Algeria' },
  { code: '+376', label: 'Andorra' },
  { code: '+244', label: 'Angola' },
  { code: '+54', label: 'Argentina' },
  { code: '+374', label: 'Armenia' },
  { code: '+61', label: 'Australia' },
  { code: '+43', label: 'Austria' },
  { code: '+994', label: 'Azerbaijan' },
  { code: '+973', label: 'Bahrain' },
  { code: '+880', label: 'Bangladesh' },
  { code: '+375', label: 'Belarus' },
  { code: '+32', label: 'Belgium' },
  { code: '+501', label: 'Belize' },
  { code: '+229', label: 'Benin' },
  { code: '+975', label: 'Bhutan' },
  { code: '+591', label: 'Bolivia' },
  { code: '+387', label: 'Bosnia and Herzegovina' },
  { code: '+267', label: 'Botswana' },
  { code: '+55', label: 'Brazil' },
  { code: '+673', label: 'Brunei' },
  { code: '+359', label: 'Bulgaria' },
  { code: '+226', label: 'Burkina Faso' },
  { code: '+257', label: 'Burundi' },
  { code: '+855', label: 'Cambodia' },
  { code: '+237', label: 'Cameroon' },
  { code: '+1', label: 'Canada' },
  { code: '+238', label: 'Cape Verde' },
  { code: '+236', label: 'Central African Republic' },
  { code: '+235', label: 'Chad' },
  { code: '+56', label: 'Chile' },
  { code: '+86', label: 'China' },
  { code: '+57', label: 'Colombia' },
  { code: '+269', label: 'Comoros' },
  { code: '+242', label: 'Congo' },
  { code: '+243', label: 'Congo (DRC)' },
  { code: '+506', label: 'Costa Rica' },
  { code: '+385', label: 'Croatia' },
  { code: '+53', label: 'Cuba' },
  { code: '+357', label: 'Cyprus' },
  { code: '+420', label: 'Czech Republic' },
  { code: '+45', label: 'Denmark' },
  { code: '+253', label: 'Djibouti' },
  { code: '+1', label: 'Dominica' },
  { code: '+1', label: 'Dominican Republic' },
  { code: '+593', label: 'Ecuador' },
  { code: '+20', label: 'Egypt' },
  { code: '+503', label: 'El Salvador' },
  { code: '+240', label: 'Equatorial Guinea' },
  { code: '+291', label: 'Eritrea' },
  { code: '+372', label: 'Estonia' },
  { code: '+251', label: 'Ethiopia' },
  { code: '+679', label: 'Fiji' },
  { code: '+358', label: 'Finland' },
  { code: '+33', label: 'France' },
  { code: '+241', label: 'Gabon' },
  { code: '+220', label: 'Gambia' },
  { code: '+995', label: 'Georgia' },
  { code: '+49', label: 'Germany' },
  { code: '+233', label: 'Ghana' },
  { code: '+30', label: 'Greece' },
  { code: '+1', label: 'Grenada' },
  { code: '+502', label: 'Guatemala' },
  { code: '+224', label: 'Guinea' },
  { code: '+245', label: 'Guinea-Bissau' },
  { code: '+592', label: 'Guyana' },
  { code: '+509', label: 'Haiti' },
  { code: '+504', label: 'Honduras' },
  { code: '+852', label: 'Hong Kong' },
  { code: '+36', label: 'Hungary' },
  { code: '+354', label: 'Iceland' },
  { code: '+91', label: 'India' },
  { code: '+62', label: 'Indonesia' },
  { code: '+98', label: 'Iran' },
  { code: '+964', label: 'Iraq' },
  { code: '+353', label: 'Ireland' },
  { code: '+972', label: 'Israel' },
  { code: '+39', label: 'Italy' },
  { code: '+225', label: 'Ivory Coast' },
  { code: '+1', label: 'Jamaica' },
  { code: '+81', label: 'Japan' },
  { code: '+962', label: 'Jordan' },
  { code: '+7', label: 'Kazakhstan' },
  { code: '+254', label: 'Kenya' },
  { code: '+686', label: 'Kiribati' },
  { code: '+965', label: 'Kuwait' },
  { code: '+996', label: 'Kyrgyzstan' },
  { code: '+856', label: 'Laos' },
  { code: '+371', label: 'Latvia' },
  { code: '+961', label: 'Lebanon' },
  { code: '+266', label: 'Lesotho' },
  { code: '+231', label: 'Liberia' },
  { code: '+218', label: 'Libya' },
  { code: '+423', label: 'Liechtenstein' },
  { code: '+370', label: 'Lithuania' },
  { code: '+352', label: 'Luxembourg' },
  { code: '+853', label: 'Macau' },
  { code: '+389', label: 'North Macedonia' },
  { code: '+261', label: 'Madagascar' },
  { code: '+265', label: 'Malawi' },
  { code: '+60', label: 'Malaysia' },
  { code: '+960', label: 'Maldives' },
  { code: '+223', label: 'Mali' },
  { code: '+356', label: 'Malta' },
  { code: '+692', label: 'Marshall Islands' },
  { code: '+222', label: 'Mauritania' },
  { code: '+230', label: 'Mauritius' },
  { code: '+52', label: 'Mexico' },
  { code: '+691', label: 'Micronesia' },
  { code: '+373', label: 'Moldova' },
  { code: '+377', label: 'Monaco' },
  { code: '+976', label: 'Mongolia' },
  { code: '+382', label: 'Montenegro' },
  { code: '+212', label: 'Morocco' },
  { code: '+258', label: 'Mozambique' },
  { code: '+95', label: 'Myanmar' },
  { code: '+264', label: 'Namibia' },
  { code: '+674', label: 'Nauru' },
  { code: '+977', label: 'Nepal' },
  { code: '+31', label: 'Netherlands' },
  { code: '+64', label: 'New Zealand' },
  { code: '+505', label: 'Nicaragua' },
  { code: '+227', label: 'Niger' },
  { code: '+234', label: 'Nigeria' },
  { code: '+47', label: 'Norway' },
  { code: '+968', label: 'Oman' },
  { code: '+92', label: 'Pakistan' },
  { code: '+680', label: 'Palau' },
  { code: '+970', label: 'Palestine' },
  { code: '+507', label: 'Panama' },
  { code: '+675', label: 'Papua New Guinea' },
  { code: '+595', label: 'Paraguay' },
  { code: '+51', label: 'Peru' },
  { code: '+63', label: 'Philippines' },
  { code: '+48', label: 'Poland' },
  { code: '+351', label: 'Portugal' },
  { code: '+974', label: 'Qatar' },
  { code: '+40', label: 'Romania' },
  { code: '+7', label: 'Russia' },
  { code: '+250', label: 'Rwanda' },
  { code: '+1', label: 'Saint Kitts and Nevis' },
  { code: '+1', label: 'Saint Lucia' },
  { code: '+1', label: 'Saint Vincent and the Grenadines' },
  { code: '+685', label: 'Samoa' },
  { code: '+378', label: 'San Marino' },
  { code: '+239', label: 'Sao Tome and Principe' },
  { code: '+966', label: 'Saudi Arabia' },
  { code: '+221', label: 'Senegal' },
  { code: '+381', label: 'Serbia' },
  { code: '+248', label: 'Seychelles' },
  { code: '+232', label: 'Sierra Leone' },
  { code: '+65', label: 'Singapore' },
  { code: '+421', label: 'Slovakia' },
  { code: '+386', label: 'Slovenia' },
  { code: '+677', label: 'Solomon Islands' },
  { code: '+252', label: 'Somalia' },
  { code: '+27', label: 'South Africa' },
  { code: '+82', label: 'South Korea' },
  { code: '+211', label: 'South Sudan' },
  { code: '+34', label: 'Spain' },
  { code: '+94', label: 'Sri Lanka' },
  { code: '+249', label: 'Sudan' },
  { code: '+597', label: 'Suriname' },
  { code: '+268', label: 'Eswatini' },
  { code: '+46', label: 'Sweden' },
  { code: '+41', label: 'Switzerland' },
  { code: '+963', label: 'Syria' },
  { code: '+886', label: 'Taiwan' },
  { code: '+992', label: 'Tajikistan' },
  { code: '+255', label: 'Tanzania' },
  { code: '+66', label: 'Thailand' },
  { code: '+670', label: 'Timor-Leste' },
  { code: '+228', label: 'Togo' },
  { code: '+676', label: 'Tonga' },
  { code: '+1', label: 'Trinidad and Tobago' },
  { code: '+216', label: 'Tunisia' },
  { code: '+90', label: 'Turkey' },
  { code: '+993', label: 'Turkmenistan' },
  { code: '+688', label: 'Tuvalu' },
  { code: '+256', label: 'Uganda' },
  { code: '+380', label: 'Ukraine' },
  { code: '+971', label: 'United Arab Emirates' },
  { code: '+44', label: 'United Kingdom' },
  { code: '+1', label: 'United States' },
  { code: '+598', label: 'Uruguay' },
  { code: '+998', label: 'Uzbekistan' },
  { code: '+678', label: 'Vanuatu' },
  { code: '+379', label: 'Vatican City' },
  { code: '+58', label: 'Venezuela' },
  { code: '+84', label: 'Vietnam' },
  { code: '+967', label: 'Yemen' },
  { code: '+260', label: 'Zambia' },
  { code: '+263', label: 'Zimbabwe' },
]

export default function LeadCapturePopup() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+971',
    mobile: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isAdminRoute = pathname?.startsWith('/admin')

  useEffect(() => {
    if (isAdminRoute) return

    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('leadPopupShown')
    if (!popupShown) {
      // Show after 8 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasShown(true)
        sessionStorage.setItem('leadPopupShown', 'true')
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [isAdminRoute])

  // Exit intent - show popup when user moves mouse towards closing
  useEffect(() => {
    if (isAdminRoute || hasShown) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsOpen(true)
        setHasShown(true)
        sessionStorage.setItem('leadPopupShown', 'true')
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [hasShown, isAdminRoute])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: `${formData.countryCode} ${formData.mobile}`,
          message: formData.message || 'Lead from popup - Planning to start a business',
          subject: 'Lead Capture - Planning to start a business',
        }),
      })

      if (response.ok) {
        setIsOpen(false)
        setFormData({ firstName: '', lastName: '', email: '', countryCode: '+971', mobile: '', message: '' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isAdminRoute || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(10,10,10,0.52)', backdropFilter: 'blur(4px)' }}>
      <div
        className="relative w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden"
        style={{ background: '#FAFAFA', border: '1px solid rgba(201, 168, 76, 0.28)' }}
      >
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full" style={{ background: '#C9A84C', opacity: 0.6 }} />

        <div className="p-6 md:p-8">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full transition hover:bg-black/5"
          style={{ color: '#555555' }}
        >
          <X size={24} />
        </button>

        <div className="mb-6 pr-8">
          <div className="tag mb-3">Free Consultation</div>
          <h2 className="font-display text-3xl md:text-[2.15rem] font-medium leading-tight mb-2" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
            Planning to start a business?
          </h2>
          <p className="text-sm md:text-base" style={{ color: '#555555', lineHeight: 1.7 }}>
            Share your details and we’ll get back to you with the right next step.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg border text-sm transition focus:outline-none"
              style={{ borderColor: 'rgba(201, 168, 76, 0.22)', color: '#0A0A0A', background: '#FFFFFF' }}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg border text-sm transition focus:outline-none"
              style={{ borderColor: 'rgba(201, 168, 76, 0.22)', color: '#0A0A0A', background: '#FFFFFF' }}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border text-sm transition focus:outline-none"
            style={{ borderColor: 'rgba(201, 168, 76, 0.22)', color: '#0A0A0A', background: '#FFFFFF' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-3">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="w-full px-3 py-3 rounded-lg border text-sm transition focus:outline-none"
              style={{ borderColor: 'rgba(201, 168, 76, 0.22)', color: '#0A0A0A', background: '#FFFFFF' }}
            >
              {COUNTRY_CODES.map((country) => (
                <option key={`${country.code}-${country.label}`} value={country.code}>
                  {country.code} ({country.label})
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border text-sm transition focus:outline-none"
              style={{ borderColor: 'rgba(201, 168, 76, 0.22)', color: '#0A0A0A', background: '#FFFFFF' }}
            />
          </div>

          <textarea
            name="message"
            placeholder="Message (optional)"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border text-sm transition focus:outline-none resize-none"
            style={{ borderColor: 'rgba(201, 168, 76, 0.22)', color: '#0A0A0A', background: '#FFFFFF' }}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-lg font-semibold transition"
            style={{
              background: 'var(--gold)',
              color: '#0A0A0A',
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              boxShadow: '0 10px 24px rgba(201, 168, 76, 0.18)',
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        <div className="mt-5 pt-4 border-t text-center" style={{ borderColor: 'rgba(201, 168, 76, 0.18)' }}>
          <p className="text-xs" style={{ color: '#777777' }}>
            We’ll get back to you within 24 hours
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}
