import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createAdminClient } from '@/lib/supabase-server'
import slugify from 'slugify'

function isAdmin(request: Request) {
  const cookie = request.headers.get('cookie') || ''
  return cookie.includes('admin_auth=1')
}

const schema = z.object({
  title: z.string().min(3),
  excerpt: z.string().optional(),
  content: z.string().min(1),
  category: z.string().default('General'),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
  cover_image: z.string().optional(),
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),
  read_time: z.number().default(5),
})

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const admin = isAdmin(request)

  const supabase = createAdminClient()
  let query = supabase.from('articles').select('*').order('created_at', { ascending: false })
  if (!admin) query = query.eq('published', true)

  const limit = searchParams.get('limit')
  if (limit) query = query.limit(parseInt(limit))

  const { data, error } = await query
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const body = await request.json()
    const data = schema.parse(body)
    const slug = slugify(data.title, { lower: true, strict: true })
    const supabase = createAdminClient()
    const { data: article, error } = await supabase
      .from('articles')
      .insert([{ ...data, slug }])
      .select()
      .single()
    if (error) throw error
    return NextResponse.json(article, { status: 201 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation error', details: err.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 })
  }
}
