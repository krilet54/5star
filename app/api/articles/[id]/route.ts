import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { createAdminClient } from '@/lib/supabase-server'
import slugify from 'slugify'

function isAdmin(request: Request) {
  const cookie = request.headers.get('cookie') || ''
  return cookie.includes('admin_auth=1')
}

interface Params { params: Promise<{ id: string }> }

export async function GET(_: Request, { params }: Params) {
  const { id } = await params
  const supabase = createAdminClient()
  const { data, error } = await supabase.from('articles').select('*').eq('id', id).single()
  if (error) return NextResponse.json({ error: error.message }, { status: 404 })
  return NextResponse.json(data)
}

export async function PATCH(request: Request, { params }: Params) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const body = await request.json()
  if (body.title) body.slug = slugify(body.title, { lower: true, strict: true })
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('articles')
    .update(body)
    .eq('id', id)
    .select()
    .single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  revalidatePath('/admin')
  revalidatePath('/admin/articles')
  revalidatePath('/insights')
  revalidatePath(`/insights/${data.slug}`)
  return NextResponse.json(data)
}

export async function DELETE(request: Request, { params }: Params) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const supabase = createAdminClient()
  const { data: article } = await supabase.from('articles').select('slug').eq('id', id).single()
  const { error } = await supabase.from('articles').delete().eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  revalidatePath('/admin')
  revalidatePath('/admin/articles')
  revalidatePath('/insights')
  if (article?.slug) revalidatePath(`/insights/${article.slug}`)
  return NextResponse.json({ success: true })
}
