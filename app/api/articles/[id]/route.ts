import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { createAdminClient } from '@/lib/supabase-server'
import slugify from 'slugify'
import { getLocalBlogPostById } from '@/lib/blog-posts'
import { isArticleDeleted, upsertArticleTombstone } from '@/lib/article-tombstones'

function isAdmin(request: Request) {
  const cookie = request.headers.get('cookie') || ''
  return cookie.includes('admin_auth=1')
}

interface Params { params: Promise<{ id: string }> }

export async function GET(_: Request, { params }: Params) {
  const { id } = await params
  const supabase = createAdminClient()
  const localArticle = id.startsWith('local-') ? getLocalBlogPostById(id) : null
  const { data, error } = localArticle
    ? await supabase.from('articles').select('*').eq('slug', localArticle.slug).maybeSingle()
    : await supabase.from('articles').select('*').eq('id', id).maybeSingle()
  const slug = data?.slug ?? localArticle?.slug ?? null
  if (slug && await isArticleDeleted(slug)) {
    return NextResponse.json({ error: 'Article not found' }, { status: 404 })
  }
  if (!error && data) return NextResponse.json(data)
  if (id.startsWith('local-')) {
    const localArticle = getLocalBlogPostById(id)
    if (localArticle) return NextResponse.json(localArticle)
  }
  if (error) return NextResponse.json({ error: error.message }, { status: 404 })
  return NextResponse.json({ error: 'Article not found' }, { status: 404 })
}

export async function PATCH(request: Request, { params }: Params) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const body = await request.json()
  const supabase = createAdminClient()
  const localArticle = id.startsWith('local-') ? getLocalBlogPostById(id) : null
  const { data: existingArticle } = await supabase
    .from('articles')
    .select('slug')
    .eq('id', id)
    .maybeSingle()
  const tombstoned = localArticle
    ? await isArticleDeleted(localArticle.slug)
    : existingArticle?.slug
      ? await isArticleDeleted(existingArticle.slug)
      : false
  if (tombstoned) return NextResponse.json({ error: 'Article not found' }, { status: 404 })
  const suppliedSlug = typeof body.slug === 'string' && body.slug.trim() ? body.slug.trim() : ''
  const resolvedSlug =
    suppliedSlug ||
    localArticle?.slug ||
    (body.title ? slugify(body.title, { lower: true, strict: true }) : '')
  const payload = {
    ...body,
    slug: resolvedSlug,
  }

  if (localArticle) {
    const seedPayload = {
      ...localArticle,
      ...payload,
      slug: resolvedSlug,
      id: undefined,
    }

    const { data: existingLocal } = await supabase
      .from('articles')
      .select('id')
      .eq('slug', resolvedSlug)
      .maybeSingle()

    const query = existingLocal?.id
      ? supabase.from('articles').update(seedPayload).eq('id', existingLocal.id)
      : supabase.from('articles').insert([seedPayload])

    const { data, error } = await query.select().single()
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    revalidatePath('/admin')
    revalidatePath('/admin/articles')
    revalidatePath('/insights')
    revalidatePath(`/insights/${data.slug}`)
    return NextResponse.json(data)
  }

  const { data, error } = await supabase
    .from('articles')
    .update(payload)
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
  const localArticle = id.startsWith('local-') ? getLocalBlogPostById(id) : null
  const { data: article } = await supabase
    .from('articles')
    .select('id, slug, title')
    .eq(localArticle ? 'slug' : 'id', localArticle?.slug ?? id)
    .maybeSingle()

  const slug = article?.slug ?? localArticle?.slug ?? null
  const title = article?.title ?? localArticle?.title ?? null

  if (article?.id) {
    const { error } = await supabase
      .from('articles')
      .delete()
      .eq('id', article.id)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  }

  if (slug) {
    try {
      await upsertArticleTombstone(slug, title)
    } catch (error: any) {
      return NextResponse.json({ error: error?.message || 'Failed to delete article' }, { status: 500 })
    }
  }

  revalidatePath('/admin')
  revalidatePath('/admin/articles')
  revalidatePath('/insights')
  if (article?.slug) revalidatePath(`/insights/${article.slug}`)
  if (localArticle?.slug) revalidatePath(`/insights/${localArticle.slug}`)
  return NextResponse.json({ success: true })
}
