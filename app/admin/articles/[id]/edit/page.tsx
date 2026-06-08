import { notFound } from 'next/navigation'
import { createAdminClient } from '@/lib/supabase-server'
import ArticleEditor from '../../ArticleEditor'
import { getLocalBlogPostById } from '@/lib/blog-posts'
import { isArticleDeleted } from '@/lib/article-tombstones'

interface Props { params: Promise<{ id: string }> }

export const metadata = { title: 'Edit Article' }

export default async function EditArticlePage({ params }: Props) {
  const { id } = await params

  const supabase = createAdminClient()
  const localArticle = id.startsWith('local-') ? getLocalBlogPostById(id) : null
  const { data: article } = localArticle
    ? await supabase.from('articles').select('*').eq('slug', localArticle.slug).maybeSingle()
    : await supabase.from('articles').select('*').eq('id', id).maybeSingle()
  const editableArticle = article ?? localArticle
  const editableSlug = editableArticle?.slug
  if (editableSlug && await isArticleDeleted(editableSlug)) notFound()
  if (!editableArticle) notFound()

  return (
    <div className="p-8">
      <ArticleEditor article={editableArticle} mode="edit" />
    </div>
  )
}
