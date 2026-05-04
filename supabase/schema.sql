-- ============================================
-- Star One Website — Supabase Schema
-- Run this in your Supabase SQL editor
-- ============================================

-- ARTICLES TABLE
create table if not exists articles (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text not null unique,
  excerpt text,
  content text not null default '',
  category text not null default 'General',
  featured boolean default false,
  published boolean default true,
  cover_image text,
  meta_title text,
  meta_description text,
  read_time int default 5,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- ENQUIRIES TABLE
create table if not exists enquiries (
  id uuid default gen_random_uuid() primary key,
  first_name text not null,
  last_name text,
  email text not null,
  phone text,
  country text,
  service text,
  message text,
  status text default 'new',
  created_at timestamp with time zone default now()
);

-- CALCULATOR LEADS TABLE
create table if not exists calculator_leads (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  company_type text not null,
  activity text,
  visas integer default 0,
  office text,
  services text,
  estimated_cost integer,
  status text default 'new',
  created_at timestamp with time zone default now()
);

-- AUTO-UPDATE updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger articles_updated_at
  before update on articles
  for each row execute function update_updated_at();

-- ROW LEVEL SECURITY
alter table articles enable row level security;
alter table enquiries enable row level security;
alter table calculator_leads enable row level security;

-- PUBLIC: anyone can read published articles
create policy "published articles are public" on articles
  for select using (published = true);

-- PUBLIC: anyone can submit enquiry
create policy "anyone can insert enquiry" on enquiries
  for insert with check (true);

-- PUBLIC: anyone can submit calculator lead
create policy "anyone can insert calculator_leads" on calculator_leads
  for insert with check (true);

-- SERVICE ROLE: full access (used by admin API routes)
create policy "service role full access articles" on articles
  using (auth.role() = 'service_role');

create policy "service role full access enquiries" on enquiries
  using (auth.role() = 'service_role');

create policy "service role full access calculator_leads" on calculator_leads
  using (auth.role() = 'service_role');

-- SEED SAMPLE ARTICLES
insert into articles (title, slug, excerpt, content, category, featured, read_time) values
(
  'The Complete 2025 Guide to Setting Up a Business in Dubai',
  'complete-guide-business-setup-dubai-2025',
  'Everything you need to know about mainland vs free zone, costs, timelines, visa requirements, and the right business structure for your goals.',
  E'## Introduction\n\nSetting up a business in Dubai has never been more attractive. With 0% personal income tax, world-class infrastructure, and a strategic location connecting East and West, the UAE is the top destination for entrepreneurs worldwide.\n\n## Mainland vs Free Zone\n\nThe first decision every entrepreneur faces is whether to set up on the **mainland** or in a **free zone**.\n\n### Mainland\n- Can trade anywhere in the UAE and internationally\n- Full flexibility on business activities\n- No restriction on visas\n- Requires a UAE national as a local service agent (for some activities)\n\n### Free Zone\n- 100% foreign ownership\n- 0% import/export duties\n- Dedicated business ecosystem\n- Cannot directly trade within the UAE mainland (without a distributor)\n\n## Costs to Expect\n\nBusiness setup costs in Dubai typically range from AED 15,000 to AED 50,000+ depending on:\n- Business activity type\n- Number of visas required\n- Office space requirements\n- Free zone vs mainland\n\n## Timeline\n\nWith the right advisor, a straightforward setup can be completed in **3 to 7 business days**.\n\n## Conclusion\n\nDubai offers one of the world''s most business-friendly environments. Contact Star One today for a free consultation.',
  'Business Setup',
  true,
  8
),
(
  'UAE Golden Visa 2025: Who Qualifies and How to Apply',
  'uae-golden-visa-2025-guide',
  'A complete breakdown of the UAE Golden Visa criteria, costs, and how to secure 10-year residency for yourself and your family.',
  E'## What is the UAE Golden Visa?\n\nThe UAE Golden Visa is a long-term residency permit valid for **10 years**, renewable indefinitely. Unlike standard employment visas, the Golden Visa is not tied to an employer.\n\n## Who Qualifies?\n\n### Investors\n- Real estate investment of AED 2 million+\n- Business investment of AED 2 million+\n\n### Entrepreneurs\n- Founders of a startup with a minimum valuation of AED 500,000\n- Approved by an official UAE business incubator\n\n### Professionals\n- Doctors, engineers, scientists, and specialists\n- Salary of AED 30,000+ per month\n\n### Students\n- Top graduates from UAE universities (GPA 3.75+)\n\n## Benefits\n- 10-year renewable residency\n- Sponsor spouse, children, and unlimited domestic staff\n- No sponsor required\n- Multiple entry privileges\n\n## How to Apply\n\n1. Confirm eligibility with a consultant\n2. Prepare documents (passport, qualifications, proof of investment)\n3. Submit via ICP or GDRFA\n4. Receive Emirates ID\n\n**Contact Star One for a free Golden Visa eligibility assessment.**',
  'Visa',
  false,
  5
),
(
  'UAE Corporate Tax 2025: What Every Business Owner Must Know',
  'uae-corporate-tax-2025-explained',
  'Corporate Tax is now fully in effect. Here''s what your business needs to do to stay compliant and avoid penalties.',
  E'## UAE Corporate Tax — Overview\n\nThe UAE introduced **Corporate Tax (CT)** at a rate of **9%** on taxable income exceeding AED 375,000. This applies to financial years starting on or after 1 June 2023.\n\n## Who is Subject to Corporate Tax?\n\n- All UAE-incorporated businesses\n- Foreign entities with a permanent establishment in UAE\n- Individuals conducting business in the UAE\n\n## Exemptions\n\n- Businesses earning less than AED 375,000 (taxed at 0%)\n- Qualifying Free Zone businesses (subject to conditions)\n- Government entities\n- Extractive businesses (oil & gas)\n\n## Key Compliance Requirements\n\n1. **Register** with the Federal Tax Authority\n2. **Maintain** accurate financial records\n3. **File** annual Corporate Tax returns\n4. **Pay** tax within 9 months of financial year end\n\n## Penalties for Non-Compliance\n\nPenalties can range from AED 500 to AED 20,000 for late registration and filing.\n\n## How Star One Can Help\n\nOur compliance team handles everything — registration, bookkeeping, tax planning, and filing. **Book a free consultation today.**',
  'Tax',
  false,
  6
);
