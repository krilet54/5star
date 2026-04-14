# Star One — Business Setup & Advisory Website

A complete, production-ready Next.js 15 website for **Star One Business Consultancy, Dubai UAE**.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + custom CSS variables |
| Database | Supabase (PostgreSQL) |
| Forms | React Hook Form + Zod |
| Content | Markdown (react-markdown) |
| Fonts | Playfair Display + Plus Jakarta Sans |

---

## Project Structure

```
starone/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── about/page.tsx              # About Us
│   ├── contact/page.tsx            # Contact page
│   ├── services/
│   │   ├── page.tsx                # Services overview
│   │   └── [slug]/page.tsx         # Individual service pages (8 pages)
│   ├── insights/
│   │   ├── page.tsx                # Articles listing
│   │   └── [slug]/page.tsx         # Individual article (SEO + JSON-LD)
│   ├── privacy-policy/page.tsx
│   ├── terms-conditions/page.tsx
│   ├── admin/
│   │   ├── page.tsx                # Dashboard
│   │   ├── login/page.tsx          # Admin login
│   │   ├── articles/
│   │   │   ├── page.tsx            # Article list
│   │   │   ├── new/page.tsx        # Create article
│   │   │   └── [id]/edit/page.tsx  # Edit article
│   │   └── enquiries/page.tsx      # Enquiry management
│   ├── api/
│   │   ├── enquiries/route.ts      # POST enquiry, GET list
│   │   ├── articles/route.ts       # GET all, POST create
│   │   ├── articles/[id]/route.ts  # GET, PATCH, DELETE
│   │   └── admin/login/route.ts    # POST login, DELETE logout
│   ├── sitemap.ts                  # Auto-generated sitemap
│   └── robots.ts
├── components/
│   ├── layout/Nav.tsx              # Mega-menu navigation
│   ├── layout/Footer.tsx
│   ├── Logo.tsx
│   ├── WhatsAppFloat.tsx           # Floating WhatsApp button
│   ├── EnquiryForm.tsx             # Validated contact form
│   ├── AnimatedCounter.tsx         # Scroll-triggered counters
│   └── Reveal.tsx                  # Scroll reveal animation
├── lib/
│   ├── supabase.ts                 # Browser client
│   ├── supabase-server.ts          # Server + admin clients
│   ├── services-data.ts            # All 8 service page content
│   └── utils.ts
├── types/index.ts
├── middleware.ts                   # Admin route protection
└── supabase/schema.sql             # Full DB schema + seed data
```

---

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Navigate to **SQL Editor** and paste the contents of `supabase/schema.sql`
3. Run the SQL to create tables, policies, and seed 3 sample articles

### 3. Configure Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
ADMIN_SECRET=your_chosen_admin_password
```

Find your Supabase keys at: **Project Settings → API**

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Access Admin Portal

Go to [http://localhost:3000/admin](http://localhost:3000/admin)

- Default password is set via `ADMIN_SECRET` in `.env.local`
- If not set, fallback password is `starone-admin-2025`

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Homepage with hero, services, stats, articles, CTA |
| `/about` | About page with team, values, story |
| `/services` | Services overview grid |
| `/services/business-setup` | Business Setup service page |
| `/services/visa-immigration` | Visa & Immigration |
| `/services/compliance` | Compliance Services |
| `/services/vat-corporate-tax` | VAT & Corporate Tax |
| `/services/accounting-bookkeeping` | Accounting & Bookkeeping |
| `/services/corporate-services` | Corporate Services |
| `/services/hr-payroll` | HR & Payroll |
| `/services/trademark-strategy` | Trademark & Strategy |
| `/insights` | Articles listing with category filters |
| `/insights/[slug]` | Individual article with JSON-LD schema |
| `/contact` | Contact page with form + WhatsApp |
| `/privacy-policy` | Privacy Policy |
| `/terms-conditions` | Terms & Conditions |
| `/admin` | Admin dashboard |
| `/admin/articles` | Manage all articles |
| `/admin/articles/new` | Write new article (Markdown) |
| `/admin/articles/[id]/edit` | Edit existing article |
| `/admin/enquiries` | View & manage enquiries |

---

## Admin Portal Features

### Articles
- ✅ Create articles with Markdown editor
- ✅ Live URL slug preview
- ✅ SEO meta title + description fields
- ✅ Publish / Unpublish toggle
- ✅ Feature / Unfeature toggle (shows prominently on homepage)
- ✅ Delete with confirmation
- ✅ Category + reading time
- ✅ Articles render with full Markdown on the public site

### Enquiries
- ✅ All enquiries from the contact form appear here
- ✅ Click status badge to cycle: **New → Contacted → Closed**
- ✅ Direct email, phone, and WhatsApp links per enquiry
- ✅ Stats bar showing counts by status

---

## Customisation

### Update Contact Details
Edit `components/layout/Footer.tsx` and `app/contact/page.tsx` with real phone/email/address.

### Update Admin Password
Set `ADMIN_SECRET` in `.env.local` to any secure password.

### Add New Services
Edit `lib/services-data.ts` — add a new object to the `services` array following the `ServiceData` type.

### Change Colours
Edit `app/globals.css` — all colours are CSS variables in `:root {}`. The primary palette:
- `--gold: #C9A060` — change this to update the accent throughout
- `--dark: #080808` — main background

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```
Add environment variables in Vercel dashboard → Project → Settings → Environment Variables.

---

## SEO Features

- ✅ Dynamic `<title>` and `<meta description>` per page
- ✅ Open Graph tags on all pages
- ✅ JSON-LD Article schema on each article page
- ✅ Auto-generated `sitemap.xml` including all service and article pages
- ✅ `robots.txt` that blocks `/admin` and `/api`
- ✅ Semantic HTML throughout
- ✅ `revalidate = 3600` (ISR) on all data-fetching pages

---

## Logo Design

The current logo is text-based (`S1` mark + "Star One"). For a professional custom logo:
- The `S1` mark in gold on dark background is used throughout
- Swap in a real SVG logo in `components/Logo.tsx`

---

## WhatsApp Integration

The floating WhatsApp button and all WhatsApp links point to:
`https://wa.me/971502165471`

Update the phone number in:
- `components/WhatsAppFloat.tsx`
- `app/contact/page.tsx`
- `components/layout/Footer.tsx`

---

## Supabase Database Tables

### `articles`
| Column | Type | Description |
|---|---|---|
| id | uuid | Primary key |
| title | text | Article title |
| slug | text | URL slug (auto-generated from title) |
| excerpt | text | Short summary |
| content | text | Full Markdown content |
| category | text | e.g. "Business Setup", "Visa", "Tax" |
| featured | boolean | Show on homepage prominently |
| published | boolean | Visible on public site |
| meta_title | text | SEO title override |
| meta_description | text | SEO description override |
| read_time | int | Minutes to read |
| created_at | timestamptz | Auto-set |
| updated_at | timestamptz | Auto-updated by trigger |

### `enquiries`
| Column | Type | Description |
|---|---|---|
| id | uuid | Primary key |
| first_name | text | Required |
| last_name | text | Optional |
| email | text | Required |
| phone | text | Optional |
| country | text | Optional |
| service | text | Selected service |
| message | text | Free text |
| status | text | new / contacted / closed |
| created_at | timestamptz | Auto-set |

---

*Built for Star One Business Consultancy, Dubai UAE*
