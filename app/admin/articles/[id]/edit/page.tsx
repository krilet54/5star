import { notFound } from 'next/navigation'
import { createAdminClient } from '@/lib/supabase-server'
import ArticleEditor from '../../ArticleEditor'
import { getLocalBlogPostById } from '@/lib/blog-posts'

interface Props { params: Promise<{ id: string }> }

export const metadata = { title: 'Edit Article' }

export default async function EditArticlePage({ params }: Props) {
  const { id } = await params

  const supabase = createAdminClient()
  const { data: article } = await supabase.from('articles').select('*').eq('id', id).single()
  const localArticle = id.startsWith('local-') ? getLocalBlogPostById(id) : null
  const editableArticle = article ?? localArticle
  if (!editableArticle) notFound()

  return (
    <div className="p-8">
      <ArticleEditor article={editableArticle} mode="edit" />
    </div>
  )
}
