import { createAdminClient } from '@/lib/supabase-server'

export type ArticleTombstone = {
  slug: string
  title: string | null
  deleted_at: string
}

export async function getDeletedArticleSlugs() {
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('article_tombstones')
    .select('slug')
    .order('deleted_at', { ascending: false })

  if (error) return []
  return ((data ?? []) as Array<{ slug: string }>).map(item => item.slug)
}

export async function isArticleDeleted(slug: string) {
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('article_tombstones')
    .select('slug')
    .eq('slug', slug)
    .maybeSingle()

  if (error) return false
  return !!data
}

export async function upsertArticleTombstone(slug: string, title: string | null = null) {
  const supabase = createAdminClient()
  const { error } = await supabase.from('article_tombstones').upsert({
    slug,
    title,
    deleted_at: new Date().toISOString(),
  })

  if (error) throw error
}
