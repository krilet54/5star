import type { Article } from '@/types'
import { getArticleFallbackImage } from '@/lib/site-images'

function getStoragePublicUrl(path: string) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, '')
  if (!supabaseUrl) return path

  const bucket = process.env.SUPABASE_BUCKET || 'uploads'
  const normalizedPath = path.replace(/^\/+/, '')
  const pathWithoutBucket = normalizedPath.startsWith(`${bucket}/`)
    ? normalizedPath.slice(bucket.length + 1)
    : normalizedPath

  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${pathWithoutBucket}`
}

export function getArticleImage(article: Pick<Article, 'cover_image' | 'category'>) {
  const fallback = getArticleFallbackImage(article.category)
  const coverImage = article.cover_image?.trim()

  if (!coverImage) return fallback
  if (/^(https?:)?\/\//i.test(coverImage) || coverImage.startsWith('/')) return coverImage

  return getStoragePublicUrl(coverImage)
}
