export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  category: string
  featured: boolean
  published: boolean
  cover_image: string | null
  meta_title: string | null
  meta_description: string | null
  read_time: number
  created_at: string
  updated_at: string
}

export interface Enquiry {
  id: string
  first_name: string
  last_name: string | null
  email: string
  phone: string | null
  country: string | null
  service: string | null
  message: string | null
  status: 'new' | 'contacted' | 'closed'
  created_at: string
}

export interface ServiceData {
  slug: string
  title: string
  tagline: string
  description: string
  icon: string
  heroStat: string
  heroStatLabel: string
  features: { title: string; description: string }[]
  benefits: string[]
  process: { step: string; title: string; description: string }[]
  faq: { q: string; a: string }[]
  cta: string
}
